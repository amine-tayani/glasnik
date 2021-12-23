import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon, UserGroupIcon } from "@heroicons/react/solid";
import { GET_ALL_PUBLIC_COMMUNITIES } from "../../graphql/queries/community";
import { mntFormat } from "../../utils/dateUtil";

const Explore = () => {
  const { data, loading } = useQuery(GET_ALL_PUBLIC_COMMUNITIES);

  return (
    <div className="flex bg-[#111827] overflow-x-hidden h-screen">
      <Head>
        <title>Glasnik - Explore public Communities</title>
      </Head>
      <div className=" w-full mt-12 font-inter text-white relative">
        <div className="background mx-20 shadow-md rounded-lg text-center p-4 sm:p-8 ">
          <h3 className="font-black hero-text mb-2 mt-10 ">
            Find Your Community On Glasnik
          </h3>
          <p className="text-lg text-gray-100 mb-6 ">
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
        <div className="mx-40 my-12">
          <h1 className="text-xl font-semibold text-gray-100">Discover All</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-center mx-40 mt-12 ">
          {data?.communities.map((community) =>
            loading ? (
              <div className="bg-gray-500 animate-pulse  h-52 rounded-lg max-w-[300px] ">
                <div className="p-6 flex flex-col space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-400 h-10 w-10" />
                    <div className="h-4 bg-gray-400 rounded-full w-1/2" />
                  </div>
                  <div className="h-4 bg-gray-400 rounded-full" />
                  <div className="h-4 bg-gray-400 rounded-full " />
                </div>
              </div>
            ) : (
              <div className="bg-[#27272c] shadow-2xl h-64  rounded-lg max-w-[300px] relative cursor-pointer transform hover:translate-x-2 hover:translate-y-2 transition duration-200 ease-in-out">
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
                <div className="p-6">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-1 my-2">
                      <BadgeCheckIcon className="h-5 w-5 text-blue-500" />
                      <h5 className="text-gray-200 text-sm font-medium">
                        {community.name}
                      </h5>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className=" text-[11px] text-gray-400 uppercase mt-2 mb-5">
                      created At {mntFormat(community.createdAt)}
                    </p>
                    <div className="flex space-x-1 -mt-4">
                      <UserGroupIcon className="w-4 h-4 text-gray-400" />
                      <p className="text-[12px] text-gray-400 ">
                        {community.users.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Explore;
