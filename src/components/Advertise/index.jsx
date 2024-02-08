import React from "react";
import Ads from "../../assets/ads.jpg";

const Advertise = () => {
  return (
    <div>
      <div className="w-full relative justify-center flex flex-col items-center">
        <img src={Ads} alt="" className="w-full h-96 object-cover" />
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 justify-between items-start md:items-center absolute bottom-5 px-8 ">
          <div>
            <p className="text-4xl font-bold text-white">
              Need a fitness trainer?
            </p>
            <p className="text-2xl font-bold text-white">
              <span className="text-[#CB0606]">Call:</span> +63 123 4567 890
            </p>
          </div>
          <div className="relative flex group">
            <a
              href=""
              className="bg-[#CB0606] text-white py-4 px-6 text-xl font-bold  z-20"
            >
              JOIN US
            </a>
            <a
              href=""
              className="bg-transparent border-2 border-[#CB0606]  py-3 px-5 text-xl font-bold absolute bottom-3 right-3 text-transparent group-hover:bottom-0 group-hover:right-0 duration-300"
            >
              JOIN&nbsp;US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
