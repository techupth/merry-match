import React from "react";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "../../utils/hooks/useClickOutside";

// assets
import heartLogo from "../../../public/asset/editModalItems/hearthLogo.svg";
import xLogo from "../../../public/asset/editModalItems/xLogo.svg";
import awL from "../../../public/asset/editModalItems/awL.svg";
import awR from "../../../public/asset/editModalItems/awR.svg";
import location from "../../../public/asset/editModalItems/location.svg";
import twoHeartLogo from "../../../public/asset/merryMatchIMG/twoHeartLogo.svg";
//.............................................................................

const MatchLogPreview = ({ close, data }) => {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState(null);
  const [images, setImages] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  console.log(data);

  const ref = useRef(null);
  useClickOutside(ref, () => close(false));

  const handleNext = (e) => {
    e.preventDefault();
    if (step !== images.length) {
      setStep(step + 1);
    }
  };

  // console.log(data.hobby);

  const handleBack = (e) => {
    e.preventDefault();
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  const handdleAge = (data) => {
    const year = data.split("-");
    const now = new Date().getFullYear();
    const age = now - year[0];
    setAge(age);
  };

  const handdleHobbie = (data) => {
    const hobbiesArr = [];
    if (data !== undefined) {
      for (let i = 0; i < data.length; i++) {
        const obj = JSON.parse(data[i]);
        hobbiesArr.push(obj);
      }
    }
    setHobbies(hobbiesArr);
  };

  console.log(hobbies);
  useEffect(() => {
    handdleAge(data.birthday);
    setImages(data.profile_pics);
    handdleHobbie(data.hobby);
  }, []);

  return (
    <div className="w-[2000px] h-[1200px] bg-[] z-30 absolute flex justify-center mt-[-5%]">
      <div
        className="editModal bg-white w-[65rem] h-[35rem] rounded-3xl flex z-30 absolute items-center justify-center font-[400] left-[10%] top-[-10%] overflow-auto"
      >
        <div className="XButton absolute right-9 top-3 text-[2.5rem] text-slate-300 ">
          <button
            onClick={() => {
              close(false);
            }}
          >
            x
          </button>
        </div>
        <div className=" w-1/2  rounded-3xl mr-[%] flex flex-col overflow-hidden relative  ">
          {/* ....................... Display Pics ....................... */}
          <div className="flex justify-center items-center rounded-3xl">
            {step === 1 && (
              <img
                src={images[0]}
                className="w-[20rem] h-[20rem] z-0 rounded-3xl object-cover hover:w-[25rem] hover:h-[25rem] ease-in-out duration-300"
              />
            )}
            {step === 2 && (
              <img
                src={images[1]}
                className="w-[20rem] h-[20rem] z-0 rounded-3xl hover:w-[25rem] hover:h-[25rem] ease-in-out duration-300 object-cover"
              />
            )}
            {step === 3 && (
              <img
                src={images[2]}
                className="w-[20rem] h-[20rem] z-0 rounded-3xl hover:w-[25rem] hover:h-[25rem] ease-in-out duration-300 object-cover"
              />
            )}
            {step === 4 && (
              <img
                src={images[3]}
                className="w-[20rem] h-[20rem] z-0 rounded-3xl hover:w-[25rem] hover:h-[25rem] ease-in-out duration-300 object-cover"
              />
            )}
            {step === 5 && (
              <img
                src={images[4]}
                className="w-[478px] h-[478px] z-0 rounded-3xl  hover:w-[25rem] hover:h-[25rem] ease-in-out duration-300 object-cover"
              />
            )}

            <img
              src={twoHeartLogo}
              className="w-[20%] h-[auto] absolute right-[10%] bottom-[10%] hover:opacity-20"
            />
          </div>

          {/* ....................... Slide status ........................ */}

          <div className=" flex flex-row justify-center space-x-[65%] mt-[40px]  overflow-hidden z-30">
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

            <div className="flex flex-row "  ref={ref} >
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

        <div className="w-1/2  flex flex-col justify-center items-center ">
          {/* title */}
          <div className="w-[100%] h-[20%] mt-[5%]">
            <span className="text-[40px] font-[900]">{data.name} </span>
            <span className="text-[40px] font-[900] text-[#646D89] ml-[30px]">
              {age}
            </span>
            <br />

            <div className="flex flex-row">
              <img src={location} className="mt-[-1%]" />

              <span className="relative ml-[3%] mt-[1%] text-[20px] font-[600] text-[#646D89]">
                {data.city}, {data.location}
              </span>
            </div>
          </div>

          {/* Sexual identities */}
          <div className=" w-[100%] mt-[2%]">
            <span className="text-[16px] mr-[5%] ">Sexual identities : </span>
            <span className="text-[20px] text-[#646D89] ml-4 ">
              {data.sex_identity}
            </span>
            <br />
            {/* Sexual preferences */}
            <span className="text-[16px] mr-[5%] mt-[20px]">
              Sexual preferences :{" "}
            </span>
            <span className="text-[20px] text-[#646D89]">{data.sex_pref}</span>{" "}
            <br />
            {/* Racial preferences */}
            <span className="text-[16px] mr-[5%] mt-[20px]">
              Racial preferences :{" "}
            </span>
            <span className="text-[20px] text-[#646D89] ml-1">
              {data.racial_pref}
            </span>{" "}
            <br />
            {/* Meeting interests */}
            <span className="text-[16px] mr-[5%] mt-[20px]">
              Meeting interests :{" "}
            </span>
            <span className="text-[20px] text-[#646D89] ml-3">
              {data.meeting_int}
            </span>{" "}
            <br />
          </div>
          {/* About me */}
          <div className="w-[100%] h-[20%] mt-[1%]">
            <h1 className="text-[24px] font-[700]">About me</h1>
            <div className="w-[418px] h-[100%] ">
              <p className="text-[16px]  ">{data.about_me}</p>
            </div>
          </div>
          {/* Hobbies */}
          <div className=" w-[100%]  mt-[3%] flex flex-col h-24 overflow-x-scroll">
            <h1 className="font-[700]">Hobbies and Interests</h1>
            <div className="text-[16px] flex row-auto mt-2 w-32 text-center">
              {hobbies.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mr-2 text-[#7D2262] rounded-[12px] border-[1px] border-[#DF89C6] px-[12px] py-[6px] text-[16px] flex justify-center items-center"
                  >
                    {item.value}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Contact */}
          {data.status === "match" ? (
            <div className=" w-[100%] h-[10%] mt-[%]">
              <h1 className="font-[700]">Contact</h1>
              <p className="text-[16px]">{data.contact}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MatchLogPreview;
