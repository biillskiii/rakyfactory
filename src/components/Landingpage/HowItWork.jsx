import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Panduan from "../../assets/panduan.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Modal = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/90 lg:bg-black/70 flex justify-center items-center z-50 overflow-hidden">
      <div className="modal-content rounded-xl p-10 ">
        <iframe
          src="https://www.youtube.com/embed/HMXziSx38YE"
          frameborder="0"
          // width={800}
          // height={450}
          className="rounded-xl w-[340px] lg:w-[800px] h-[190px] lg:h-[450px]"
        ></iframe>
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
    AOS.init();
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="my-14 lg:my-52 bg-P2 w-[353px] mx-auto lg:mx-1 lg:w-[1009px] h-auto lg:h-[370px] flex flex-col lg:flex-row justify-start items-center rounded-[40px] "
        data-aos="fade-up"
      >
        <div className="w-[292px] lg:w-[477px] lg:px-[40px] py-[50px] -my-4 lg:my-52">
          <h1 className="text-xl lg:text-3xl font-bold mb-5">
            Bagaimana cara kerja
            <br /> langganan jeda?
          </h1>
          <p className="text-xs lg:text-base mb-5">
            Sebagai pionir layanan jasa berlangganan-jeda di Indonesia, kami
            hadir dengan fitur inovatif untuk memastikan masa langganan Anda
            tidak terbuang sia-sia.
          </p>
          <button
            onClick={openModal}
            className="py-3 px-5 bg-P1 rounded-xl text-xs lg:text-base text-white before:ease relative overflow-hidden border border-P2   transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-60"
          >
            Pelajari selengkapnya
          </button>
        </div>
        <div className="ml-8 lg:ml-24 mt-3 lg:mt-10">
          <img src={Panduan} width={450} alt="panduan raky" />
        </div>{" "}
      </div>
      {isOpen && <Modal onClose={closeModal} />}
      <div id="modal-root"></div>
    </>
  );
};

export default HowItWork;
