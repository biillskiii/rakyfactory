import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-P1 rounded-[45px] w-[353px] lg:w-[1009px] h-[334px] lg:h-[281px] flex flex-col lg:flex-row lg:justify-center items-center my-44 mx-auto py-16 lg:py-auto space-y-10"
      data-aos="fade-up"
    >
      <div className="w-[320px] lg:w-[500px] text-center lg:text-start space-y-5  text-white">
        <h1 className="text-xl lg:text-[32px] font-semibold">
          Punya pertanyaan untuk kami?
        </h1>
        <p className="w-[308px] lg:w-[483px] text-xs lg:text-base">
          Diskon 10% selamanya, khusus untuk kreator dan brand jika apply kode
          referral! Belum punya kode? Hubungi kami sekarang.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5 lg:ml-14">
        <button className="py-3 lg:py-4 px-16 lg:px-8 mb-2 bg-white rounded-xl text-xs lg:text-sm text-P1 font-semibold before:ease relative overflow-hidden border border-P1 hover:shadow-P1 transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-P1 before:opacity-10 before:duration-700 hover:before:-translate-x-60">
          Hubungi kami
        </button>
        <button className="py-3 lg:py-4 px-[70px] lg:px-8 mb-2 outline outline-2 outline-white rounded-xl text-xs lg:text-sm text-white font-semibold before:ease relative overflow-hidden border border-white hover:shadow-P1 transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-60">
          Lihat FAQ
        </button>
      </div>
    </div>
  );
};

export default Contact;
