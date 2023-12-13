import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = ({ question, answer }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const faqRef = useRef(null);

  const handleArrowClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  const handleClickOutside = (event) => {
    if (faqRef.current && !faqRef.current.contains(event.target)) {
      setIsTextVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={faqRef} className="flex flex-col py-2">
      <button
        onClick={handleArrowClick}
        className="w-full flex items-center justify-between border-b border-gray-500 py-5"
      >
        <p className="font-semibold text-start sm:w-full w-10/12">{question}</p>
        {isTextVisible ? (
          <IoIosArrowUp size={25} className="opacity-40 cursor-pointer" />
        ) : (
          <IoIosArrowDown size={25} className="opacity-40 cursor-pointer" />
        )}
      </button>
      {isTextVisible && (
        <div className="mt-2 font-normal">
          <p className="text-T1 text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faq;
