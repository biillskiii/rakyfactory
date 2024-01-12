import React, { useState, useEffect } from "react";
import NavbarDefault from "../components/Navbar";
import Hero from "../components/Hero";
import Fitur from "../components/Fitur";
import Funfact from "../components/Funfact";
import Paket from "../components/Paket";
import Sistem from "../components/Sistem";
import FaQ from "../components/Faq";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollUp from "../components/ScrollUp";
import "../pages/LandingPage.css";
import Form from "../components/Form";

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
      <div className="container mx-auto px-40">
        <NavbarDefault />
        <Hero />
      </div>
      <Funfact />
      <Fitur />
      <Sistem />
      <Paket />
      <FaQ />
      <Form/>
      <div className="flex">
        <ScrollUp />
      </div>
      <Footer />
      {/* )} */}
    </>
  );
};

export default LandingPage;
