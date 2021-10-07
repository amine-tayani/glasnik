/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import GET_CURRENT_USER from "../../graphql/queries/currentUser";
import Spinner from "../../components/shared/Spinner";
import { AuthContext } from "../../context/userContext";
import ErrorPage from "../../components/shared/ErrorPage";
import Sidebar from "../../components/user/Sidebar";
import Card from "../../components/user/Card";

const profile = () => {
  const router = useRouter();
  const cookies = new Cookie();
  const token = cookies.get("auth-token");
  const { dispatch } = useContext(AuthContext);
  const { data, loading } = useQuery(GET_CURRENT_USER);

  useEffect(() => {
    if (data) {
      dispatch({
        type: "CURRENT_USER",
        user: data.me,
        token,
      });
    }
    if (!token) {
      router.push("/login");
    }
  }, [data]);

  if (data?.me.username !== router.query.username) {
    return <ErrorPage url={router.query.username} />;
  }

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
        <title>{data?.me.username} profile</title>
      </Head>
      <Sidebar />
      <div className="w-400 mx-12 my-16">
        <h1 className="text-xl text-white font-roboto font-semibold">
          My Account
        </h1>
        <Card user={data?.me} />
        <h1 className="text-xl text-white font-roboto font-semibold my-8">
          Password and Authentication
        </h1>
        <div className="font-inter">
          <button
            type="submit"
            className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
          >
            Change Password
          </button>
          <h1 className="text-xl text-white font-roboto font-semibold mt-8 mb-2">
            Account Deletion
          </h1>
          <p className=" text-gray-300 text-xs mb-6">
            Deleting your account means it is gone forever and you cannot
            recover it again.
          </p>

          <button
            type="submit"
            className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-red-500 hover:bg-red-600 text-white focus:outline-none "
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default profile;
