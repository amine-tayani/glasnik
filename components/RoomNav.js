import React from "react"
import { useState } from "react"

const RoomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className=" shadow-md font-sand">
      {" "}
      <div className=" px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-4xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a href="/" className="inline-flex items-center">
            <div className="inline-flex items-center">
              <div className="w-3 h-3 p-3 mr-2 rounded-full bg-gradient-to-tr  from-indigo-400 to-blue-700"></div>
              <h2 className="block p-2 text-xl font-tweb font-extrabold tracking-widest transition duration-500 ease-in-out transform cursor-pointer lg:text-2xl lg:mr-8">
                {" "}
                Glasnik{" "}
              </h2>
            </div>
          </a>
          <ul className="flex items-center hidden space-x-10 lg:flex lg:mr-40">
            <li>
              <button className="font-semibold text-base text-gray-700 transition-colors duration-200 ">
                Conversation
              </button>
            </li>
            <li>
              <button className="font-semibold  text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                Contacts
              </button>
            </li>
            <li>
              <button className="font-semibold  text-gray-700 transition-colors duration-200 ">
                Setting
              </button>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="block h-10 w-10 rounded-full overflow-hidden focus:outline-none"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144
                    "
                    alt="avatar"
                  />
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
                    <a
                      href="#"
                      className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                    >
                      Settings
                    </a>
                    <div className="py-2">
                      <hr></hr>
                    </div>
                    <a
                      href="#"
                      className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center">
                      <div className="w-3 h-3 p-3 mr-2 rounded-full bg-gradient-to-tr  from-indigo-400 to-blue-700"></div>
                      <h2 className="block p-2 text-xl font-tweb font-extrabold tracking-widest transition duration-500 ease-in-out transform cursor-pointer lg:text-2xl lg:mr-8">
                        {" "}
                        Glasnik{" "}
                      </h2>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                          Conversation
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                          Contacts
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                        >
                          Setting
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomNav
