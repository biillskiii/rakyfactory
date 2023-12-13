import React from "react";

const Fiture = ({image, title, subtitle}) => {
  return (
    <>
      <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
        <div className="flex justify-center items-center  gap-x-10">
          <img src={image} alt="subs icon" width={100} />
          <div className="flex flex-col text-start gap-y-3">
            <p className="font-semibold text-[24px]">{title}</p>
            <p className="w-60 text-xs text-T1">
             {subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fiture;
