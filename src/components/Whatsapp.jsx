import React, { useState, useEffect } from "react";
import Whatsapp from "../assets/whatsapp.png";
const WhatsapLogo = () => {
  const handleClick = () => {
    window.open("https://www.whatsapp.com/");
  };

  return (
    <>
      <div className="animate-bounce fixed rounded-full bottom-12 right-12 flex items-center justify-center z-10">
        <button onClick={handleClick} className="">
          <img src={Whatsapp} alt="" width={60} />
        </button>
      </div>
    </>
  );
};

export default WhatsapLogo;
