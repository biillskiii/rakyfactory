import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollUpButton = () => {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bg-P1 shadow-md rounded-full px-3 py-3 bottom-10 right-10 flex items-center justify-center z-10">
          <button
            onClick={handleClick}
            className={isVisible ? "block" : "hidden"}
          >
            <IoIosArrowUp size={23} className="text-P2" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollUpButton;
