import React from "react";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "../../utils/hooks/useClickOutside";

// Mock pictures for example
import heartLogo from "../../../public/asset/editModalItems/hearthLogo.svg";
import xLogo from "../../../public/asset/editModalItems/xLogo.svg";
import awL from "../../../public/asset/editModalItems/awL.svg";
import awR from "../../../public/asset/editModalItems/awR.svg";
import sek_1 from "../../../public/Mock/imgMock/sek_1.jpg";
import sek_2 from "../../../public/Mock/imgMock/sek_2.jpg";
import sekCute from "../../../public/Mock/imgMock/sekCute.jpg";
import pSekWDog from "../../../public/Mock/imgMock/pSekWDog.jpg";
import pSekYoung from "../../../public/Mock/imgMock/pSekYoung.jpg";
import location from "../../../public/asset/editModalItems/location.svg";
//.............................................................................

const EditModal = ({ close, data }) => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState(null);
  const [images, setImages] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  const ref = useRef(null);
  useClickOutside(ref, () => close(false));

  const handleNext = (e) => {
    e.preventDefault();
    if (step !== images.length) {
      setStep(step + 1);
    }
  };
  console.log(data);

  const handleBack = (e) => {
    e.preventDefault();
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  const handdleAge = (data) => {
    const year = data.getFullYear();
    const now = new Date().getFullYear();
    const age = now - year;
    setAge(age);
  };

  const handdleHobbies = (data) => {
    const hobbies = [];
    for (let i = 0; i < data.length; i++) {
      hobbies.push(data[i].value);
    }
    setHobbies(hobbies);
  };

  console.log(hobbies);
  useEffect(() => {
    handdleAge(data.birthday);
    setImages(data.profile_pics);
    handdleHobbies(data.hobby);
  }, []);

  return (
    <div
      ref={ref}
      className="editModal bg-white w-[900px] h-[700px] rounded-3xl flex z-30 absolute items-center justify-center font-[400]  mt-[20%]"
    >
      <div className="XButton absolute right-9 top-3 text-[25px] text-slate-300 ">
        <button onClick={()=>{
          close(false)
        }}>x</button>
      </div>
      <div className="relative w-[35%] h-[80%] mb-[10%] rounded-3xl mr-[3%] flex items-center flex-col overflow-hidden mt-[10%] ">
        {/* ....................... Display Pics ....................... */}
        <div className="flex justify-center items-center w-[95%] h-[120%] mt-[30%] rounded-3xl">
          {step === 1 && (
            <img
              src={images[0]}
              className="absolute w-[auto] h-[full] z-0  rounded-3xl"
            />
          )}
          {step === 2 && (
            <img
              src={images[1]}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
          {step === 3 && (
            <img
              src={images[2]}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
          {step === 4 && (
            <img
              src={images[3]}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
          {step === 5 && (
            <img
              src={images[4]}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
        </div>

        {/* ....................... Match button ....................... */}

        {/* X button */}
        <div className="Button flex flex-row w-[100%] h-[100%] items-center justify-center m-[0%] space-x-3 overflow-hidden mt-[3%]">
          <a className="XButton w-[3rem] h-[3rem] drop-shadow-2xl mt-[20%]  bg-white rounded-lg flex justify-center items-center hover:bg-[#2A2E3F] z-10">
            <img src={xLogo} />
          </a>

          {/* <3 button */}
          <a
            className="HeartButton w-[3rem] h-[3rem] drop-shadow-2xl mt-[20%]  bg-white rounded-lg flex justify-center items-center hover:bg-[#FFB1C8] z-10
                "
          >
            <img src={heartLogo} className="ml-1 mt-1" />
          </a>
        </div>
        {/* ....................... Slide status ........................ */}

        <div className=" flex flex-row justify-center space-x-[65%] bg-white w-[100%] h-[70%] overflow-hidden z-30">
          {step === 1 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">
                1/{images.length}
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">
                2/{images.length}
              </p>
            </div>
          )}
          {step === 3 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">
                3/{images.length}
              </p>
            </div>
          )}
          {step === 4 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">
                4/{images.length}
              </p>
            </div>
          )}
          {step === 5 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">
                5/{images.length}
              </p>
            </div>
          )}

          <div className="flex flex-row mt-[3%]">
            <button
              onClick={handleBack}
              className="w-[30px] h-[20px] mr-[10%] "
            >
              <img src={awL} className="w-full h-full" />
            </button>

            <button onClick={handleNext} className="w-[30px] h-[20px] ">
              <img src={awR} className="w-full h-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Information ...................................................................... */}

      <div className="w-[45%] h-[85%] mt-[-5%] flex flex-col justify-center items-center">
        {/* title */}
        <div className="w-[100%] h-[20%]">
          <span className="text-[46px] font-[900]">{data.name} </span>
          <span className="text-[46px] font-[900] text-[#646D89]">{age}</span>
          <br />

          <div className="flex flex-row">
            <img src={location} className="mt-[-1%]" />

            <span className="relative ml-[3%] text-[20px] font-[600] text-[#646D89]">
              {data.city}, {data.location}
            </span>
          </div>
        </div>

        {/* Sexual identities */}
        <div className=" w-[100%] h-[25%]">
          <span className="text-[16px] mr-[5%]">Sexual identities</span>
          <span className="text-[20px] text-[#646D89]">
            {data.sex_identity}
          </span>
          <br />
          {/* Sexual preferences */}
          <span className="text-[16px] mr-[5%]">Sexual preferences</span>
          <span className="text-[20px] text-[#646D89]">
            {data.sex_pref}
          </span>{" "}
          <br />
          {/* Racial preferences */}
          <span className="text-[16px] mr-[5%]">Racial preferences</span>
          <span className="text-[20px] text-[#646D89]">
            {data.racial_pref}
          </span>{" "}
          <br />
          {/* Meeting interests */}
          <span className="text-[16px] mr-[5%]">Meeting interests</span>
          <span className="text-[20px] text-[#646D89]">
            {data.meeting_int}
          </span>{" "}
          <br />
        </div>
        {/* About me */}
        <div className="w-[100%] h-[20%] ">
          <h1 className="text-[24px] font-[700]">About me</h1>
          <div className="[100%] h-[100%] overflow-y-scroll ">
            <p className="text-[16px]  ">{data.about_me}</p>
          </div>
        </div>
        {/* Hobbies */}
        <div className=" w-[100%] h-[10%] mt-[10%] flex flex-col">
          <h1 className="font-[700]">Hobbies and Interests</h1>
          <div className="text-[16px] flex flex-row mt-2">
            {hobbies.map((value) => {
              return <div className="mr-4">{value}</div>;
            })}
          </div>
        </div>
        {/* Contact */}
        <div className=" w-[100%] h-[10%] mt-[5%]">
          <h1 className="font-[700]">Contact</h1>
          <p className="text-[16px]">
            {data.contact.map((value) => {
              return <div>{value}</div>;
            })}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
