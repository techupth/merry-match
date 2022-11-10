import React from "react";
import { useState } from "react";
<<<<<<< HEAD
=======

// Mock pictures for example
>>>>>>> origin/feature/dataValidation
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
<<<<<<< HEAD
=======
//.............................................................................
>>>>>>> origin/feature/dataValidation

const EditModal = () => {
  const [step, setStep] = useState(1);

<<<<<<< HEAD
  const handleNext = () => {
=======
  const handleNext = (e) => {
    e.preventDefault()
>>>>>>> origin/feature/dataValidation
    if (step !== 5) {
      setStep(step + 1);
    }
  };

<<<<<<< HEAD
  const handleBack = () => {
=======
  const handleBack = (e) => {
    e.preventDefault()
>>>>>>> origin/feature/dataValidation
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  return (
<<<<<<< HEAD
    <div className="bg-[#646D89] w-[100%] h-[1000px] flex items-center  justify-center">
      <div className="bg-white w-[1140px] h-[740px] rounded-3xl flex items-center justify-center font-[400]">
        <div className="relative w-[35%] h-[80%] mb-[10%] rounded-3xl mr-[3%] flex items-center flex-col overflow-hidden mt-[10%] ">
          {/* ....................... Display Pics ....................... */}
          <div className="flex justify-center items-center w-[95%] h-[120%] mt-[30%] rounded-3xl">
            {step === 1 && (
              <img
                src={sek_1}
                className="absolute w-[auto] h-[full] z-0  rounded-3xl"
              />
            )}
            {step === 2 && (
              <img
                src={sek_2}
                className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
              />
            )}
            {step === 3 && (
              <img
                src={sekCute}
                className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
              />
            )}
            {step === 4 && (
              <img
                src={pSekYoung}
                className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
              />
            )}
            {step === 5 && (
              <img
                src={pSekWDog}
                className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
              />
            )}
          </div>

          {/* ....................... Match button ....................... */}

          {/* X button */}
          <div className="Button flex flex-row w-[100%] h-[100%] items-center justify-center m-[0%] space-x-3 overflow-hidden mt-[3%]">
            <button className="XButton w-[3rem] h-[3rem] drop-shadow-2xl mt-[20%]  bg-white rounded-lg flex justify-center items-center hover:bg-[#2A2E3F] z-10">
              <img src={xLogo} />
            </button>

            {/* <3 button */}
            <button
              className="HeartButton w-[3rem] h-[3rem] drop-shadow-2xl mt-[20%]  bg-white rounded-lg flex justify-center items-center hover:bg-[#FFB1C8] z-10
                "
            >
              <img src={heartLogo} className="ml-1 mt-1" />
            </button>
          </div>
          {/* ....................... Slide status ........................ */}

          <div className=" flex flex-row justify-center space-x-[65%] bg-white w-[100%] h-[70%] overflow-hidden z-30">
            {step === 1 && (
              <div className="flex">
                <p className="text-[16px] text-[#757D96] font-[600]">1/5</p>
              </div>
            )}

            {step === 2 && (
              <div className="flex">
                <p className="text-[16px] text-[#757D96] font-[600]">2/5</p>
              </div>
            )}
            {step === 3 && (
              <div className="flex">
                <p className="text-[16px] text-[#757D96] font-[600]">3/5</p>
              </div>
            )}
            {step === 4 && (
              <div className="flex">
                <p className="text-[16px] text-[#757D96] font-[600]">4/5</p>
              </div>
            )}
            {step === 5 && (
              <div className="flex">
                <p className="text-[16px] text-[#757D96] font-[600]">5/5</p>
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
            <span className="text-[46px] font-[900]">Sek Loso </span>
            <span className="text-[46px] font-[900] text-[#646D89]">48</span>
            <br />

            <div className="flex flex-row">
              <img src={location} className="mt-[-1%]" />

              <span className="relative ml-[3%] text-[20px] font-[600] text-[#646D89]">
                Bangkok, Thailand
              </span>
            </div>
          </div>

          {/* Sexual identities */}
          <div className=" w-[100%] h-[25%]">
            <span className="text-[16px] mr-[5%]">Sexual identities</span>
            <span className="text-[20px] text-[#646D89]">Male</span>
            <br />
            {/* Sexual preferences */}
            <span className="text-[16px] mr-[5%]">Sexual preferences</span>
            <span className="text-[20px] text-[#646D89]">Female</span> <br />
            {/* Racial preferences */}
            <span className="text-[16px] mr-[5%]">Racial preferences</span>
            <span className="text-[20px] text-[#646D89]">Europe</span> <br />
            {/* Meeting interests */}
            <span className="text-[16px] mr-[5%]">Meeting interests</span>
            <span className="text-[20px] text-[#646D89]">ONS</span> <br />
          </div>
          {/* About me */}
          <div className="w-[100%] h-[20%] overflow-y-scroll">
            <h1 className="text-[24px] font-[700]">About me</h1>
            <p className="text-[16px] ">
              ที่เฝ้าแต่โทร โทรไปหาเธอ เรื่อยเปื่อย เหนื่อยก็ยอมก็ใจชอบเธอ
              ไม่เบา แต่ใจเจ้ากรรมไม่รู้เลย ว่าเธอไม่ชอบเรา ไม่สนและไม่เอา
              ไม่อยากคุย ก็เลยมาร้องเพลงบอก แค่อยากให้เธอนั้นเข้าใจ
              ไอ้สิ่งที่ฉันทำลงไป ใจสั่งมา อย่าโกรธเลยน้าคนดี
              ยกโทษให้ฉันนะแก้วตา คราวหลังจะไม่มา จะไม่โทร
            </p>
          </div>
          {/* Hobbies */}
          <div className=" w-[100%] h-[10%] mt-[10%]">
            <h1 className="font-[700]">Hobbies and Interests</h1>
            <p className="text-[16px]">Being Rockstar </p>
          </div>
          {/* Contact */}
          <div className=" w-[100%] h-[10%] mt-[5%]">
            <h1 className="font-[700]">Contact</h1>
            <p className="text-[16px]">@seklosoofficial </p>
          </div>
=======
    <div className="editModal relative bg-white w-[900px] h-[700px] rounded-3xl flex items-center justify-center font-[400] z-30 mt-[5%]">
      <div className="relative w-[35%] h-[80%] mb-[10%] rounded-3xl mr-[3%] flex items-center flex-col overflow-hidden mt-[10%] ">
        {/* ....................... Display Pics ....................... */}
        <div className="flex justify-center items-center w-[95%] h-[120%] mt-[30%] rounded-3xl">
          {step === 1 && (
            <img
              src={sek_1}
              className="absolute w-[auto] h-[full] z-0  rounded-3xl"
            />
          )}
          {step === 2 && (
            <img
              src={sek_2}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
          {step === 3 && (
            <img
              src={sekCute}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
          {step === 4 && (
            <img
              src={pSekYoung}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
          {step === 5 && (
            <img
              src={pSekWDog}
              className=" absolute w-[auto] h-[full] z-0 rounded-3xl"
            />
          )}
        </div>

        {/* ....................... Match button ....................... */}

        {/* X button */}
        <div className="Button flex flex-row w-[100%] h-[100%] items-center justify-center m-[0%] space-x-3 overflow-hidden mt-[3%]">
          <button className="XButton w-[3rem] h-[3rem] drop-shadow-2xl mt-[20%]  bg-white rounded-lg flex justify-center items-center hover:bg-[#2A2E3F] z-10">
            <img src={xLogo} />
          </button>

          {/* <3 button */}
          <button
            className="HeartButton w-[3rem] h-[3rem] drop-shadow-2xl mt-[20%]  bg-white rounded-lg flex justify-center items-center hover:bg-[#FFB1C8] z-10
                "
          >
            <img src={heartLogo} className="ml-1 mt-1" />
          </button>
        </div>
        {/* ....................... Slide status ........................ */}

        <div className=" flex flex-row justify-center space-x-[65%] bg-white w-[100%] h-[70%] overflow-hidden z-30">
          {step === 1 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">1/5</p>
            </div>
          )}

          {step === 2 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">2/5</p>
            </div>
          )}
          {step === 3 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">3/5</p>
            </div>
          )}
          {step === 4 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">4/5</p>
            </div>
          )}
          {step === 5 && (
            <div className="flex">
              <p className="text-[16px] text-[#757D96] font-[600]">5/5</p>
            </div>
          )}

          <div className="flex flex-row mt-[3%]">
            <button
              onClick={(handleBack)}
              className="w-[30px] h-[20px] mr-[10%] "
            >
              <img src={awL} className="w-full h-full" />
            </button>

            <button onClick={(handleNext)} className="w-[30px] h-[20px] ">
              <img src={awR} className="w-full h-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Information ...................................................................... */}

      <div className="w-[45%] h-[85%] mt-[-5%] flex flex-col justify-center items-center">
        {/* title */}
        <div className="w-[100%] h-[20%]">
          <span className="text-[46px] font-[900]">Sek Loso </span>
          <span className="text-[46px] font-[900] text-[#646D89]">48</span>
          <br />

          <div className="flex flex-row">
            <img src={location} className="mt-[-1%]" />

            <span className="relative ml-[3%] text-[20px] font-[600] text-[#646D89]">
              Bangkok, Thailand
            </span>
          </div>
        </div>

        {/* Sexual identities */}
        <div className=" w-[100%] h-[25%]">
          <span className="text-[16px] mr-[5%]">Sexual identities</span>
          <span className="text-[20px] text-[#646D89]">Male</span>
          <br />
          {/* Sexual preferences */}
          <span className="text-[16px] mr-[5%]">Sexual preferences</span>
          <span className="text-[20px] text-[#646D89]">Female</span> <br />
          {/* Racial preferences */}
          <span className="text-[16px] mr-[5%]">Racial preferences</span>
          <span className="text-[20px] text-[#646D89]">Europe</span> <br />
          {/* Meeting interests */}
          <span className="text-[16px] mr-[5%]">Meeting interests</span>
          <span className="text-[20px] text-[#646D89]">ONS</span> <br />
        </div>
        {/* About me */}
        <div className="w-[100%] h-[20%] overflow-y-scroll">
          <h1 className="text-[24px] font-[700]">About me</h1>
          <p className="text-[16px] ">
            ที่เฝ้าแต่โทร โทรไปหาเธอ เรื่อยเปื่อย เหนื่อยก็ยอมก็ใจชอบเธอ ไม่เบา
            แต่ใจเจ้ากรรมไม่รู้เลย ว่าเธอไม่ชอบเรา ไม่สนและไม่เอา ไม่อยากคุย
            ก็เลยมาร้องเพลงบอก แค่อยากให้เธอนั้นเข้าใจ ไอ้สิ่งที่ฉันทำลงไป
            ใจสั่งมา อย่าโกรธเลยน้าคนดี ยกโทษให้ฉันนะแก้วตา คราวหลังจะไม่มา
            จะไม่โทร
          </p>
        </div>
        {/* Hobbies */}
        <div className=" w-[100%] h-[10%] mt-[10%]">
          <h1 className="font-[700]">Hobbies and Interests</h1>
          <p className="text-[16px]">Being Rockstar </p>
        </div>
        {/* Contact */}
        <div className=" w-[100%] h-[10%] mt-[5%]">
          <h1 className="font-[700]">Contact</h1>
          <p className="text-[16px]">@seklosoofficial </p>
>>>>>>> origin/feature/dataValidation
        </div>
      </div>
    </div>
  );
};

export default EditModal;
