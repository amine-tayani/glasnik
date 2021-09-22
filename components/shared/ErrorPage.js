import React from "react";
import Head from "next/head";

const ErrorPage = ({ url }) => (
  <div>
    <Head>
      <title>{url} Glasnik</title>
    </Head>
    <div className="flex font-inter bg-[#1D232A] text-base-100 justify-center items-center h-screen">
      <h1 className="text-xl">
        Sorry the page that you wanna access does not exist
      </h1>
    </div>
  </div>
);

export default ErrorPage;
