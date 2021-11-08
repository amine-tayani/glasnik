import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid";

const SwitchAccess = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-blue-600" : "bg-[#36393F]"}
          relative inline-flex flex-shrink-0 h-[24px] w-[48px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none flex justify-center items-center h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition-all ease-in-out`}
        >
          {enabled ? (
            <LockClosedIcon className="text-blue-600 h-3 w-3" />
          ) : (
            <LockOpenIcon className="text-[#36393F] h-3 w-3" />
          )}
        </span>
      </Switch>
    </div>
  );
};

export default SwitchAccess;
