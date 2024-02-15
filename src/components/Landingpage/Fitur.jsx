import React, { useEffect, useState } from "react";
import Aos from "aos";
import CardFeature from "../CardFeature";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdMovieEdit } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineTheaters } from "react-icons/md";

const Fitur = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const cardData = [
    {
      icon: <MdMovieEdit fontSize={40} />,
      title: "Swiftcut",
      desc: "Solusi cari editor Tiktok tanpa ribet, tanpa seleksi portofolio, tanpa urus tim. Pasti cocok sesuai preferensi konten Anda!",
      detail: true,
      detaildesc: "Selengkapnya",
    },
    {
      icon: <MdOutlineDashboard fontSize={40} />,
      title: "Socialuse",
      desc: (
        <p>
          Solusi kebutuhan desain Instagram tanpa batas. Kami terhubung dengan
          designer good-taste.
          <br />
        </p>
      ),
      detail: false,
    },
    {
      icon: <MdOutlineTheaters fontSize={40} />,
      title: "Longframe",
      desc: "Solusi editing Youtube tanpa khawatir repot urus tim. Anda fokus ngonten, biar kami yang kelola mitra editornya!",
      detail: false,
    },
  ];

  return (
    <>
      <div id="product"></div>
      <div data-aos="fade-up" className="container mx-auto my-52">
        <div className="w-full">
          <div className="flex flex-col items-center gap-5">
            <p className="text-xl font-semibold text-[#7A5AE1] uppercase">
              Services for Creators & Brands
            </p>
            <h2 className="font-semibold text-lg sm:text-[44px] mb-16">
              Temukan solusi yang paling tepat untuk Anda
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-5">
          {cardData.map((card, index) => (
            <div key={index} className="my-5">
              <CardFeature
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                detail={card.detail}
                detaildesc={card.detaildesc}
              />
            </div>
          ))}
        </div>
        <a
          href="https://forms.gle/5vAmUSRVbLodznSS9"
          target="_blank"
          className="flex justify-center items-center gap-x-3 cursor-pointer font-medium mt-5"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Segera hadir lainnya. Ada kebutuhan lain?{" "}
          <span className="text-P1 font-semibold flex items-center gap-x-2">
            Join Waitlist{" "}
            <FaArrowRightLong
              className={isHovered ? "animate-bounce" : ""}
              style={{ transition: "0.5s" }}
            />
          </span>
        </a>
        <style jsx>{`
          @keyframes bounce {
            0%,
            100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(10px);
            }
          }
          .animate-bounce {
            animation: bounce 0.5s infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default Fitur;
