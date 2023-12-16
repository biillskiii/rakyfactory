import React, { useEffect } from "react";
import Pen1 from "../assets/atas.png";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-scroll";
import Aos from "aos";
const Hero = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const handleWhatsapp = () => {
    window.open("https://wa.me/+62881082013808");
  };
  return (
    <div id="hero" className="flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <p className="font-bold text-5xl text-center sm:text-[55px] mt-28 sm:mt-40 leading-tight z-40">
          We help your content growth more easily
        </p>
        <img
          id="pen1"
          className="ms-auto mr-2 mt-1 z-0"
          src={Pen1}
          width={320}
          alt="pencil"
          style={
            window.matchMedia("(max-width: 640px)").matches
              ? { width: 300, marginRight: 50 }
              : {}
          }
        />
      </div>
      <p className="font-medium text-T1 text-[18px] text-center w-96 sm:w-8/12 my-10 px-4 sm:text-[22px] sm:leading-8 sm:px-2">
        Dapatkan tim konten pribadimu untuk akses permintaan konten sebanyak
        mungkin dengan cara berlangganan. Dapat dijeda atau batalkan kapan saja.
      </p>
      <div className="flex gap-x-5 justify-center">
        <Link
          to="paket"
          smooth={true}
          duration={200}
          className="bg-P2  text-white flex items-center justify-center font-medium rounded-md px-3 sm:px-5 py-1 sm:py-3 cursor-pointer text-xs sm:text-base"
        >
          Lihat paket
        </Link>
        <button
          onClick={handleWhatsapp}
          className="bg-[#F4F2FD] border border-P2 text-P2 border-opacity-10 font-medium rounded-md px-5 py-3 text-xs sm:text-base"
        >
          Konsultasi Gratis
        </button>
      </div>
      <p className="text-[#7C7C7C] font-medium text-[10px] sm:text-xs mt-3 sm:mt-6 flex justify-center gap-x-2 items-center">
        <HiSparkles className="text-[#7C7C7C] " size={20} />
        Tanpa kontrak. Tanpa biaya tambahan.
      </p>
    </div>
  );
};

export default Hero;
