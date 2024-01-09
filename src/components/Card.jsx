import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdVerified } from "react-icons/md";

const Card = ({ avatarSrc, name, stats, views, followers, showCheckIcon }) => {
  return (
    <div className="w-auto h-20 flex flex-col justify-center items-start bg-white rounded-xl border-2 px-2 py-2 marquee-animation">
      <div className="flex items-center">
        <img src={avatarSrc} width={32} alt={name} className="mr-2" />
        <p className="font-bold text-sm">{name}</p>
        {showCheckIcon && <MdVerified className="text-blue-500 ml-2" />}
        <p className="bg-[#F9F9F8] font-bold rounded-md px-1 py-1 ml-2 text-xs">
          {stats} followers
        </p>
      </div>
      <div className="flex items-center mt-2">
        <AiOutlineLike size={16} className="mr-1" />
        <p className="font-semibold text-xs">{views} view gain</p>
        <GoPeople size={16} className="ml-4 mr-1" />
        <p className="font-semibold text-xs">{followers} follower gain</p>
      </div>
    </div>
  );
};

export default Card;
