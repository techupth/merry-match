import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#FFFFFF] absolute z-10 overflow-auto  flex flex-row items-center justify-between h-[100px] w-full text-[16px] font-bold shadow-[2px_2px_12px_0_rgba(64,50,133,0.12)] ">
      <img
        src="/asset/header/header-merrymatch-logo.svg"
        alt="merry match logo"
        className="ml-[10%]"
      />

      <div className="mr-[10%]  flex flex-row  items-center justify-between p-0 gap-8">
        <h2>Why Merry Match?</h2>
        <h2>How to Merry</h2>
        <button
          className="button-nav bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[48px] w-[90px]"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
