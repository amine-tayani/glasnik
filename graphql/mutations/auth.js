import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(username: $username, email: $email, password: $password) {
      user {
        id
        username
        createdAt
        email
      }
      token
    }
  }
`;
export const LOGIN_TO_ACCOUNT = gql`
  mutation loginToAccount($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      user {
        id
        createdAt
      }
      token
    }
  }
`;
