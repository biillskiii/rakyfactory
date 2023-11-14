import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false);

  const isPathActive = (path) => {
    return window.location.pathname === path ? "active" : "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="text-sm mb-4 mt-2 ml-96 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal text-black">
        <a href="#pesan" className={isPathActive("#pesan")}>
          What We Do
        </a>
      </li>
      <li className="p-1 font-normal text-black">
        <a href="#funfact" className="flex items-center">
          Testimonials
        </a>
      </li>
      <li className="p-1 font-normal text-black">
        <a href="#fitur" className="flex items-center">
          How it Works
        </a>
      </li>
      <li className="p-1 font-normal text-black">
        <a href="#pricing" className="flex items-center">
          Pricing
        </a>
      </li>
      <li className="p-1 font-normal text-black">
        <a href="#faq" className="flex items-center">
          FAQ
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="w-full h-fulll py-2 px-4 lg:px-8 lg:py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="text-2xl cursor-pointer py-1.5 font-bold text-black flex items-center gap-x-3"
        >
          <img src={Logo} width={30} alt="" />
          Rakyfactory
        </a>
        <div className="hidden lg:block">{navList}</div>
        <button className="hidden bg-[#7A5AE1] rounded-md px-3 py-2 text-sm lg:inline-block font-medium text-white">
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
        <div className="container mx-auto">
          {navList}
          <button className="mb-2 bg-[#7A5AE1] rounded-sm p-2 text-white">
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarDefault;
