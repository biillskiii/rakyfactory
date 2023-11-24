import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Image5 from "../assets/bro.png";
import Pen2 from "../assets/pesan.png";
import Aos from "aos";
const Pesan = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div id="pesan"></div>
      <div
        data-aos="fade-up"
        className="w-[1232px] h-[352px] rounded-3xl bg-white mx-auto mt-48 text-black shadow-lg relative flex"
      >
        <div className="w-[649px] flex flex-col items-start ml-20 my-16 mb-44">
          <p className="font-bold text-3xl ">
            {!showFullContent ? (
              "Pesan dari pak CEO Rakyfactory?"
            ) : (
              <p className="font-bold text-3xl">
                Razan Musyaffa -{" "}
                <span className="font-normal"> CEO & Content Creator</span>
              </p>
            )}
          </p>
          {!showFullContent ? (
            <div>
              <img src={Pen2} className="mb-4" width={270} alt="pen2" />
              <p className="w-10/12 text-base text-start leading-[32px] text-T1">
                "Sebagai konten kreator pasti ada hambatannya. Mikirin ide
                konten, ngedit, susah bagi waktunya. Butuh tim biar bisa bantuin
                dan jadi temen diskusi, tapi susah nyari yang cocok dan malah
                bikin nambah pusing kelolanya..."
              </p>
            </div>
          ) : (
            <p className="w-11/12 text-base mt-7 text-start leading-[32px] text-T1">
              "...Maka dari itu, hadirlah Rakyfactory untuk membantu kamu
              berproses sebagai konten kreator. Kami ingin menjadi partner
              kontenmu dan bersama-sama tumbuh untuk menciptakan peluang
              bermanfaat bagi orang lain juga"
            </p>
          )}
          {!showFullContent ? (
            <button
              onClick={toggleContent}
              className="text-P2 font-medium flex items-center gap-x-3 mt-8 mb-20"
            >
              Lihat selengkapnya
              <IoMdArrowForward size={16} className="text-P2 font-medium" />
            </button>
          ) : (
            <button
              onClick={toggleContent}
              className="text-P2 font-medium flex items-center gap-x-3 mt-8 mb-20"
            >
              <IoMdArrowBack size={16} className="text-P2 font-medium" />
              Kembali
            </button>
          )}
        </div>
        <div className="ml-24 my-auto flex justify-center items-center">
          <img src={Image5} alt="avatar" width={300} />
        </div>
      </div>
    </>
  );
};

export default Pesan;