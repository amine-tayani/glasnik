import React from "react";
import { DocumentIcon, PhotographIcon } from "@heroicons/react/outline";

const MessageInput = () => (
  <div className="flex justify-center space-x-2 mt-8 items-center mx-12">
    <div className="flex justify-center items-center bg-gray-100 p-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
      <DocumentIcon className="text-gray-500 w-5 h-5 hover:text-blue-500" />
    </div>
    <div className="flex justify-center items-center bg-gray-100 p-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer">
      <PhotographIcon className="text-gray-500 w-5 h-5 hover:text-blue-500" />
    </div>
    <input
      onFocus={(e) => {
        e.target.placeholder = "";
      }}
      onBlur={(e) => {
        e.target.placeholder = "type a message";
      }}
      type="text"
      placeholder="type a message"
      className="w-full py-2 px-4 bg-gray-100 rounded-lg text-sm font-medium focus:outline-none"
    />
    <button
      type="button"
      className="flex justify-center items-center bg-gradient-to-tr  from-indigo-400 to-blue-700 p-2 rounded-full transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer"
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.3"
        stroke="#fff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="10" y1="14" x2="21" y2="3" />
        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
      </svg>
    </button>
  </div>
);

export default MessageInput;
