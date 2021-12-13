/* eslint-disable no-nested-ternary */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FingerPrintIcon, HashtagIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { useAuth } from "../../utils/auth/check-auth";
import UserAvatar from "../../components/shared/UserAvatar";
import AddFriendModal from "../../components/Friend/AddFriendModal";
import Sidenav from "../../components/channel/Sidenav";
import EmojiMenu from "../../components/channel/EmojiMenu";
import FileModal from "../../components/channel/FileModal";
import GifsMenu from "../../components/channel/GifsMenu";
import { GET_SINGLE_COMMUNITY } from "../../graphql/queries/community";
import { GET_COMMUNITY_MESSAGES } from "../../graphql/queries/message";
import Loader from "../../components/shared/Loader";
import { CREATE_MESSAGE } from "../../graphql/mutations/message";

const channel = () => {
  const router = useRouter();
  const { cid } = router.query;
  const { user, loading: userLoading } = useAuth();

  const [createMessage] = useMutation(CREATE_MESSAGE);

  const { handleSubmit, register } = useForm({ mode: "onBlur" });

  const sendMessageToChat = async (data) => {
    try {
      await createMessage({
        variables: { communityId: cid, text: data.message },
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const { loading, data } = useQuery(GET_SINGLE_COMMUNITY, {
    variables: { communityId: cid },
  });

  const { data: msgData, error } = useQuery(GET_COMMUNITY_MESSAGES, {
    variables: { communityId: cid },
  });

  if (error) {
    console.log(error.networkError.result);
  }

  return (
    <div className="flex bg-[#202225]">
      <Head>
        <title>
          {userLoading
            ? "loading "
            : router.asPath !== "/channels/me"
            ? ` ${data?.community.name} `
            : ` ${user?.username} `}
          - Glasnik
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
      {cid === "me" ? (
        <div className="bg-[#36393F] w-3/5 font-inter relative">
          <h1
            className="text-center text-3xl text-white mt-8 font-bold
          "
          >
            This is my personal page
          </h1>
        </div>
      ) : (
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
          {msgData?.getMessages.map((message) => (
            <div className="mx-4 mt-4">
              <p className="text-white text-sm">{message.text}</p>
              <p className="text-white text-xs">{message.sender.username}</p>
            </div>
          ))}
          <div className="absolute bottom-0 inset-x-0">
            <div className="flex justify-center mx-auto max-w-xs text-center text-white">
              {loading ? (
                <Loader />
              ) : (
                <h1 className="text-4xl font-roboto font-bold">
                  {router.asPath !== "/channels/me"
                    ? `Welcome to ${data?.community.name} Server`
                    : `Welcome back ${user?.username} `}
                </h1>
              )}
            </div>
            D
            <div className="overflow-hidden flex mt-8 mb-4 relative rounded-xl mx-4">
              <form onSubmit={handleSubmit(sendMessageToChat)}>
                <input
                  {...register("message", {
                    required: "*Field is required. Please fill in field",
                  })}
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
              </form>
              <div className="flex space-x-2 items-center bg-[#24262b] pr-4">
                <FileModal />
                <EmojiMenu />
                <GifsMenu />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#2F3136] w-96 font-inter">
        {cid === "me" ? (
          <h1>this me</h1>
        ) : (
          <div className="flex flex-col space-y-4 text-gray-100 mt-8 mx-4">
            <h1 className="font-semibold text-xl">Members</h1>
            {data?.community.users
              .filter((member) => member.username !== user?.username)
              .map((member) => (
                <div className="flex items-center space-x-2">
                  <img
                    className="h-10 w-10 object-cover rounded-full"
                    src={member.photoUrl}
                    alt={member.username}
                  />
                  <p className=" text-sm mx-4">{member.username}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default channel;
