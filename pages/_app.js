import React from "react";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { GraphqlClient } from "../utils/apollo-client";
import { AuthProvider } from "../context/userContext";

const MyApp = ({ Component, pageProps }) => (
  <ApolloProvider client={GraphqlClient}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </ApolloProvider>
);

export default MyApp;
