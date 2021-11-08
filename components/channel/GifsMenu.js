import React, { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CubeIcon } from "@heroicons/react/solid";

const GifsMenu = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=X6I5hUfQClTUx3YLe9QtqXdZm3GAVHsM&limit=300&rating=g`
    )
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
      });
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button className=" outline-none focus:outline-none">
        <CubeIcon className="h-6 w-6 text-gray-400 hover:text-gray-100 cursor-pointer" />
      </Popover.Button>
      <Transition
        enter="transition duration-300 ease-in-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-100 ease-in-out"
        leaveFrom="transform  opacity-100"
        leaveTo="transform  opacity-0"
      >
        <Popover.Panel className=" font-inter fixed right-96 bottom-24">
          <div
            id="emojis"
            className="w-400 h-100 overflow-y-scroll overflow-x-hidden bg-[#2F3136] pl-8 pr-12 shadow-xl rounded-lg "
          >
            <div className="sticky top-0 z-50 bg-[#2F3136] w-screen py-4 ">
              <h1 className=" text-white font-bold">Gifs</h1>
            </div>
            <div className={` grid grid-cols-3 gap-2 mb-4`}>
              {gifs.map((gif) => (
                <img alt={gif.title} src={gif.images.fixed_height.url} />
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default GifsMenu;
