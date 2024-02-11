import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { PiCheckBold } from "react-icons/pi";

const Paket = () => {
  const handlePaket = () => {};
  return (
    <div className=" mt-44 container px-40 mx-auto ">
      <div className="flex flex-col items-center ">
        <h2 className="w-[619px] text-center font-bold text-lg sm:text-3xl">
          Pilih paket <span className="text-P2">langganan Video Editor</span>{" "}
          yang tepat untuk kebutuhan Anda
        </h2>
        <p className="flex justify-center items-center text-sm  gap-x-1 font-medium mt-6">
          Biaya tetap. Tanpa kontrak. Tanpa pusing kelola tim.
        </p>
      </div>
      <div className="flex items-center justify-between  mt-10">
        <div className=" flex flex-col gap-8 items-start justify-center">
          <div
            onClick={handlePaket}
            className="w-[720px] cursor-pointer flex items-center justify-between border-2 p-5 rounded-lg"
          >
            <div className="w-[275px] flex flex-col items-start justify-center">
              <p className="font-bold text-sm mb-5">Starter level</p>
              <p className="text-3xl font-bold">
                Rp2,199 jt{" "}
                <span className="text-xs font-normal">/15 hari periode</span>
              </p>
            </div>
            <div className="w-[275px] flex justify-end items-center">
              <p className="text-xs font-medium text-[#5C5C5C]">
                <span className="font-bold ">1 permintaan dalam 1 waktu.</span>{" "}
                Cocok untuk memulai menjadi Content Creator.
              </p>
            </div>
          </div>
          <div
            onClick={handlePaket}
            className="w-[720px] cursor-pointer flex items-center justify-between border-2 p-5 rounded-lg"
          >
            <div className="w-[275px] flex flex-col items-start justify-center">
              <p className="font-bold text-sm mb-5 text-P2">Creator level</p>
              <p className="line-through text-[#5C5C5C] text-[10px]">
                Rp4.398.000/31 hari periode
              </p>
              <p className="text-3xl font-bold">
                Rp3,199 jt{" "}
                <span className="text-xs font-normal">/31 hari periode</span>
              </p>
            </div>
            <div className="w-[275px] flex justify-end items-center">
              <p className="text-xs font-medium text-[#5C5C5C]">
                <span className="font-bold ">1 permintaan dalam 1 waktu.</span>{" "}
                Cocok untuk memulai menjadi Content Creator.
              </p>
            </div>
          </div>
          <div
            onClick={handlePaket}
            className="w-[720px] cursor-pointer flex items-center justify-between border-2 p-5 rounded-lg"
          >
            <div className="w-[275px] flex flex-col items-start justify-center">
              <p className="font-bold text-sm mb-5 ">Creator PRO level</p>
              <p className="line-through text-[#5C5C5C] text-[10px]">
                Rp6.398.000/31 hari periode
              </p>
              <p className="text-3xl font-bold">
                Rp5,499 jt{" "}
                <span className="text-xs font-normal">/31 hari periode</span>
              </p>
            </div>
            <div className="w-[275px] flex justify-end items-center">
              <p className="text-xs font-medium text-[#5C5C5C] ">
                <span className="font-bold ">1 permintaan dalam 1 waktu.</span>{" "}
                Cocok untuk yang sudah aktif dalam membuat konten.
              </p>
            </div>
          </div>
          <div
            onClick={handlePaket}
            className="w-[720px] cursor-pointer flex items-center justify-between border-2 p-5 rounded-lg"
          >
            <div className="w-[275px] flex flex-col items-start justify-center">
              <p className="font-bold text-sm mb-5">Upcoming services</p>
              <p className="flex items-center gap-2">
                Join waitlist <BsArrowRight size={15} className="text-P2" />{" "}
              </p>
            </div>
            <div className="w-[275px] flex justify-end items-center">
              <p className="text-xs text-[#5C5C5C] font-medium">
                Apakah Anda memerlukan solusi untuk kebutuhan lain? Silakan
                beritahu kami.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[593px] border-2 text-start flex flex-col justify-start rounded-lg items-start px-5 py-5">
          <h1 className="font-bold text-3xl mb-8">Included</h1>
          <div className="flex flex-col gap-3">
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Bonus pemilihan klip YT
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Bonus visual-content style
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Unlimited request konten
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Gratis unlimited revisi
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Gratis cloud storage
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Gratis konsultasi konten
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Obrolan tim sefrekuensi
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Tim support 24/7
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Langganan terjeda otomatis
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Tanpa biaya tambahan
            </p>
            <p className="flex items-center justify-start gap-x-3 text-base">
              <div className="rounded-full flex justify-center items-center bg-P1 w-7 h-7">
                <PiCheckBold className="text-P2" size={15} />
              </div>
              Tanpa kontrak
            </p>
          </div>
          <a className="text-P2 mt-6 text-base flex items-center gap-2">
            Daftar sekarang <BsArrowRight size={15} className="text-P2" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Paket;
