import { gql } from "@apollo/client";

export const CREATE_COMMUNITY = gql`
  mutation createCommunity(
    $name: String!
    $category: String!
    $type: CommunityType
    $thumbUrl: Upload
  ) {
    createCommunity(
      name: $name
      category: $category
      type: $type
      thumbUrl: $thumbUrl
    ) {
      id
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
