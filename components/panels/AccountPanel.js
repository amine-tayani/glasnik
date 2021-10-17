import React from "react";
import AccountCard from "../user/AccountCard";

const AccountPanel = ({ user }) => (
  <>
    <h1 className="text-2xl text-white font-barlow tracking-wide font-semibold">
      My Account
    </h1>
    <AccountCard user={user} />
    <h1 className="text-xl text-white font-barlow font-semibold tracking-wide mt-8 mb-4">
      Password and Authentication
    </h1>
    <div className="font-inter">
      <button
        type="submit"
        className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
      >
        Change Password
      </button>
      <h1 className="text-xl text-white font-barlow font-semibold tracking-wide mt-8 mb-2">
        Account Deletion
      </h1>
      <p className=" text-gray-300 text-xs mb-4">
        Deleting your account means it is gone forever and you cannot recover it
        again.
      </p>

      <button
        type="submit"
        className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out text-gray-200 hover:text-white border-2 border-red-500 hover:bg-red-500  focus:outline-none "
      >
        Delete Account
      </button>
    </div>
  </>
);

export default AccountPanel;
