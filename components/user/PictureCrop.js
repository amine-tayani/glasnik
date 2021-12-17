/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Fragment, useCallback, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Cropper from "react-easy-crop";
import { ZoomInIcon, ZoomOutIcon } from "@heroicons/react/outline";
import { useMutation } from "@apollo/client";
import getCroppedImg from "../../utils/getCroppedImage";
import UPLOAD_AVATAR from "../../graphql/mutations/file";
import Loader from "../shared/Loader";

const PictureCropModal = ({ open, setOpen, image }) => {
  const [{ loading }] = useMutation(UPLOAD_AVATAR);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const uploadImage = useCallback(async () => {
    const img = await getCroppedImg(image, croppedAreaPixels);
    console.log(img);
    setOpen(false);
  }, [croppedAreaPixels]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        className="fixed z-max text-white bg-[#36393F] w-300 h-100 left-[450px] top-32 right-0 font-inter overflow-y-auto overflow-x-hidden rounded-xl"
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
                  <h1 className="text-white text-center text-lg font-semibold">
                    Update Profile Picture
                  </h1>
                </div>
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  cropShape="round"
                  showGrid={false}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>

              <div className="controls">
                <div className="flex space-x-4 ml-8 items-center">
                  <ZoomOutIcon className="h-6 w-6 text-gray-300" />
                  <input
                    className="mx-8 slider w-full"
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e) => setZoom(e.target.value)}
                  />
                  <ZoomInIcon className="h-6 w-6 text-gray-300" />
                </div>
                <div className="flex space-x-2 mr-6">
                  <button
                    onClick={() => {
                      setOpen(false);
                    }}
                    type="submit"
                    className=" px-4 py-[6px] rounded-lg text-sm transition duration-400 ease-in-out bg-gray-600 hover:bg-gray-500 text-white focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={uploadImage}
                    type="submit"
                    className=" px-4 py-[6px] rounded-lg text-sm transition duration-400 ease-in-out bg-blue-600 hover:bg-blue-700 text-white focus:outline-none "
                  >
                    {loading ? <Loader /> : "Save"}
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
