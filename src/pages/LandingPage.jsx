import React, { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
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
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollUpButton from "../components/ScrollUp";
const LandingPage = () => {
  const [isChecked, setIsChecked] = useState(false);

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
        <p className="font-bold text-xl lg:text-5xl mt-32">
          We help your content growth more easily
        </p>
        <img
          id="pen1"
          className="ms-auto ml-72 lg:mr-52"
          src={Pen1}
          width={300}
          alt="pencil"
          style={
            window.matchMedia("(max-width: 768px)").matches
              ? { width: 100 }
              : {}
          }
        />
        <p className="font-medium text-sm my-10 px-4 lg:text-xl lg:px-2">
          Dapatkan tim konten pribadimu untuk akses permintaan konten sebanyak
          mungkin <br /> dengan cara berlangganan. Dapat dijeda atau batalkan
          kapan saja.
        </p>
        <div className="flex gap-x-5 justify-center mt-3">
          <a
            href="#paket"
            className="bg-P2  text-white font-medium rounded-md px-5 py-3 "
          >
            Lihat paket
          </a>
          <button className="bg-[#F4F2FD] text-[#7A5AE1] font-medium rounded-md px-5 py-3">
            Konsultasi Gratis
          </button>
        </div>
        <p className="text-xs mt-5 flex justify-center items-center opacity-40">
          <BsStars color="black" size={20} />
          Tanpa kontrak. Tanpa biaya tambahan.
        </p>
        <div
          data-aos="fade-up"
          className="w-[1232px] h-[352px] rounded-lg bg-white mx-auto mt-48 text-black shadow-lg relative flex"
        >
          <div
            id="pesan"
            className="w-[649px] flex flex-col items-start ml-20 mt-14 mb-44"
          >
            <p className="font-bold text-3xl ">
              Pesan dari pak CEO Rakyfactory? 👀
            </p>
            <img src={Pen2} className="mb-4" width={170} alt="pen2" />
            <p className="text-base text-start leading-[32px]">
              "Sebagai konten kreator pasti ada hambatannya. Mikirin ide konten,
              ngedit, susah bagi waktunya. Butuh tim biar bisa bantuin dan jadi
              temen diskusi, tapi susah nyari yang cocok dan malah bikin nambah
              pusing kelolanya..."
            </p>
            <button className="text-purple-500 flex items-center gap-x-3 mt-8 mb-20">
              Lihat selengkapnya
              <BsArrowRight size={20} className="text-purple-500" />
            </button>
          </div>
          <div className="ml-24 mb-5 flex justify-center items-center">
            <img src={Image5} alt="avatar" width={350} />
          </div>
        </div>
        <div
          id="fitur"
          data-aos="fade-up"
          className="flex flex-col h-full text-center justify-center items-center mt-48"
        >
          <h2 className="font-bold text-5xl">
            Kami hadir sebagai partner kontenmu
          </h2>
          <p className="font-medium text-xl mt-10">
            Kami menyediakan tim seperti content strategist, writer, dan video
            editor bertalenta untuk <br /> mengembangkan kontenmu. Tanpa pusing
            kelola tim. Tanpa biaya tambahan. Tanpa kontrak.
          </p>
          <a
            href="#paket"
            className="bg-P2 hover:bg-[#280598] text-white px-4 py-2 mt-10 rounded-md cursor-pointer"
          >
            Lihat paket berlangganan
          </a>
          <div className="flex flex-wrap justify-center items-center mt-24 px-2 gap-x-40">
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col justify-center items-center gap-x-3 mt-5 ml-10">
                <img src={Partner} width={150} className="mx-auto mt-5" />
                <p className="font-bold text-xl text-center mt-4">
                  Your content partner
                </p>
                <p className="text-xs text-center mb-10">
                  Kamu dan tim konten terlibat akan berada dalam satu grup
                  WhatsApp untuk berdiskusi dan membuat konten bersama.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col justify-center items-center gap-x-3 mt-5 ml-10">
                <img src={Subs} width={150} className="mx-auto mt-5" />
                <p className="font-bold text-xl text-center mt-4">
                  Subscription-pause option
                </p>
                <p className="text-xs text-center mt-3.5 mb-10">
                  Berlangganan yang dapat dijeda jika tidak ada permintaan yang
                  diproses, atau batalkan kapan saja.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col justify-center items-center gap-x-3 mt-5 ml-10">
                <img src={Kanban} width={150} className="mx-auto mt-5" />
                <p className="font-bold text-xl text-center mt-4">
                  Unlimited requests
                </p>
                <p className="text-xs text-center mt-3.5 mb-10">
                  Berlangganan paket dan request konten sesuai kebutuhanmu.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col justify-center items-center gap-x-3 mt-5 ml-10">
                <img src={Wallet} width={150} className="mx-auto mt-5" />
                <p className="font-bold text-xl text-center mt-4">
                  Fixed subscription fee
                </p>
                <p className="text-xs text-center mt-3.5 mb-10">
                  Tidak ada biaya tambahan! Bayar dengan biaya tetap yang sama
                  setiap periode.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col justify-center items-center gap-x-3 mt-5 ml-10">
                <img src={Deadline} width={150} className="mx-auto mt-5" />
                <p className="font-bold text-xl text-center mt-4">
                  Fast delivery
                </p>
                <p className="text-xs text-center mt-3.5 mb-10">
                  Dapatkan updates permintaan konten kamu satu per satu hanya
                  dalam beberapa hari.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className=" w-80 h-96">
              <div className="flex flex-col justify-center items-center gap-x-3 mt-5 ml-10">
                <img src={Checklist} width={150} className="mx-auto mt-5" />
                <p className="font-bold text-xl text-center mt-4">
                  Unlimited revisions
                </p>
                <p className="text-sm text-center mt-3.5 mb-10">
                  Tim konten kamu akan terus melakukan revisi sampai kamu puas!
                  Tanpa biaya tambahan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="funfact"
        data-aos="fade-up"
        className="flex justify-center items-center mt-48"
      >
        <div className="w-[794px]">
          <p className="font-bold text-5xl">Fun fact tentang Rakyfactory?</p>

          <p className="text-xl w-full mt-4">
            Rakyfactory meraih apresiasi dari pemerintah dan dukungan
            universitas, sekaligus telah bermitra dengan sejumlah Content
            Creator 🫶🏻
          </p>
        </div>
        <div className="flex items-start">
          <img src={Wmp} width={200} alt="wmp" />
          <img src={Unnes} width={180} alt="unnes" />
        </div>
      </div>
      <Marquee
        className="h-28 mt-24 gap-x-5"
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
        className="h-28 gap-x-5"
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
      <div
        id="yourcontentpartner"
        data-aos="fade-up"
        className="flex flex-col justify-center items-center mt-48"
      >
        <div className="flex flex-col">
          <p className="font-bold text-5xl text-center z-20">
            Dapatkan tim konten pribadimu
          </p>
          <img src={Pen3} width={400} className="ml-80 z-10" alt="pen3" />
          <p className="font-medium text-xl mt-5 text-center  w-[825px]">
            Kami akan membantu membuat konten bernilai secara konsisten, yang{" "}
            <br />
            membawa kamu mencapai tujuan sebagai Content Creator 🚀
          </p>
        </div>
        <div className="flex mt-48">
          <div className=" w-72 h-96">
            <div
              data-aos="fade-right"
              className="flex flex-col bg-white rounded-md shadow-md justify-center items-center mt-5 ml-10"
            >
              <div className="flex items-center gap-x-2 mt-5">
                <div className="bg-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
                  01
                </div>
                <p className="font-bold text-sm text-center">
                  Mulai berlangganan
                </p>
              </div>
              <img src={Image1} width={150} className="mx-auto mt-5" />
              <p className="text-xs text-start px-3 mt-3.5 mb-10">
                Berlangganan untuk satu periode dengan opsi jeda jika tidak ada
                permintaan konten. Biaya tetap dan tanpa kontrak.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className=" w-72 h-96">
            <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
              <div className="flex items-center gap-x-2 mt-5">
                <div className="bg-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
                  02
                </div>
                <p className="font-bold text-sm text-center">
                  Gabung di Rakyclub
                </p>
              </div>
              <img src={Image2} width={150} className="mx-auto mt-5" />
              <p className="text-xs text-start px-3 mt-3.5 mb-10">
                Kamu dan tim konten terlibat akan berada dalam satu grup
                WhatsApp untuk berdiskusi dan membuat konten bersama.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className=" w-72 h-96">
            <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center gap-x-3 mt-5 ml-10">
              <div className="flex items-center gap-x-2 mt-5">
                <div className="bg-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
                  03
                </div>
                <p className="font-bold text-sm text-center">Tumbuh bersama</p>
              </div>
              <img src={Image3} width={150} className="mx-auto mt-5" />
              <p className="text-xs text-start px-3 mt-3.5 mb-10">
                Bagikan konten pertama dan amati perkembangannya. Kita akan
                terus mengevaluasi bersama secara berkala.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sistem"
        data-aos="fade-up"
        className="flex flex-col justify-center items-center mt-16"
      >
        <div className="relative">
          <p className="font-medium text-xl w-[764px] text-center relative z-10">
            Dengan berlangganan, kamu bisa request konten sebanyak mungkin.
            Kalau lagi nggak butuh, kamu bisa jeda langganan kapan pun ⏳
          </p>
          <p className="absolute bg-P2 rounded-md px-3 py-2 text-white font-semibold text-sm top-1 -left-10 -rotate-3 z-20">
            FULL VERSION PROTOTYPE 🤩
          </p>
        </div>

        <p className=" flex items-center gap-x-1 text-xs my-2 font-semibold ">
          Baru tersedia{" "}
          <span className="bg-P1 text-P2 text-xs px-1 border-2 border-P3 rounded-md font-semibold">
            Beta Version
          </span>
          .{" "}
          <a
            href="https://trello.com/b/c9RKe2pl/beta-version-prototype"
            target="_blank"
            className="flex items-center gap-x-1 text-P2 font-semibold"
          >
            Pelajari selengkapnya{" "}
            <BsArrowRight size={15} className="text-P2 font-bold" />{" "}
          </a>
        </p>
        <img src={Prototype} width={1000} className="mt-16" alt="prototype" />
      </div>
      <div id="paket" className="flex justify-center items-center mt-48">
        <div
          data-aos="fade-up"
          className="relative flex flex-col justify-center items-center"
        >
          <p className="font-bold text-5xl">
            Pilih paket yang sesuai untuk kamu
          </p>
          <p className="font-medium mt-8 text-xl">
            Biaya tetap. Tanpa kontrak. Tanpa pusing kelola tim 🙅🏻
          </p>
          <p className="absolute bg-P1 px-1 py-1.5 text-P2 font-semibold border-2 border-P3 rounded-md text-xs -rotate-3 top-20 left-64 uppercase shadow-md">
            Paling dibutuhkan
          </p>
          <p className="absolute bg-P2 px-1 py-2 text-P1 font-semibold rounded-md text-xs rotate-3 top-20 -right-44 uppercase shadow-md">
            HEMAT 900 RIBU! 🤑
          </p>
        </div>
      </div>
      <div
        id="pricing"
        className="flex justify-center items-center my-10 gap-x-5 "
      >
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
          <div class="w-11 h-6  bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-P2"></div>
          <span
            className={`ms-3 text-lg ${
              isChecked ? "font-semibold text-P2" : " font-medium text-P3"
            }`}
          >
            Creator level (hemat 28%)
          </span>
        </label>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div data-aos="fade-up" className="flex space-x-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-start">
            <h2 className="flex items-center gap-x-3 text-lg font-semibold">
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
        Butuh lebih banyak konten?{"  "}
        <span className="font-medium text-sm text-P2">
          Upgrade 2 permintaan dalam 1 waktu
        </span>
      </p>
      <div id="faq" data-aos="fade-up" className="w-full py-32">
        <div className="w-6/12 rounded-xl mx-auto h-full">
          <p className="font-bold text-center text-4xl mb-14 pl-5 pt-9">
            Pertanyaan umum
          </p>
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
      <footer class="bg-F1 text-center text-black lg:text-left">
        <div class="ml-20 pt-14">
          <img src={Raky} width={250} alt="logo raky" />
        </div>
        <div class="mx-20 mt-5  text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="">
              <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                PT Rakyfactory Digital Group
              </h6>
              <p class="mb-2">
                <a href="#!" class="">
                  Tentang kami
                </a>
              </p>
              <p class="mb-2">
                <li>
                  Affiliates{" "}
                  <span className="bg-P1 text-P2 px-2 py-1 rounded-md text-xs font-semibold uppercase">
                    Upcoming
                  </span>
                </li>
              </p>
              <p class="mb-2">
                <li href="#!" class="">
                  Program CSR{" "}
                  <span className="bg-P1 text-P2 px-2 py-1 rounded-md text-xs font-semibold uppercase">
                    Upcoming
                  </span>
                </li>
              </p>
              <p class="mb-2">
                <li href="#!" class="">
                  Karier{" "}
                  <span className="bg-P1 text-P2 px-2 py-1 rounded-md text-xs font-semibold uppercase">
                    Upcoming
                  </span>
                </li>
              </p>
            </div>
            <div class="">
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Produk
              </h6>
              <p class="mb-2">
                <li href="#!" class="">
                  Script writing team
                </li>
              </p>
              <p class="mb-2">
                <li href="#!" class="">
                  Video editing team
                </li>
              </p>
              <p class="mb-2">
                <li href="#!" class="">
                  Talent manager{" "}
                  <span className="bg-P1 text-P2 px-2 py-1 rounded-md text-xs font-semibold uppercase">
                    Upcoming
                  </span>
                </li>
              </p>
              <p class="mb-2">
                <li href="#!" class="">
                  Rakyfactory AI ✦⁺{" "}
                  <span className="bg-P1 text-P2 px-2 py-1 rounded-md text-xs font-semibold uppercase">
                    Upcoming
                  </span>
                </li>
              </p>
            </div>
            <div class="">
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Panduan
              </h6>
              <p class="mb-2">
                <li href="#!">Biaya langganan</li>
              </p>
              <p class="mb-2">
                <li href="#!">Subscription-pause option</li>
              </p>
              <p class="mb-2">
                <li href="#!">Studi kasus</li>
              </p>
              <p>
                <li href="#!">
                  Komunitas{" "}
                  <span className="bg-P1 text-P2 px-2 py-1 rounded-md text-xs font-semibold uppercase">
                    Upcoming
                  </span>
                </li>
              </p>
            </div>
            <div>
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Hubungi kami
              </h6>
              <p class="mb-2 flex items-center justify-center md:justify-start">
                Semarang, Indonesia
              </p>
              <p class="mb-2 flex items-center justify-center md:justify-start">
                +62 819-4659-3466 (WA Only)
              </p>
              <p class="mb-2 flex items-center justify-center md:justify-start">
                tanya@rakyfactory.com
              </p>
              <div className="flex gap-x-3">
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
        <hr className="w-8/12 mx-auto" />
        <div class="bg-F1 p-6 text-center">
          <span className="text-F2">Copyright © 2023 All rights reserved</span>
        </div>
      </footer>
      <ScrollUpButton />
    </>
  );
};

export default LandingPage;
