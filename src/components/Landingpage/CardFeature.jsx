import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CardFeature = ({
  icon,
  title,
  desc,
  detail,
  detaildesc,
  onClick,
  disabled,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-white w-[280px] lg:w-[488px]  border h-auto lg:h-[440px] px-2  rounded-[30px] shadow-md shadow-slate-200 flex flex-col">
      <div className="px-5 py-10 lg:py-5 text-start flex-grow">
        <div className="rounded-full mt-0 lg:mt-10 bg-P1 flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-xl text-white">
          {icon}
        </div>
        <div className="mt-8 lg:mt-8">
          <p className="font-bold mt-3 text-xl lg:text-3xl">{title}</p>
          <p className="text-T1 mt-3 text-xs lg:text-base font-medium">
            {desc}
          </p>
        </div>
      </div>
      <div className="">
        {detail ? (
          <a
            className={`px-5 pb-10 my-0 lg:my-10 font-semibold text-P1 text-xs lg:text-base flex justify-start items-center gap-x-2 cursor-pointer ${
              disabled ? "text-gray-400 disabled" : ""
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={onClick}
          >
            {detaildesc}{" "}
            <FaArrowRightLong
              className={`${isHovered && !disabled ? "animate-bounce" : ""} ${
                disabled ? "animate-none" : ""
              }`}
              style={{ transition: "0.5s" }}
            />
            <style jsx>{`
              @keyframes bounce {
                0%,
                100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(3px);
                }
              }
              .animate-bounce {
                animation: bounce 0.5s infinite;
              }
            `}</style>
          </a>
        ) : (
          <p className="mt-10 font-semibold text-base">Coming Soon</p>
        )}
      </div>
    </div>
  );
};

export default CardFeature;
