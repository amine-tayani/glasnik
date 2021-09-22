import {
  ApolloClient,
  InMemoryCache,
  split,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "universal-cookie";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const cookies = new Cookies();

let httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = cookies.get("auth-token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

httpLink = authLink.concat(httpLink);

const wsLink = process.browser
  ? new WebSocketLink({
      uri: "ws://localhost:4000/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          Authorization: `Bearer ${cookies.get("auth-token")}`,
        },
      },
    })
  : null;

const splitLink = wsLink
  ? split(
      ({ query }) => {
        const def = getMainDefinition(query);
        return (
          def.kind === "OperationDefinition" && def.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

export const GraphqlClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
