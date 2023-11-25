import React, {useEffect} from "react";
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
    <>
      <div id="funfact"></div>
      <div
        data-aos="fade-up"
        className="flex justify-center items-center mt-48"
      >
        <div className="w-[794px] flex flex-col">
          <img src={Pen4} alt="pen4" width={50} className="ms-auto" />
          <p className="font-bold text-5xl z-20">
            Fun fact tentang Rakyfactory?
          </p>
          <img
            src={Pen5}
            alt="pen4"
            width={300}
            className="ms-auto mr-20 z-10"
          />

          <p className="text-xl text-T1 w-full mt-4">
            Rakyfactory meraih apresiasi dari pemerintah dan dukungan
            universitas, sekaligus telah bermitra dengan sejumlah Content
            Creator.
          </p>
        </div>
        <div className="flex items-center">
          <img src={Wmp} width={200} alt="wmp" />
          <img src={Unnes} width={170} alt="unnes" />
        </div>
      </div>
      <Marquee
        className="w-full h-28 mt-24 gap-x-5"
        autoFill={true}
        pauseOnClick
        gradient={true}
        direction="left"
        gap-x-0
        backgroundGradient="linear-gradient(to right, white, white)"
      >
        <div className="flex justify-center gap-x-5 ">
          <Card
            avatarSrc={Raymond}
            showCheckIcon={true}
            name="Raymond Chin"
            stats="1.6M+"
            views="+5m views"
            followers="+576k followers gained"
          />
          <Card
            avatarSrc={Gracia}
            name="Gracia Carolinee"
            stats="80.5k+"
            views="+1.2m views"
            followers="+5.2k followers gained"
          />
          <Card
            avatarSrc={Razan}
            name="Razan Musyaffa"
            stats="3.5k+"
            views="+2.3m views"
            followers="+3.5k followers gained"
          />
          <Card
            avatarSrc={F}
            name="F Project HR"
            stats="4.53k+"
            views="+54k views"
            followers="187 followers gained"
          />
          <Card
            avatarSrc={Faiz}
            name="Faiz Daffa"
            stats="70.9k+"
            views="+5.4k views"
            followers="1.2k followers gained"
          />
        </div>
      </Marquee>
      <Marquee
        className="w-full h-28 gap-x-5 "
        autoFill={true}
        pauseOnClick
        gradient={true}
        overflow="hidden"
        height="150px"
        direction="right"
      >
        <div className="flex">
          <div className="flex gap-x-5">
            <Card
              avatarSrc={Doddy}
              name="Doddy Bicara Investasi"
              stats="15.2k+"
              views="+523k views"
              followers="+4k followers gained"
            />
            <Card
              avatarSrc={Cici}
              name="Cici Otomotif"
              stats="80.5k+"
              showStarter={true}
              views="+1.2m views"
              followers="+5.2k followers gained"
            />
            <Card
              avatarSrc={Alvi}
              showCheckIcon={true}
              name="Alvi Syahrin"
              stats="754k+"
              views="+1.7m views"
              followers="+53k followers gained"
            />
            <Card
              avatarSrc={Training}
              name="Yuk Training Academy"
              stats="10.3k+"
              showStarter={true}
              views="+631k views"
              followers="+7.2k followers gained"
            />
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default Funfact;
