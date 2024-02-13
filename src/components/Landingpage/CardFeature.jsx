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
      <div className="bg-white w-[490px]  h-auto px-5  rounded-[50px] shadow-md shadow-slate-200  ">
        <div className="p-5 text-start">
          <div className="rounded-full mt-10 bg-P1 flex justify-center items-center w-20 h-20 text-xl text-white">
            {icon}
          </div>
          <div className="mt-14">
            <p className="font-bold mt-3 text-3xl">{title}</p>
            <p className="text-T1 mt-3 text-base font-medium">{desc}</p>
            <p className="">
              {detail ? (
                <p
                  className="my-10 font-semibold text-P1 flex justify-start items-center gap-x-2 cursor-pointer"
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
                        transform: translateX(3px);
                      }
                    }
                    .animate-bounce {
                      animation: bounce 0.5s infinite;
                    }
                  `}</style>
                </p>
              ) : (
                <p className="mt-10 font-semibold text-base">Coming Soon</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeature;
