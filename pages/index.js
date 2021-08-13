import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar";

const Home = () => (
  <div>
    <Head>
      <title>Glasnik - Online just chatting application</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <section className="font-sand bg-gradient-to-r from-blue-500 to-blue-700  p-9">
      <div className="container flex flex-col items-center px-5 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
          <h1 className="mb-8 text-2xl text-gray-100 font-tweb tracking-wide font-bold md:text-7xl">
            Glasnik chat for free
          </h1>
          <p className="mb-8 text-xl  leading-relaxed text-left text-gray-200 font-medium">
            {" "}
            Glasnik gives you a different messaging experience. focusing on
            privacy, and all of the features you expect.{" "}
          </p>

          <button
            type="button"
            className="w-auto px-16 py-2 my-2 text-lg text-gray-900 transform transition duration-500 ease-in-out  font-bold bg-gray-50 rounded-full focus:outline-none"
          >
            Sign up for more
          </button>
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

export default Home;
