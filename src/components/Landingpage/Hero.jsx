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
      <p className="text-xl font-semibold text-[#7A5AE1]">
        INDONESIA'S PAUSEABLE SUBSCRIPTION SERVICE PIONEER
      </p>
      <h1 className="font-semibold text-[44px]">
        Menghubungkan Mitra Kreatif yang siap melayani kebutuhan konten digital
        Anda
      </h1>
      <p className="text-xl font-normal text-[#707070]">
        Layanan berlangganan yang dapat dijeda sesuai kebutuhan. Tanpa repot
        rekrutmen dan kelola tim. Pasti sesuai kebutuhan dan menghemat waktu
        Anda.
      </p>
      <div className="flex justify-center items-center gap-x-5">
        <a
          href="#gabungjadiaffiliate"
          className="py-4 px-8 mb-2 bg-P1 rounded-xl text-base text-white font-semibold"
        >
          Pelajari solusi kami
        </a>
        <a
          href="#gabungjadiaffiliate"
          className="py-4 px-8 mb-2 outline outline-P1 rounded-xl text-base text-P1 font-semibold"
        >
          Gabung jadi Mitra
        </a>
      </div>
    </div>
  );
};

export default Hero;
