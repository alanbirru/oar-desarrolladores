import React from "react";
import { navLinks } from "../index";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/LOGO.png";

import menu from "../assets/Menu-icons/menu.png";
import cerrar from "../assets/Menu-icons/cerrar.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex w-full items-center fixed top-0 z-20 shadow-md lg:py-3 py-5 bg-white">
      <div className="w-full flex justify-between items-center mx-12">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 lg:w-32 object-contain hover:scale-110 transition-all"
          />
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-8 text-lg">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-cyan-500" : "text-gray-500"
                } cursor-pointer font-bold hover:text-cyan-500 transition-all`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        {/* menu de tefono movil */}

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? cerrar : menu}
            alt="menu"
            className="w-[24px] cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute  top-24 right-0 mx-4 my-2 min-w-[140px]  z-10 rounded-xl bg-white border-t-4 border-cyan-500 shadow-lg transition-all ease-in-out duration-200`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 text-lg">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-cyan-500" : "text-gray-700"
                    } cursor-pointer text-[16px] font-bold hover:text-cyan-500 transition-all`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
