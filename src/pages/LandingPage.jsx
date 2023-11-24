import React from "react";
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
import "../pages/LandingPage.css";
const LandingPage = () => {
  return (
    <div className="container mx-auto">
      <NavbarDefault />
      <Hero />
      <Pesan />
      <Fitur />
      <Funfact />
      <HowItWork />
      <Paket />
      <Sistem />
      <FaQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
