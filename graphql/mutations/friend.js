import { gql } from "@apollo/client";

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: String!) {
    addFriend(friendId: $friendId) {
      message
    }
  }
`;
