import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Pen4 from "../assets/Pen4.png";
import Pen5 from "../assets/Pen5.png";
import Wmp from "../assets/wmp.png";
import Unnes from "../assets/unnes.png";
import Gracia from "../assets/gracia.png";
import Raymond from "../assets/raymond.png";
import Razan from "../assets/razan.png";
import F from "../assets/f.png";
import Doddy from "../assets/doddy.png";
import Alvi from "../assets/alvi.png";
import Cici from "../assets/cici.png";
import Training from "../assets/training.png";
import Faiz from "../assets/faiz.png";
import Card from "../components/Card";
import Aos from "aos";
const Funfact = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="bg-[#FCFCFC] mt-44 sm:mt-24 ">
      <div className="my-auto" id="funfact"></div>
      <div data-aos="fade-up" className="flex justify-center items-center">
        <p className="font-semibold text-base py-10">
          Telah dipercaya oleh <span className="text-P2">Content Creator</span>{" "}
          dan bisnis di Indonesia
        </p>
      </div>
      <div className="pb-10   mx-auto">
        <Marquee
          className="w-full h-auto rounded-xl  gap-x-5"
          autoFill={true}
          pauseOnClick
          gradientWidth={200}
          gradient={true}
          gap-x-0
          backgroundGradient="linear-gradient(to right, rgb(243 244 246), bg-transparent)"
        >
          <div className="flex justify-center gap-x-5 ">
            <Card
              avatarSrc={Raymond}
              showCheckIcon={true}
              name="@raymondchins"
              stats="1.6M"
              views="+5M"
              followers="+576k"
            />
            <Card
              avatarSrc={Gracia}
              name="Gracia Carolinee"
              stats="80.5K"
              views="+1.2M"
              followers="+5.2k"
            />
            <Card
              avatarSrc={Razan}
              name="Razan Musyaffa"
              stats="3.5K"
              views="+2.3M"
              followers="+3.5K"
            />
            <Card
              avatarSrc={F}
              name="F Project HR"
              stats="4.53K"
              views="+54K"
              followers="187"
            />
            <Card
              avatarSrc={Faiz}
              name="Faiz Daffa"
              stats="70.9K"
              views="+5.4K"
              followers="1.2K"
            />
            <Card
              avatarSrc={Doddy}
              name="Doddy Bicara Investasi"
              stats="15.2K"
              views="+523K"
              followers="+4K"
            />
            <Card
              avatarSrc={Cici}
              name="Cici Otomotif"
              stats="318K"
              views="+1.2M"
              followers="+5.2K"
            />
            <Card
              avatarSrc={Alvi}
              showCheckIcon={true}
              name="Alvi Syahrin"
              stats="754K"
              views="+1.7M"
              followers="+53K"
            />
            <Card
              avatarSrc={Training}
              name="Yuk Training Academy"
              stats="10.3K"
              views="+631K"
              followers="+7.2K"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Funfact;
