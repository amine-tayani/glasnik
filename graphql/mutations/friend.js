import { gql } from "@apollo/client";

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: String!) {
    addFriend(friendId: $friendId) {
      message
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($friendId: String!) {
    removeFriend(friendId: $friendId) {
      message
    }
  }
`;
