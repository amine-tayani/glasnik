/* eslint-disable no-nested-ternary */
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
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
      <div className="bg-gray-100 pb-12 overflow-y-hidden">
        {/* Code block starts */}
        <Navbar />
        <div className="bg-[#111827] h-screen">
          <div className="container mx-auto flex flex-col items-center py-20 sm:py-24 font-inter">
            <div className="w-11/12 sm:w-full lg:w-3/4 xl:w-3/4 lg:flex justify-center items-center flex-col mb-5 sm:mb-10 ">
              <h1 className="text-4xl md:text-5xl lg:hero-text font-black text-center text-gray-100 ">
                Make Communities, Chat And Use Voice & Video Call For Free
              </h1>
              <p className="mt-8 sm:mt-12 lg:w-10/12 text-gray-400 font-normal text-center text-xl lg:text-xl ">
                With a variety of calling and messaging features, you have
                endless options when it comes to expressing yourself.
              </p>
            </div>
            <div className="flex justify-center items-center mt-8 md:mt-0">
              <button className="focus:outline-none transition duration-150 ease-in-out bg-[#1a56db] lg:text-lg rounded-lg text-white px-6 py-2 text-sm hover:bg-blue-600">
                Get Started
              </button>
              <button className="focus:outline-none transition duration-150 ease-in-out bg-transparent border border-gray-700 lg:text-lg rounded-lg text-gray-400 hover:text-gray-900 hover:bg-white px-4 sm:px-6 py-2 text-sm ml-4">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
