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
import CreateChannelDialog from "./CreateChannelDialog";

const Sidenav = ({ prop }) => {
  const [openDialog, setIsOpen] = useState(false);
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
        <li>
          <a href="#f">
            <div className="p-3 text-sm font-semibold font-barlow transform bg-[#36393F] flex justify-center items-center rounded-xl hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer">
              <img src="/logo1.svg" className="w-7 h-7" alt="home" />
            </div>
          </a>
        </li>

        <li>
          <a
            href
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <div className="flex justify-center items-center rounded-xl p-3 group text-sm font-semibold font-barlow transform bg-[#36393F]  hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer">
              <PlusIcon className="h-7 w-7 text-gray-300" />
            </div>
            {openDialog && (
              <CreateChannelDialog open={openDialog} setOpen={setIsOpen} />
            )}
          </a>
        </li>
        <li>
          <a href>
            <div
              data-tooltip="Explore"
              data-flow="bottom"
              className="p-3  text-sm font-semibold font-barlow transform bg-[#36393F] flex justify-center items-center rounded-xl hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer"
            >
              <ColorSwatchIcon className="w-7 h-7 text-gray-300 " />
            </div>
          </a>
        </li>
        <li className="absolute bottom-0 mb-4">
          <div className="flex flex-col text-gray-400 space-y-4 my-4 ml-8">
            <span
              className=" text-sm font-semibold font-barlow"
              data-tooltip="Mute Mic"
              data-flow="right"
            >
              <MicrophoneIcon className="w-6 h-6" />
            </span>
            <button
              data-tooltip="Mute sound"
              data-flow="right"
              className="text-sm font-semibold font-barlow focus:outline-none"
              onClick={muteSound}
            >
              {!mute ? (
                <VolumeUpIcon className="w-6 h-6" />
              ) : (
                <VolumeOffIcon className="w-6 h-6 text-red-500" />
              )}
            </button>
            <Link href={`/profile/${prop?.username}`}>
              <div
                data-tooltip="Profile"
                data-flow="right"
                className="text-sm font-semibold font-barlow cursor-pointer -ml-3 p-2 transform bg-[#36393F] flex justify-center items-center rounded-xl hover:rounded-3xl transition-all duration-300 ease-linear"
              >
                <img
                  className="h-8 w-8"
                  alt="avatar"
                  src={
                    prop?.photoUrl
                      ? prop?.photoUrl
                      : "https://avatars.dicebear.com/api/bottts/149.svg"
                  }
                />
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
