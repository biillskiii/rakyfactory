import React from "react";

const Upcoming = ({ label }) => {
  return (
    <div className="flex justify-center items-center w-11 h-3 bg-P1 rounded-sm text-P2 text-[7px] ">
      <p className="font-bold uppercase p-1 ">{label}</p>
    </div>
  );
};

export default Upcoming;
