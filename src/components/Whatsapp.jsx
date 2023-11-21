import React, { useState, useEffect } from "react";
import { ImWhatsapp } from "react-icons/im";

const Whatsapp = () => {
  const handleClick = () => {
    window.open("https://www.whatsapp.com/");
  };

  return (
    <>
      <div className="fixed bg-green-600  shadow-md rounded-full px-2 py-2 bottom-10 right-10 flex items-center justify-center z-10">
        <button
          onClick={handleClick}
          className=""
        >
          <ImWhatsapp size={20} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Whatsapp;
