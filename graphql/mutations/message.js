import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
  mutation createMessage($communityId: String!, $text: String!) {
    createMessage(communityId: $communityId, text: $text) {
      id
      timestamp
      sender {
        username
      }
    }
  }
`;
