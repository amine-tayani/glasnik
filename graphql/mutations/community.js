import { gql } from "@apollo/client";

export const CREATE_COMMUNITY = gql`
  mutation createCommunity($name: String!, $category: String!) {
    createCommunity(name: $name, category: $category) {
      name
      category
    }
  }
`;

export const JOIN_COMMUNITY = gql`
  mutation joinCommunity($name: String!) {
    joinCommunity(name: $name) {
      message
    }
  }
`;
