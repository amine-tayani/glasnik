import React, { useState } from "react";
import Link from "next/link";
import { FireIcon, PlusCircleIcon } from "@heroicons/react/solid";
import CreateChannelDialog from "./CreateChannelDialog";
import Tooltip from "../shared/Tooltip";

const Sidenav = ({ prop, bg }) => {
  const [openDialog, setIsOpen] = useState(false);

  return (
    <div>
      <ul
        className={`relative z-max menu w-24 py-3 h-screen ${
          bg || "bg-[#202225]  border-r border-[#293030]"
        } text-white`}
      >
        <li>
          <Tooltip tooltipText="Home">
            <a href="/channels/me">
              <div className="p-3 text-sm font-semibold font-barlow transform bg-[#36393F] flex justify-center items-center rounded-xl hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer">
                <img src="/logo1.svg" className="w-7 h-7" alt="home" />
              </div>
            </a>
          </Tooltip>
        </li>
        {prop?.communities.map((community) => (
          <li key={community.id}>
            <Tooltip tooltipText={community.name}>
              <a className=" text-gray-400" href={`/channels/${community.id}`}>
                <div className="avatar object-center">
                  <div className="w-14 h-14 mask mask-hexagon">
                    <img src={community.thumbUrl} alt="channel" />
                  </div>
                </div>
              </a>
            </Tooltip>
          </li>
        ))}
        <li>
          <Tooltip tooltipText="Create community">
            <a
              href="#open"
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
          </Tooltip>
        </li>

        <li>
          <Tooltip tooltipText="Explore">
            <a href="/channels/explore">
              <div className="p-3  text-sm font-semibold font-barlow transform bg-[#36393F] flex justify-center items-center rounded-xl hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer">
                <FireIcon className="w-7 h-7 text-gray-300 " />
              </div>
            </a>
          </Tooltip>
        </li>
        <li>
          <div className="absolute bottom-0">
            <div className="flex text-gray-400 mb-4 items-center space-x-4 cursor-pointer">
              <Tooltip tooltipText="My profile">
                <Link href="/profile">
                  <div className="bg-[#36393F] p-3 rounded-full flex items-center justify-center">
                    <img
                      className="w-8 h-8 object-cover rounded-full"
                      alt="avatar"
                      src={
                        prop?.photoUrl
                          ? prop?.photoUrl
                          : `https://avatars.dicebear.com/api/identicon/{${prop?.id}}.svg`
                      }
                    />
                  </div>
                </Link>
              </Tooltip>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
