import React from "react";
import Link from "next/link";

const Navbar = ({ user, isAuthenticated }) => (
  <div className=" container items-center max-w-full">
    <div className="text-gray-100 font-sand  bg-gray-900 ">
      <div className="flex flex-col flex-wrap p-2 md:items-center md:flex-row ">
        <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
          <div className="inline-flex items-center">
            <img src="/Logo2.svg" className="w-24" alt="" />
          </div>
        </a>
        <nav className="hidden md:flex items-center justify-center md:mx-auto font-inter">
          <ul className="items-center inline-block list-none lg:inline-flex ">
            <li>
              <a
                href="#pricing"
                className="px-4 py-1 mr-4 transition duration-500 ease-in-out focus:outline-none  "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-1 mr-4 transition duration-500 ease-in-out focus:outline-none  "
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="px-4 py-1 mr-4 transition duration-500 ease-in-out focus:outline-none  "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#now"
                className="px-4 py-1 mr-4 transition duration-500 ease-in-out focus:outline-none "
              >
                Now
              </a>
            </li>
          </ul>
        </nav>
        {!isAuthenticated ? (
          <div className="mx-4 flex space-x-4 font-barlow">
            <Link href="/signup">
              <button
                type="button"
                className="w-auto px-8 py-2 my-4 text-white text-base transform transition duration-500 ease-in-out border-none font-bold bg-blue-600 hover:bg-blue-700 rounded-full focus:outline-none "
              >
                Sign up
              </button>
            </Link>
            <Link href="/login">
              <button
                type="button"
                className="w-auto px-8 py-2 my-4 text-base text-gray-900  transform transition duration-500 ease-in-out border-none font-bold bg-gray-50 hover:bg-gray-200 rounded-full focus:outline-none "
              >
                Log in
              </button>
            </Link>
          </div>
        ) : (
          <Link href={`/channels/${user?.username}`}>
            <button
              type="button"
              className="w-auto px-8 mx-8 py-2 my-4 text-base text-gray-900  transform transition duration-500 ease-in-out border-none font-bold bg-gray-50 hover:bg-gray-200 rounded-full font-barlow focus:outline-none "
            >
              Open Glasnik
            </button>
          </Link>
        )}
      </div>
    </div>
  </div>
);
export default Navbar;
