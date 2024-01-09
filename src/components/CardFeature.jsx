import React from "react";

const CardFeature = ({ icon, title, desc }) => {
  return (
    <>
      <div className="bg-white w-11/12 border-2 rounded-md flex justify-start items-center ">
        <div className="p-5 text-start">
          <div className="rounded-xl bg-[#EFEAFF] w-10 h-10">{icon}</div>
          <p className="font-semibold mt-3 text-md">{title}</p>
          <p className="text-T1 mt-5 text-sm font-medium">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default CardFeature;
