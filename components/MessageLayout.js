/* eslint-disable react/jsx-filename-extension */
import React from "react";

// eslint-disable-next-line react/prop-types
const MessageLayout = ({ isOwner }) => (
  <>
    {isOwner ? (
      <div className="flex items-end transition-all ease-in-out duration-300">
        <div className="flex flex-col space-y-2 text-xs max-w-xs order-2 items-start">
          <div className="">
            <span className="max-w-sm px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gradient-to-l from-blue-600 to-blue-500 text-gray-100 font-medium text-sm">
              this is a message
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="w-8 h-8 rounded-full order-1 mx-4"
        />
      </div>
    ) : (
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block font-medium text-sm rounded-br-none bg-gray-100 text-gray-900">
              hello
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="w-8 h-8 rounded-full order-2"
        />
      </div>
    )}
  </>
);

export default MessageLayout;
