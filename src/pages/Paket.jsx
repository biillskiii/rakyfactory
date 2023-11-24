import React, { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Save from "../assets/save.png";
import Pen8 from "../assets/Pen8.png";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDiscount } from "react-icons/md";

import Aos from "aos";
const Paket = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      {" "}
      <div id="paket"></div>
      <div className="flex justify-center items-center mt-48">
        <div
          data-aos="fade-up"
          className="relative flex flex-col justify-center items-center"
        >
          <p className="font-bold text-5xl">
            Pilih paket yang sesuai untuk kamu
          </p>
          <img src={Pen8} width={450} className="ms-auto" alt="" />
          <p className="font-medium mt-3 text-xl text-T1">
            Biaya tetap. Tanpa kontrak. Tanpa pusing kelola tim
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-10 gap-x-5 ">
        <p
          className={`ms-3 text-lg ${
            isChecked ? "font-medium text-gray-300" : " font-semibold text-B1"
          }`}
        >
          Starter level
        </p>

        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleToggleChange}
          />
          <div class="w-11 h-6  bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-P2"></div>
          <span
            className={`ms-3 text-lg ${
              isChecked ? "font-semibold text-P2" : "font-medium text-P3"
            }`}
          >
            Creator level
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div data-aos="fade-up" className="flex flex-wrap  space-x-10">
          <div className="w-80 h-96 bg-white p-6 rounded-lg shadow-lg text-start">
            <h2 className="flex  items-center gap-x-3 text-lg font-semibold">
              Script Writing Team <AiOutlineInfoCircle className="text-P2" />
            </h2>
            <p class="text-lg font-semibold mb-2">
              {isChecked ? "Rp3,199 jt" : "Rp2,199 jt"}
              <span className="text-xs font-normal">
                {isChecked ? "/ periode 31 hari" : "/ periode 15 hari"}
              </span>
            </p>
            <p className="text-xs">
              Dapatkan tim script writer yang <br />
              bertalenta sesuai niche kontenmu.
            </p>
            <hr className="my-5" />
            <ul className="text-left text-sm mb-6">
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus ide-ide bank konten
              </li>
              <li class="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Termasuk riset materi konten
              </li>
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                1 permintaan dalam 1 waktu
              </li>
              <li className="flex items-center gap-x-2 mb-2 ">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Termasuk fitur tambahan
                <AiOutlineInfoCircle className="text-P2" />
              </li>
            </ul>
            <button className="w-full  bg-P2 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-purple-300">
              {!isChecked ? (
                <p>Join Waitlist</p>
              ) : (
                <p className="flex text-sm justify-center items-center uppercase gap-x-2 font-semibold">
                  <MdDiscount /> Save 28% | Join Waitlist
                </p>
              )}
            </button>
            <p className="text-xs text-center mt-3">
              Jeda atau batalkan kapanpun
            </p>
          </div>
          <div className="w-80 h-96 bg-white p-6 rounded-lg shadow-lg text-start">
            <h2 className="flex items-center gap-x-3 text-lg font-semibold">
              Video Editing Team <AiOutlineInfoCircle className="text-P2" />
            </h2>
            <p class="text-lg font-semibold mb-2">
              {isChecked ? "Rp3,199 jt" : "Rp2,199 jt"}
              <span className="text-xs font-normal">
                {isChecked ? "/ periode 31 hari" : "/ periode 15 hari"}
              </span>
            </p>
            <p className="text-xs">
              Dapatkan tim video editor yang <br /> bertalenta sesuai gaya
              visualmu.
            </p>
            <hr className="my-5" />
            <ul className="text-left text-sm mb-6">
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus pemilihan klip YT{" "}
                <AiOutlineInfoCircle className="text-P2" />
              </li>
              <li class="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus visual-content style{" "}
                <AiOutlineInfoCircle className="text-P2" />
              </li>
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                1 permintaan dalam 1 waktu
              </li>
              <li className="flex items-center gap-x-2 mb-2 ">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Termasuk fitur tambahan
                <AiOutlineInfoCircle className="text-P2" />
              </li>
            </ul>
            <button className="w-full bg-P2 text-white py-2 px-4  rounded-md focus:outline-none focus:ring focus:border-purple-300">
              {!isChecked ? (
                <p>Join Waitlist</p>
              ) : (
                <p className="flex text-sm justify-center items-center uppercase gap-x-2 font-semibold">
                  <MdDiscount /> Save 28% | Join Waitlist
                </p>
              )}
            </button>
            <p className="text-xs text-center mt-3">
              Jeda atau batalkan kapanpun
            </p>
          </div>
          {isChecked && (
            <div className="w-80 h-96 bg-white p-6 rounded-lg shadow-lg text-start">
              <h2 className="flex items-center gap-x-3 text-lg font-semibold">
                Premium Bundling <AiOutlineInfoCircle className="text-P2" />
              </h2>
              <p class="text-lg font-semibold mb-2">
                Rp5,499 jt{" "}
                <span className="text-xs font-normal">/ periode 31 hari</span>
              </p>
              <p className="text-xs">
                Dapatkan tim video editor dan script <br /> writer untuk
                menghemat waktumu!
              </p>
              <hr className="my-5" />
              <ul className="text-left text-sm  mb-6">
                <li className="flex items-center gap-x-2 mb-2">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  Semua bonus di paket satuan
                </li>
                <li class="flex items-center gap-x-2 mb-2">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  Bonus thumbnail IG Reels
                </li>
                <li className="flex items-center gap-x-2 mb-2">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  1 permintaan dalam 1 waktu{" "}
                  <AiOutlineInfoCircle className="text-P2" />
                </li>
                <li className="flex items-center gap-x-2 mb-2 ">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  Termasuk fitur tambahan
                  <AiOutlineInfoCircle className="text-P2" />
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-P2 to-[#7FAAFF] text-white py-2 px-4 rounded-md hover:bg-[#280598] focus:outline-none focus:ring focus:border-purple-300">
                <p className="flex text-sm justify-center items-center uppercase gap-x-2 font-semibold">
                  <MdDiscount /> Extra save 37%
                </p>
              </button>
              <p className="text-xs text-center mt-3">
                Jeda atau batalkan kapanpun
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="flex justify-center items-center mt-10 font-medium text-sm">
        Butuh lebih banyak konten?
        <span className="flex items-center gap-x-2 ml-1 font-medium text-sm text-P2">
          Upgrade 2 permintaan dalam 1 waktu <IoMdArrowForward />
        </span>
      </p>
    </>
  );
};

export default Paket;
