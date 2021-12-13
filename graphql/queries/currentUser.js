import { gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
  {
    me {
      username
      email
      id
      photoUrl
      friends {
        id
        username
        email
        id
        photoUrl
      }
      communities {
        id
        name
        category
        type
        thumbUrl
      }
      friendOf {
        id
        username
        email
        id
        photoUrl
      }
    }
  }
`;

export default GET_CURRENT_USER;
