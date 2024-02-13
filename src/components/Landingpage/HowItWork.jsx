import React from "react";
import Panduan from "../../assets/panduan.png";

const HowItWork = () => {
  return (
    <div className="bg-P2 w-[1009px] h-[329px] flex justify-start items-center rounded-[35px] ">
      <div className="w-[477px] px-[40px] py-[40px]">
        <h1 className="text-3xl font-bold mb-5">
          Bagaimana cara kerja
          <br /> langganan jeda?
        </h1>
        <p className="text-base mb-5">
          Sebagai pionir layanan jasa berlangganan-jeda di Indonesia, kami hadir
          dengan fitur inovatif untuk memastikan masa langganan Anda tidak
          terbuang sia-sia.
        </p>
        <button className="py-4 px-6 mb-2 bg-P1 rounded-[20px] text-lg text-white">
          Pelajari selengkapnya
        </button>
      </div>
      <div className="ml-36 mt-10">
        <img src={Panduan} width={400} alt="panduan raky" />
      </div>{" "}
    </div>
  );
};

export default HowItWork;
