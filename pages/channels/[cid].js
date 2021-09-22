import React from "react";
import {
  ChatAlt2Icon,
  ChatAltIcon,
  PlusIcon,
  HashtagIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../../utils/auth/check-auth";
import ErrorPage from "../../components/shared/ErrorPage";
import UserAvatar from "../../components/shared/UserAvatar";
import AddFriendModal from "../../components/Friend/AddFriendModal";

const channel = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated || user?.username !== router.query.cid) {
    return <ErrorPage url={router.query.cid} />;
  }
  return (
    <div className="flex bg-[#202225]">
      <Head>
        <title>
          {isAuthenticated ? `${user?.username} channel` : "Glasnik "}
        </title>
      </Head>
      <div className="">
        <ul className="menu w-24 py-3 h-screen bg-[#202225] border-r border-[#293030] text-white">
          <li className="bordered">
            <a href="f">
              <div className="p-3  transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
                <ChatAlt2Icon className="w-7 h-7" />
              </div>
            </a>
          </li>
          <li className="focus:bordered">
            <a href="b">
              <div className="p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
                <ChatAltIcon className="w-7 h-7" />
              </div>
            </a>
          </li>
          <li>
            <a href="s">
              <div className="p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
                <img
                  src="https://bflat.cc/wp-content/uploads/2021/05/cropped-sliker-logo.png"
                  alt="sliker"
                  className="w-8 h-8"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="s">
              <div className=" p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
                <PlusIcon className="h-7 w-7 text-green-400" />
              </div>
            </a>
          </li>
          <li>
            <a href="s">
              <div className="p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
                <HashtagIcon className="w-7 h-7" />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="font-inter bg-[#2F3136] ">
        <di v className="overflow-hidden flex mt-6 mx-4">
          <input
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.placeholder = "Search messages...";
            }}
            type="text"
            className="bg-[#36393F] rounded-l-xl text-sm appearance-none w-40 px-4 py-2 leading-tight focus:outline-none text-gray-400"
            placeholder="Search messages..."
          />
          <button
            className="flex items-center justify-center py-2 px-4 bg-[#36393F] focus:outline-none rounded-r-xl"
            type="submit"
          >
            <SearchIcon className="h-5 w-5 text-gray-400 " />
          </button>
        </di>
        <div className="mx-4 mt-10">
          <AddFriendModal />
          <div className="flex flex-col space-y-2 transition duration-300 ease-in-out">
            <UserAvatar username={user?.username} />
            <UserAvatar username={user?.username} />
            <UserAvatar username={user?.username} />
            <UserAvatar username={user?.username} />
            <UserAvatar username={user?.username} />
            <UserAvatar username={user?.username} />
          </div>
        </div>
      </div>
      <div className="bg-[#36393F] w-3/5 ">
        <div className="flex justify-center items-center h-48">
          <h1 className="text-5xl font-bold w-1/2 text-center tracking-wide leading-relaxed text-white font-tweb">
            Welcome back on {user?.username} server
          </h1>
        </div>
      </div>
      <div className="bg-[#2F3136] w-96" />
    </div>
  );
};

export default channel;
