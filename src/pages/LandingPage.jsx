import React from "react";
import { BsStars } from "react-icons/bs";
import { BsArrowRight, BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
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
import Prototype from "../assets/prototype.png"
import Card from "../components/Card";
const LandingPage = () => {
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
        <p className="font-medium text-sm my-10 px-4 lg:text-lg lg:px-2">
          Dapatkan tim konten pribadimu untuk akses permintaan konten sebanyak
          mungkin <br /> dengan cara berlangganan. Dapat dijeda atau batalkan
          kapan saja.
        </p>
        <div className="flex gap-x-5 justify-center mt-3">
          <button className="bg-[#7A5AE1] text-white font-bold rounded-md px-5 py-2 ">
            Lihat paket
          </button>
          <button className="bg-[#F4F2FD] text-[#7A5AE1] font-bold rounded-md px-3 py-2">
            Konsultasi Gratis
          </button>
        </div>
        <p className="text-xs mt-5 flex justify-center items-center opacity-40">
          <BsStars color="black" size={20} />
          Tanpa kontrak. Tanpa biaya tambahan.
        </p>
        <div className="w-[1200px] h-[352px] rounded-lg bg-white mx-auto mt-40 text-black shadow-lg relative flex">
          <div className="w-[500px] flex flex-col items-start ml-20 mt-14 mb-44">
            <p className="font-bold text-xl ">
              Pesan dari pak CEO Rakyfactory? 👀
            </p>
            <img src={Pen2} className="mb-4" width={170} alt="" />
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
          <div className="ml-48 flex justify-center items-center">
            <img src={Image5} alt="" width={350} />
          </div>
        </div>
        <div className="flex flex-col h-full text-center justify-center items-center py-32">
          <p className="font-bold text-5xl">
            Kami hadir sebagai partner kontenmu
          </p>
          <p className="font-medium text-lg mt-4">
            Kami menyediakan tim seperti content strategist, writer, dan video
            editor bertalenta untuk <br /> mengembangkan kontenmu. Tanpa pusing
            kelola tim. Tanpa biaya tambahan. Tanpa kontrak.
          </p>
          <button className="bg-purple-500 text-white px-4 py-2 my-5 rounded-md">
            Lihat paket berlangganan
          </button>
          <div className="flex flex-wrap justify-center items-center mt-20 px-2 gap-x-40">
            <div className=" w-80 h-96">
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
            <div className=" w-80 h-96">
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
            <div className=" w-80 h-96">
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
            <div className=" w-80 h-96">
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
            <div className=" w-80 h-96">
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
            <div className=" w-80 h-96">
              <div className="flex flex-col justify-center items-center gap-x-3 mt-5 ml-10">
                <img src={Checklist} width={150} className="mx-auto mt-5" />
                <p className="font-bold text-xl text-center mt-4">
                  Unlimited revisions
                </p>
                <p className="text-xs text-center mt-3.5 mb-10">
                  Tim konten kamu akan terus melakukan revisi sampai kamu puas!
                  Tanpa biaya tambahan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-40">
        <div className="w-[520px]">
          <p className="font-bold text-3xl">Fun fact tentang Rakyfactory?</p>

          <p className="text-sm w-full">
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
        className="h-28 mt-10"
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
        className="h-28"
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
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="flex flex-col">
          <p className="font-bold text-5xl text-center z-20">
            Dapatkan tim konten pribadimu
          </p>
          <img src={Pen3} width={400} className="ml-80 z-10" alt="" />
          <p className="font-medium text-xl mt-5 text-center  w-[825px]">
            Kami akan membantu membuat konten bernilai secara konsisten, yang{" "}
            <br />
            membawa kamu mencapai tujuan sebagai Content Creator 🚀
          </p>
        </div>
        <div className="flex mt-20">
          <div className=" w-72 h-96">
            <div className="flex flex-col bg-white rounded-md shadow-md justify-center items-center mt-5 ml-10">
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
          <div className=" w-72 h-96">
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
          <div className=" w-72 h-96">
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
      <div className="flex flex-col justify-center items-center my-10">
        <p className="font-medium text-lg w-[764px] text-center ">
          Dengan berlangganan, kamu bisa request konten sebanyak mungkin. Kalau
          lagi nggak butuh, kamu bisa jeda langganan kapan pun ⏳
        </p>
        <p className=" flex items-center gap-x-1 text-xs my-2 font-semibold ">
          Baru tersedia{" "}
          <span className="bg-P1 text-P2 text-xs px-1 border-2 border-P3 rounded-md font-semibold">
            Beta Version
          </span>
          .{" "}
          <button className="flex items-center gap-x-1 text-P2 font-semibold">
            Pelajari selengkapnya{" "}
            <BsArrowRight size={15} className="text-P2 font-bold" />{" "}
          </button>
        </p>
        <img src={Prototype} width={1000} className="mt-10" alt="" />
      </div>
      <div className="w-full bg-white py-32">
        <div className="w-6/12 rounded-xl mx-auto h-full">
          <p className="font-bold text-4xl pl-5 pt-9">
            Frequently asked question
          </p>
          <div className="flex flex-col px-5 gap-y-5 py-8">
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">Kenapa saya harus berlangganan?</p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5 ">
              <p className="font-bold">
                Bagaimana cara kerja satu permintaan dalam satu waktu?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">Bagaimana cara kerja fitur jeda?</p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Bagaimana jika saya hanya mempunyai satu permintaan?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Kenapa saya tidak memperkerjakan freelancer sendiri saja?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Apakah Anda yakin ini membantu saya berkembang?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Apakah ada batasan berapa banyak permintaan yang dapat saya
                ajukan?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Berapa lama saya bisa menerima konten saya?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Berapa banyak video yang saya dapatkan?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Bisakah Anda mengambil video saya yang berdurasi panjang <br />{" "}
                dan mengubahnya menjadi video pendek?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Bagaimana cara mengirimkan konten saya?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Apakah Anda menawarkan uji coba atau membuat konten contoh?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">Kenapa saya harus berlangganan?</p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-5">
              <p className="font-bold">
                Bagaimana jika saya tidak puas dengan konten saya?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
            <div className="flex items-center justify-between  ">
              <p className="font-bold">
                Bisakah saya membatalkan layanan dan apakah ada pengembalian{" "}
                <br />
                dana jika saya ingin berhenti menggunakan layanan ini?
              </p>
              <IoIosArrowDown size={25} className="opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
