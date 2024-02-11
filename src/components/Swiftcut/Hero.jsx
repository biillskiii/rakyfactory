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
      className="w-[1093px] my-44 mx-auto flex flex-col text-center items-center justify-center gap-y-7 "
    >
      <p className="text-2xl font-semibold text-[#7A5AE1]">
        SUBSCRIPTION SERVICE MODEL
      </p>
      <h1 className="font-semibold text-5xl">
        Dapatkan video editor sesuai style konten TikTok Anda. Tanpa ribet
        hiring tim.
      </h1>
      <p className="text-2xl font-normal text-[#707070]">
        Langganan sekarang dan nikmati request edit konten sebanyak mungkin,
        bebas revisi sepuasnya, bahkan bisa jeda langganan kapan pun jika tidak
        diperlukan.
      </p>
      <div className="flex flex-col justify-center items-center gap-y-5">
        <button className="py-4 px-8 mb-2 bg-[#7A5AE1] rounded-xl text-xl text-white">
          Daftar sekarang, gratis!
        </button>
        <p className="text-base text-[#707070]">
          Cukup isi formulir pendaftaran. Tim kami akan segera hubungi Anda.
        </p>
      </div>
      <FaArrowDown size={30} className="text-P1 mt-24 animate-bounce" />
    </div>
  );
};

export default Hero;
