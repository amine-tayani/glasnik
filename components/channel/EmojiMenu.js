import React, { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { EmojiHappyIcon } from "@heroicons/react/solid";

const EmojiMenu = () => {
  const [emotes, setEmotes] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.frankerfacez.com/v1/emotes?sensitive=false&sort=count&high_dpi=off&page=1&per_page=200"
    )
      .then((response) => response.json())
      .then((data) => {
        setEmotes(data.emoticons);
      });
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button className=" outline-none focus:outline-none">
        <EmojiHappyIcon className="h-6 w-6 text-gray-400 hover:text-gray-100 cursor-pointer" />
      </Popover.Button>
      <Transition
        enter="transition duration-300 ease-in-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-100 ease-in-out"
        leaveFrom="transform  opacity-100"
        leaveTo="transform  opacity-0"
      >
        <Popover.Panel className=" font-inter fixed right-16 bottom-24">
          <div
            id="scrollBar"
            className="w-3/5 h-100 overflow-y-scroll overflow-x-hidden bg-[#2F3136] pl-8 pr-12 shadow-xl rounded-lg "
          >
            <div className="sticky top-0 z-50 bg-[#2F3136] w-200 py-4 ">
              <h1 className=" text-white font-bold">Emotes</h1>
            </div>
            <div className=" grid grid-cols-10 gap-x-8 mb-4">
              {emotes.map((emote) => (
                <span
                  data-tooltip={emote.name}
                  data-flow="top"
                  key={emote.id}
                  className=" flex text-sm font-semibold font-barlow justify-center items-center rounded-lg cursor-pointer h-10 w-10 hover:bg-[#393C43] transition-all ease-in-out duration-300 "
                >
                  <img
                    src={emote.urls["1"]}
                    alt={emote.name}
                    className=" h-6 w-6"
                  />
                </span>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default EmojiMenu;
