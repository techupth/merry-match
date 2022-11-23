import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="z-0">
      <div className="w-[100%] h-[100vh] bg-[url('../../../public/asset/header/hero-section-onlybg.svg')]   bg-no-repeat bg-cover z-0 overflow-auto xl:bg-[url('../../../public/asset/header/hero-section-crop.svg')]">
        <div className="h-[100%] w-[100%] flex flex-col items-center justify-center   ">
          <div className="flex flex-col items-center justify-start h-[60%] ">
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

          <button
            className="button-header bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[6%] w-[9%] mt-[5%] font-[700] hover:-translate-y-1 hover:scale-110 hover:bg-pink-300 duration-300"
            onClick={() => {
              navigate("/login");
            }}
          >
            Start Matching!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
