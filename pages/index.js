/* eslint-disable no-nested-ternary */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../utils/auth/check-auth";
import Loader from "../components/shared/Loader";

const Home = () => {
  const { isAuthenticated, user, loading } = useAuth();

  return (
    <div>
      <Head>
        <title>Glasnik - Online just chatting application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} isAuthenticated={isAuthenticated} loading={loading} />
      <section className="font-sand bg-gradient-to-r from-blue-500 to-blue-700  p-9">
        <div className="container flex flex-col items-center px-5 mx-auto lg:flex-row lg:px-28">
          <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow xl:mr-20 md:pr-24 md:mb-0 ">
            <h1 className="mb-8 text-2xl text-center xl:text-left text-gray-100 font-barlow tracking-wide font-extrabold md:text-5xl xl:text-7xl">
              Glasnik Chat for free
            </h1>
            <p className="mb-8 text-xl  leading-relaxed text-left text-gray-200 font-medium">
              Glasnik gives you a different messaging experience. focusing on
              privacy, and all of the features you expect.{" "}
            </p>
            <Link href={`${isAuthenticated ? `/channels/me` : "/signup"}`}>
              <button
                type="button"
                className="w-auto px-8 py-2 my-2 text-gray-900 transform transition duration-500 ease-in-out font-semibold  bg-white rounded-full focus:outline-none font-barlow"
              >
                {loading ? (
                  <div className="flex items-center space-x-2 justify-center">
                    <Loader color="gray-900" />
                    <span>loading</span>
                  </div>
                ) : isAuthenticated ? (
                  "Go to channel"
                ) : (
                  "Sign up for more"
                )}
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-sm md:w-1/2 mt-4">
            <img
              className="w-4/5 object-cover object-center rounded-lg"
              src="/Chats.jpg"
              alt="hero"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
