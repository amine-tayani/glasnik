import { gql } from "@apollo/client";

export const GET_COMMUNITY_MESSAGES = gql`
  query getMessages($communityId: String!) {
    getMessages(communityId: $communityId) {
      id
      text
      timestamp
      sender {
        id
        username
        photoUrl
      }
    }
  }
`;
