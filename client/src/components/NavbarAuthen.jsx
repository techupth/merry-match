import React from "react";
import { useState, useRef, useEffect } from "react";
import UserPopup from "./userPopup";
import useClickOutside from "../ulils/useClickOutside";
import { useAuth } from "../contexts/authentication";
import axios, { Axios } from "axios";

const Navbarauthen = () => {
  const [data, setData] = useState([]);
  const [images, setImage] = useState([]);

  const { userData } = useAuth();
  console.log(userData);
  const [callPop, setCallPop] = useState(false);

  const getData = async () => {
    const userId = userData.user.user_id;
    // console.log(userId)
    const result = await axios(`http://localhost:4001/users/${userId}`);
    console.log(result.data.data[0]);
    const data = result.data.data[0].profile_pics[0];
    const myObj = JSON.parse(data);

    setImage(myObj.url);
  };

  const ref = useRef(null);

  useClickOutside(ref, () => setCallPop(false));

  useEffect(() => {
    getData();
  });

  return (
    <div
      ref={ref}
      className="bg-white absolute flex flex-row items-center justify-between w-full h-[115px] text-[16px] font-bold z-40  shadow-[2px_2px_12px_0_rgba(64,50,133,0.12)]"
    >
      <img
        src="/asset/header/header-merrymatch-logo.svg"
        alt="merry match logo"
        className="ml-[10%]"
      />

      <div className=" flex flex-row  items-center justify-between p-0 gap-8 z-40 mr-[10%]">
        {/* <h2>{userData.user.username}</h2> */}

        <h2>Start Matching!</h2>
        <h2>Merry Membership</h2>

        <button
          type="button"
          className="text-[40px] mr-[]"
          onClick={() => setCallPop(!callPop)}
        >
          <img src={images} className="w-[70px] h-[70px] rounded-full " />
        </button>

        {callPop && <UserPopup close={setCallPop} />}
      </div>
    </div>
  );
};

export default Navbarauthen;
