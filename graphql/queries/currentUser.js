import { gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
  {
    me {
      username
      email
      id
      isActive
    }
  }
`;

export default GET_CURRENT_USER;
