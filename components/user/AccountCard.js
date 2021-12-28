import React, { useCallback, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PictureCropModal from "./PictureCrop";

const AccountCard = ({ user }) => {
  const [openDialog, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImgSrc(imageDataUrl);
      setIsOpen(true);
    }
  };

  const fileRef = useRef(null);

  const openFileUploadBox = useCallback(() => {
    fileRef.current.click();
  }, []);

  return (
    <div className="bg-[#2F3136] font-inter text-white p-6 mt-8 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <CopyToClipboard text={user.id}>
            <div
              data-tooltip="Copy user id"
              data-flow="left"
              className="cursor-pointer text-sm font-semibold font-barlow relative flex-shrink-0 "
            >
              <span className="absolute bottom-1 right-1 z-50 w-4 h-4 ring-0 ring-transparent ring-offset-8 ring-offset-[#2F3136] bg-green-600 rounded-full" />
              <div className="avatar placeholder">
                <div className="bg-[#393C43] text-neutral-content rounded-full p-3 w-20 h-20">
                  <img
                    className="rounded-full object-cover"
                    src={
                      user.photoUrl
                        ? user.photoUrl
                        : `https://avatars.dicebear.com/api/identicon/{${user?.id}}.svg`
                    }
                    alt={user.username}
                  />
                </div>
              </div>
            </div>
          </CopyToClipboard>
          <div>
            <p className="text-xl text-gray-100 font-medium mb-1">
              {user.username}
            </p>
          </div>
        </div>
        <div>
          <input
            onChange={handleFileChange}
            hidden
            name="file"
            type="file"
            ref={fileRef}
          />
          <button
            onClick={openFileUploadBox}
            type="submit"
            className="flex space-x-2 justify-center px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
          >
            Change Picture
          </button>
          {openDialog && (
            <PictureCropModal
              image={imgSrc}
              open={openDialog}
              setOpen={setIsOpen}
            />
          )}
        </div>
      </div>
      <div className="bg-[#36393F] p-6 mt-4 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-gray-400 text-xs uppercase font-medium">
              username
            </p>
            <p className="text-gray-200 text-sm">{user.username}</p>
          </div>
          <div>
            <button
              type="submit"
              className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-gray-600 hover:bg-gray-500 text-white focus:outline-none "
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="flex flex-col">
            <p className="text-gray-400 text-xs uppercase font-medium">email</p>
            <p className="text-gray-200 text-sm">{user.email}</p>
          </div>
          <div>
            <button
              type="submit"
              className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-gray-600 hover:bg-gray-500 text-white focus:outline-none "
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
