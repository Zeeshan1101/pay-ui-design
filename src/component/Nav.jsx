import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <>
      <div className="fixed hidden md:block nav top-5 left-8">
        <div className="h-[calc(100dvh-38px)] flex flex-col justify-between w-72 bg-white shadow-2 rounded-2xl py-8 px-5">
          <div className="flex flex-col justify-between h-[80%] ">
            <Logo />
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
