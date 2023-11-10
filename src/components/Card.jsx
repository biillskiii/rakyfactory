import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdVerified } from "react-icons/md";

const Card = ({ avatarSrc, name, stats, views, followers, showCheckIcon, showStarter }) => {
  return (
    <div className="w-auto bg-white rounded-xl shadow-md px-3 py-4 marquee-animation">
      <div className="flex items-center">
        <img src={avatarSrc} width={32} alt={name} className="mr-2" />
        <p className="font-bold">{name}</p>
        {showCheckIcon && <MdVerified className="text-blue-500 ml-2" />}
        <p className="bg-P1 font-bold rounded-md text-P2 px-1 py-1 ml-2 text-xs">
          {stats}
        </p>
        {showStarter && <p className='bg-Y2 text-Y1 px-1 py-1 ml-2 text-xs rounded-md font-semibold'>Starter</p>}
      </div>
      <div className="flex items-center mt-2">
        <AiOutlineLike size={14} className="mr-1" />
        <p className="font-bold text-xs">{views}</p>
        <GoPeople size={14} className="ml-4 mr-1" />
        <p className="font-bold text-xs">{followers}</p>
      </div>
    </div>
  );
};

export default Card;
