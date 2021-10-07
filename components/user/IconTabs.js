import React from "react";
import { CogIcon, MicrophoneIcon, VolumeUpIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";

const IconTabs = ({ current }) => (
  <div className="w-full bg-[#24262b] text-base-100 absolute bottom-0 py-3 rounded-t-xl">
    <div className="flex justify-between items-center mx-4">
      <div className="flex space-x-2 items-center">
        <div className="relative flex-shrink-0">
          <span className="absolute bottom-0 right-0 z-50 w-2 h-2 ring-0 ring-transparent ring-offset-2 ring-offset-[#2F3136] bg-green-600 rounded-full" />
          <div className="avatar placeholder">
            <div className="bg-[#393C43] text-neutral-content rounded-full w-8 h-8">
              {current.photoUrl === null ? (
                <UserIcon className="h-5 w-5" />
              ) : (
                <img
                  className="w-20 h-20"
                  src={current.photoUrl}
                  alt={current.username}
                />
              )}
            </div>
          </div>
        </div>
        <div className="font-inter">
          <p className="text-sm text-gray-200 ">{current.username}</p>
          <p className="text-xs text-gray-400  ">#{current.id.slice(0, 7)}</p>
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <button data-tip="mute" className="tooltip">
          <MicrophoneIcon className="h-5 w-5 text-gray-400" />
        </button>
        <button data-tip="sound out" className="tooltip">
          <VolumeUpIcon className="h-5 w-5 text-gray-400" />
        </button>
        <a
          href={`/profile/${current.username}`}
          data-tip="User setting"
          className="tooltip"
        >
          <CogIcon className="h-5 w-5 text-gray-400" />
        </a>
      </div>
    </div>
  </div>
);

export default IconTabs;
