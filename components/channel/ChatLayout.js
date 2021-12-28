/* eslint-disable arrow-body-style */
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  BellIcon,
  HashtagIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { DateToNoun, toHourMinuteFmt } from "../../utils/dateUtil";
import FileModal from "./FileModal";
import EmojiMenu from "./EmojiMenu";
import GifsMenu from "./GifsMenu";

const ChatLayout = ({ msgData, loading, currentUser, sendMessage }) => {
  const messagesRef = useRef(null);
  const { handleSubmit, register } = useForm({ mode: "onBlur" });

  const scrollTolatest = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    scrollTolatest();
  }, [messagesRef]);

  return (
    <>
      <div className="bg-[#36393F] w-3/5 font-inter relative ">
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

        <div className="absolute bottom-0 inset-x-0">
          {!msgData ? (
            <div className="flex justify-center mx-auto max-w-xs text-center text-white">
              <h1 className="text-4xl font-roboto font-bold">
                Welcome to chat
              </h1>
            </div>
          ) : (
            <div
              id="scrollBar"
              className="h-[620px] overflow-y-scroll overflow-x-hidden mt-4"
            >
              {msgData?.getMessages.map((message) =>
                loading ? (
                  <div className="animate-pulse flex space-x-4 mx-4 p-4">
                    <div className="rounded-full bg-gray-500 h-10 w-10" />
                    <div className="flex-1 space-y-6 py-1">
                      <div className="space-y-3">
                        <div className="grid gap-4 w-1/2">
                          <div className="h-3 bg-gray-500 rounded-full " />
                          <div className="h-3 bg-gray-500 rounded-full " />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={message.id}
                    ref={messagesRef}
                    className="mx-4 p-4 flex space-x-4 "
                  >
                    <div className="bg-[#2F3136] h-12 w-12 rounded-full flex items-center justify-center">
                      <img
                        className="h-6 w-6 object-cover"
                        src={
                          message.sender.photoUrl
                            ? message.sender.photoUrl
                            : `https://avatars.dicebear.com/api/identicon/{${message.sender?.id}}.svg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-100 font-medium text-[15px]">
                          {message.sender.username === currentUser?.username
                            ? "me"
                            : message.sender.username}
                        </p>
                        <span className="text-xs text-gray-400">
                          {DateToNoun(message.timestamp)} at{" "}
                          {toHourMinuteFmt(message.timestamp)}
                        </span>
                      </div>
                      <p className="text-gray-300 text-[13px] inline-block w-[700px]">
                        {message.text}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
          <div className=" overflow-hidden flex mt-8 mb-4 relative rounded-xl mx-4">
            <form className="w-full" onSubmit={handleSubmit(sendMessage)}>
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
    </>
  );
};

export default ChatLayout;
