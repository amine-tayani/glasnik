import { useMutation } from "@apollo/client";
import React, { useCallback, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { UPLOAD_AVATAR } from "../../graphql/mutations/file";
import GET_CURRENT_USER from "../../graphql/queries/currentUser";

const AccountCard = ({ user }) => {
  const [uploadAvatar, { error }] = useMutation(UPLOAD_AVATAR, {
    onCompleted: (data) => console.log(data),
    refetchQueries: [{ query: GET_CURRENT_USER, pollInterval: 200 }],
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    uploadAvatar({ variables: { avatar: file } });
  };

  if (error) {
    console.log(error?.networkError?.result);
  }

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
              className="cursor-pointer relative flex-shrink-0 text-sm font-barlow font-medium"
            >
              <span className="absolute bottom-1 right-1 z-50 w-4 h-4 ring-0 ring-transparent ring-offset-8 ring-offset-[#2F3136] bg-green-600 rounded-full" />
              <div className="avatar placeholder">
                <div className="bg-[#393C43] text-neutral-content rounded-full p-3 w-20 h-20">
                  <img
                    className="rounded-full"
                    src={
                      user.photoUrl
                        ? user.photoUrl
                        : "https://avatars.dicebear.com/api/bottts/avatar.svg"
                    }
                    alt={user.username}
                  />
                </div>
              </div>
            </div>
          </CopyToClipboard>
          <div>
            <p className="text-xl text-gray-100 font-semibold mb-1">
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
            className=" px-4 py-2 rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
          >
            Edit User Profile
          </button>
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
