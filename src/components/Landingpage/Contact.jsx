import React from "react";

const Contact = () => {
  return (
    <div className="bg-P1 rounded-[45px] w-[1009px] h-[281px] flex justify items-center my-44 mx-auto py-40">
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
        <button className="py-4 px-8 mb-2 bg-white rounded-xl text-sm text-P1 font-semibold">
          Hubungi kami
        </button>
        <button className="py-4 px-8 mb-2 outline outline-2 outline-white rounded-xl text-sm text-white font-semibold">
          Lihat FAQ
        </button>
      </div>
    </div>
  );
};

export default Contact;
