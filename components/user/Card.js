import React from "react";
import { UserIcon } from "@heroicons/react/solid";

const Card = ({ user }) => (
  <div className="bg-[#2F3136] font-inter text-white p-6 mt-8 rounded-xl">
    <div className="flex justify-between items-center">
      <div className="flex space-x-4 items-center">
        <div className="relative flex-shrink-0">
          <span className="absolute bottom-1 right-1 z-50 w-4 h-4 ring-0 ring-transparent ring-offset-8 ring-offset-[#2F3136] bg-green-600 rounded-full" />
          <div className="avatar placeholder">
            <div className="bg-[#393C43] text-neutral-content rounded-full w-20 h-20">
              {user.photoUrl === null ? (
                <UserIcon className="h-12 w-12" />
              ) : (
                <img
                  className="w-20 h-20"
                  src={user.photoUrl}
                  alt={user.username}
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-100 font-semibold mb-1">
            {user.username}
          </p>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
        >
          Edit User Profile
        </button>
      </div>
    </div>
    <div className="bg-[#36393F] p-6 mt-4 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-gray-400 text-xs uppercase font-medium">
            username
          </p>
          <p className="text-gray-200 text-sm">
            {user.username} # {user.id}
          </p>
        </div>
        <div>
          <button
            type="submit"
            className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-gray-600 hover:bg-gray-500 text-white focus:outline-none "
          >
            Edit
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex flex-col">
          <p className="text-gray-400 text-xs uppercase font-medium">email</p>
          <p className="text-gray-200 text-sm">{user.email}</p>
        </div>
        <div>
          <button
            type="submit"
            className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-gray-600 hover:bg-gray-500 text-white focus:outline-none "
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
