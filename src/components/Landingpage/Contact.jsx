import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-P1 rounded-[45px] w-[1009px] h-[281px] flex justify items-center my-44 mx-auto py-40"
      data-aos="fade-up"
    >
      <div className="w-[500px] ml-14  text-white">
        <h1 className="text-[32px] font-semibold">
          Punya pertanyaan untuk kami?
        </h1>
        <p className="text-base">
          Diskon 10% selamanya, khusus untuk kreator dan brand jika apply kode
          referral! Belum punya kode? Hubungi kami sekarang.
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-5 ml-14">
        <button className="py-4 px-8 mb-2 bg-white rounded-xl text-sm text-P1 font-semibold before:ease relative overflow-hidden border border-P1 hover:shadow-P1 transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-P1 before:opacity-10 before:duration-700 hover:before:-translate-x-60">
          Hubungi kami
        </button>
        <button className="py-4 px-8 mb-2 outline outline-2 outline-white rounded-xl text-sm text-white font-semibold before:ease relative overflow-hidden border border-white hover:shadow-P1 transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-60">
          Lihat FAQ
        </button>
      </div>
    </div>
  );
};

export default Contact;
