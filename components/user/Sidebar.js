import { useRouter } from "next/router";
import React, { useContext } from "react";
import Cookie from "universal-cookie";
import { Tab } from "@headlessui/react";
import {
  AdjustmentsIcon,
  BellIcon,
  LockClosedIcon,
  LogoutIcon,
  PuzzleIcon,
  StatusOnlineIcon,
  TranslateIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { AuthContext } from "../../context/userContext";
import AccountPanel from "../panels/AccountPanel";
import UserProfilePanel from "../panels/UserProfilePanel";
import UserPrivacyPanel from "../panels/UserPrivacyPanel";
import AppearancePanel from "../panels/AppearancePanel";
import NotificationsPanel from "../panels/NotificationsPanel";
import LanguagePanel from "../panels/LanguagePanel";
import StatusPanel from "../panels/StatusPanel";

const Sidebar = ({ data }) => {
  const settings = [
    {
      id: 1,
      name: "My account",
      icon: <PuzzleIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 2,
      name: "User profile",
      icon: <UserIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 3,
      name: "User Privacy",
      icon: <LockClosedIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 4,
      name: "Appearance",
      icon: <AdjustmentsIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 5,
      name: "Notifications",
      icon: <BellIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 6,
      name: "Language",
      icon: <TranslateIcon className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 7,
      name: "Status",
      icon: <StatusOnlineIcon className="h-5 w-5 text-gray-400" />,
    },
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
    <div className=" bg-[#2F3136] w-1/3 h-screen">
      <div className="ml-80 mt-16 font-inter">
        <div className=" text-gray-300 text-sm">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="flex flex-col space-y-2">
              {settings.map((s) => (
                <Tab key={s.id} className="focus:outline-none text-left w-40">
                  {({ selected }) => (
                    <div
                      className={`flex items-center space-x-2 py-2 pl-4 hover:bg-[#393C43] hover:text-white cursor-pointer rounded-md ${
                        selected ? "bg-[#3c3e46] text-white" : ""
                      }`}
                    >
                      <p>{s.icon}</p>
                      <span>{s.name}</span>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="absolute top-0 right-0 mr-60 mt-10 w-400">
              <Tab.Panel>
                <AccountPanel user={data} />
              </Tab.Panel>
              <Tab.Panel>
                <UserProfilePanel />
              </Tab.Panel>
              <Tab.Panel>
                <UserPrivacyPanel />
              </Tab.Panel>
              <Tab.Panel>
                <AppearancePanel />
              </Tab.Panel>
              <Tab.Panel>
                <NotificationsPanel />
              </Tab.Panel>
              <Tab.Panel>
                <LanguagePanel />
              </Tab.Panel>
              <Tab.Panel>
                <StatusPanel />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="w-40 text-sm mt-8  pl-4 py-2 text-gray-300 hover:text-white hover:bg-[#393C43] transition-all ease-in-out duration-300 cursor-pointer rounded-lg">
          <button
            className="focus:outline-none flex items-center space-x-2"
            onClick={logout}
          >
            <LogoutIcon className="h-5 w-6 text-gray-400" />

            <span> Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
