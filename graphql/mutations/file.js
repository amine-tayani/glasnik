import { gql } from "@apollo/client";

export const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($avatar: Upload) {
    uploadAvatar(avatar: $avatar) {
      message
    }
  }
`;
