import React, { useEffect } from "react";
import Raky from "../assets/Raky.png";
import Upcoming from "./Upcoming";
import { AiFillLinkedin } from "react-icons/ai";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

import "./Footer.css";
import Aos from "aos";
const Footer = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="bg-[#FCFCFC] py-10">
      <footer className="container mx-auto px-40">
        <div className="flex justify-between items-center">
          <img src={Raky} width={210} alt="Logo-Raky" />
          <div className="flex gap-x-7">
            <p className="text-[14px] flex items-center gap-2">
              Program Afiliasi <Upcoming />
            </p>
            <p className="text-[14px] flex items-center gap-2">
              Peluang karier <Upcoming />
            </p>
          </div>
          <div className="flex items-center gap-3">
            <AiFillLinkedin size={25} />
            <RiInstagramFill size={25} />
            <RiWhatsappFill size={25} />
          </div>
        </div>
        <div className="border-t-2 my-5"></div>
        <p className="text-center text-[#838383] text-base my-7"> © Copyright 2024 PT Rakyfactory Digital Group</p>
      </footer>
    </div>
  );
};

export default Footer;
