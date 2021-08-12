/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { CogIcon, DotsHorizontalIcon } from "@heroicons/react/outline";

const ChatHeader = () => (
  <div className=" flex justify-between py-4 shadow-md">
    <div className="flex items-center">
      <img
        src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt="My profile"
        className="w-10 h-10 rounded-full ml-4"
      />
      <h1 className="font-bold font-tweb ml-4 tracking-wide">Chance Morris</h1>
      <div className="rounded-full ml-2 w-2 h-2 p-1 bg-green-400" />
    </div>
    <div className="flex items-center">
      <button type="button" className=" mr-4 focus:outline-none">
        <CogIcon className="text-gray-400 w-6 h-6 hover:text-blue-500" />
      </button>
      <button type="button" className=" mr-6 focus:outline-none">
        <DotsHorizontalIcon className="text-gray-400 w-6 h-6 hover:text-blue-500" />
      </button>
    </div>
  </div>
);

export default ChatHeader;
