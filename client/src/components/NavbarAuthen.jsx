import React from "react";
import { useState, useRef, useEffect } from "react";
import UserPopup from "./userPopup";
import useClickOutside from "../ulils/useClickOutside";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbarauthen = () => {
  const [images, setImage] = useState("");
  const [callPop, setCallPop] = useState(false);
  const [userData, setUserData] = useState({})


  const navigate = useNavigate()


  const decodeFromToken = async () => {
    const token = localStorage.getItem("token");
    // console.log(token);
    const userData = jwtDecode(token);
    // const  myObj = JSON.parse(userData);
    // console.log(userData.profile_pics);
    const object = JSON.parse(userData.profile_pics[0]);
    // console.log(object.url);
    setImage(object.url);
    // console.log(userData)
    const data = await axios.get(`http://localhost:4001/users/${userData.user_id}`)
    console.log(data.data.data[0])
    setUserData(data.data.data[0])
  };

  const ref = useRef(null);
  console.log(userData)
  useClickOutside(ref, () => setCallPop(false));

  useEffect(() => {
    decodeFromToken();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white absolute flex flex-row items-center justify-between w-full h-[115px] text-[16px] font-bold z-40  shadow-[2px_2px_12px_0_rgba(64,50,133,0.12)]"
    >
      <button
        onClick={() => {
          navigate("/")
        }}
      >
        <img
          src="/asset/header/header-merrymatch-logo.svg"
          alt="merry match logo"
          className="ml-[70px]"
        />
      </button>


      <div className=" flex flex-row  items-center justify-between p-0 gap-8 z-40 mr-[10%]">
        {/* <h2>{userData.name}</h2> */}

        <h2 className="text-[#191C77]">Start Matching!</h2>
        <h2 className="text-[#191C77]">Merry Membership</h2>

        <button
          type="button"
          className="text-[40px] mr-[]"
          onClick={() => setCallPop(!callPop)}
        >
          <img src={images} className="w-[50px] h-[50px] rounded-full " />
        </button>
        {callPop && <UserPopup close={setCallPop} />}
      </div>
    </div>
  );
};

export default Navbarauthen;
