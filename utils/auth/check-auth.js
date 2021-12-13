import Cookies from "universal-cookie";
import { useQuery } from "@apollo/client";
import GET_CURRENT_USER from "../../graphql/queries/currentUser";

const cookie = new Cookies();

export const useAuth = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
  });
  const token = cookie.get("auth-token");
  if (token && data) {
    return {
      isAuthenticated: true,
      user: data.me,
      loading,
    };
  }
  return {
    isAuthenticated: false,
    user: null,
    loading,
  };
};
