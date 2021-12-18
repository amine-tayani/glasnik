/* eslint-disable arrow-body-style */
import React from "react";

const MembersPane = ({ cid, data, user, loading }) => {
  return (
    <div className="bg-[#2F3136] w-96 font-inter">
      {cid === "me" ? (
        <h1>this me</h1>
      ) : (
        <div className="flex flex-col space-y-4 text-gray-100 mt-8 mx-4">
          <h1 className=" text-xs text-gray-400 ">
            MEMBERS ~ {data?.community.users.length}
          </h1>
          {data?.community.users.map((member) =>
            loading ? (
              <div className="animate-pulse flex items-center space-x-4 mx-4">
                <div className="rounded-full bg-gray-500 h-10 w-10" />
                <div className="flex-1 ">
                  <div className="h-4 bg-gray-500 rounded-full w-1/2" />
                </div>
              </div>
            ) : (
              <div key={member.id} className="flex items-center space-x-2 mx-4">
                <img
                  className="h-10 w-10 object-cover rounded-full"
                  src={
                    member.photoUrl
                      ? member.photoUrl
                      : `https://avatars.dicebear.com/api/identicon/{${member.id}}.svg`
                  }
                  alt={member.username}
                />
                <p className=" text-sm mx-4">
                  {member.username === user?.username ? "me" : member.username}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default MembersPane;
