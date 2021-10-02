import Cookies from "universal-cookie";
import { useQuery } from "@apollo/client";
import GET_CURRENT_USER from "../../graphql/queries/currentUser";

const cookie = new Cookies();

export const useAuth = () => {
  const { data } = useQuery(GET_CURRENT_USER, { pollInterval: 500 });
  const token = cookie.get("auth-token");
  if (token && data) {
    return {
      isAuthenticated: true,
      user: data.me,
    };
  }
  return {
    isAuthenticated: false,
    user: null,
  };
};
