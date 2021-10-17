import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { ADD_FRIEND } from "../../graphql/mutations/friend";
import Spinner from "../shared/Spinner";

const AddFriendModal = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const [addFriend, { loading, error }] = useMutation(ADD_FRIEND);

  const addFriendToList = async (data) => {
    try {
      await addFriend({
        variables: {
          friendId: data.friendId,
        },
      });
      if (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-between mb-2">
        <h1 className="text-gray-400 text-sm font-semibold font-sand uppercase">
          Your Friends
        </h1>
        <Popover className="relative">
          <Popover.Button className="outline-none focus:outline-none">
            <div data-tooltip="Add friend" data-flow="bottom">
              <PlusIcon className="h-5 w-5 text-gray-400 hover:text-gray-100 cursor-pointer" />
            </div>
          </Popover.Button>
          <Transition
            enter="transition duration-300 ease-in-out"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition duration-100 ease-in-out"
            leaveFrom="transform  opacity-100"
            leaveTo="transform  opacity-0"
          >
            <Popover.Panel className="absolute left-12 top-0 z-10 font-inter">
              <div className="w-96 bg-[#2F3136] p-8 shadow-xl rounded-lg">
                <h1 className="text-white text-xl font-semibold mb-4">
                  Add a friend
                </h1>

                {loading ? (
                  <Spinner />
                ) : (
                  <form onSubmit={handleSubmit(addFriendToList)}>
                    <div className="flex items-center space-x-2">
                      <input
                        {...register("friendId", {
                          required:
                            "*Friend ID is required. Please fill in field",
                        })}
                        onFocus={(e) => {
                          e.target.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.target.placeholder = "Paste the id here...";
                        }}
                        name="friendId"
                        type="text"
                        className={`bg-[#36393F] rounded-lg text-sm appearance-none w-4/5 px-4 py-3 leading-tight focus:outline-none text-gray-400 ${
                          errors.friendId ? "ring-2 ring-red-600" : ""
                        }`}
                        placeholder="Paste the id here..."
                      />
                      <button
                        type="submit"
                        className="w-1/5 py-2 rounded-lg text-sm transform transition duration-500 ease-in-out bg-[#0071FF] text-white font-medium focus:outline-none "
                      >
                        Add
                      </button>
                    </div>
                  </form>
                )}
                {error && (
                  <p className="text-xs text-red-500 mt-2">*{error.message}</p>
                )}
                {errors.friendId && (
                  <p className="text-xs text-red-500 mt-2">
                    {errors.friendId.message}
                  </p>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </>
  );
};

export default AddFriendModal;
