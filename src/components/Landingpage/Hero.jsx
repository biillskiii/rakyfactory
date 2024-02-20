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
      className="mt-28 mx-auto flex flex-col text-center items-center justify-center gap-y-5"
    >
      <p className="text-xl font-semibold text-[#7A5AE1]">
        INDONESIA'S PAUSEABLE SUBSCRIPTION SERVICE PIONEER
      </p>
      <h1 className="font-semibold text-[48px]">
        Menghubungkan Mitra Kreatif yang siap melayani kebutuhan konten digital
        Anda
      </h1>
      <p className="text-[22px] font-normal text-[#707070]">
        Layanan berlangganan yang dapat dijeda sesuai kebutuhan. <br /> Tanpa
        repot rekrutmen dan kelola tim. Pasti sesuai kebutuhan dan menghemat
        waktu Anda.
      </p>
      <div className="flex justify-center items-center gap-x-5">
        <a
          href="#product  "
          className="py-4 px-8 mb-2 bg-P1 rounded-xl text-base text-white font-semibold before:ease relative overflow-hidden border border-P2  transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-60"
        >
          Pelajari solusi kami
        </a>
        <a
          href="#program"
          className="py-4 px-8 mb-2 outline outline-2 outline-P1 rounded-xl text-base text-P1 font-semibold before:ease relative overflow-hidden border border-P1 transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-P1 before:opacity-10 before:duration-700 hover:before:-translate-x-60"
        >
          Gabung jadi Mitra
        </a>
      </div>
    </div>
  );
};

export default Hero;
