import { gql } from "@apollo/client";

export const ON_NEW_MESSAGE = gql`
  subscription {
    onMessage {
      id
      text
      timestamp
      sender {
        id
        username
      }
    }
  }
`;
