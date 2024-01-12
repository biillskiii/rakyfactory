import React from "react";

const CardFeature = ({ icon, title, desc }) => {
  return (
    <>
      <div className="bg-white w-11/12 border-2 border-opacity-20 rounded-lg flex justify-start items-center ">
        <div className="p-5 text-start">
          <div className="rounded-xl bg-[#EFEAFF] flex justify-center items-center w-10 h-10 text-xl text-P2">{icon}</div>
          <p className="font-semibold mt-3 text-lg">{title}</p>
          <p className="text-T1 mt-3 text-sm font-medium">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default CardFeature;
