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
    window.open("https://wa.me/+62881082013808")
  }
  return (
    <div id="hero" className="flex flex-col items-center justify-center">
     <div className="flex flex-col">
       <p className="font-bold text-4xl lg:text-[55px] mt-40 z-40">
         We help your content growth more easily
       </p>
       <img
         id="pen1"
         className="ms-auto mr-2 mt-1 z-0"
         src={Pen1}
         width={320}
         alt="pencil"
         style={
           window.matchMedia("(max-width: 768px)").matches
             ? { width: 220, marginRight: 90 }
             : {}
         }
       />
     </div>
      <p className="font-medium text-T1 text-sm text-center w-80 lg:w-8/12 my-10 px-4 lg:text-[22px] lg:leading-8 lg:px-2">
        Dapatkan tim konten pribadimu untuk akses permintaan konten sebanyak
        mungkin dengan cara berlangganan. Dapat dijeda atau batalkan kapan saja.
      </p>
      <div className="flex gap-x-5 justify-center mt-3">
        <Link
          to="paket"
          smooth={true}
          duration={200}
          className="bg-P2  text-white font-medium rounded-md px-5 py-3 cursor-pointer"
        >
          Lihat paket
        </Link>
        <button onClick={handleWhatsapp} className="bg-[#F4F2FD] border border-P2 text-P2 border-opacity-10 font-medium rounded-md px-5 py-3">
          Konsultasi Gratis
        </button>
      </div>
      <p className="text-[#7C7C7C] font-medium text-xs mt-6 flex justify-center gap-x-2 items-center">
        <HiSparkles className="text-[#7C7C7C] " size={20} />
        Tanpa kontrak. Tanpa biaya tambahan.
      </p>
    </div>
  );
};

export default Hero;
