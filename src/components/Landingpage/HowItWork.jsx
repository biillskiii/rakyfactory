import React from "react";
import Panduan from "../../assets/panduan.png";

const HowItWork = () => {
  return (
    <div className="bg-P2 w-[1241px] h-[463px] flex justify-center items-center rounded-[35px] mx-auto ">
      <div className="w-[651px] px-24">
        <h1 className="text-4xl font-bold mb-8">
          Bagaimana cara kerja
          <br /> langganan jeda?
        </h1>
        <p className="text-lg mb-8">
          Sebagai pionir layanan jasa berlangganan-jeda di Indonesia, kami hadir
          dengan fitur inovatif untuk memastikan masa langganan Anda tidak
          terbuang sia-sia.
        </p>
        <button className="py-4 px-8 mb-2 bg-P1 rounded-[20px] text-xl text-white">
          Pelajari selengkapnya
        </button>
      </div>
      <div className="w-[550px] flex items-end ml-20 mt-28">
        <img src={Panduan} alt="panduan raky" />
      </div>{" "}
    </div>
  );
};

export default HowItWork;
