import React from "react";

const UserProfilePanel = () => (
  <>
    <div className="font-inter">
      <h1 className="text-xl text-white font-roboto font-semibold">
        User profile
      </h1>
      <div className="flex justify-between mt-8">
        <div className="flex flex-col space-y-4">
          <p className="uppercase font-medium text-xs">Picture</p>
          <button
            type="submit"
            className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
          >
            Change picture
          </button>
        </div>
        <div className="w-1/2 ">
          <p className="uppercase font-medium text-xs">Preview your picture</p>
          <div className=" bg-gray-300 h-48 mt-4">
            <h1>avatar</h1>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default UserProfilePanel;
