import React from "react";
import Logo from "../../assets/Raky.png";
import { PiInstagramLogoBold } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center ml-0 lg:ml-16 lg:mt-28 ">
      <div className="lg:w-[1440px] lg:px-16 lg:mx-auto ">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
          <img
            src={Logo}
            alt="logo rakyfactory"
            className="mb-[45px] lg:mb-0 w-36 lg:w-48"
          />
          <ul className="w-[300px] lg:w-[831px] leading-8 lg:leading-0 font-semibold text-xs lg:text-base gap-x-11 flex flex-wrap justify-start lg:justify-center mb-[45px] lg:mb-0">
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
          <ul className="flex items-center gap-x-5">
            <li>
              <a href="https://instagram.com/rakyfactory" target="_blank">
                <PiInstagramLogoBold className="w-5 lg:w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/rakyfactory/"
                target="_blank"
              >
                <RiLinkedinBoxLine className="w-5 lg:w-6" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[311px] lg:w-[1250px] flex justify-between mt-20 mb-5">
          <p className="text-[9px] lg:text-base text-Y1">
            PT Rakyfactory Digital Group
          </p>
          <p className="text-[9px] lg:text-base text-Y1 flex items-center gap-x-1">
            <MdOutlineCopyright />
            2024 Rakyfactory
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
