import React from "react";
import { useSubscription } from "@apollo/client";
import { NEW_USER_LOGGED } from "../graphql/subscriptions/newUserLogged";

const testing = () => {
  const { loading, data } = useSubscription(NEW_USER_LOGGED);
  console.log(data);
  return (
    <div>
      <h1 className="text-center text-4xl mt-4">hi </h1>
      <h1>{loading ? "loading..." : data?.newUserLoggedIn.username}</h1>
    </div>
  );
};

export default testing;
