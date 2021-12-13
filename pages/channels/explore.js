import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { GET_ALL_PUBLIC_COMMUNITIES } from "../../graphql/queries/community";
import Loader from "../../components/shared/Loader";

const Explore = () => {
  const { data, loading } = useQuery(GET_ALL_PUBLIC_COMMUNITIES, {
    pollInterval: 100,
  });

  return (
    <div className="flex bg-[#1D232A] overflow-x-hidden h-screen">
      <Head>
        <title>Glasnik - Explore public Communities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#1D232A] w-full mt-12 font-inter text-white relative">
        <div className="background mx-20 shadow-md rounded-lg text-center p-4 sm:p-8 ">
          <h3 className="text-4xl font-bold mb-2 mt-10 ">
            Find Your community on glasnik
          </h3>
          <p className="text-lg text-gray-200 mb-6 ">
            from gaming, to programming, to music, to learning, there&apos;s a
            place for you.
          </p>
          <div className="sm:flex items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex w-200 bg-white px-4 py-2 mt-2  transition duration-300 ease-in-out items-center transform rounded focus:outline-none">
              <input
                onFocus={(e) => {
                  e.target.placeholder = "";
                }}
                onBlur={(e) => {
                  e.target.placeholder = "Find your communities";
                }}
                name="email"
                placeholder="Find your communities"
                className="w-full focus:outline-none text-gray-500"
              />
              <SearchIcon className="h-6 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-center mx-40 mt-12">
          {loading ? (
            <Loader />
          ) : (
            data?.communities.map((community) => (
              <div className="bg-[#27272c] shadow-md h-80  rounded-lg max-w-[300px] relative">
                <div className="h-36">
                  <img
                    alt={community.id}
                    src={community.thumbUrl}
                    className="rounded-t-lg h-full w-full "
                  />
                  <div className="avatar absolute top-28 left-4">
                    <div className="mb-8 w-12 h-12 rounded-full ring-4 ring-[#27272c]">
                      <img alt={community.id} src={community.thumbUrl} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-1 my-2">
                    <BadgeCheckIcon className="h-5 w-5 text-green-400" />
                    <h5 className="text-gray-200 font-bold">
                      {community.name}
                    </h5>
                  </div>
                  <p className="font-normal text-[13px] text-gray-400 mb-6">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex items-center space-x-1 ">
                    <div className="h-2 w-2 rounded-full bg-[#3BA55D]" />
                    <p className="text-[12px] text-gray-400 ">
                      {community.users.length} online
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Explore;
