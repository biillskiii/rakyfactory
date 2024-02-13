import React from "react";
import Logo from "../../assets/Raky.png";
import { PiInstagramLogoBold } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center ml-16 mt-28">
      <div className="w-[1440px] mx-auto">
        <div className="flex justify-start items-center">
          <img
            src={Logo}
            alt="logo rakyfactory"
            width={199}
            className="mr-32"
          />
          <ul className="font-semibold text-lg gap-x-11 flex justify-center">
            <li>
              <a href="">Karir</a>
            </li>
            <li>
              <a href="">Mitra kreatif</a>
            </li>
            <li>
              <a href="">Affiliates</a>
            </li>
            <li>
              <a href="">Pelajari layanan berlangganan-jeda</a>
            </li>
            <li>
              <a href="">Tentang Kami</a>
            </li>
          </ul>
          <ul className="flex items-center ml-36 gap-x-5">
            <li>
              <a href="">
                <PiInstagramLogoBold size={18} />
              </a>
            </li>
            <li>
              <a href="">
                <RiLinkedinBoxLine size={18} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between mt-20 mb-5">
          <p className="text-lg text-Y1">PT Rakyfactory Digital Group</p>
          <p className="text-lg text-Y1">@ 2024 Rakyfactory</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
