import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";

import Aos from "aos";
const Hero = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div
      id="hero"
      className="mt-16 lg:mt-28 mx-auto flex flex-col text-center items-center justify-center gap-y-5"
    >
      <p className="text-[10px] lg:text-xl font-semibold text-[#7A5AE1]">
        INDONESIA'S PAUSEABLE SUBSCRIPTION SERVICE PIONEER
      </p>
      <h1 className="font-semibold text-[24px] lg:text-[48px]">
        Menghubungkan Mitra Kreatif yang siap melayani kebutuhan konten digital
        Anda
      </h1>
      <p className="lg:px-28 leading-6 lg:leading-0 text-xs lg:text-xl mb-5 tracking-tight font-normal text-[#707070]">
        Layanan subscription yang dapat dijeda sesuai kebutuhan. Tanpa repot
        rekrutmen dan kelola tim. Pasti sesuai kebutuhan dan menghemat waktu
        Anda.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5">
        <a
          href="https://trello.com/b/NLtlE9WZ/dashboard"
          target="_blank"
          className="py-4 px-[145px] lg:px-8 mb-2  bg-P1 rounded-xl text-xs lg:text-base text-white font-semibold before:ease relative overflow-hidden border border-P2  transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-60"
        >
          Get Product
        </a>
        <a
          href="#program"
          className="py-4 px-[125px] lg:px-8 mb-2 outline outline-2 outline-P1 rounded-xl text-xs lg:text-base text-P1 font-semibold before:ease relative overflow-hidden border border-P1 transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-P1 before:opacity-10 before:duration-700 hover:before:-translate-x-60"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("program")
              .scrollIntoView({ behavior: "smooth" });
            closeNavbar();
          }}
        >
          Gabung jadi Mitra
        </a>
      </div>
    </div>
  );
};

export default Hero;
