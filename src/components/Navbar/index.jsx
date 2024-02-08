import React from "react";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LogoWhite from "../../assets/logo-white.png";

const NavBar = () => {
  const [nav, showNav] = useState(false);
  const handleClick = () => showNav(!nav);

  return (
    <div className="fixed bg-primary-0 flex justify-between items-center text-white px-4 sm:px-12 shadow-md w-full z-50">
      {/* LOGO */}
      <img src={LogoWhite} alt="" className=" w-36 z-20" />
      {/* LISTS */}
      <ul className="gap-6 hidden md:flex">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <li>Classes</li>
        <li>Pricing</li>
        <li>Schedule</li>
        <li>Contact</li>
      </ul>
      {/* BUTTON */}
      <a
        href=""
        className="hidden lg:flex items-center gap-2 border-white border-2 p-2 rounded-md"
      >
        <FaPlusSquare className="text-xl" />
        <p>Join Us Now</p>
      </a>
      {/* BURGER MENU */}
      <div onClick={handleClick} className="text-xl cursor-pointer md:hidden">
        {!nav ? <GiHamburgerMenu /> : <FaTimes />}
      </div>
      {/* MOBILE NAV */}
      <ul
        className={
          !nav
            ? "hidden"
            : "gap-6 md:hidden fixed top-1/2 left-1/2 bg-primary-0 -translate-x-1/2 -translate-y-1/2 flex flex-col text-center justify-center h-screen w-full mt-20 pb-20 "
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Classes</li>
        <li>Pricing</li>
        <li>Schedule</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "border-b-2" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
