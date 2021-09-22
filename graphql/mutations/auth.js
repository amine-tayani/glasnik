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
      }
      token
    }
  }
`;
export const LOGIN_TO_ACCOUNT = gql`
  mutation loginToAccount($email: String!, $password: String!) {
    loginToAccount(email: $email, password: $password) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;
export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword(
    $confirmPassword: String!
    $password: String!
    $resetToken: String!
  ) {
    resetPassword(
      confirmPassword: $confirmPassword
      password: $password
      resetToken: $resetToken
    ) {
      message
      token
    }
  }
`;
