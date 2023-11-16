import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.open("https://www.whatsapp.com/");
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bg-P1 shadow-md rounded-full px-2 py-2 bottom-24 right-10 flex items-center justify-center">
          <button onClick={handleClick} className={isVisible ? "block" : "hidden"}>
            <ImWhatsapp size={20} className="text-green-500" />
          </button>
        </div>
      )}
    </>
  );
};

export default Whatsapp;
