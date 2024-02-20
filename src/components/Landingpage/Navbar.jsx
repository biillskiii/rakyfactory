import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Raky.png";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeNavbar = () => {
    setOpenNav(false);
  };
  const shadowClass = isScrolled ? "drop-shadow-md" : "drop-shadow-none";
  const navList = (
    <div className="flex justify-center items-center">
      <ul className="text-sm mb-4 mt-2 lg:mb-0 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-x-16">
        <li className="p-1 cursor-pointer ">
          <a
            href="#product"
            data-te-smooth-scroll-init
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("product")
                .scrollIntoView({ behavior: "smooth" });
              closeNavbar();
            }}
          >
            Produk
          </a>
        </li>
        <li className="p-1 cursor-pointer ">
          <a
            href="#program"
            data-te-smooth-scroll-init
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("program")
                .scrollIntoView({ behavior: "smooth" });
              closeNavbar();
            }}
          >
            Gabung jadi Affiliate
          </a>
        </li>
        <li className="p-1 cursor-pointer">
          <a
            href="https://rakyfactory.notion.site/f2fe38a909e54f2a8da668153f246392?v=73a41606847049eabba8fa0969f8848e"
            target="_blank"
            data-te-smooth-scroll-init
            onClick={() => {
              closeNavbar();
            }}
          >
            Karir
          </a>
        </li>
        <li className="p-1 cursor-not-allowed">
          <a
            href=""
            className="disabled text-gray-400 pointer-events-none"
            data-te-smooth-scroll-init
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("")
                .scrollIntoView({ behavior: "smooth" });
              closeNavbar();
            }}
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#program"
            data-te-smooth-scroll-init
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("program")
                .scrollIntoView({ behavior: "smooth" });
              closeNavbar();
            }}
            className="p-1 cursor-pointer bg-P1 px-5 py-4  rounded-xl  font-semibold before:ease relative overflow-hidden border border-P2 transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-60"
            style={{ color: "#ffffff" }}
          >
            Gabung jadi Mitra
          </a>
        </li>
      </ul>
    </div>
  );
  return (
    <nav
      className={`w-full px-24 h-full bg-transparent text-black bg-white sticky top-0 py-2 lg:py-4 z-50 transition-all duration-300 ${shadowClass}`}
    >
      <div className=" mx-auto flex items-center justify-end text-blue-gray-900">
        <a
          href="#"
          data-te-smooth-scroll-init
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeNavbar();
          }}
        >
          <a className="text-2xl cursor-pointer py-1.5 font-semibold text-black flex items-center gap-x-3">
            <img src={Logo} width={150} alt="" />
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
