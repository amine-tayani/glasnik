import { useRouter } from "next/router";
import React, { useContext } from "react";
import Cookie from "universal-cookie";
import { AuthContext } from "../../context/userContext";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const cookies = new Cookie();
  const router = useRouter();

  const logout = () => {
    cookies.remove("auth-token", { path: "/" });
    dispatch({
      type: "LOGOUT",
    });
    router.push("/login");
  };
  return (
    <div className="bg-[#2F3136] w-1/3 h-screen">
      <div className=" float-right mr-16 mt-16 font-inter">
        <ul className="flex flex-col space-y-1 text-gray-300 text-sm w-40">
          <li className="mb-2 ml-4">
            <p className="uppercase font-bold text-gray-400">user settings</p>
          </li>
          <li className="py-2 pl-4 hover:bg-[#393C43] hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
            <a href="#account">My account</a>
          </li>
          <li className="py-2 pl-4 hover:bg-[#393C43] hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
            <a href="#userprofile">User Profile</a>
          </li>
          <li className="py-2 pl-4 hover:bg-[#393C43] hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
            <a href="#privacy">Privacy & Safety</a>
          </li>
        </ul>
        <ul className="flex flex-col space-y-1 text-gray-300 text-sm mt-8 w-40">
          <li className="mb-2 ml-4">
            <p className="uppercase  font-bold text-gray-400">app settings</p>
          </li>
          <li className="py-2 pl-4 hover:bg-[#393C43] hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
            <a href="#apperance">Appearance</a>
          </li>
          <li className="py-2 pl-4 hover:bg-[#393C43] hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
            <a href="#notifications">Notifications</a>
          </li>
          <li className="py-2 pl-4 hover:bg-[#393C43] hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
            <a href="#language">Language</a>
          </li>
          <li className="py-2 pl-4 hover:bg-[#393C43] hover:text-white transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
            <a href="#status">Online Status</a>
          </li>
        </ul>
        <ul className=" text-sm mt-8 text-red-500 pl-4 py-2 hover:bg-[#393C43] hover:text-red-500 transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
          <button className="focus:outline-none" onClick={logout}>
            Sign Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
