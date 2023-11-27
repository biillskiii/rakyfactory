import React, { useEffect, useState } from "react";
import Pen3 from "../assets/konten.png";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./HowItWork.css";
import Aos from "aos";
const HowItWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
                  <AiOutlineInfoCircle
                    onClick={openModal}
                    size={15}
                    className="text-P2 cursor-pointer"
                  />{" "}
                </p>
              </div>
              <img src={Image2} width={150} className="mx-auto mt-5" />
              <p className="w-60 text-xs text-start px-3 mt-3.5 mb-10">
                Kamu dan tim konten terlibat akan berada dalam satu grup
                WhatsApp untuk berdiskusi dan membuat konten bersama.
              </p>
            </div>
            {isModalOpen && (
              <div className="fixed top-0 left-0 right-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="modal absolute bg-white p-8 w-96 rounded-md shadow-md text-start">
                  <p>
                    Rakyclub merupakan istilah salah satu layanan kami dan juga
                    sebutan pada tim konten yang akan menjadi satu grup WhatsApp
                    bersama kamu.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-4 w-full px-4 py-2 bg-[#7A5AE1]  text-white rounded-md hover:bg-[#4C1D95] focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
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
                Bagikan konten pertama dan amati perkembangannya. Kita akan
                terus mengevaluasi bersama secara berkala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
