import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = ({ question, answer }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleArrowClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="flex flex-col py-2">
      <button
        onClick={handleArrowClick}
        className="w-full flex items-center justify-between border-b border-gray-500 py-5"
      >
        <p className="font-medium">{question}</p>
        {isTextVisible ? (
          <IoIosArrowUp size={25} className="opacity-40 cursor-pointer" />
        ) : (
          <IoIosArrowDown size={25} className="opacity-40 cursor-pointer" />
        )}
      </button>
      {isTextVisible && (
        <div className="mt-2 font-semibold">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faq;
