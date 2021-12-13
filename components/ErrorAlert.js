import { XIcon } from "@heroicons/react/outline";
import React from "react";

const ErrorAlert = ({ message }) => (
  <div className="py-4 bg my-2 px-8 bg-[#272D36] rounded-lg flex space-x-4">
    <div className="w-8 h-8 rounded-full items-center bg-red-600 flex justify-center outline-none">
      <XIcon className="text-[#272D36] w-5 h-5 " />
    </div>
    <p className=" font-medium text-gray-300 leading-8">{message}</p>
  </div>
);

export default ErrorAlert;
