/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMutation } from "@apollo/client";
import UPLOAD_AVATAR from "../../graphql/mutations/file";
import ImageCropper from "../../utils/imageCropper";

const PictureCropModal = ({ open, setOpen, image }) => {
  const [uploadAvatar, { data, loading, error }] = useMutation(UPLOAD_AVATAR);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const onClickUpload = () => {
    if (croppedImage) {
      uploadAvatar({
        variables: {
          avatar: croppedImage,
        },
      });
    }
  };
  if (error) {
    console.log(error.networkError?.result);
  }
  if (data) {
    console.log(data);
  }
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        className="fixed z-max text-white bg-[#36393F] w-300 h-[450px] left-[450px] top-32 right-0 font-inter overflow-y-auto overflow-x-hidden rounded-xl"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 opc" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="App">
              <div className="crop-container">
                <div className="py-4 w-full bg-[#36393F] relative z-max">
                  <h1 className="text-white text-center text-lg font-medium">
                    Update Profile Picture
                  </h1>
                </div>
                <ImageCropper
                  imageToCrop={image}
                  onImageCropped={(croppedImage) =>
                    setCroppedImage(croppedImage)
                  }
                />
                <div className="controls">
                  <button
                    onClick={onClickUpload}
                    className="mx-4 py-2 px-6 bg-blue-600 text-white rounded-xl font-medium font-inter"
                  >
                    {loading ? "loading..." : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
export default PictureCropModal;
