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
  const logout = () => {
    cookies.remove("auth-token", { path: "/" });
    dispatch({
      type: "LOGOUT",
    });
    router.push("/login");
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="font-inter">
      <Head>
        <title>{data?.me.username} | Glasnik </title>
      </Head>
      <div className="navbar mb-2 shadow-lg bg-[#1D232A] text-white">
        <div className="flex-none hidden lg:flex">
          <button type="button" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 hidden px-2 mx-2 lg:flex">
          <span className="text-lg font-bold">{data?.me.username}</span>
        </div>

        <div className="flex-none">
          <button type="button" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <button type="button" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <div className="dropdown cursor-pointer dropdown-end">
            <div tabIndex="0" className=" avatar online placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
                <span className="text-lg">{data?.me.username.charAt(0)}</span>
              </div>
              <ul
                tabIndex="0"
                className="p-2 mt-12 text-neutral-content shadow menu dropdown-content bg-neutral-focus rounded-b-box w-52"
              >
                <li>
                  <a href="#sdokdso">{data?.me.username}</a>
                </li>
                <li>
                  <a href="#dosok">
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
