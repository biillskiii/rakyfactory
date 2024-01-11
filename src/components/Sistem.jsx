import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Video from "../assets/panduan-layanann.mp4";
const Sistem = () => {
  return (
    <>
      {" "}
      <div
        id="sistem"
        data-aos="fade-up"
        className="bg-[#FCFCFC] py-10 flex flex-col justify-center items-center mt-44"
      >
        <div className="relative">
          <h2 className="w-8/12 mx-auto text-center font-bold text-lg sm:text-3xl mb-4">
            Penggunaan <span className="text-P2">jasa video editing</span>{" "}
            berbasis langganan di
            <span className="text-P2"> Rakyfactory Swiftcut</span>
          </h2>
        </div>
        <a
          href="https://trello.com/b/c9RKe2pl/beta-version-prototype"
          target="_blank"
          className="flex justify-center items-center text-sm  gap-x-1 font-medium"
        >
          Pelajari selengkapnya{" "}
          <IoMdArrowForward size={16} className="font-bold" />{" "}
        </a>

        <iframe
          width={1089}
          height={613}
          className="mt-14 shadow-2xl rounded-2xl"
          style={
            window.matchMedia("(max-width: 640px)").matches
              ? { width: 354, height: 199 }
              : {}
          }
          src="https://www.youtube.com/embed/HMXziSx38YE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Sistem;
