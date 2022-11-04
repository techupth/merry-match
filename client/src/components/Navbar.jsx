import React from "react";
import { useState } from "react";
import UserPopup from "./userPopup";

const Navbar = () => {
  const [callPop, setCallPop] = useState(false);

  return (
    <div className="bg-white absolute flex flex-row items-center justify-between w-full h-[115px] text-[16px] font-bold z-40">
      <img
        src="/asset/header/header-merrymatch-logo.svg"
        alt="merry match logo"
        className="ml-[10%]"
      />

      <div className=" flex flex-row  items-center justify-between p-0 gap-8 z-40 mr-[10%]">
        <h2>Why Merry Match?</h2>
        <h2>How to Merry</h2>
        <button className="button-nav bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[48px] w-[90px] relative">
          Login
        </button>
        <button className="text-[40px] mr-[]" onClick={() => setCallPop(true)}>
        🦸🏻‍♀️
        </button>
        {callPop && <UserPopup close={setCallPop} />}
      </div>
    </div>
  );
};

export default Navbar;
