import React from "react";
import { useState, useRef, useEffect } from "react";
import UserPopup from "./userPopup";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useSwipe } from "../../contexts/swipeContext";


// Hooks
import useClickOutside from "../../utils/hooks/useClickOutside";

const NavbarAuthen = () => {

  const [images, setImage] = useState("");
  const [callPop, setCallPop] = useState(false);

  const navigate = useNavigate();

  const decodeFromToken = async () => {
    const token = localStorage.getItem("token");

    const userData = jwtDecode(token);
    const pic = userData.profile_pics[0];
    setImage(pic);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => setCallPop(false));



  useEffect(() => {
    decodeFromToken();
    console.log("Exucute func!!");
  
  }, []);

  return (
    <div
      ref={ref}
      className="NavAuthen bg-white absolute flex flex-row items-center justify-between w-full h-[88px] text-[16px] font-bold z-50  shadow-[2px_2px_12px_0_rgba(64,50,133,0.12)] 2xl:h-[120px]"
    >
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

      <div className=" flex flex-row  items-center justify-between p-0 gap-8 z-40 mr-[10%]">
        {/* <h2>{userData.name}</h2> */}

        <button
          className="text-[#191C77] text-[1rem]"
          onClick={() => {
            navigate("/match");
          }}
        >
          Start Matching!
        </button>

        <button className="text-[#191C77] text-[1rem]">Merry Membership</button>

        <button
          type="button"
          className="text-[40px] mr-[]"
          onClick={() => setCallPop(!callPop)}
        >
          <img
            src={images}
            className="w-[4rem] h-[4rem] rounded-full object-cover"
          />
        </button>

        {callPop && <UserPopup close={setCallPop} />}
      </div>
    </div>
  );
};

export default NavbarAuthen;
