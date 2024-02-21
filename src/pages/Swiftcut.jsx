import React, { useState, useEffect } from "react";
import NavbarDefault from "../components/Swiftcut/Navbar";
import Hero from "../components/Swiftcut/Hero";
import About from "../components/Swiftcut/About";
import Upcoming from "../components/Upcoming";

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
      {/* <NavbarDefault />
      <div className="container mx-auto">
        <Hero />
      </div>
      <About /> */}
      <Upcoming label={"coming soon"} />

      {/* )} */}
    </>
  );
};

export default LandingPage;
