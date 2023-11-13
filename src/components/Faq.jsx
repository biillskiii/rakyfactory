import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = ({ question, answer }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleArrowClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="flex flex-col py-2">
      <div className="w-full flex items-center justify-between border-b border-gray-500 py-5">
        <p className="font-medium">{question}</p>
        {isTextVisible ? (
          <IoIosArrowUp
            size={25}
            className="opacity-40 cursor-pointer"
            onClick={handleArrowClick}
          />
        ) : (
          <IoIosArrowDown
            size={25}
            className="opacity-40 cursor-pointer"
            onClick={handleArrowClick}
          />
        )}
      </div>
      {isTextVisible && (
        <div className="mt-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faq;
