import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { useMutation } from "@apollo/client";
import { REMOVE_FRIEND } from "../../graphql/mutations/friend";

const UserAvatar = ({ infos }) => {
  const [removeFriend, { error }] = useMutation(REMOVE_FRIEND);

  const removeFriendFromList = async () => {
    try {
      await removeFriend({
        variables: {
          friendId: infos.id,
        },
      });
      if (error) {
        console.log(error.networkError.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex items-center justify-between px-2 py-1 group hover:bg-[#393C43] transition-all ease-in-out duration-300 cursor-pointer rounded-lg ">
      <div className="flex items-center space-x-4">
        <div className="relative flex-shrink-0">
          <div className="bg-[#404349] rounded-full flex justify-center items-center w-8 h-8">
            <img
              className="w-5 h-5"
              src={
                infos.photoUrl
                  ? infos.photoUrl
                  : `https://avatars.dicebear.com/api/identicon/{${infos.id}}.svg`
              }
              alt={infos?.username}
            />
          </div>
        </div>
        <h1 className="text-gray-400 text-sm group-hover:text-white ">
          {infos.username}
        </h1>
      </div>
      <button
        className="outline-none focus:outline-none"
        onClick={removeFriendFromList}
        type="submit"
      >
        <XIcon className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
      </button>
    </div>
  );
};

export default UserAvatar;
