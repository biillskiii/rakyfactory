import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Video from "../assets/panduan-layanann.mp4"
const Sistem = () => {
  return (
    <>
      {" "}
      <div
        id="sistem"
        data-aos="fade-up"
        className="flex flex-col justify-center items-center mt-14"
      >
        <div className="relative">
          <p className="font-medium text-xl w-[764px] text-center relative z-10">
            <span className="bg-P1">Dengan berlangganan,</span> kamu bisa
            request konten sebanyak mungkin. Kalau lagi nggak butuh, kamu bisa
            jeda langganan kapan pun.
          </p>
        </div>

        <p className=" flex items-center gap-x-1 text-sm my-2 font-medium mt-5 ">
          Baru tersedia{" "}
          <span className="bg-P1 text-P2 text-xs px-1 border-2 border-P3 rounded-md font-semibold m">
            Beta Version
          </span>
          <a
            href="https://trello.com/b/c9RKe2pl/beta-version-prototype"
            target="_blank"
            className="flex items-center gap-x-1 text-P2 font-medium"
          >
            Pelajari selengkapnya{" "}
            <IoMdArrowForward size={16} className="text-P2 font-bold" />{" "}
          </a>
        </p>  
        <iframe src={Video} width={1089} height={613} className="mt-14 shadow-2xl rounded-2xl"/>
      </div>
    </>
  );
};

export default Sistem;
