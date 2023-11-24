import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Raky from "../assets/Raky.png";
const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleWaitlist = () => {
    window.open("https://forms.gle/g3nBjCSzawzmdv137", "_blank");
  };
  const navList = (
    <ul className="text-sm mb-4 mt-2 gap-x-10 mr-0 ml-96 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="fitur" smooth={true} duration={500}>
          What We Do
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="funfact" smooth={true} duration={500}>
          Portfolio
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="yourcontentpartner" smooth={true} duration={500}>
          How it Works
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="paket" smooth={true} duration={500}>
          Pricing
        </Link>
      </li>
      <li className="p-1 cursor-pointer font-normal text-black">
        <Link to="faq" smooth={true} duration={500}>
          FAQ
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="container w-full h-full bg-transparent  text-black lg:text-black bg-white sticky top-0 py-2 px-4 lg:px-8 lg:py-4 z-50">
      <div className="mx-auto flex items-center justify-around text-blue-gray-900">
        <Link to="hero" smooth={true} duration={500}>
          <a className="text-2xl cursor-pointer py-1.5 font-bold text-black flex items-center gap-x-3">
            <img src={Raky} width={200} alt="logo raky" />
          </a>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <button
          onClick={() => {
            handleWaitlist();
          }}
          className="hidden bg-[#7A5AE1] rounded-md px-3 py-2 text-sm lg:inline-block font-medium text-white"
        >
          Join Waitlist
        </button>
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <FaTimes size={25} /> : <FaBars size={25} color="black" />}
        </button>
      </div>
      {openNav && (
        <div className="container mx-auto text-center">
          {navList}
          <button
            className="w-full mb-2 bg-[#7A5AE1] rounded-sm p-2 text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarDefault;
