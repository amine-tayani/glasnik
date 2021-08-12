/* eslint-disable react/jsx-filename-extension */
import { SearchIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import React from "react";

const SearchLayout = () => (
  <div className="flex items-center justify-around ">
    <div className="bg-gray-100 flex m-4 rounded-lg ">
      <span className="w-auto flex justify-end items-center px-3">
        <SearchIcon className="text-gray-500 w-5 h-5" />
      </span>
      <input
        className="w-60 py-2 bg-gray-100 rounded-lg text-sm font-medium focus:outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
    <button type="button" className="focus:outline-none">
      <MenuAlt3Icon className="text-gray-400 w-6 h-6 mr-4" />
    </button>
  </div>
);

export default SearchLayout;
