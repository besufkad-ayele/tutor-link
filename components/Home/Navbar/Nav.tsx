"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      if (window.scrollY < 90) setNavbg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`mx-auto fixed ${
        navbg
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white"
      } w-full transition-all duration-200 flex items-center h-auto py-6 md:py-5 z-[1000]`}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo comes in here not make it in text will be change by image */}
        <h1 className="text-2xl font-bold text-gray-900">
          <span className="text-red-800">TUTOR </span>
          <span> LINK </span>
        </h1>
        {/* links goes here we will be change with the neccessary if needed */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link p-5 relative inline-block text-gray-900 text-base font-semibold w-fit after:content-[''] after:absolute after:h-[3px] after:bg-[#d946ef] after:w-full after:scale-x-0 after:transition-transform after:duration-300 after:origin-right after:bottom-[-3px] after:left-0 hover:after:scale-x-100 hover:after:origin-left">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        {/* buttons  */}
        <div className="buttons flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Link href="../auth/login">
                <button className="md:px-8 md:py-2 px-6 py-2 text-white font-semibold text-base bg-red-400 hover:bg-red-700 transition-all duration-200 rounded-full">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Link href="../auth/signup">
                <button
                  onClick={() => {}}
                  className="md:px-8 md:py-2 px-6 py-2 text-white font-semibold text-base bg-green-400 hover:bg-red-700 transition-all duration-200 rounded-full"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
