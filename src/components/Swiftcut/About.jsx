import React from "react";

const About = () => {
  return (
    <div className="w-[1120px] h-[562px] flex  mx-auto bg-P2 rounded-xl px-24 py-16 gap-x-32">
      <div className="w-[544px] ">
        <p className="text-2xl font-semibold mb-2 text-P1">ABOUT PRODUCT</p>
        <h1 className="text-4xl font-bold mb-2">
          Apa itu berlangganan
          <br /> video editor?
        </h1>
        <p className="text-xl">
          Layanan unggulan dari Rakyfactory yang memberikan akses unlimited
          untuk permintaan video editing konten TikTok. Dengan biaya langganan
          yang tetap dan tanpa biaya tambahan, layanan ini menjadi pilihan utama
          konten kreator untuk menghemat waktu dan budget.
        </p>
        <div className="flex justify-start items-center mt-16 text-center gap-x-10">
          <div className="space-y-3">
            <p className="font-bold text-P1 text-4xl">874+</p>
            <p className="font-semibold">Video Terproduksi</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold text-P1 text-4xl">10+</p>
            <p className="font-semibold">Pelanggan Terlayani</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end">
        <button className=" shadow-md p-1 cursor-pointer bg-white px-5 py-4 rounded-2xl text-P1 font-semibold">
          Daftar sekarang
        </button>
      </div>
    </div>
  );
};

export default About;
