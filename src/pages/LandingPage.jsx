import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import { IoInfinite } from "react-icons/io5";
import {
  AiOutlineInfoCircle,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Pen1 from "../assets/atas.png";
import Pen2 from "../assets/pesan.png";
import Pen3 from "../assets/konten.png";
import Image5 from "../assets/bro.png";
import Wmp from "../assets/wmp.png";
import Partner from "../assets/brainstorm.png";
import Subs from "../assets/emergency-button.png";
import Kanban from "../assets/kanban.png";
import Wallet from "../assets/wallet.png";
import Deadline from "../assets/deadline.png";
import Checklist from "../assets/checklist.png";
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
import Prototype from "../assets/prototype.png";
import Raky from "../assets/Raky.png";
import Card from "../components/Card";
import Faq from "../components/Faq";
import Pen4 from "../assets/Pen4.png";
import Pen5 from "../assets/Pen5.png";
import Pen8 from "../assets/Pen8.png";
import WhatsappLogo from "../components/Whatsapp";
import Pen9 from "../assets/Pen9.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollUpButton from "../components/ScrollUp";
import Upcoming from "../components/Upcoming";
const LandingPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div id="hero" className="flex flex-col text-center ">
        <p className="font-bold text-4xl lg:text-[55px] mt-40 z-20">
          We help your content growth more easily
        </p>
        <img
          id="pen1"
          className=" ms-auto ml-72 lg:mr-40 lg:mt-1 z-10"
          src={Pen1}
          width={320}
          alt="pencil"
          style={
            window.matchMedia("(max-width: 768px)").matches
              ? { width: 220, marginRight: 90 }
              : {}
          }
        />
        <p className="font-medium text-T1 text-sm text-center w-80 ml-8 lg:ml-60 lg:w-8/12 my-10 px-4 lg:text-[22px] lg:leading-8 lg:px-2">
          Dapatkan tim konten pribadimu untuk akses permintaan konten sebanyak
          mungkin dengan cara berlangganan. Dapat dijeda atau batalkan kapan
          saja.
        </p>
        <div className="flex gap-x-5 justify-center mt-3">
          <a
            href="#paket"
            className="bg-P2  text-white font-medium rounded-md px-5 py-3 "
          >
            Lihat paket
          </a>
          <button className="bg-[#F4F2FD] border border-P2 text-P2 border-opacity-10 font-medium rounded-md px-5 py-3">
            Konsultasi Gratis
          </button>
        </div>
        <p className="text-[#7C7C7C] font-medium text-xs mt-6 flex justify-center gap-x-2 items-center">
          <HiSparkles className="text-[#7C7C7C] " size={20} />
          Tanpa kontrak. Tanpa biaya tambahan.
        </p>
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
                  konten, ngedit, susah bagi waktunya. Butuh tim biar bisa
                  bantuin dan jadi temen diskusi, tapi susah nyari yang cocok
                  dan malah bikin nambah pusing kelolanya..."
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
        <div id="fitur"></div>
        <div
          data-aos="fade-up"
          className="flex flex-col h-full text-center justify-center items-center mt-48"
        >
          <h2 className="font-bold text-5xl">
            Kami hadir sebagai partner kontenmu
          </h2>
          <img src={Pen5} className="ms-auto mr-72" width={400} alt="" />
          <p className="font-medium text-xl mt-10 text-T1">
            Kami menyediakan tim seperti content strategist, writer, dan video
            editor bertalenta untuk <br /> mengembangkan kontenmu. Tanpa pusing
            kelola tim. Tanpa biaya tambahan. Tanpa kontrak.
          </p>
          <div className="w-full  flex flex-wrap justify-center items-center mt-24 px-2 gap-10">
            <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
              <div className="flex justify-center items-center  gap-x-10">
                <img src={Partner} alt="subs icon" width={100} />
                <div className="flex flex-col text-start gap-y-3">
                  <p className="font-semibold text-[24px]">
                    Your Content Partner
                  </p>
                  <p className="w-60 text-xs text-T1">
                    Dapatkan tim konten bertalenta secara personal, mereka akan
                    satu grup WhatsApp denganmu.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
              <div className="flex justify-center items-center  gap-x-10">
                <img src={Subs} alt="subs icon" width={100} />
                <div className="flex flex-col text-start gap-y-3">
                  <p className="flex items-center gap-x-2 font-semibold text-[24px]">
                    Subscription-pause
                    <AiOutlineInfoCircle size={15} className="text-P2" />
                  </p>
                  <p className="w-60 text-xs text-T1">
                    Berlangganan yang dapat dijeda jika tidak ada permintaan
                    yang diproses, atau batalkan kapan saja.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
              <div className="flex justify-center items-center  gap-x-10">
                <img src={Kanban} alt="subs icon" width={100} />
                <div className="flex flex-col text-start gap-y-3">
                  <p className="font-semibold text-[24px]">Unlimited Request</p>
                  <p className="w-60 text-xs text-T1">
                    Berlangganan paket dan request konten sesuai kebutuhanmu.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
              <div className="flex justify-center items-center  gap-x-10">
                <img src={Wallet} alt="subs icon" width={100} />
                <div className="flex flex-col text-start gap-y-3">
                  <p className="font-semibold text-[24px]">
                    Fixed subscription fee
                  </p>
                  <p className="w-60 text-xs text-T1">
                    Tidak ada biaya tambahan! Bayar dengan biaya tetap yang sama
                    setiap periode.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
              <div className="flex justify-center items-center  gap-x-10">
                <img src={Deadline} alt="subs icon" width={100} />
                <div className="flex flex-col text-start gap-y-3">
                  <p className="font-semibold text-[24px]">Fast Delivery</p>
                  <p className="w-60 text-xs text-T1">
                    Dapatkan updates permintaan konten kamu satu per satu hanya
                    dalam beberapa hari.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[36%]  h-52 flex justify-center items-center bg-white py-14 px-14 rounded-xl border border-T1 border-opacity-5 shadow-md">
              <div className="flex justify-center items-center  gap-x-10">
                <img src={Checklist} alt="subs icon" width={100} />
                <div className="flex flex-col text-start gap-y-3">
                  <p className="flex items-center gap-x-2 font-semibold text-[24px] ">
                    Unlimited revisions
                    <IoInfinite className="text-P2" />
                  </p>
                  <p className="w-60 text-xs text-T1">
                    Tim konten kamu akan terus merevisi sampai kamu puas! Tanpa biaya tambahan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="funfact"></div>
      <div
        data-aos="fade-up"
        className="flex justify-center items-center mt-48"
      >
        <div className="w-[794px]">
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
      <div id="yourcontentpartner"></div>
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center mt-48 "
      >
        <div className="flex flex-col">
          <p className="font-bold text-5xl text-center z-20">
            Dapatkan tim konten pribadimu
          </p>
          <img src={Pen3} width={500} className="ml-72 z-10" alt="pen3" />
          <p className="font-medium text-xl text-T1 mt-5 text-center  w-[825px]">
            Kami akan membantu membuat konten bernilai secara konsisten, yang{" "}
            <br />
            membawa kamu mencapai tujuan sebagai Content Creator
          </p>
        </div>
        <div className="flex mt-14 gap-x-14">
          <div className=" w-80 h-96 ">
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
                <div className="flex justify-start items-center gap-x-1 mt-5">
                  <div className="bg-[#f6f6f6] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                    01
                  </div>
                  <p className="font-bold text-sm text-start">
                    Mulai berlangganan
                  </p>
                </div>
                <img src={Image1} width={150} className="mx-auto mt-5" />
                <p className="w-60 text-xs text-start px-3 mt-3.5 mb-10">
                  Berlangganan untuk satu periode dengan opsi jeda jika tidak
                  ada permintaan konten. Biaya tetap dan tanpa kontrak.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className=" w-80 h-96">
            <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
              <div className="flex justify-start items-center gap-x-3 mt-5">
                <div className="bg-[#f6f6f6] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                  02
                </div>
                <p className="font-bold text-sm flex items-center gap-x-2">
                  Gabung di Rakyclub
                  <AiOutlineInfoCircle size={15} className="text-P2" />{" "}
                </p>
              </div>
              <img src={Image2} width={150} className="mx-auto mt-5" />
              <p className="w-60 text-xs text-start px-3 mt-3.5 mb-10">
                Kamu dan tim konten terlibat akan berada dalam satu grup
                WhatsApp untuk berdiskusi dan membuat konten bersama.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className=" w-80 h-96">
            <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
              <div className="flex justify-start items-center gap-x-3 mt-5">
                <div className="bg-[#f6f6f6] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                  03
                </div>
                <p className="font-bold text-sm">Tumbuh bersama</p>
              </div>
              <img src={Image3} width={150} className="mx-auto mt-5" />
              <p className="w-60 text-xs text-start px-3 mt-3.5 mb-10">
                Kamu dan tim konten terlibat akan berada dalam satu grup
                WhatsApp untuk berdiskusi dan membuat konten bersama.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sistem"
        data-aos="fade-up"
        className="flex flex-col justify-center items-center mt-14"
      >
        <div className="relative">
          <p className="font-medium text-xl w-[764px] text-center relative z-10">
            <span className="bg-P1">Dengan berlangganan,</span> kamu bisa
            request konten sebanyak mungkin. Kalau lagi nggak butuh, kamu bisa
            jeda langganan kapan pun.
          </p>
        </div>

        <p className=" flex items-center gap-x-1 text-sm my-2 font-medium mt-5 ">
          Baru tersedia{" "}
          <span className="bg-P1 text-P2 text-xs px-1 border-2 border-P3 rounded-md font-semibold m">
            Beta Version
          </span>
          <a
            href="https://trello.com/b/c9RKe2pl/beta-version-prototype"
            target="_blank"
            className="flex items-center gap-x-1 text-P2 font-medium"
          >
            Pelajari selengkapnya{" "}
            <IoMdArrowForward size={16} className="text-P2 font-bold" />{" "}
          </a>
        </p>
        <p className="absolute bg-P2 rounded-md px-3 py-2 text-white font-bold text-lg -rotate-3 top-36 left-32 shadow-md z-20">
          FULL VERSION PROTOTYPE
        </p>
        <img src={Prototype} width={1200} className="mt-16" alt="prototype" />
      </div>
      <div id="paket"></div>
      <div className="flex justify-center items-center mt-48">
        <div
          data-aos="fade-up"
          className="relative flex flex-col justify-center items-center"
        >
          <p className="font-bold text-5xl">
            Pilih paket yang sesuai untuk kamu
          </p>
          <img src={Pen8} width={450} className="ms-auto" alt="" />
          <p className="font-medium mt-3 text-xl text-T1">
            Biaya tetap. Tanpa kontrak. Tanpa pusing kelola tim
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-10 gap-x-5 ">
        <p
          className={`ms-3 text-lg ${
            isChecked ? "font-medium text-gray-300" : " font-semibold text-B1"
          }`}
        >
          Starter level
        </p>

        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleToggleChange}
          />
          <div class="w-11 h-6  bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-P2"></div>
          <span
            className={`ms-3 text-lg ${
              isChecked ? "font-semibold text-P2" : "font-medium text-P3"
            }`}
          >
            Creator level
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div data-aos="fade-up" className="flex flex-wrap  space-x-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-start">
            <h2 className="flex  items-center gap-x-3 text-lg font-semibold">
              Script Writing Team <AiOutlineInfoCircle className="text-P2" />
            </h2>
            <p class="text-lg font-semibold mb-2">
              {isChecked ? "Rp3,199 jt" : "Rp2,199 jt"}
              <span className="text-xs font-normal">
                {isChecked ? "/ periode 31 hari" : "/ periode 15 hari"}
              </span>
            </p>
            <p className="text-xs">
              Dapatkan tim script writer yang <br />
              bertalenta sesuai niche kontenmu.
            </p>
            <hr className="my-5" />
            <ul className="text-left text-sm mb-6">
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus ide-ide bank konten
              </li>
              <li class="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Termasuk riset materi konten
              </li>
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                1 permintaan dalam 1 waktu
              </li>
              <li className="flex items-center gap-x-2 mb-2 ">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Termasuk fitur tambahan
                <AiOutlineInfoCircle className="text-P2" />
              </li>
            </ul>
            <button className="w-full bg-P2 text-white py-2 px-4 rounded-md hover:bg-[#280598] focus:outline-none focus:ring focus:border-purple-300">
              Join Waitlist
            </button>
            <p className="text-xs text-center mt-3">
              Jeda atau batalkan kapanpun
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-start">
            <p className="absolute bg-P1 px-1 py-1.5 text-P2 font-semibold border-2 border-P3 rounded-md text-xs  -top-1 left-72 uppercase shadow-md">
              Paling dibutuhkan
            </p>
            <h2 className="flex items-center gap-x-3 text-lg font-semibold">
              Video Editing Team <AiOutlineInfoCircle className="text-P2" />
            </h2>
            <p class="text-lg font-semibold mb-2">
              {isChecked ? "Rp3,199 jt" : "Rp2,199 jt"}
              <span className="text-xs font-normal">
                {isChecked ? "/ periode 31 hari" : "/ periode 15 hari"}
              </span>
            </p>
            <p className="text-xs">
              Dapatkan tim video editor yang <br /> bertalenta sesuai gaya
              visualmu.
            </p>
            <hr className="my-5" />
            <ul className="text-left text-sm mb-6">
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus pemilihan klip YT{" "}
                <AiOutlineInfoCircle className="text-P2" />
              </li>
              <li class="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Bonus visual-content style{" "}
                <AiOutlineInfoCircle className="text-P2" />
              </li>
              <li className="flex items-center gap-x-2 mb-2">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                1 permintaan dalam 1 waktu
              </li>
              <li className="flex items-center gap-x-2 mb-2 ">
                <div className="bg-P1 rounded-full px-1 py-1">
                  <FaCheck className=" text-P2 " />
                </div>
                Termasuk fitur tambahan
                <AiOutlineInfoCircle className="text-P2" />
              </li>
            </ul>
            <button className="w-full bg-P2 text-white py-2 px-4 rounded-md hover:bg-[#280598] focus:outline-none focus:ring focus:border-purple-300">
              Join Waitlist
            </button>
            <p className="text-xs text-center mt-3">
              Jeda atau batalkan kapanpun
            </p>
          </div>
          {isChecked && (
            <div className="bg-white p-6 rounded-lg shadow-lg text-start">
              <p className="absolute bg-P2 px-1 py-2 text-P1 font-semibold rounded-md text-xs  -top-1 -right-5 uppercase shadow-md">
                HEMAT 900 RIBU! 🤑
              </p>
              <h2 className="flex items-center gap-x-3 text-lg font-semibold">
                Premium Bundling <AiOutlineInfoCircle className="text-P2" />
              </h2>
              <p class="text-lg font-semibold mb-2">
                Rp5,499 jt{" "}
                <span className="text-xs font-normal">/ periode 31 hari</span>
              </p>
              <p className="text-xs">
                Dapatkan tim video editor dan script <br /> writer untuk
                menghemat waktumu!
              </p>
              <hr className="my-5" />
              <ul className="text-left text-sm  mb-6">
                <li className="flex items-center gap-x-2 mb-2">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  Semua bonus di paket satuan
                </li>
                <li class="flex items-center gap-x-2 mb-2">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  Bonus thumbnail IG Reels
                </li>
                <li className="flex items-center gap-x-2 mb-2">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  1 permintaan dalam 1 waktu{" "}
                  <AiOutlineInfoCircle className="text-P2" />
                </li>
                <li className="flex items-center gap-x-2 mb-2 ">
                  <div className="bg-P1 rounded-full px-1 py-1">
                    <FaCheck className=" text-P2 " />
                  </div>
                  Termasuk fitur tambahan
                  <AiOutlineInfoCircle className="text-P2" />
                </li>
              </ul>
              <button className="w-full bg-P2 text-white py-2 px-4 rounded-md hover:bg-[#280598] focus:outline-none focus:ring focus:border-purple-300">
                Join Waitlist
              </button>
              <p className="text-xs text-center mt-3">
                Jeda atau batalkan kapanpun
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="flex justify-center items-center mt-10 font-medium text-sm">
        Butuh lebih banyak konten?
        <span className="flex items-center gap-x-2 ml-1 font-medium text-sm text-P2">
          Upgrade 2 permintaan dalam 1 waktu <IoMdArrowForward />
        </span>
      </p>
      <div id="faq"></div>
      <div data-aos="fade-up" className="w-full py-32">
        <div className="w-9/12 rounded-xl mx-auto h-full">
          <p className="font-bold flex justify-center gap-x-5 text-5xl mb-14 pt-9">
            {" "}
            Pertanyaan umum
          </p>
          <img
            src={Pen9}
            alt="pen9"
            className="absolute top-40 left-96"
            width={100}
          />

          <Faq
            question={"Kenapa saya harus berlangganan?"}
            answer={
              "Kami memahami bahwa mungkin Anda merasa terbebani jika kami meminta Anda untuk menyiapkan sejumlah permintaan konten sekaligus untuk memenuhi jumlah paketan seperti layanan pada umumnya.Terlebih lagi, layanan seperti ini biasanya freelance, yang mungkin menimbulkan kesan kesulitan dalam melakukan transaksi berulang ketika menggunakan layanan serupa. Oleh karena itu, kami berupaya memberikan fleksibilitas permintaan konten, pembayaran, dan standar konten dengan menghadirkan fitur berlangganan jeda pada layanan kami. Tidak hanya itu, setiap paket dalam langganan ini mencakup permintaan tanpa batas, revisi tanpa batas, dan biaya berlangganan yang tetap. Selain itu, model ini dapat menjadi sumber motivasi untuk mencapai konsistensi dalam pembuatan konten, karena kita semua tahu bahwa kunci kesuksesan dalam konten adalah konsistensi."
            }
          />
          <Faq
            question={
              "Apa bedanya jika saya langsung memesan 30 konten sekaligus secara freelance?"
            }
            answer={
              "Ada beberapa perbedaan signifikan antara memesan 30 konten sekaligus secara freelance dan menggunakan layanan berlangganan kami. Pertama, biaya yang kami tawarkan adalah FLAT, yang berarti tidak akan ada biaya tambahan yang muncul secara mendadak. Selain itu, revisi juga kami sediakan tanpa biaya tambahan, memberikan fleksibilitas tanpa batas dalam mengatasi perubahan yang mungkin diperlukan. Begitu juga dengan cara berlangganan, kami memberikan nilai tambah yang berbeda. Kami beroperasi sebagai sebuah tim untuk Anda, yang bertujuan untuk menciptakan kolaborasi yang lebih efisien. Dengan menjadi bagian dari satu WhatsApp grup bersama Anda, Anda akan merasa seolah memiliki tim konten sendiri, memudahkan koordinasi dan komunikasi.Kami juga menawarkan fleksibilitas fitur jeda, sehingga Anda dapat menggunakan layanan kami sesuai kebutuhan Anda. Tak perlu khawatir untuk menyiapkan 30 konten sekaligus, berikan permintaan konten secara berkala dan jeda langganan jika tidak ada kebutuhan."
            }
          />
          <Faq
            question={"Bagaimana cara kerja satu permintaan dalam satu waktu?"}
            answer={
              "Sama seperti antrean streaming satu lagu di Spotify dalam satu waktu, permintaan dikerjakan satu per satu hingga selesai."
            }
          />
          <Faq
            question={"Bagaimana cara kerja fitur jeda?"}
            answer={
              "Kami memahami Anda mungkin tidak memiliki cukup permintaan untuk diisi sepanjang berlangganan. Mungkin saat ini Anda hanya memiliki satu atau dua permintaan konten. Di situlah menjeda langganan Anda berguna. Siklus penagihan didasarkan pada periode 31 hari. Katakanlah Anda mendaftar dan menggunakan layanan ini selama 21 hari, lalu memutuskan untuk menjeda langganan Anda. Ini berarti siklus penagihan akan dijeda dan Anda memiliki sisa layanan 10 hari untuk digunakan kapan saja di masa mendatang."
            }
          />
          <Faq
            question={"Bagaimana jika saya hanya mempunyai satu permintaan?"}
            answer={
              "Tidak apa-apa. Anda dapat menjeda langganan Anda setelah selesai dan kembali lagi ketika Anda memiliki kebutuhan konten lagi. Tidak perlu menyia-nyiakan sisa langganan Anda."
            }
          />
          <Faq
            question={
              "Kenapa saya tidak memperkerjakan freelancer sendiri saja?"
            }
            answer={
              "Bisa saja, tapi mengelola orang itu pusing. Proses mencarinya, hasil pengerjaannya, bahkan komunikasinya belum tentu cocok dengan Anda. Kami menghilangkan semua risiko dengan mengelola semua hal untuk Anda. Dengan paket bulanan, Anda dapat menjeda dan melanjutkan langganan sesering yang diperlukan untuk memastikan Anda hanya membayar tim konten Anda saat pekerjaan tersedia untuk mereka."
            }
          />
          <Faq
            question={"Apakah Anda yakin ini membantu saya berkembang?"}
            answer={
              "Setiap konten yang sukses adalah konten yang relevan bagi audiensnya. Kami tidak bisa menjamin pertumbuhan, tapi kami pastikan membantu Anda membuat konten terbaik. Kami memiliki tim konsultasi berpengalaman untuk berdiskusi dengan Anda dalam perencanaan konten Anda."
            }
          />
          <Faq
            question={
              "Apakah ada batasan berapa banyak permintaan yang dapat saya ajukan?"
            }
            answer={
              "Setelah berlangganan, Anda dapat menambahkan permintaan ke antrean sebanyak mungkin, dan permintaan tersebut akan dikirimkan satu per satu (dua sekaligus jika Anda membeli paket Exclusive) hingga semuanya selesai."
            }
          />
          <Faq
            question={"Berapa lama saya bisa menerima konten saya?"}
            answer={
              "Sebagian besar permintaan diselesaikan hanya dalam dua hari atau kurang. Namun, permintaan yang lebih kompleks bisa memakan waktu lebih lama."
            }
          />
          <Faq
            question={"Berapa banyak video yang saya dapatkan?"}
            answer={
              "Dengan rata-rata waktu penyelesaian dalam 2 hari, pelanggan biasanya menerima sekitar 16 video. Namun, jumlah ini dapat bervariasi tergantung pada tingkat kesulitan dari permintaan Anda. Jika permintaan videonya relatif mudah, maka kami dapat menyelesaikannya lebih cepat, dan Anda mungkin akan menerima lebih banyak video dalam periode yang sama."
            }
          />
        </div>
      </div>
      <footer className="mx-auto bg-F1 text-center text-black lg:text-left">
        <div className="ml-40 pt-14">
          <img src={Raky} width={250} alt="logo raky" />
        </div>
        <div className="mx-10 ml-40 mt-5  text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-sm">
              <h6 className="mb-4  flex items-center justify-center font-semibold md:justify-start">
                PT Rakyfactory Digital Group
              </h6>
              <p className="mb-2">
                <a href="#!" className="">
                  Tentang kami
                </a>
              </p>
              <p className="mb-2">
                <li className="flex items-center gap-2">
                  Affiliates <Upcoming label={"Upcoming"} />
                </li>
              </p>
              <p className="mb-2">
                <li href="#!" className="flex items-center gap-2">
                  Program CSR <Upcoming label={"Upcoming"} />
                </li>
              </p>
              <p className="mb-2">
                <li href="#!" className="flex items-center gap-2">
                  Karier <Upcoming label={"Upcoming"} />
                </li>
              </p>
            </div>
            <div className="text-sm ">
              <h6 className="mb-4 text-sm flex justify-center font-semibold md:justify-start">
                Produk
              </h6>
              <p className="mb-2">
                <li href="#!" class="">
                  Script writing team
                </li>
              </p>
              <p className="mb-2">
                <li href="#!" class="">
                  Video editing team
                </li>
              </p>
              <p className="mb-2">
                <li href="#!" class="flex items-center gap-2">
                  Talent manager <Upcoming label={"Upcoming"} />
                </li>
              </p>
              <p className="mb-2">
                <li href="#!" class="flex items-center gap-2">
                  Rakyfactory AI ✦⁺ <Upcoming label={"Upcoming"} />
                </li>
              </p>
            </div>
            <div className="text-sm ">
              <h6 className="mb-4 text-sm flex justify-center font-semibold md:justify-start">
                Panduan
              </h6>
              <p className="mb-2">
                <li href="#!">Biaya langganan</li>
              </p>
              <p className="mb-2">
                <li href="#!">Subscription-pause option</li>
              </p>
              <p className="mb-2">
                <li href="#!">Studi kasus</li>
              </p>
              <p>
                <li href="#!" className="flex items-center gap-2">
                  Komunitas <Upcoming label={"Upcoming"} />
                </li>
              </p>
            </div>
            <div className="text-sm ">
              <h6 class="mb-4 flex justify-center font-semibold md:justify-start">
                Hubungi kami
              </h6>
              <p class="mb-2 flex items-center justify-center md:justify-start">
                Semarang, Indonesia
              </p>
              <p class="mb-2 flex items-center justify-center md:justify-start">
                +62 819-4659-3466 (WA Only)
              </p>
              <p class="mb-2 flex items-center justify-center md:justify-start">
                support@rakyfactory.com
              </p>
              <div className="flex mt-5 gap-x-3">
                <a
                  href="https://www.linkedin.com/company/rakyfactory/"
                  target="_blank"
                  className="bg-black p-1 rounded-full"
                >
                  <AiFillLinkedin className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/rakyfactory/"
                  target="_blank"
                  className="bg-black p-1 rounded-full"
                >
                  <AiOutlineInstagram className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-8/12 mx-auto mt-10" />
        <div class="bg-F1 p-6 text-center">
          <span className="text-F2 text-sm">Copyright © 2023 All rights reserved</span>
        </div>
      </footer>
      <div className="flex flex-col gap-y-4 ">
        <ScrollUpButton />
        <WhatsappLogo />
      </div>
    </>
  );
};

export default LandingPage;
