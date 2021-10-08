import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "../../utils/auth/check-auth";
import ErrorPage from "../../components/shared/ErrorPage";
import UserAvatar from "../../components/shared/UserAvatar";
import AddFriendModal from "../../components/Friend/AddFriendModal";
import IconTabs from "../../components/user/IconTabs";
import Sidenav from "../../components/channel/Sidenav";

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
      <Sidenav />
      <div className="font-inter bg-[#2F3136] relative">
        <div className="overflow-hidden flex mt-6 mx-4">
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
        </div>
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
        <IconTabs current={user} />
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
