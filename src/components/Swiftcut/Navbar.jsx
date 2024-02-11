import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Raky.png";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    // const handleScroll = () => {
    //   const currentScrollY = window.scrollY;
    //   setIsScrolled(currentScrollY > 50);
    //   if (prevScrollY > currentScrollY) {
    //     setIsScrolled(false);
    //   }
    //   if (currentScrollY === 0) {
    //     setIsScrolled(true);
    //   }

    //   setPrevScrollY(currentScrollY);
    // };

    // window.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  const closeNavbar = () => {
    setOpenNav(false);
  };

  const navList = (
    <div className="flex justify-center items-center gap-x-10">
      <ul className="px-3  text-base mb-4 mt-2 lg:mb-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-x-16">
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
      </ul>
      <button
        className="p-1 cursor-pointer bg-P1 px-5 py-4 rounded-2xl font-semibold"
        style={{ color: "#ffffff" }}
      >
        Daftar sekarang
      </button>
    </div>
  );
  return (
    <nav className=" mx-auto px-40 shadow-md h-full bg-transparent text-black lg:text-black bg-white sticky top-0 py-2  lg:py-4 z-50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-around text-blue-gray-900">
        <a href="#hero" smooth={true} duration={500}>
          <a className="text-2xl cursor-pointer py-1.5 font-semibold text-black flex items-center gap-x-3">
            <img src={Logo} width={210} alt="" />
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
