import React from "react";
import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" alt="logo-de-hoobank" />
      <NavLinks />
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          alt="menu toggle"
          onClick={handleClick}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <NavLinks variant />
        </div>
      </div>
    </div>
  );
};

const NavLinks = ({ variant }) =>
  variant ? (
    <ul className="list-none flex flex-col justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            index === navLinks.length - 1 ? "mr-0" : "mb-14"
          } text-white mb-4`}
          key={nav.id}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            index === navLinks.length - 1 ? "mr-0" : "mr-10"
          } text-white mr-10`}
          key={nav.id}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );

export default Navbar;
