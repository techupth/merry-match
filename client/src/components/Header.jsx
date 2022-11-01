import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <nav className="bg-[#FFFFFF] absolute z-10 overflow-auto">
        <img
          src="/asset/header/header-merrymatch-logo.svg"
          alt="merry match logo"
          className="ml-[10%]"
        />

        <div className="mr-[10%]">
          <h2>Why Merry Match?</h2>
          <h2>How to Merry</h2>
          <button className="button-nav">Login</button>
        </div>
      </nav>

      <div className="w-[100%] h-[100vh] bg-[url('../../public/asset/header/hero-section-crop.svg')] bg-no-repeat bg-cover z-0 overflow-auto ">
        <div className="h-[100%]w-[100%] flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-start h-[100%]">
            <h3 className="text-[400%] text-[#FFFFFF] font-black leading-[115%] mt-[70%] ">
              Make the
            </h3>
            <h3 className="text-[400%] text-[#FFFFFF] font-black ">
              first ‘Merry’
            </h3>

            <h4 className="text-[120%] text-[#FFFFFF] text-center leading-[150%] mt-[5%]">
              If you feel lonely, let’s start meeting <br></br> new people in
              your area! <br></br>Don’t forget to get Merry with us
            </h4>
          </div>

          <button className="button-header">Start Matching!</button>
        </div>
      </div>
    </>
  );
}

export default Header;
