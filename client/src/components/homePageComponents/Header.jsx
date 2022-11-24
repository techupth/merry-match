import React from "react";
import hero from "../../../public/asset/header/New Tab_files/headerSection.svg";

const Header = () => {
  return (
    <div className="z-0">
      {/* <nav className="bg-[#FFFFFF] absolute z-10 overflow-auto  flex flex-row items-center justify-between h-[100px] w-full text-[16px] font-bold ">
        <img
          src="/asset/header/header-merrymatch-logo.svg"
          alt="merry match logo"
          className="ml-[10%]"
        />

        <div className="mr-[10%]  flex flex-row  items-center justify-between p-0 gap-8">
          <h2>Why Merry Match?</h2>
          <h2>How to Merry</h2>
          <button className="button-nav bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[48px] w-[90px]">
            Login
          </button>
        </div>
      </nav> */}

      <div className="Header w-[100%] h-[100vh] bg-[url('../../../public/asset/header/New Tab_files/headerSection.svg')] bg-no-repeat bg-cover z-0 overflow-auto ">
        <div className="h-[100%]w-[100%] flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-start h-[100%]">
            <h3 className="text-[400%] text-[#FFFFFF] font-[900] leading-[115%] mt-[70%] ">
              Make the
            </h3>
            <h3 className="text-[400%] text-[#FFFFFF] font-[900]">
              first ‘Merry’
            </h3>

            <h4 className="text-[120%] font-[600] text-[#FFFFFF] text-center leading-[150%] mt-[5%]">
              If you feel lonely, let’s start meeting <br></br> new people in
              your area! <br></br>Don’t forget to get Merry with us
            </h4>
          </div>

          <button className="button-header bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[48px] w-[163px] mt-[5%] font-[700]">
            Start Matching!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
