import React, {useEffect} from "react";
import Pen3 from "../assets/konten.png";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Aos from "aos";
const HowItWork = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div id="yourcontentpartner"></div>
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center mt-48 "
      >
        <div className="flex flex-col">
          <p className="font-bold text-5xl text-center z-20">
            Dapatkan tim konten pribadimu
          </p>
          <img src={Pen3} width={500} className="ml-72 z-10" alt="pen3" />
          <p className="font-medium text-xl text-T1 mt-5 text-center  w-[825px]">
            Kami akan membantu membuat konten bernilai secara konsisten, yang{" "}
            <br />
            membawa kamu mencapai tujuan sebagai Content Creator
          </p>
        </div>
        <div className="flex mt-14 gap-x-14">
          <div className=" w-80 h-96 ">
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
                <div className="flex justify-start items-center gap-x-1 mt-5">
                  <div className="bg-[#f6f6f6] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                    01
                  </div>
                  <p className="font-bold text-sm text-start">
                    Mulai berlangganan
                  </p>
                </div>
                <img src={Image1} width={150} className="mx-auto mt-5" />
                <p className="w-60 text-xs text-start px-3 mt-3.5 mb-10">
                  Berlangganan untuk satu periode dengan opsi jeda jika tidak
                  ada permintaan konten. Biaya tetap dan tanpa kontrak.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className=" w-80 h-96">
            <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
              <div className="flex justify-start items-center gap-x-3 mt-5">
                <div className="bg-[#f6f6f6] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                  02
                </div>
                <p className="font-bold text-sm flex items-center gap-x-2">
                  Gabung di Rakyclub
                  <AiOutlineInfoCircle size={15} className="text-P2" />{" "}
                </p>
              </div>
              <img src={Image2} width={150} className="mx-auto mt-5" />
              <p className="w-60 text-xs text-start px-3 mt-3.5 mb-10">
                Kamu dan tim konten terlibat akan berada dalam satu grup
                WhatsApp untuk berdiskusi dan membuat konten bersama.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className=" w-80 h-96">
            <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
              <div className="flex justify-start items-center gap-x-3 mt-5">
                <div className="bg-[#f6f6f6] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                  03
                </div>
                <p className="font-bold text-sm">Tumbuh bersama</p>
              </div>
              <img src={Image3} width={150} className="mx-auto mt-5" />
              <p className="w-60 text-xs text-start px-3 mt-3.5 mb-10">
                Kamu dan tim konten terlibat akan berada dalam satu grup
                WhatsApp untuk berdiskusi dan membuat konten bersama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
