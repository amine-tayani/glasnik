import { XIcon } from "@heroicons/react/outline";
import React from "react";

const UserAvatar = ({ username }) => (
  <div className="flex items-center justify-between px-2 py-1 group hover:bg-[#393C43] transition-all ease-in-out duration-300 cursor-pointer rounded-lg ">
    <div className="flex items-center space-x-4">
      <div className="relative flex-shrink-0">
        <span className="absolute bottom-0 right-0 z-50 w-2 h-2 bg-green-600 rounded-full" />
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8">
            <span className="text-sm">{username.charAt(0).toUpperCase()}</span>
          </div>
        </div>
      </div>
      <h1 className="text-gray-400 text-sm group-hover:text-white ">
        {username}
      </h1>
    </div>
    <XIcon className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
  </div>
);

export default UserAvatar;
