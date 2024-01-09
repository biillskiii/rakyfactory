import React, { useEffect } from "react";
import Aos from "aos";
import CardFeature from "./CardFeature";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineMoreTime } from "react-icons/md";
import { TbFileInfinity, TbPigMoney, TbDatabaseDollar } from "react-icons/tb";
import { LiaShippingFastSolid, LiaFileContractSolid } from "react-icons/lia";
import { RiExchangeFundsLine } from "react-icons/ri";
import { LuCalendarClock } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Fitur = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const cardData = [
    {
      icon: <AiOutlineTeam />,
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      icon: <MdOutlineMoreTime />,
      title: "Langganan fleksibel",
      desc: "Langganan aktif saat ada permintaan saja, otomatis terjeda jika tidak ada.",
    },
    {
      icon: <TbFileInfinity />,
      title: "Permintaan tak terbatas",
      desc: "Dengan berlangganan, Anda dapat request konten sebanyak apapun.",
    },
    {
      icon: <TbPigMoney />,
      title: "Biaya langganan tetap",
      desc: "Tidak ada biaya tambahan! Bayar dengan biaya yang sama setiap periode.",
    },
    {
      icon: <LiaShippingFastSolid />,
      title: "Proses cepat",
      desc: "Hasil konten dikirimkan satu per satu dalam waktu 24-48 jam.",
    },
    {
      icon: <RiExchangeFundsLine />,
      title: "Revisi hingga puas",
      desc: "Manfaatkan revisi tanpa biaya tambahan hingga Anda puas 100%.",
    },
    {
      icon: <LiaFileContractSolid />,
      title: "Tanpa kontrak",
      desc: "Tidak perlu terikat kontrak, atau perjanjian jangka panjang.",
    },
    {
      icon: <TbDatabaseDollar />,
      title: "Biaya lebih terjangkau",
      desc: "Tidak ada biaya overhead. Akses tim full-time tanpa tunjangan apapun.",
    },
    {
      icon: <LuCalendarClock />,
      title: "Pangkas proses konten",
      desc: "Proses Anda membuat konten menjadi lebih efisien dan hemat waktu.",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div id="fitur"></div>
      <div data-aos="fade-up" className="w-9/12 mx-auto mt-44">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-lg sm:text-3xl mb-4">
              Mengapa mereka{" "}
              <span className="text-[#7A5AE1]">memilih layanan</span> kami
            </h2>
          </div>
        </div>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="my-5">
              <CardFeature
                icon={card.icon}
                title={card.title}
                desc={card.desc}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Fitur;
