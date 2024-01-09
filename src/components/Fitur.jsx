import React, { useEffect } from "react";
import Aos from "aos";
import CardFeature from "./CardFeature";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fitur = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const cardData = [
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    {
      title: "Monitoring tim mudah",
      desc: "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda.",
    },
    // Add more card data as needed
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
      <div
        data-aos="fade-up"
        className="w-9/12 mx-auto mt-44"
      >
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
              <CardFeature title={card.title} desc={card.desc} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Fitur;
