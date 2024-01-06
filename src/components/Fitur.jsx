import React, { useEffect, useState } from "react";
import Aos from "aos";
import CardFeature from "./CardFeature";
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
        className="w-9/12 mx-auto flex flex-col h-full text-center justify-center items-center mt-48"
      >
        <div className="w-10/12 sm:w-full">
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm sm:text-[20px]">
              Mengapa mereka memilih layanan kami
            </h2>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 justify-center items-center ">
            <CardFeature
              title={"Monitoring tim mudah"}
              desc={
                "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda."
              }
            />
            <CardFeature
              title={"Monitoring tim mudah"}
              desc={
                "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda."
              }
            />
            <CardFeature
              title={"Monitoring tim mudah"}
              desc={
                "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda."
              }
            />
            <CardFeature
              title={"Monitoring tim mudah"}
              desc={
                "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda."
              }
            />
            <CardFeature
              title={"Monitoring tim mudah"}
              desc={
                "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda."
              }
            />
            <CardFeature
              title={"Monitoring tim mudah"}
              desc={
                "Tim konten terkait akan bergabung dalam grup WhatsApp bersama Anda."
              }
            />
        </div>
      </div>
    </>
  );
};

export default Fitur;
