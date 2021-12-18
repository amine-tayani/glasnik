/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import useSound from "use-sound";
import {
  BellIcon,
  InboxIcon,
  UserGroupIcon,
  HashtagIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  MicrophoneIcon,
} from "@heroicons/react/solid";
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
import { ON_NEW_MESSAGE } from "../../graphql/subscriptions/onMessage";
import { useAuth } from "../../utils/auth/check-auth";
import ChatLayout from "../../components/channel/ChatLayout";
import MembersPane from "../../components/channel/MembersPane";

const channel = () => {
  const [mute, setMute] = useState(false);
  const [play] = useSound("/sounds/muteMic.mp3", { volume: 0.4 });
  const router = useRouter();
  const { cid } = router.query;
  const { user, loading: userLoading } = useAuth();
  const [createMessage] = useMutation(CREATE_MESSAGE);

  const muteSound = () => {
    setTimeout(() => {
      setMute(!mute);
      play();
    }, 500);
  };

  const { handleSubmit, register } = useForm({ mode: "onBlur" });

  const { loading, data } = useQuery(GET_SINGLE_COMMUNITY, {
    variables: { communityId: cid },
  });

  const {
    subscribeToMore,
    data: msgData,
    error,
  } = useQuery(GET_COMMUNITY_MESSAGES, {
    variables: { communityId: cid },
  });

  const sendMessageToChat = async (data) => {
    try {
      await createMessage({
        variables: { communityId: cid, text: data.message },
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    subscribeToMore({
      document: ON_NEW_MESSAGE,
      onError: (err) => console.log(err),
      updateQuery: (oldMessages, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return oldMessages;
        }
        const newMessage = subscriptionData.data.onMessage;
        return {
          getMessages: [...oldMessages.getMessages, newMessage],
        };
      },
    });
  }, []);

  if (error) {
    console.log(error?.networkError.result);
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
          <div className="absolute bottom-0 mx-8">
            <div className="flex text-gray-400 mb-4 items-center space-x-8 ">
              <Link href="/profile">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  alt="avatar"
                  src={
                    user?.photoUrl
                      ? user?.photoUrl
                      : "https://avatars.dicebear.com/api/bottts/149.svg"
                  }
                />
              </Link>
              <span
                className=" text-sm font-semibold font-barlow"
                data-tooltip="Mute Mic"
                data-flow="right"
              >
                <MicrophoneIcon className="w-6 h-6" />
              </span>
              <button
                data-tooltip="Mute sound"
                data-flow="right"
                className="text-sm font-semibold font-barlow focus:outline-none"
                onClick={muteSound}
              >
                {!mute ? (
                  <VolumeUpIcon className="w-6 h-6" />
                ) : (
                  <VolumeOffIcon className="w-6 h-6 text-red-500" />
                )}
              </button>
            </div>
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
                <p className="ml-4 font-semibold font-barlow text-gray-300">
                  General
                </p>
              </div>
              <div className="flex space-x-2">
                <BellIcon className="h-5 w-5 text-gray-300 " />
                <InboxIcon className="h-5 w-5 text-gray-300 " />
                <UserGroupIcon className="h-5 w-5 text-gray-300 " />
              </div>
            </div>
          </div>
          <div
            id="scrollBar"
            className="h-[620px] overflow-y-scroll overflow-x-hidden mt-4"
          >
            {msgData?.getMessages.map((message) => (
              <ChatLayout
                message={message}
                currentUser={user}
                key={message.id}
              />
            ))}
          </div>
          <div className="absolute bottom-0 inset-x-0">
            {!msgData && (
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
            )}
            <div className=" overflow-hidden flex mt-8 mb-4 relative rounded-xl mx-4">
              <form
                className="w-full"
                onSubmit={handleSubmit(sendMessageToChat)}
              >
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
      <MembersPane cid={cid} data={data} user={user} />
    </div>
  );
};

export default channel;
