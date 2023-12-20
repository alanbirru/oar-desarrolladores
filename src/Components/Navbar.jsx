import React from "react";
import { navLinks } from "../index";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const [active, setActive] = useState("Inicio");

  return (
    <nav className="flex w-full items-center fixed top-0 z-20 shadow-md py-3 bg-white">
      <div className="w-full flex justify-between items-center max-w-[2400px] mx-10">
        <Link
          to="/"
          className="#"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className=" w-20 sm:w-32 object-contain hover:scale-110"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={` ${
                  active === link.title ? " text-blue-400" : "text-gray-600 "
                } cursor-pointer font-bold`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
