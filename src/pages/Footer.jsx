import React, { useEffect } from "react";
import Raky from "../assets/Raky.png";
import Upcoming from "../components/Upcoming";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { HiSparkles } from "react-icons/hi";
import "./Footer.css";
import Aos from "aos";
const Footer = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <footer className="sm:mx-auto bg-F1 text-center text-black lg:text-left">
        <div className="ml-5 pt-14">
          <img src={Raky} width={250} alt="logo raky" />
        </div>
        <div className="ml-5 text  mt-5  text-left md:text-left">
          <div className="grid-cols-2 gap-x-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-sm">
              <h6 className="mb-4  flex items-start justify-center font-bold sm:font-semibold md:justify-start">
                PT Rakyfactory Digital Group
              </h6>
              <p className="mb-2 text-xs sm:text-lg">
                <a href="#!" className="">
                  Tentang kami
                </a>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li className="flex items-center gap-2">
                  Affiliates <Upcoming label={"Upcoming"} />
                </li>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!" className="flex items-center gap-2">
                  Program CSR <Upcoming label={"Upcoming"} />
                </li>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!" className="flex items-center gap-2">
                  Karier <Upcoming label={"Upcoming"} />
                </li>
              </p>
            </div>
            <div className="text-sm ">
              <h6 className="mb-4  text-sm sm:text-lgtext-sm flex justify-start font-bold sm:font-semibold md:justify-start">
                Produk
              </h6>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!" class="">
                  Script writing team
                </li>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!" class="">
                  Video editing team
                </li>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!" class="flex items-center gap-2">
                  Talent manager <Upcoming label={"Upcoming"} />
                </li>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!" class="flex items-center gap-1">
                  Rakyfactory AI <HiSparkles size={13} />{" "}
                  <Upcoming label={"Upcoming"} />
                </li>
              </p>
            </div>
            <div className="text-sm ">
              <h6 className="mb-4 text-sm flex justify-start font-bold sm:font-semibold md:justify-start">
                Panduan
              </h6>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!">Biaya langganan</li>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!">Subscription-pause option</li>
              </p>
              <p className="mb-2 text-xs sm:text-lg">
                <li href="#!">Studi kasus</li>
              </p>
              <p>
                <li href="#!" className="flex items-center gap-2">
                  Komunitas <Upcoming label={"Upcoming"} />
                </li>
              </p>
            </div>
            <div className="text-sm ">
              <h6 class="mb-4 text-sm sm:text-lg flex justify-start font-bold sm:font-semibold md:justify-start">
                Hubungi kami
              </h6>
              <p class="mb-2 text-xs sm:text-lg flex items-center justify-start md:justify-start">
                Semarang, Indonesia
              </p>
              <p class="mb-2 text-xs sm:text-lg flex items-center justify-start md:justify-start">
                +62881-0820-13808 (WA Only)
              </p>
              <p class="mb-2 text-xs sm:text-lg flex items-center justify-start md:justify-start">
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
          <span className="text-F2 text-sm">
            Copyright © 2023 All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
