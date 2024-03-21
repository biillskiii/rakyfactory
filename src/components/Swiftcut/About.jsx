import React from "react";

const About = () => {
  return (
    <div className="container flex  mx-auto bg-P2 rounded-[35px] px-10 py-16 gap-x-32">
      <div className="flex justify-center items-end">
        <button className=" shadow-md p-1 cursor-pointer bg-white px-5 py-4 rounded-2xl text-P1 font-semibold">
          Daftar sekarang
        </button>
      </div>
      <div className="w-[496px] ">
        <p className="text-[24px] font-semibold mb-2 text-P1">ABOUT PRODUCT</p>
        <h1 className="text-4xl font-bold mb-2">Video Editing Subscription</h1>
        <p className="text-xl">
          Solusi praktis untuk konten kreator, dengan cara berlangganan layanan
          video editing TikTok.
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
    </div>
  );
};

export default About;
