import React, { useEffect, useState } from "react";
import CardFeature from "../CardFeature";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdMovieEdit } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineTheaters } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Fitur = () => {
  useEffect(() => {
    AOS.init();
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
      icon: <MdMovieEdit className="text-2xl lg:text-[30px]" />,
      title: "Swiftcut",
      desc: "Solusi cari editor Tiktok tanpa ribet, tanpa seleksi portofolio, tanpa urus tim. Pasti cocok sesuai preferensi konten Anda!",
      detail: true,
      detaildesc: "Selengkapnya",
    },
    {
      icon: <MdOutlineDashboard className="text-2xl lg:text-[30px]" />,
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
      icon: <MdOutlineTheaters className="text-2xl lg:text-[30px]" />,
      title: "Longframe",
      desc: "Solusi editing Youtube tanpa khawatir repot urus tim. Anda fokus ngonten, biar kami yang kelola mitra editornya!",
      detail: false,
    },
  ];

  return (
    <>
      <div id="product"></div>
      <div
        className="my-36 lg:my-52 w-[300px] lg:container mx-auto"
        data-aos="fade-up"
      >
        <div className="w-full">
          <div className="flex flex-col items-center gap-1 lg:gap-5">
            <p className="text-[10px] lg:text-xl font-semibold text-[#7A5AE1] uppercase">
              Services for Creators & Brands
            </p>
            <h2 className="font-semibold lg:text-start text-center  text-xl sm:text-[44px] mb-16">
              Temukan solusi yang paling tepat untuk Anda
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5">
          {cardData.map((card, index) => (
            <div key={index} className="my-3 lg:my-5">
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
          className="flex flex-col lg:flex-row justify-center items-center gap-y-2 lg:gap-y-0 gap-x-3 cursor-pointer text-xs lg:text-base font-medium mt-5"
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
          .fade-up {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.5s, transform 0.5s;
          }
          .fade-up.in-view {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </>
  );
};

export default Fitur;
