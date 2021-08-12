/* eslint-disable react/jsx-filename-extension */
import React from "react";
import {
  PhoneIncomingIcon,
  ChatAltIcon,
  MailIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Bio = () => (
  <div className="border-b py-4">
    <div className="flex justify-center mt-4">
      <img
        src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt="My profile"
        className="w-16 h-16 rounded-full"
      />
    </div>
    <h1 className="text-center text-xl font-bold text-gray-900 mt-3 font-tweb tracking-wide">
      Chance Morris
    </h1>
    <div className="flex justify-center space-x-6 my-4  ">
      <div className="flex justify-center items-center bg-gray-100 p-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <PhoneIncomingIcon className="text-gray-500 w-5 h-5 hover:text-blue-500" />
      </div>
      <div className="flex justify-center items-center bg-gray-100 p-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <ChatAltIcon className="text-gray-500 w-5 h-5 hover:text-blue-500" />
      </div>
      <div className="flex justify-center items-center bg-gray-100 p-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <MailIcon className="text-gray-500 w-5 h-5 hover:text-blue-500" />
      </div>
      <div className="flex justify-center items-center bg-gray-100 p-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <DotsHorizontalIcon className="text-gray-500 w-5 h-5 hover:text-blue-500" />
      </div>
    </div>
  </div>
);

export default Bio;
