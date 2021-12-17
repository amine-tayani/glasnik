import React, { useState } from "react";
import CreateChannelDialog from "./CreateChannelDialog";
import { FireIcon, PlusCircleIcon } from "@heroicons/react/solid";

const Sidenav = ({ prop, bg }) => {
  const [openDialog, setIsOpen] = useState(false);

  return (
    <div className="">
      <ul
        className={` menu w-24 py-3 h-screen ${
          bg || "bg-[#202225]  border-r border-[#293030]"
        } text-white`}
      >
        <li>
          <a href="#f">
            <div className="p-3 text-sm font-semibold font-barlow transform bg-[#36393F] flex justify-center items-center rounded-xl hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer">
              <img src="/logo1.svg" className="w-7 h-7" alt="home" />
            </div>
          </a>
        </li>
        {prop?.communities.map((community) => (
          <li key={community.id}>
            <a
              className="text-sm font-semibold font-barlow text-gray-400"
              href={`/channels/${community.id}`}
              data-tooltip={community.name}
              data-flow="bottom"
            >
              <div className="avatar object-center">
                <div className="w-14 h-14 mask mask-hexagon">
                  <img src={community.thumbUrl} alt="channel" />
                </div>
              </div>
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <div className="flex justify-center items-center rounded-xl p-3 group text-sm font-semibold font-barlow transform bg-[#36393F]  hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer">
              <PlusCircleIcon className="h-7 w-7 text-gray-300" />
            </div>
            {openDialog && (
              <CreateChannelDialog open={openDialog} setOpen={setIsOpen} />
            )}
          </a>
        </li>
        <li>
          <a href="/channels/explore">
            <div
              data-tooltip="Explore"
              data-flow="bottom"
              className="p-3  text-sm font-semibold font-barlow transform bg-[#36393F] flex justify-center items-center rounded-xl hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer"
            >
              <FireIcon className="w-7 h-7 text-gray-300 " />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
