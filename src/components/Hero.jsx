import React, { useEffect } from "react";
import SideImage from "../assets/bro.png";
import Aos from "aos";
const Hero = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div
      id="hero"
      className="w-[87.89%] mt-11 mb-44 mx-auto flex items-center justify-center gap-x-24 "
    >
      <div className="w-[652px] flex flex-col me-auto  items-start gap-11">
        <p className="text-base">
          Perkenalkan <span className="text-[#7A5AE1]">Swiftcut</span> by
          Rakyfactory
        </p>
        <h1 className="font-bold text-4xl">
          Solusi <span className="text-[#7A5AE1]">hemat waktu</span> bikin
          konten, dengan langganan Video Editor.
        </h1>
        <p className="text-xl">
          Tanpa repot kelola tim freelancer. Tanpa kontrak. Sistem langganan
          fleksibel.
        </p>
        <button className="w-52 mb-2 bg-[#7A5AE1] rounded-md p-2 text-white">
          Daftar sekarang,gratis!
        </button>
      </div>
      <div className="w-[487.53px] flex justify-end">
        <img src={SideImage} width={487} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
