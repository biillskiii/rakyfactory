import React, { useState, useEffect } from "react";
import NavbarDefault from "../components/Navbar";
import Hero from "../components/Hero";
import Pesan from "../components/Pesan";
import HowItWork from "../components/HowItWork";
import Fitur from "../components/Fitur";
import Funfact from "../components/Funfact";
import Paket from "../components/Paket";
import Sistem from "../components/Sistem";
import FaQ from "../components/Faq";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollUp from "../components/ScrollUp";
import MobilePopupModal from "../components/MobilePopupModal"; // Import your mobile popup modal component
import "../pages/LandingPage.css";

const LandingPage = () => {
  const [showMobileModal, setShowMobileModal] = useState(false);

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const checkScreenWidth = () => {
    const isMobile = window.innerWidth < 1280;
    setShowMobileModal(isMobile);
  };

  return (
    <>
      {/* {showMobileModal ? (
        <MobilePopupModal />
      ) : ( */}
      <div className="container mx-auto">
        <NavbarDefault />
        <Hero />
        <Funfact />
        <Fitur />
        <HowItWork />
        <Sistem />
        <Paket />
        <FaQ />
        <Footer />
        <div className="flex">
          <ScrollUp />
          <Whatsapp />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default LandingPage;
