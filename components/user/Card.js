import React from "react";

const Card = ({ user }) => (
  <div>
    <div className="w-400 mx-12 my-16">
      <h1 className="text-xl text-white font-roboto font-semibold">
        My Account
      </h1>
      <div className="bg-gray-400 w-full h-28 mt-4 rounded-t-xl" />

      <div className="bg-[#2F3136] font-inter text-white p-6">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://picsum.photos/id/1005/200/200"
              className="w-20 rounded-full relative bottom-10 ring-8  ring-[#2F3136]"
            />
            <div>
              <p className="text-xl text-gray-100 font-semibold mb-1">
                {user.username}
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
            >
              Edit User Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
