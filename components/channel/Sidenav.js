import React, { useState } from "react";
import useSound from "use-sound";
import Link from "next/link";
import {
  VolumeUpIcon,
  VolumeOffIcon,
  MicrophoneIcon,
  PlusIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";

const Sidenav = ({ prop }) => {
  const [mute, setMute] = useState(false);
  const [play] = useSound("/sounds/muteMic.mp3", { volume: 0.4 });

  const muteSound = () => {
    setTimeout(() => {
      setMute(!mute);
      play();
    }, 1000);
  };
  return (
    <div className="">
      <ul className="menu w-24 py-3 h-screen bg-[#202225] border-r border-[#293030] text-white">
        <li className="bordered">
          <a href="f">
            <div
              data-tooltip="home"
              data-flow="bottom"
              className="p-3 transform ring-0 ring-transparent hover:ring-offset-2 hover:ring-offset-blue-600 bg-[#36393F] flex justify-center items-center rounded-full"
            >
              <img src="/glasnik-icon.png" className="w-7 h-7" alt="home" />
            </div>
          </a>
        </li>

        <li>
          <a href="s">
            <div
              data-tooltip="Create"
              data-flow="bottom"
              className=" p-3 transform ring-0 ring-transparent hover:ring-offset-2 hover:ring-offset-blue-600 bg-[#36393F] flex justify-center items-center rounded-full"
            >
              <PlusIcon className="h-7 w-7 text-blue-600" />
            </div>
          </a>
        </li>
        <li>
          <a href="s">
            <div
              data-tooltip="Explore"
              data-flow="bottom"
              className="p-3 transform ring-0 ring-transparent hover:ring-offset-2 hover:ring-offset-blue-600 bg-[#36393F] flex justify-center items-center rounded-full"
            >
              <ColorSwatchIcon className="w-7 h-7 text-blue-600" />
            </div>
          </a>
        </li>
        <li className="absolute bottom-0 mb-4">
          <div className="flex flex-col text-gray-400 space-y-4 my-4 ml-8">
            <MicrophoneIcon className="w-6 h-6" />
            <button
              className="focus:outline-none transform active:skew-x-12"
              onClick={muteSound}
            >
              {!mute ? (
                <VolumeUpIcon className="w-6 h-6" />
              ) : (
                <VolumeOffIcon className="w-6 h-6 text-red-500" />
              )}
            </button>
            <Link href={`/profile/${prop?.username}`}>
              <div className="-ml-3 p-2 transform ring-0 ring-transparent hover:ring-offset-2 hover:ring-offset-blue-600 bg-[#36393F] flex justify-center items-center rounded-full">
                <UserIcon className="w-8 h-8 " />
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
