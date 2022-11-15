import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#FFFFFF] absolute z-10 overflow-auto  flex flex-row items-center justify-between h-[120px] w-full text-[16px] font-bold shadow-[2px_2px_12px_0_rgba(64,50,133,0.12)] ">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="/asset/header/header-merrymatch-logo.svg"
          alt="merry match logo"
          className="ml-[170px]"
        />
      </button>

      <div className="mr-[10%]  flex flex-row  items-center justify-between p-0 gap-8">
        <a href="#why-merry">
          <h2>Why Merry Match?</h2>
        </a>
        <a href="#howtomerry">
          <h2>How to Merry</h2>
        </a>
        <button
          className="button-nav bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[48px] w-[90px] font-[700]"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
