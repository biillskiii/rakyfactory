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
      className=" mt-28 mx-auto flex flex-col text-center items-center justify-center gap-y-7 "
    >
      <p className="text-xl font-semibold text-[#7A5AE1]">
        SUBSCRIPTION SERVICE MODEL
      </p>
      <h1 className="font-semibold text-[48px]">
        Dapatkan video editor sesuai style konten TikTok Anda. Tanpa ribet
        hiring tim.
      </h1>
      <p className="text-xl mb-2 tracking-tight font-normal text-[#707070]">
        Langganan sekarang dan nikmati request edit konten sebanyak mungkin,
        bebas revisi sepuasnya, bahkan bisa jeda langganan kapan pun jika tidak
        diperlukan.
      </p>
      <div className="flex flex-col justify-center items-center">
        <button className="py-4 px-8 mb-2 bg-P1 rounded-xl text-base text-white font-semibold before:ease relative overflow-hidden border border-P2  transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-72">
          Daftar sekarang, gratis!
        </button>
        <p className="text-base mt-3 text-[#707070]">
          Cukup isi formulir pendaftaran. Tim kami akan segera hubungi Anda.
        </p>
      </div>
      <FaArrowDown size={30} className="text-P1 my-10    animate-bounce" />
    </div>
  );
};

export default Hero;
