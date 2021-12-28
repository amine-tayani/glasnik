/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import Head from "next/head";
import Spinner from "../components/shared/Spinner";
import Sidebar from "../components/user/Sidebar";
import { useAuth } from "../utils/auth/check-auth";

const profile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="flex bg-[#36393F] h-screen">
      <Head>
        <title>{user?.username} profile</title>
      </Head>
      <Sidebar data={user} />
    </div>
  );
};

export default profile;
