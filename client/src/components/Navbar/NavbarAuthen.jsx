import React from "react";
import { useState, useRef, useEffect } from "react";
import UserPopup from "./userPopup";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// Hooks
import useClickOutside from "../../utils/hooks/useClickOutside";

const NavbarAuthen = () => {
  const [images, setImage] = useState("");
  const [callPop, setCallPop] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const decodeFromToken = async () => {
    const token = localStorage.getItem("token");
    const profileImg = localStorage.getItem("profileImg");
    const userData = jwtDecode(token);

    const pic = profileImg;
    setImage(pic);

    const name = userData.name;
    setUserName(name);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => setCallPop(false));

  useEffect(() => {
    decodeFromToken();
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
          className="ml-[11.25rem] "
        />
      </button>

      <div className=" flex flex-row  items-center justify-between p-0 gap-8 z-40 mr-[10%]">
        {/* <h2>{userData.name}</h2> */}

        <button
          className="text-[#191C77] text-[1rem] hover:text-[black] flex justify-center"
          onClick={() => {
            navigate("/match");
          }}
        >
          Start Matching!
        </button>
        <div className="relative mr-[-15px]">
          <img
            className="w-[160px] scale-y-[-1]"
            src="../../../public/asset/NavBarIcon/Rectangle 24668.svg"
            alt=""
          />
          <div className="  flex flex-row items-center absolute right-3 bottom-1.5">
            <a className="text-[#ffffff] text-[1.3rem]">Hi, {userName} !</a>
            <img
              className="ml-2"
              src="../../../public/asset/NavBarIcon/starts.svg"
              alt=""
            />
          </div>
        </div>

        <button
          type="button"
          className="text-[40px] mr-[0]"
          onClick={() => setCallPop(!callPop)}
        >
          <img
            src={images}
            className="w-[5rem] h-[5rem] rounded-full object-cover"
          />
        </button>

        {callPop && <UserPopup close={setCallPop} />}
      </div>
    </div>
  );
};

export default NavbarAuthen;
