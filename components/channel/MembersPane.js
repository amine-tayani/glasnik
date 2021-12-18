/* eslint-disable arrow-body-style */
import React from "react";

const MembersPane = ({ cid, data, user }) => {
  return (
    <div className="bg-[#2F3136] w-96 font-inter">
      {cid === "me" ? (
        <h1>this me</h1>
      ) : (
        <div className="flex flex-col space-y-4 text-gray-100 mt-8 mx-4">
          <h1 className=" text-xs text-gray-400 ">
            MEMBERS ~ {data?.community.users.length}
          </h1>
          {data?.community.users.map((member) => (
            <div key={member.id} className="flex items-center space-x-2 mx-4">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src={
                  member.photoUrl
                    ? member.photoUrl
                    : "https://avatars.dicebear.com/api/bottts/149.svg"
                }
                alt={member.username}
              />
              <p className=" text-sm mx-4">
                {member.username === user?.username ? "me" : member.username}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MembersPane;
