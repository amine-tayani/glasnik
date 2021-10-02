import { gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
  {
    me {
      username
      email
      id
      photoUrl
      friends {
        username
        email
        id
        photoUrl
      }
    }
  }
`;

export default GET_CURRENT_USER;
