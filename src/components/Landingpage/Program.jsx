import React from "react";
import CardFeature from "./CardFeature";
import { MdLaptopMac } from "react-icons/md";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
const Program = () => {
  return (
    <>
      <div id="gabungjadiaffiliate"></div>
      <div className="text-center mt-36 ">
        <p className="text-2xl font-semibold text-P1 mb-4">
          Exclusive Program for All
        </p>
        <h1 className=" font-semibold text-5xl ">
          Dapatkan penghasilan tambahan <br />
          tanpa harus keluar rumah
        </h1>
        <div className="flex justify-center items-center gap-x-10 mt-16">
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
