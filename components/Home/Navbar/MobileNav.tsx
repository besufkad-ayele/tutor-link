import { navLinks } from "@/constant/constant";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlaty */}
      <div
        className={`fixed ${navOpen} inset-0 transform translation-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`${navOpen} text-white fixed justify-cener flex flex-col pt-10  h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006] `}
      >
        {navLinks.map((link) => (
          <p
            className="nav__link text-white text-[20px] mt-2 ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
            key={link.id}
          >
            {link.label}
          </p>
        ))}{" "}
        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7] right-[1.4rem] sm:w-8 w-8 h-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;
