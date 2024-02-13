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
      className="my-44 mx-auto flex flex-col text-center items-center justify-center gap-y-7 "
    >
      <p className="text-2xl font-semibold text-[#7A5AE1]">
        INDONESIA'S PAUSEABLE SUBSCRIPTION SERVICE PIONEER
      </p>
      <h1 className="font-semibold text-5xl">
        Menghubungkan Mitra Kreatif yang siap melayani kebutuhan konten digital
        Anda
      </h1>
      <p className="text-2xl font-normal text-[#707070]">
        Layanan berlangganan yang dapat dijeda sesuai kebutuhan. Tanpa repot
        rekrutmen dan kelola tim. Pasti sesuai kebutuhan dan menghemat waktu
        Anda.
      </p>
      <div className="flex justify-center items-center gap-x-5">
        <button className="py-4 px-8 mb-2 bg-P1 rounded-xl text-xl text-white">
          Pelajari solusi kami
        </button>
        <button className="py-4 px-8 mb-2 outline outline-P1 rounded-xl text-xl text-P1">
          Gabung jadi Mitra
        </button>
      </div>
    </div>
  );
};

export default Hero;
