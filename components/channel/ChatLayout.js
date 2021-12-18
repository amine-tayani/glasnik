/* eslint-disable arrow-body-style */
import React from "react";
import { DateToNoun, toHourMinuteFmt } from "../../utils/dateUtil";

const ChatLayout = ({ message, currentUser }) => {
  return (
    <div className="mx-4 p-4 flex space-x-4 ">
      <img
        className="h-10 w-10 object-cover rounded-full"
        src={
          message.sender.photoUrl
            ? message.sender.photoUrl
            : "https://avatars.dicebear.com/api/bottts/149.svg"
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
