import React from "react";
import { FaLaptopCode } from "react-icons/fa6";

const MobilePopupModal = () => {
  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="bg-white w-96 flex flex-col gap-y-5 justify-center items-center p-10 rounded-md shadow-md">
        <div className="bg-[#F9F9F9] rounded-[15px] px-16 py-10">
          <FaLaptopCode
            size={200}
            className="max-w-full h-auto sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>

        <p className="text-center text-xs lg:text-sm flex flex-col items-center justify-center">
          <span className="font-bold text-xl my-2 lg:text-2xl ">
            Coming Soon
          </span>
          Page masih dalam tahap develop, mohon bersabar menunggu :)
        </p>
      </div>
    </div>
  );
};

export default MobilePopupModal;
