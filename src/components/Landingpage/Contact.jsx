import React from "react";

const Contact = () => {
  return (
    <div className="bg-P1 rounded-3xl w-[1241px] h-[397px] flex justify-around items-center mt-44 mx-auto">
      <div className="w-[613px] py-40 text-white">
        <h1 className="text-[40px] font-semibold">
          Punya pertanyaan untuk kami?
        </h1>
        <p className="text-lg">
          Diskon 10% selamanya, khusus untuk kreator dan brand jika apply kode
          referral! Belum punya kode? Hubungi kami sekarang.
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <button className="py-4 px-8 mb-2 bg-white rounded-[20px] text-xl text-P1">
          Hubungi kami
        </button>
        <button className="py-4 px-8 mb-2 outline outline-white rounded-[20px] text-xl text-white">
          Lihat FAQ
        </button>
      </div>
    </div>
  );
};

export default Contact;
