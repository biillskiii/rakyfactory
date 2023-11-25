import React, { useState, useEffect } from "react";
import NavbarDefault from "./Navbar";
import Hero from "./Hero";
import Pesan from "./Pesan";
import HowItWork from "./HowItWork";
import Fitur from "./Fitur";
import Funfact from "./Funfact";
import Paket from "./Paket";
import Sistem from "./Sistem";
import FaQ from "./Faq";
import Footer from "./Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollUp from "../components/ScrollUp";
import MobilePopupModal from "../components/MobilePopupModal";
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
    const isMobile = window.innerWidth < 1359;
    setShowMobileModal(isMobile);
  };

  return (
    <div className="container mx-auto">
      <NavbarDefault />
      <Hero />
      <Pesan />
      <Fitur />
      <Funfact />
      <HowItWork />
      <Sistem />
      <Paket />
      <FaQ />
      <Footer />
      <div className="flex">
        <ScrollUp />
        <Whatsapp />
      </div>
      {showMobileModal && <MobilePopupModal />}
    </div>
  );
};

export default LandingPage;
