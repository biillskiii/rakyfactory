import React, { useState, useEffect } from "react";
import NavbarDefault from "../components/Landingpage/Navbar";
import Hero from "../components/Landingpage/Hero";
import HowItWork from "../components/Landingpage/HowItWork";
import Fitur from "../components/Landingpage/Fitur";
import Program from "../components/Landingpage/Program";
import Contact from "../components/Landingpage/Contact";
import Footer from "../components/Landingpage/Footer";
import MobilePopupModal from "../components/MobilePopupModal";
import ScrollUp from "../components/Landingpage/ScrollUp";
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
      <div>
        <NavbarDefault />
        <div className="container mx-auto">
          <Hero />
          <Fitur />
          <HowItWork />
          <Program />
          <Contact />
        </div>
        <Footer />
        <ScrollUp />
      </div>
      {/* )} */}
    </>
  );
};

export default LandingPage;
