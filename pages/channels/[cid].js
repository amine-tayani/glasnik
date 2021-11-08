import React from "react";
import { FingerPrintIcon, HashtagIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useAuth } from "../../utils/auth/check-auth";
import UserAvatar from "../../components/shared/UserAvatar";
import AddFriendModal from "../../components/Friend/AddFriendModal";
import Sidenav from "../../components/channel/Sidenav";
import EmojiMenu from "../../components/channel/EmojiMenu";
import FileModal from "../../components/channel/FileModal";
import GifsMenu from "../../components/channel/GifsMenu";

const channel = () => {
  const { user, isAuthenticated } = useAuth();
  return (
    <div className="flex bg-[#202225]">
      <Head>
        <title>
          {isAuthenticated ? `${user?.username} - Glasnik` : "Glasnik "}
        </title>
      </Head>
      <Sidenav prop={user} />
      <div className="font-inter w-1/6 bg-[#2F3136]">
        <div className="mx-4 mt-10">
          <AddFriendModal />
          <div className="flex flex-col space-y-2 transition duration-300 ease-in-out">
            {user?.friends.length !== 0
              ? user?.friends.map((friend) => (
                  <UserAvatar key={friend.id} infos={friend} />
                ))
              : user?.friendOf.map((friend) => (
                  <UserAvatar key={friend.id} infos={friend} />
                ))}
          </div>
        </div>
      </div>
      <div className="bg-[#36393F] w-3/5 font-inter relative">
        <div className="text-white py-4 shadow-xl">
          <div className="flex justify-between items-center mx-4">
            <div className="flex space-x-2 items-center">
              <HashtagIcon className="h-5 w-5 text-gray-300 " />
              <p className="ml-4 font-semibold">General</p>
            </div>
            <FingerPrintIcon className="h-5 w-5 text-gray-300 " />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <div className="flex justify-center mx-auto max-w-xs text-center text-white">
            <h1 className="text-4xl font-roboto font-bold">
              Welcome to {user?.username} server
            </h1>
          </div>

          <div className="overflow-hidden flex mt-8 mb-4 relative rounded-xl mx-4">
            <input
              onFocus={(e) => {
                e.target.placeholder = "";
              }}
              onBlur={(e) => {
                e.target.placeholder = "Send message here...";
              }}
              type="text"
              className="bg-[#24262b] text-sm placeholder-gray-400 appearance-none w-full p-4 leading-tight focus:outline-none text-gray-200"
              placeholder="Send message here..."
            />
            <div className="flex space-x-2 items-center bg-[#24262b] pr-4">
              <FileModal />
              <EmojiMenu />
              <GifsMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2F3136] w-96" />
    </div>
  );
};

export default channel;
