import React, { useEffect, useState } from "react";
import Pen5 from "../assets/Pen5.png";
import Partner from "../assets/brainstorm.png";
import Subs from "../assets/emergency-button.png";
import Kanban from "../assets/kanban.png";
import Wallet from "../assets/wallet.png";
import Deadline from "../assets/deadline.png";
import Checklist from "../assets/checklist.png";
import { IoInfinite } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./Fitur.css"
import Aos from "aos";
const Fitur = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "visible";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <div id="fitur"></div>
      <div
        data-aos="fade-up"
        className="flex flex-col h-full text-center justify-center items-center mt-48"
      >
        <div className="flex flex-col">
          <h2 className="font-bold text-5xl">
            Kami hadir sebagai partner kontenmu
          </h2>
          <img src={Pen5} className="ml-[520px]" width={400} alt="" />
        </div>
        <p className="font-medium text-xl mt-10 text-T1">
          Kami menyediakan tim seperti content strategist, writer, dan video
          editor bertalenta untuk <br /> mengembangkan kontenmu. Tanpa pusing
          kelola tim. Tanpa biaya tambahan. Tanpa kontrak.
        </p>
        <div className="w-full flex flex-wrap justify-center items-center mt-24 px-2 gap-10">
          <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
            <div className="flex justify-center items-center  gap-x-10">
              <img src={Partner} alt="subs icon" width={100} />
              <div className="flex flex-col text-start gap-y-3">
                <p className="font-semibold text-[24px]">
                  Your Content Partner
                </p>
                <p className="w-60 text-xs text-T1">
                  Dapatkan tim konten bertalenta secara personal, mereka akan
                  satu grup WhatsApp denganmu.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
            <div className="flex justify-center items-center  gap-x-10">
              <img src={Subs} alt="subs icon" width={100} />
              <div className="flex flex-col text-start gap-y-3">
                <p className="flex items-center gap-x-2 font-semibold text-[24px]">
                  Subscription-pause
                  <AiOutlineInfoCircle
                    size={15}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={openModal}
                    className="text-P2 cursor-pointer"
                  />
                </p>
                <p className="w-60 text-xs text-T1">
                  Berlangganan yang dapat dijeda jika tidak ada permintaan yang
                  diproses, atau batalkan kapan saja.
                </p>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed top-0 left-0 right-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="modal absolute bg-white p-8 w-96 rounded-md shadow-md text-start">
                <p>
                  Misalnya, jika kamu berlangganan selama 31 hari tetapi hanya
                  menggunakan 21 hari, dan tidak ada kebutuhan konten, kamu bisa
                  menjedanya. Kamu dapat melanjutkan 11 hari sisanya kapanpun.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full mt-4 px-4 py-2 bg-P2 text-white rounded-md  focus:outline-none focus:ring focus:border-blue-300"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
          <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
            <div className="flex justify-center items-center  gap-x-10">
              <img src={Kanban} alt="subs icon" width={100} />
              <div className="flex flex-col text-start gap-y-3">
                <p className="font-semibold text-[24px]">Unlimited Request</p>
                <p className="w-60 text-xs text-T1">
                  Berlangganan paket dan request konten sesuai kebutuhanmu.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
            <div className="flex justify-center items-center  gap-x-10">
              <img src={Wallet} alt="subs icon" width={100} />
              <div className="flex flex-col text-start gap-y-3">
                <p className="font-semibold text-[24px]">Fixed price model</p>
                <p className="w-60 text-xs text-T1">
                  Tidak ada biaya tambahan! Bayar dengan biaya tetap yang sama
                  setiap periode.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
            <div className="flex justify-center items-center  gap-x-10">
              <img src={Deadline} alt="subs icon" width={100} />
              <div className="flex flex-col text-start gap-y-3">
                <p className="font-semibold text-[24px]">Fast Delivery</p>
                <p className="w-60 text-xs text-T1">
                  Dapatkan updates permintaan konten kamu satu per satu hanya
                  dalam beberapa hari.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
            <div className="flex justify-center items-center  gap-x-10">
              <img src={Checklist} alt="subs icon" width={100} />
              <div className="flex flex-col text-start gap-y-3">
                <p className="flex items-center gap-x-2 font-semibold text-[24px] ">
                  Free revisions
                  <IoInfinite className="text-P2" />
                </p>
                <p className="w-60 text-xs text-T1">
                  Tim konten kamu akan terus merevisi sampai kamu puas! Tanpa
                  biaya tambahan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fitur;
