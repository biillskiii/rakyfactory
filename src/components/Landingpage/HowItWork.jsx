import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Panduan from "../../assets/panduan.png";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50 overflow-hidden">
      <div className="bg-white rounded-xl p-10">
        <iframe
          className="rounded-xl"
          src="https://www.youtube.com/embed/HMXziSx38YE"
          frameborder="0"
          width={600}
          height={350}
        ></iframe>
        <button
          onClick={onClose}
          className="block mt-4 px-4 py-2 bg-P1 text-white rounded-xl"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

const HowItWork = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-P2 w-[1009px] h-[329px] flex justify-start items-center rounded-[35px] ">
        <div className="w-[477px] px-[40px] py-[40px]">
          <h1 className="text-3xl font-bold mb-5">
            Bagaimana cara kerja
            <br /> langganan jeda?
          </h1>
          <p className="text-base mb-5">
            Sebagai pionir layanan jasa berlangganan-jeda di Indonesia, kami
            hadir dengan fitur inovatif untuk memastikan masa langganan Anda
            tidak terbuang sia-sia.
          </p>
          <button
            onClick={openModal}
            className="py-4 px-6 mb-2 bg-P1 rounded-[20px] text-lg text-white"
          >
            Pelajari selengkapnya
          </button>
        </div>
        <div className="ml-36 mt-10">
          <img src={Panduan} width={400} alt="panduan raky" />
        </div>{" "}
      </div>
      {isOpen && <Modal onClose={closeModal} />}
      <div id="modal-root"></div>
    </>
  );
};

export default HowItWork;
