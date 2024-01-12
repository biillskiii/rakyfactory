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
      className=" mt-11 mb-44 mx-auto flex items-center justify-center gap-x-24 "
    >
      <div className=" flex flex-col me-auto  items-start gap-7">
        <p className="text-base font-medium">
          Perkenalkan <span className="text-[#7A5AE1]">Swiftcut</span> by
          Rakyfactory
        </p>
        <h1 className="font-bold text-5xl">
          Solusi <span className="text-[#7A5AE1]">hemat waktu</span> bikin{" "}
          <br />
          konten, dengan langganan <br /> Video Editor.
        </h1>
        <p className="text-base font-normal  w-[505px]">
          Tanpa repot kelola tim freelancer. Tanpa kontrak. Sistem langganan
          fleksibel.
        </p>
        <button className="w-52 mb-2 bg-[#7A5AE1] rounded-md p-2 text-base text-white">
          Daftar sekarang, gratis!
        </button>
      </div>
      <div className="w-[487.53px] flex justify-end">
        <img src={SideImage} width={487} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
