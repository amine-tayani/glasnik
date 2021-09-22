import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import UserAvatar from "../shared/UserAvatar";

const AddFriendModal = () => (
  <>
    <div className="flex justify-between mb-2">
      <h1 className="text-gray-400 text-sm font-semibold font-sand uppercase">
        Direct Messages
      </h1>
      <Popover className="relative">
        <Popover.Button className="outline-none focus:outline-none">
          <div data-tip="Make DM" className="tooltip ">
            <PlusIcon className="h-5 w-5 text-gray-400 hover:text-gray-100 cursor-pointer" />
          </div>
        </Popover.Button>
        <Transition
          enter="transition duration-300 ease-in-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-100 ease-in-out"
          leaveFrom="transform  opacity-100"
          leaveTo="transform  opacity-0"
        >
          <Popover.Panel className="absolute left-12 top-0 z-10 font-inter">
            <div className="w-96 bg-[#2F3136] p-8 shadow-xl rounded-lg">
              <h1 className="text-white text-xl font-semibold mb-4">
                Add a friend
              </h1>
              <div className="flex items-center space-x-2">
                <input
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Type username...";
                  }}
                  type="text"
                  className="bg-[#36393F] rounded-lg text-sm appearance-none w-4/5 px-4 py-3 leading-tight focus:outline-none text-gray-400"
                  placeholder="Type username..."
                />
                <button
                  type="submit"
                  className="w-1/5 py-2 rounded-lg text-sm transform transition duration-500 ease-in-out bg-[#0071FF] text-white font-medium focus:outline-none "
                >
                  Add
                </button>
              </div>
              <div className="flex flex-col mt-3 transition duration-300 ease-in-out">
                <h1 className="text-gray-500 text-sm my-2">Friends List</h1>
                <UserAvatar username="Leslie Alexander" />
                <UserAvatar username="Mike Williams" />
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  </>
);

export default AddFriendModal;
