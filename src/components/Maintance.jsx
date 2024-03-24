import React from "react";
import { GiAutoRepair } from "react-icons/gi";

const Maintance = () => {
  return (
    <div className="flex flex-col my-60 justify-center items-center">
      <GiAutoRepair className="text-P1 animate-pulse" size={180} />
      <p className="text-3xl lg:text-5xl mt-10 lg:mt-0 text-P1 font-semibold">
        Maintanance Time
      </p>
    </div>
  );
};

export default Maintance;
