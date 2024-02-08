import React from "react";
import LogoBlack from "../../assets/logo-black.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" w-full flex justify-center -shadow-md">
      <div className="max-w-7xl grid md:grid-cols-2 p-4  w-full gap-12 md:place-items-center items-center">
        <div>
          <img src={LogoBlack} alt="" className="w-60" />
          <p>
            Join Gymlarious today – where laughter fuels fitness, and every step
            towards a healthier you is a celebration!
          </p>
          <div className="flex items-center gap-2 py-4 text-4xl">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaSquareXTwitter />
          </div>
          <p>© 2024 | Gymlarious</p>
        </div>
        <div>
          <p className="font-bold text-2xl pb-4">Working Hours:</p>
          <p className="font-bold text-lg">Tuesday - Saturday: </p>
          <p>7:00 am - 10:00 pm</p>
          <p className="font-bold text-lg pt-2">Sunday: </p>
          <p>7:00 am - 8:00 pm</p>
          <p className="font-bold text-lg pt-2">Monday: </p>
          <p>Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
