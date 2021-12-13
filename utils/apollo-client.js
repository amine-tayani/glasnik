import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { createUploadLink } from "apollo-upload-client";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("auth-token");

const httpLink = createUploadLink({ uri: "http://localhost:4000/graphql" });

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : "",
  },
}));

const wsLink = process.browser
  ? new WebSocketLink({
      uri: "ws://localhost:4000/graphql",
      options: {
        connectionParams: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        reconnect: true,
      },
    })
  : null;

const link = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      authLink.concat(httpLink)
    )
  : httpLink;

export const GraphqlClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
