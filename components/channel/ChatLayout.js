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
      <img
        className="h-10 w-10 object-cover rounded-full"
        src={
          message.sender?.photoUrl
            ? message.sender?.photoUrl
            : `https://avatars.dicebear.com/api/identicon/{${message.sender?.id}}.svg`
        }
        alt=""
      />
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <p className="text-blue-200 font-medium ">
            {message.sender.username === currentUser?.username
              ? "me"
              : message.sender.username}
          </p>
          <span className="text-xs text-gray-400">
            {DateToNoun(message.timestamp)} at{" "}
            {toHourMinuteFmt(message.timestamp)}
          </span>
        </div>
        <p className="text-gray-300 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatLayout;
