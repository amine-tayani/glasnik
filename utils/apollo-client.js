import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const uploadLink = createUploadLink({ uri: "http://localhost:4000/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = cookies.get("auth-token");

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));

  return forward(operation);
});

export const GraphqlClient = new ApolloClient({
  link: ApolloLink.from([authMiddleware, uploadLink]),
  cache: new InMemoryCache(),
});
