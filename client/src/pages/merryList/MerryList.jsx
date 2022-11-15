import React from "react";
//icons
import location from "../../../public/asset/MerryList/location.png";
import twoheart from "../../../public/asset/MerryList/twoheart.png";
import chat from "../../../public/asset/MerryList/chat.png";
import view from "../../../public/asset/MerryList/view.png";
import heart from "../../../public/asset/MerryList/heart.png";
//components
import NavbarAuthen from "../../components/Navbar/NavbarAuthen";
import Footer from "../../components/editPageComponents/Footer";


//mock data
const data = [
  {
    id: 1,
    name: "pok",
    age: 27,
    country: "thailand",
    city: "buriram",
    img: "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    SexualIdentities: "Female",
    SexualPreferences: "Male",
    RacialPreferences: "Indefinite",
    MeetingInterests: "Long-term commitment",
    status: "Match",
  },
  {
    id: 2,
    name: "pook",
    age: 25,
    country: "thailand",
    city: "bangkok",
    img: "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    SexualIdentities: "Male",
    SexualPreferences: "Female",
    RacialPreferences: "Indefinite",
    MeetingInterests: "friend",
    status: "NotMatch",
  },
  {
    id: 3,
    name: "pop",
    age: 23,
    country: "Japan",
    city: "Kyoto",
    img: 'https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    SexualIdentities: "Male",
    SexualPreferences: "Female",
    RacialPreferences: "Indefinite",
    MeetingInterests: "friend",
    status: "Match",
  },
];

const MerryList = () => {
  return (
    <>
      <div className="w-full flex  justify-center">
        <NavbarAuthen />
        <div className="w-[933px] mt-[240px]">
          <h4 className="text-[14px] text-[#7B4429]">MERRY LIST</h4>
          <h1 className="text-[#A62D82] font-extrabold text-[46px]">
            Let’s know each other
          </h1>
          <h1 className="text-[#A62D82] font-extrabold text-[46px]">
            with Merry!
          </h1>

          <div className="mt-[56px]">
            {/* เริ่ม return map ตั้งแต่ตรงนี้ */}
            {data.map((user) => {
              return (
                <div>
                  <div className="flex mt-[40px]">
                    {/* ซ้าย */}
                    <div className="w-1/3 flex justify-center ">
                      <img
                        className="w-[187px] h-[187px] rounded-3xl"
                        src={user.img}
                        alt=""
                      />
                    </div>

                    {/* กลาง */}
                    <div className="w-2/3 ml-[40px] ">
                      <div className="flex items-baseline">
                        <p className="text-[24px] font-bold">{user.name}</p>
                        <p className="text-[#646D89] text-[24px] ml-[8px] font-bold">{user.age}</p>
                        <div className="ml-[18px]">
                          <img src={location} alt="location" />
                        </div>
                        <p className="text-[#646D89] ml-[8px]">{user.city},</p>
                        <p className="text-[#646D89] ml-[2px]">{user.country} </p>
                      </div>

                      <div className="flex  ">
                        <div className="w-[167px] mt-[28px]">
                          <p className="text-[#2A2E3F] mb-[8px]">
                            Sexual identities
                          </p>
                          <p className="text-[#2A2E3F] mb-[8px]">
                            Sexual preferences
                          </p>
                          <p className="text-[#2A2E3F] mb-[8px]">
                            Racial preferences
                          </p>
                          <p className="text-[#2A2E3F] mb-[8px]">
                            Meeting interests
                          </p>
                        </div>
                        <div className="w-[280px] mt-[28px]">
                          <p className="text-[#646D89] mb-[8px]">
                            {user.SexualIdentities}
                          </p>
                          <p className="text-[#646D89] mb-[8px]">
                            {user.SexualPreferences}
                          </p>
                          <p className="text-[#646D89] mb-[8px]">
                            {user.RacialPreferences}
                          </p>
                          <p className="text-[#646D89] mb-[8px]">
                            {user.MeetingInterests}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ขวา */}

                    {user.status === "Match" ? (
                      <div className="w-1/3 flex flex-col items-end ">
                        <div className="w-[160px] h-[32px] flex border border-[#C70039] rounded-2xl justify-center items-center mr-[16px]">
                          <img
                            className="w-[20px] h-[12px]"
                            src={twoheart}
                            alt=""
                          />
                          <p className="ml-[12px]">Merry Match!</p>
                        </div>
                        <div className="flex mt-[25px]">
                          <button className="w-[48px] h-[48px] bg-white rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]">
                            {" "}
                            <img src={chat} alt="" />
                          </button>
                          <button className="w-[48px] h-[48px] bg-white rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]">
                            {" "}
                            <img src={view} alt="" />
                          </button>
                          <button className="w-[48px] h-[48px] bg-[#C70039] rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]">
                            {" "}
                            <img src={heart} alt="" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-1/3 flex flex-col items-end ">
                        <div className="w-[160px] h-[32px] flex border border-[#646D89] rounded-2xl justify-center items-center mr-[16px]">
                          <p className="ml-[12px] text-[#646D89]">
                            Not Match yet
                          </p>
                        </div>
                        <div className="flex mt-[25px]">
                          <button className="w-[48px] h-[48px] bg-white rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]">
                            {" "}
                            <img src={view} alt="" />
                          </button>
                          <button className="w-[48px] h-[48px] bg-[#C70039] rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]">
                            {" "}
                            <img src={heart} alt="" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full bg-[#D6D9E4] h-[1px] mt-[38px]"> </div>
                  {/* จบ return map */}
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default MerryList;
