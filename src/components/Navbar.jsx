import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (prevScrollY > currentScrollY) {
        setIsScrolled(false);
      }
      if (currentScrollY === 0) {
        setIsScrolled(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const handleWaitlist = () => {
    window.open("https://forms.gle/g3nBjCSzawzmdv137", "_blank");
  };

  const closeNavbar = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="px-3 text-sm mb-4 mt-2 lg:mb-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-x-10">
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="fitur" smooth={true} duration={500} onClick={closeNavbar}>
          What We Do
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="funfact" smooth={true} duration={500} onClick={closeNavbar}>
          Portfolio
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link
          to="yourcontentpartner"
          smooth={true}
          duration={500}
          onClick={closeNavbar}
        >
          How it Works
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="paket" smooth={true} duration={500} onClick={closeNavbar}>
          Pricing
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="faq" smooth={true} duration={500} onClick={closeNavbar}>
          FAQ
        </Link>
      </li>
    </ul>
  );
  return (
    <nav
      className={`w-full h-full bg-transparent text-black lg:text-black bg-white sticky top-0 py-2 px-4 lg:px-8 lg:py-4 z-50 transition-all duration-300 ${
        isScrolled ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="mx-auto flex items-center justify-around text-blue-gray-900">
        <Link to="hero" smooth={true} duration={500}>
          <a className="text-2xl cursor-pointer py-1.5 font-semibold text-black flex items-center gap-x-3">
            <img src={Logo} width={30} alt="" />
            Rakyfactory
          </a>
        </Link>
        <div className="hidden ms-auto mr-5 lg:block">{navList}</div>
        <button
          onClick={() => {
            handleWaitlist();
            closeNavbar();
          }}
          className="hidden bg-[#7A5AE1] rounded-md px-3 py-2 text-sm lg:inline-block font-medium text-white"
        >
          Daftar Sekarang
        </button>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <FaTimes size={25} /> : <FaBars size={25} color="black" />}
        </button>
      </div>
      {openNav && (
        <div className="fixed top-14 left-0 right-0 bottom-0 bg-white h-full w-full flex flex-col mx-auto text-left">
          {navList}
          <button
            className="w-11/12 mx-auto mb-2 bg-[#7A5AE1] rounded-md p-2 text-white"
            onClick={() => {
              handleWaitlist();
              closeNavbar();
            }}
          >
            Daftar Sekarang
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarDefault;
