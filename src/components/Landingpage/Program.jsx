import React, { useEffect } from "react";
import CardFeature from "./CardFeature";
import { MdLaptopMac } from "react-icons/md";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import AOS from "aos";
import "aos/dist/aos.css";
const Program = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="program"></div>
      <div className="text-center my-20 lg:my-52" data-aos="fade-up">
        <p className="text-[10px] lg:text-xl mb-5 font-semibold text-P1 uppercase">
          Exclusive Program for All
        </p>
        <h1 className=" font-semibold text-xl lg:text-5xl mb-16">
          Dapatkan penghasilan tambahan <br />
          tanpa harus keluar rumah
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
          <CardFeature
            icon={<MdLaptopMac className="text-2xl lg:text-[30px]" />}
            title={"Gabung jadi mitra kreatif"}
            desc={
              "Bagi para freelancer dan pekerja kreatif, dapatkan penghasilan tambahan dari rumah Anda dan nikmati berbagai keuntungan lainnya."
            }
            detail={true}
            detaildesc={"Gabung sekarang"}
          />
          <CardFeature
            icon={<LiaMoneyBillWaveSolid className="text-2xl lg:text-[30px]" />}
            title={"Gabung jadi Affiliate"}
            desc={
              "Sering scroll sosmed? Ubah jadi pasif income bulanan melalui komisi berulang dari setiap pengguna yang Anda referensikan ke produk kami."
            }
            detail={true}
            detaildesc={"Gabung sekarang"}
            onClick={
              "https://rakyfactory.notion.site/Ayo-bergabung-bersama-Rakyfactory-Affiliate-Program-d07582bd629b47e788706d67e9f2ebd9?pvs=4"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Program;
