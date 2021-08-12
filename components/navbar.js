/* eslint-disable react/jsx-filename-extension */
import Link from "next/link";
import React from "react";

const Navbar = () => (
  <div className=" container items-center ">
    <div className="text-gray-800 font-sand">
      <div className="flex flex-col flex-wrap p-2 mx-auto md:items-center md:flex-row">
        <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
          <div className="inline-flex items-center">
            <div className="w-3 h-3 p-3 mr-2 rounded-full bg-gradient-to-tr  from-indigo-400 to-blue-700" />
            <h2 className="block p-2 text-xl font-tweb font-extrabold tracking-widest transition duration-500 ease-in-out transform cursor-pointer lg:text-3xl lg:mr-8">
              {" "}
              Glasnik{" "}
            </h2>
          </div>
        </a>
        <nav className="hidden font-tweb tracking-wide  md:flex items-center justify-center md:ml-auto md:mr-auto ">
          <ul className="items-center inline-block list-none lg:inline-flex ">
            <li>
              <a
                href="#pricing"
                className="px-4 py-1 mr-4 text-lg  transition duration-500 ease-in-out focus:outline-none  "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-1 mr-4 text-lg transition duration-500 ease-in-out focus:outline-none  "
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="px-4 py-1 mr-4 text-lg transition duration-500 ease-in-out focus:outline-none  "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#now"
                className="px-4 py-1 mr-4 text-lg transition duration-500 ease-in-out focus:outline-none "
              >
                Now
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link href="/signup">
            <button
              type="button"
              className="w-auto px-8 py-2 my-2 text-white text-base transform transition duration-500 ease-in-out border-none font-bold bg-blue-600 hover:bg-blue-700 rounded-full focus:outline-none "
            >
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button
              type="button"
              className="w-auto px-8 py-2 my-2 text-base text-gray-900  transform transition duration-500 ease-in-out border-none font-bold bg-transparent hover:bg-gray-200 rounded-full focus:outline-none "
            >
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default Navbar;
