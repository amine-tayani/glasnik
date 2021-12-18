import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="max-w-full bg-[#111827] font-inter">
      <div className="pt-12 pb-0 sm:pt-8 sm:pb-0 md:pt-12 md:pb-0 lg:pt-0 lg:pb-0 container mx-auto px-6 flex items-center justify-between">
        <div
          aria-label="Home. logo"
          className="xl:ml-12 flex space-x-1 items-center"
        >
          <img src="/logo1.svg" className="w-8 " alt="" />
          <h1 className="text-3xl font-semibold tracking-wider">lasnik</h1>
        </div>
        <div>
          <button
            onClick={() => setShow(!show)}
            className={`${
              show ? "hidden" : ""
            } text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none`}
          >
            <MenuIcon className="lg:hidden h-7 w-7" />
          </button>
          <div
            id="menu"
            className={` ${show ? "" : "hidden"} md:block lg:block `}
          >
            <button
              onClick={() => setShow(!show)}
              className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-6 right-6 mt-6"
            >
              <XIcon className="lg:hidden h-7 w-7" />
            </button>
            <ul className="flex md:hidden text-3xl md:text-base items-center py-10 lg:flex flex-col md:flex-row justify-center lg:ml-20 fixed md:relative top-0 bottom-0 left-0 right-0 bg-[#111827] md:bg-transparent z-20 font-inter">
              <li className="text-gray-200 hover:text-blue-500 font-medium cursor-pointer text-xl md:text-base pt-10 md:pt-0">
                <a href="#link">Feature</a>
              </li>
              <li className="text-gray-200 hover:text-blue-500 font-medium cursor-pointer text-xl md:text-base pt-10 md:pt-0 md:ml-5 lg:ml-16">
                <a href="#link">Marketplace</a>
              </li>
              <li className="text-gray-200 hover:text-blue-500 font-medium cursor-pointer text-xl md:text-base pt-10 md:pt-0 md:ml-5 lg:ml-16">
                <a href="#link">Company</a>
              </li>
              <li className="text-gray-200 hover:text-blue-500 font-medium  cursor-pointer text-xl md:text-base pt-10 md:pt-0 md:ml-5 lg:ml-16">
                <a href="#link">Features</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-x-4 hidden xl:flex mr-12">
          <button className="focus:outline-none transition duration-150 ease-in-out bg-[#1a56db] lg:text-lg rounded-lg text-white px-6 py-2 text-sm hover:bg-blue-600">
            Sign In
          </button>
          <button className="focus:outline-none transition duration-150 ease-in-out bg-white lg:text-lg rounded-lg text-gray-900 px-4 sm:px-6 py-2 text-sm ">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
