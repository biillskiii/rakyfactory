import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo-swift.png";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shadowClass = isScrolled ? "drop-shadow-md" : "drop-shadow-none";
  const closeNavbar = () => {
    setOpenNav(false);
  };

  const navList = (
    <div className="flex justify-center items-center gap-x-10">
      <ul className="text-sm mb-4 mt-2 lg:mb-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-x-16">
        <li className="p-1 cursor-pointer ">
          <a href="#fitur" duration={500} onClick={closeNavbar}>
            Produk
          </a>
        </li>
        <li className="p-1 cursor-pointer ">
          <a href="#funfact" smooth={true} duration={500} onClick={closeNavbar}>
            Solusi
          </a>
        </li>
        <li className="p-1 cursor-pointer ">
          <a
            href="#yourcontentpartner"
            smooth={true}
            duration={500}
            onClick={closeNavbar}
          >
            Portofolio
          </a>
        </li>
        <li className="p-1 cursor-pointer ">
          <a href="#faq" smooth={true} duration={500} onClick={closeNavbar}>
            Harga
          </a>
        </li>
        <li>
          <button
            className="p-1 cursor-pointer bg-P1 px-5 py-4  rounded-xl  font-semibold before:ease relative overflow-hidden border border-P2 transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-10 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-44"
            style={{ color: "#ffffff" }}
          >
            Daftar sekarang
          </button>
        </li>
      </ul>
    </div>
  );
  return (
    <nav
      className={`w-full px-24 h-full bg-transparent text-black bg-white sticky top-0 py-2 lg:py-2 z-50 transition-all duration-300 ${shadowClass}`}
    >
      <div className="mx-auto flex items-center justify-around text-blue-gray-900">
        <a href="#" smooth={true} duration={500}>
          <a className="text-2xl cursor-pointer py-1.5 font-semibold text-black flex items-center gap-x-3">
            <img src={Logo} width={120} alt="" />
          </a>
        </a>
        <div className="hidden ms-auto lg:block">{navList}</div>

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
        </div>
      )}
    </nav>
  );
};

export default NavbarDefault;
