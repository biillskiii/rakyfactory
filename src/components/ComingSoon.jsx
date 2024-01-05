import React from "react";
import Logo from "../assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
const ComingSoon = () => {
  return (
    <div className="w-full h-full">
      <div className="w-26 flex justify-center items-center px-3 py-2 bg-P1 rounded-md shadow-md">
        <img src={Logo} alt="logo" width={30} />
      </div>
      <div className="flex flex-col gap-y-3 justify-center items-center my-60 ">
        <p className="font-bold text-5xl text-P2 ">Coming Soon!!!</p>
        <p>Wait till we ready to publish!</p>
        <a
          href="https://instagram.com/rakyfactory"
          className="flex items-center gap-x-2 bg-P1 text-P2 font-semibold p-3 rounded-md shadow-md"
        >
          <RiInstagramFill size={20} />
          See my instagram account!
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
