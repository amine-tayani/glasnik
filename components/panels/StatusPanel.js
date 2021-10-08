import React from "react";

const StatusPanel = () => (
  <>
    <h1 className="text-xl text-white font-roboto font-semibold my-8">
      User status
    </h1>
    <div className="font-inter">
      <button
        type="submit"
        className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
      >
        Change Password
      </button>
      <h1 className="text-xl text-white font-roboto font-semibold mt-8 mb-2">
        Account Deletion
      </h1>
      <p className=" text-gray-300 text-xs mb-6">
        Deleting your account means it is gone forever and you cannot recover it
        again.
      </p>

      <button
        type="submit"
        className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-red-500 hover:bg-red-600 text-white focus:outline-none "
      >
        Delete Account
      </button>
    </div>
  </>
);

export default StatusPanel;
