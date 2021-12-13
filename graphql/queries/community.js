import { gql } from "@apollo/client";

export const GET_ALL_PUBLIC_COMMUNITIES = gql`
  {
    communities {
      id
      name
      category
      thumbUrl
      createdAt
      users {
        id
      }
    }
  }
`;
export const GET_SINGLE_COMMUNITY = gql`
  query community($communityId: String!) {
    community(communityId: $communityId) {
      name
      category
      thumbUrl
      createdAt
      users {
        id
        username
        photoUrl
      }
    }
  }
`;
