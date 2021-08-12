/* eslint-disable react/jsx-filename-extension */
import React from "react";

const Notification = () => (
  <div className="hover:bg-gray-100  py-3 cursor-pointer transition duration-300 ease-in-out">
    <div className="flex px-8 w-full ">
      <img
        alt="blog"
        src="https://i.pravatar.cc/150?img=3"
        className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full"
      />
      <span className="flex flex-col flex-grow pl-3">
        <p className="text-sm font-bold text-gray-900">Nicholas Polom</p>
      </span>
      <p className="text-gray-400 text-xs font-semibold pl-6">8:31 PM</p>
    </div>
    <div className="flex items-center space-x-4 -mt-3 justify-center px-7">
      <span className=" px-2 text-xs font-semibold text-gray-800 ml-12 ">
        There are many things that are important to catalog design
      </span>
      <div className="flex justify-center items-center rounded-full w-2 h-2 p-2 bg-blue-500">
        <span className="text-white text-xs font-semibold">2</span>
      </div>
    </div>
  </div>
);

export default Notification;
