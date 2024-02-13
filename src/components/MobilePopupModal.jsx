import React from "react";
import Maintance from "../assets/maintance.png";
import { MdOutlineDevices } from "react-icons/md";
const MobilePopupModal = () => {
  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="bg-white w-96 flex flex-col gap-y-5 justify-center items-center p-10 rounded-md shadow-md">
        <MdOutlineDevices
          size={200}
          className="max-w-full h-auto sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
        />

        <p className="text-center text-xs lg:text-sm flex flex-col items-center justify-center">
          <span className="font-bold text-xl my-2 lg:text-2xl ">
            Maintenance
          </span>
          Versi mobile sedang dalam tahap pengembangan. Silakan akses website
          melalui perangkat desktop.
        </p>
      </div>
    </div>
  );
};

export default MobilePopupModal;
