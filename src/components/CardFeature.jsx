import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const CardFeature = ({ icon, title, desc, detail, detaildesc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="bg-white w-[274px] lg:w-[323px] h-[290px] lg:h-[396px]  border rounded-[50px] shadow-md shadow-slate-200 flex flex-col justify-between">
        <div className="px-10 text-start">
          <div className="rounded-full mt-10 bg-P1 flex justify-center items-center w-10 h-10 lg:w-16 lg:h-16 text-xl text-white">
            {icon}
          </div>
          <div className="mt-5 lg:mt-10 flex flex-col">
            <p className="font-bold mt-3 text-xl lg:text-3xl">{title}</p>
            <p className="text-T1 mt-3 mb-5 text-xs lg:font-medium">{desc}</p>
          </div>
          <div className="my-1 lg:my-5">
            {detail ? (
              <p
                className=" font-semibold text-P1 flex justify-start text-xs lg:text-xl items-center gap-x-2 cursor-pointer"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {" "}
                {detaildesc}{" "}
                <FaArrowRightLong
                  className={isHovered ? "animate-bounce" : ""}
                  style={{ transition: "0.5s" }}
                />
                <style jsx>{`
                  @keyframes bounce {
                    0%,
                    100% {
                      transform: translateX(0);
                    }
                    50% {
                      transform: translateX(10px);
                    }
                  }
                  .animate-bounce {
                    animation: bounce 0.5s;
                  }
                `}</style>
              </p>
            ) : (
              <p className="font-semibold text-xs lg:text-base">Coming Soon</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeature;
