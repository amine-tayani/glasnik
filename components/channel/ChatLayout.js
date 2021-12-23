/* eslint-disable arrow-body-style */
import React, { useEffect, useRef } from "react";
import { DateToNoun, toHourMinuteFmt } from "../../utils/dateUtil";

const ChatLayout = ({ message, currentUser, loading }) => {
  const messagesRef = useRef(null);

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

  return loading ? (
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
    <div ref={messagesRef} className="mx-4 p-4 flex space-x-4 ">
      <div className="bg-[#2F3136] h-12 w-12 rounded-full flex items-center justify-center">
        <img
          className="h-6 w-6 object-cover"
          src={
            message.sender?.photoUrl
              ? message.sender?.photoUrl
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
        <p className="text-gray-300 text-[13px]">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatLayout;
