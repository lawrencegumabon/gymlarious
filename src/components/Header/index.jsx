import React from "react";
import Banner from "../../assets/header.png";

const GymHeader = ({ headerName }) => {
  return (
    <div className="bg-[#202020] flex justify-center items-center w-full">
      <div className="max-w-7xl flex justify-between w-full px-8 pt-2">
        <p className="flex flex-col items-end justify-end text-white text-2xl font-bold">
          {headerName}
        </p>
        <img src={Banner} alt="" className="h-40 opacity-[50%]" />
      </div>
    </div>
  );
};

export default GymHeader;
