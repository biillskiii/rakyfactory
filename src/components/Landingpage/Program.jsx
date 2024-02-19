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
      <div className="text-center my-52" data-aos="fade-up">
        <p className="text-xl font-semibold text-P1 uppercase">
          Exclusive Program for All
        </p>
        <h1 className=" font-semibold text-[44px] mb-16">
          Dapatkan penghasilan tambahan <br />
          tanpa harus keluar rumah
        </h1>
        <div className="flex justify-center items-center gap-x-10">
          <CardFeature
            icon={<MdLaptopMac size={40} />}
            title={"Gabung jadi mitra kreatif"}
            desc={
              "Bagi para freelancer dan pekerja kreatif, dapatkan penghasilan tambahan dari rumah Anda dan nikmati berbagai keuntungan lainnya."
            }
            detail={true}
            detaildesc={"Gabung sekarang"}
          />
          <CardFeature
            icon={<LiaMoneyBillWaveSolid size={40} />}
            title={"Gabung jadi Affiliate"}
            desc={
              "Sering scroll sosmed? Ubah jadi pasif income bulanan melalui komisi berulang dari setiap pengguna yang Anda referensikan ke produk kami."
            }
            detail={true}
            detaildesc={"Gabung sekarang"}
          />
        </div>
      </div>
    </>
  );
};

export default Program;
