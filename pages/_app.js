import React from "react";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../utils/apollo-client";
import { AuthProvider } from "../context/userContext";

const MyApp = ({ Component, pageProps }) => (
  <ApolloProvider client={createApolloClient()}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </ApolloProvider>
);

export default MyApp;
