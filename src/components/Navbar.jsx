import React, { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-[70px] flex justify-between items-center navbar bg-primary">
      {/* Logo section */}
      <div className="flex justify-between items-center flex-row text-white">
        <BiCameraMovie className="w-[25px] h-[25px] bg-contain mx-3" />
        <p className="font-bold font-sans text-lg">Movie Streaming</p>
      </div>
      {/* Desk Menu */}
      <ul className="hidden sm:flex justify-between items-center list-none px-6">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`text-white font-bold ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      {/* Mobile Menu */}
      <div className="flex sm:hidden justify-start items-center px-6">
        {/* Open and close Menu Img */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          className="w-[25px] h-[25px] object-contain"
        />
        {/* Dropdown Menu */}
        <div className={`${toggle ? "flex" : "hidden"}`}>
          <ul
            className={`absolute right-0 bg-primary bg-opacity-70 top-[70px] z-[10]`}
          >
            {navLinks.map((link, index) => (
              <li key={link.id} className={`px-6 py-3 font-bold text-white `}>
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
