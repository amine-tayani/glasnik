import React from "react";
import {
  ChatAlt2Icon,
  ChatAltIcon,
  PlusIcon,
  HashtagIcon,
} from "@heroicons/react/outline";

const Sidenav = () => (
  <div className="">
    <ul className="menu w-24 py-3 h-screen bg-[#202225] border-r border-[#293030] text-white">
      <li className="bordered">
        <a href="f">
          <div className="p-3  transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
            <ChatAlt2Icon className="w-7 h-7" />
          </div>
        </a>
      </li>
      <li className="focus:bordered">
        <a href="b">
          <div className="p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
            <ChatAltIcon className="w-7 h-7" />
          </div>
        </a>
      </li>
      <li>
        <a href="s">
          <div className="p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/e4d9bf96-311d-487a-b5eb-9f9a94e0f795-profile_image-70x70.png"
              alt="sliker"
              className="w-8 h-8"
            />
          </div>
        </a>
      </li>
      <li>
        <a href="s">
          <div className=" p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
            <PlusIcon className="h-7 w-7 text-green-400" />
          </div>
        </a>
      </li>
      <li>
        <a href="s">
          <div className="p-3 transform hover:scale-110 bg-[#36393F] flex justify-center items-center rounded-full">
            <HashtagIcon className="w-7 h-7" />
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default Sidenav;
