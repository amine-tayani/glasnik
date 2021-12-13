import { gql } from "@apollo/client";

const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($avatar: Upload) {
    uploadAvatar(avatar: $avatar) {
      message
    }
  }
`;

export default UPLOAD_AVATAR;
