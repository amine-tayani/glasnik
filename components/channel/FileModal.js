import React, { useCallback, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { PhotographIcon, UploadIcon } from "@heroicons/react/solid";

const FileModal = () => {
  const fileRef = useRef(null);

  const openFileUploadBox = useCallback(() => {
    fileRef.current.click();
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button className="outline-none focus:outline-none">
        <PhotographIcon className="h-6 w-6 text-gray-400 hover:text-gray-100 cursor-pointer" />
      </Popover.Button>
      <Transition
        enter="transition duration-300 ease-in-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-100 ease-in-out"
        leaveFrom="transform  opacity-100"
        leaveTo="transform  opacity-0"
      >
        <Popover.Panel className="fixed right-96 bottom-20 font-inter">
          <div className="w-36 bg-[#2F3136] px-4 shadow-xl rounded-lg">
            <input hidden name="file" type="file" ref={fileRef} />
            <button
              onClick={openFileUploadBox}
              className="focus:outline-none flex items-center space-x-2 w-full text-white py-3 "
            >
              <UploadIcon className="h-5 w-5 text-gray-300" />
              <span className="text-sm text-gray-300"> Upload a file</span>
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default FileModal;
