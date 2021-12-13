import { gql } from "@apollo/client";

export const NEW_USER_LOGGED = gql`
  {
    subscription {
      newUserLoggedIn {
        username
      }
    }
  }
`;
