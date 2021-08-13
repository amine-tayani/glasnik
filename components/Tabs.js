import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

const Tabs = () => (
  <div className="border-b border-gray-200">
    <nav className="flex justify-around text-sm font-tweb sm:flex-row">
      <button
        type="button"
        className="ml-4 py-4 px-2 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
      >
        New
      </button>
      <button
        type="button"
        className="text-gray-600 py-4 px-2 block hover:text-blue-500 focus:outline-none"
      >
        In progress
      </button>
      <button
        type="button"
        className="text-gray-600 py-4 px-2 block hover:text-blue-500 focus:outline-none"
      >
        On hold
      </button>
      <button
        type="button"
        className="text-gray-600 py-4 px-2 block hover:text-blue-500 focus:outline-none"
      >
        Completed
      </button>
      <button type="button" className="py-4 px-2 block focus:outline-none">
        <DotsHorizontalIcon className="text-gray-400 w-6 h-6  hover:text-blue-500" />
      </button>
    </nav>
  </div>
);

export default Tabs;
