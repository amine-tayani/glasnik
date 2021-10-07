import { useRouter } from "next/router";
import React, { useContext } from "react";
import Cookie from "universal-cookie";
import { Tab } from "@headlessui/react";
import { AuthContext } from "../../context/userContext";

const Sidebar = () => {
  const settings = [
    { id: 1, name: "My account" },
    { id: 2, name: "User profile" },
    { id: 3, name: "User Privacy" },
    { id: 4, name: "Appearance" },
    { id: 5, name: "Notifications" },
    { id: 6, name: "Language" },
    { id: 7, name: "Status" },
  ];
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
    <div className="relative bg-[#2F3136] w-1/3 h-screen">
      <div className=" absolute right-0 mx-10 mt-16 font-inter">
        <div className=" text-gray-300 text-sm">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="flex flex-col space-y-2">
              {settings.map((s) => (
                <Tab key={s.id} className="focus:outline-none text-left w-40">
                  {({ selected }) => (
                    <div
                      className={`py-2 pl-4 hover:bg-[#393C43] hover:text-white cursor-pointer rounded-md ${
                        selected ? "bg-[#3c3e46] text-white" : ""
                      }`}
                    >
                      {s.name}
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>

        <div className=" text-sm mt-8 text-red-500 pl-4 py-2 hover:bg-[#393C43] hover:text-red-500 transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
          <button className="focus:outline-none" onClick={logout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
