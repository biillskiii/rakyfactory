import React, { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Boost from "../assets/boost.png";
import Pen8 from "../assets/Pen8.png";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDiscount } from "react-icons/md";
import "./Paket.css";
import Aos from "aos";
const Paket = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isLabel, setIsLabel] = useState("");
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const handleWaitlist = () => {
    window.open("https://forms.gle/g3nBjCSzawzmdv137", "_blank");
  };
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  const boostModal = () => {
    setIsBoostModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeBoostModal = () => {
    setIsBoostModalOpen(false);
  };
  return (
    <>
      {" "}
      <div id="paket"></div>
      <div className="flex justify-center items-center mt-48">
        <div
          data-aos="fade-up"
          className="relative flex flex-col justify-center items-center"
        >
          <p className="font-bold text-4xl text-center sm:text-5xl">
            Pilih paket yang sesuai untuk kamu
          </p>
          <img
            src={Pen8}
            width={450}
            className="ms-auto"
            alt="pen8"
            style={
              window.matchMedia("(max-width: 640px)").matches
                ? { width: 350, marginRight: 20 }
                : {}
            }
          />
          <p className="font-medium mt-3 text-sm sm:text-xl text-T1">
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
          <div class="w-12 h-7  bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-P2"></div>
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
        <div
          data-aos="fade-up"
          className="flex flex-wrap gap-y-10 ml-16  space-10"
        >
          <div className="w-[270px] h-96 bg-white p-6 rounded-lg shadow-lg text-start">
            <h2 className="flex  items-center gap-x-3 text-lg font-semibold">
              Script Writing Team{" "}
              <AiOutlineInfoCircle
                size={13}
                onClick={() =>
                  openModal(
                    "Ambil kesempatan DISKON TERBAIK, kalau kamu punya kode promo!"
                  )
                }
                className="text-P2 cursor-pointer"
              />
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
            <ul className="text-left text-xs mb-6">
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
                <AiOutlineInfoCircle
                  size={13}
                  onClick={() =>
                    openModal(
                      <ul className="pl-10">
                        <li className="list-item list-disc">
                          Permintaan tak terbatas
                        </li>
                        <li className="list-item list-disc">
                          Rata-rata pengiriman 48 jam
                        </li>
                        <li className="list-item list-disc">
                          Revisi tak terbatas
                        </li>
                        <li className="list-item list-disc">
                          Gratis cloud storage
                        </li>
                        <li className="list-item list-disc">
                          Gratis konsultasi konten
                        </li>
                        <li className="list-item list-disc">
                          Obrolan tim sefrekuensi
                        </li>
                        <li className="list-item list-disc">
                          Tim support 24/7
                        </li>
                        <li className="list-item list-disc">
                          Langganan dapat dijeda
                        </li>
                        <li className="list-item list-disc">
                          Real-time & transparan
                        </li>
                        <li className="list-item list-disc">
                          Biaya langganan tetap
                        </li>
                        <li className="list-item list-disc">
                          Tanpa biaya tambahan
                        </li>
                        <li className="list-item list-disc">Tanpa kontrak</li>
                      </ul>
                    )
                  }
                  className="text-P2 cursor-pointer"
                />
              </li>
            </ul>
            <button
              onClick={handleWaitlist}
              className="w-full  bg-P2 text-xs   text-white py-2 px-3 rounded-md focus:outline-none focus:ring focus:border-purple-300"
            >
              {!isChecked ? (
                <p className="uppercase font-semibold">Join Waitlist</p>
              ) : (
                <p className="flex justify-center items-center uppercase gap-x-2 font-semibold">
                  <MdDiscount /> Save 28% | Join Waitlist
                </p>
              )}
            </button>
            <p className="text-xs text-center mt-3">
              Jeda atau batalkan kapanpun
            </p>
          </div>
          <div className="w-[270px] h-96 bg-white p-6 rounded-lg shadow-lg text-start">
            <h2 className="flex items-center gap-x-2 text-lg font-semibold">
              Video Editing Team{" "}
              <AiOutlineInfoCircle
                size={13}
                onClick={() =>
                  openModal(
                    "Ambil kesempatan DISKON TERBAIK, kalau kamu punya kode promo!"
                  )
                }
                className="text-P2 cursor-pointer"
              />
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
            <ul className="text-left text-xs mb-6">
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus pemilihan klip YT{" "}
                <AiOutlineInfoCircle
                  size={13}
                  onClick={() =>
                    openModal(
                      "Terkadang, ada klien yang membutuhkan transformasi dari video YouTube panjang seperti podcast, dan perlu diunggah dalam format video pendek seperti TikTok. Kami akan memberikan rekomendasi menit yang menarik untuk dijadikan video pendek."
                    )
                  }
                  className="text-P2 cursor-pointer"
                />
              </li>
              <li class="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus visual-content style{" "}
                <AiOutlineInfoCircle
                  size={13}
                  onClick={() =>
                    openModal(
                      "Jika kamu belum memiliki style editing untuk kontennya, kami akan membuatkannya. GRATIS."
                    )
                  }
                  className="text-P2 cursor-pointer"
                />
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
                <AiOutlineInfoCircle
                  size={13}
                  onClick={() =>
                    openModal(
                      <ul className="pl-10">
                        <li className="list-item list-disc">
                          Permintaan tak terbatas
                        </li>
                        <li className="list-item list-disc">
                          Rata-rata pengiriman 48 jam
                        </li>
                        <li className="list-item list-disc">
                          Revisi tak terbatas
                        </li>
                        <li className="list-item list-disc">
                          Gratis cloud storage
                        </li>
                        <li className="list-item list-disc">
                          Gratis konsultasi konten
                        </li>
                        <li className="list-item list-disc">
                          Obrolan tim sefrekuensi
                        </li>
                        <li className="list-item list-disc">
                          Tim support 24/7
                        </li>
                        <li className="list-item list-disc">
                          Langganan dapat dijeda
                        </li>
                        <li className="list-item list-disc">
                          Real-time & transparan
                        </li>
                        <li className="list-item list-disc">
                          Biaya langganan tetap
                        </li>
                        <li className="list-item list-disc">
                          Tanpa biaya tambahan
                        </li>
                        <li className="list-item list-disc">Tanpa kontrak</li>
                      </ul>
                    )
                  }
                  className="text-P2 cursor-pointer"
                />
              </li>
            </ul>
            <button
              onClick={handleWaitlist}
              className="w-full text-xs  bg-P2 text-white py-2 px-3  rounded-md focus:outline-none focus:ring focus:border-purple-300"
            >
              {!isChecked ? (
                <p className="uppercase font-semibold">Join Waitlist</p>
              ) : (
                <p className="flex justify-center items-center uppercase gap-x-2 font-semibold">
                  <MdDiscount /> Save 28% | Join Waitlist
                </p>
              )}
            </button>
            <p className="text-xs text-center mt-3">
              Jeda atau batalkan kapanpun
            </p>
          </div>
          {isChecked && (
            <div className="w-[270px] h-96 bg-white p-6 rounded-lg shadow-lg text-start">
              <h2 className="flex items-center gap-x-3 text-lg font-semibold">
                Premium Bundling{" "}
                <AiOutlineInfoCircle
                  size={13}
                  onClick={() =>
                    openModal(
                      "Ambil kesempatan DISKON TERBAIK, kalau kamu punya kode promo!"
                    )
                  }
                  className="text-P2 cursor-pointer"
                />
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
              <ul className="text-left text-xs  mb-6">
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
                  <AiOutlineInfoCircle
                    size={13}
                    onClick={() =>
                      openModal(
                        "Work-board akan dibedakan masing-masing, sehingga timer pada masa berlangganannya tidak saling bertumpuk."
                      )
                    }
                    className="text-P2 cursor-pointer"
                  />
                </li>
                <li className="flex items-center gap-x-2 mb-2 ">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  Termasuk fitur tambahan
                  <AiOutlineInfoCircle
                    size={13}
                    onClick={() =>
                      openModal(
                        <ul className="pl-10">
                          <li className="list-item list-disc">
                            Permintaan tak terbatas
                          </li>
                          <li className="list-item list-disc">
                            Rata-rata pengiriman 48 jam
                          </li>
                          <li className="list-item list-disc">
                            Revisi tak terbatas
                          </li>
                          <li className="list-item list-disc">
                            Gratis cloud storage
                          </li>
                          <li className="list-item list-disc">
                            Gratis konsultasi konten
                          </li>
                          <li className="list-item list-disc">
                            Obrolan tim sefrekuensi
                          </li>
                          <li className="list-item list-disc">
                            Tim support 24/7
                          </li>
                          <li className="list-item list-disc">
                            Langganan dapat dijeda
                          </li>
                          <li className="list-item list-disc">
                            Real-time & transparan
                          </li>
                          <li className="list-item list-disc">
                            Biaya langganan tetap
                          </li>
                          <li className="list-item list-disc">
                            Tanpa biaya tambahan
                          </li>
                          <li className="list-item list-disc">Tanpa kontrak</li>
                        </ul>
                      )
                    }
                    className="text-P2 cursor-pointer"
                  />
                </li>
              </ul>
              <button
                onClick={handleWaitlist}
                className="w-full text-xs bg-gradient-to-r from-P2 to-[#7FAAFF] text-white py-2 px-4 rounded-md hover:bg-[#280598] focus:outline-none focus:ring focus:border-purple-300"
              >
                <p className="flex  justify-center items-center uppercase gap-x-2 font-semibold">
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
      <p className="flex sm:flex-row flex-col justify-center items-center mt-10 font-medium text-xs sm:text-sm">
        Butuh lebih banyak konten?
        <span
          onClick={boostModal}
          className="flex items-center gap-x-2 ml-1 font-medium text-xs sm:text-sm text-P2 cursor-pointer"
        >
          Upgrade 2 permintaan dalam 1 waktu <IoMdArrowForward />
        </span>
      </p>
      {isBoostModalOpen && (
        <div className="fixed top-0 left-0 right-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal absolute bg-white p-8 w-11/12 sm:w-5/12 rounded-md shadow-md text-start">
            <p className="text-center text-sm flex flex-col items-center">
              <img
                src={Boost}
                alt="boost"
                width={200}
                className="text-center mb-2"
              />
              <span className="font-bold text-xl">Team Boost</span>
              Perbanyak bank kontenmu dengan cara menambahkan fitur ini. Kamu
              dapat membuat 2 permintaan sekaligus. Biaya ini hanya berlaku
              untuk 1 jenis tim.
            </p>
            <button
              onClick={closeBoostModal}
              className="w-full mt-4 px-4 py-2 bg-P2 text-white rounded-md  focus:outline-none focus:ring focus:border-blue-300"
            >
              Tambahkan boost dengan biaya Rp1,55 juta
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="modal container absolute bg-white p-8 w-96 rounded-md shadow-md text-start">
            <p>{modalContent}</p>
            <button
              onClick={closeModal}
              className="w-full mt-4 px-4 py-2 bg-[#7A5AE1] text-white rounded-md hover:bg-[#4C1D95] focus:outline-none focus:ring focus:border-blue-300"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Paket;
