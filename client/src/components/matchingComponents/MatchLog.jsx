import React from "react";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "../../utils/mock-photo/data";
import search_heart from "../../../public/asset/merryMatchIMG/search_heart.png";
import two_heart from "../../../public/asset/merryMatchIMG/two_heart.png";

import { useSwipe } from "../../contexts/swipeContext";

const MatchLog = (props) => {
  const { merryList } = useSwipe();
  const [isLoading, setIsloading] = useState("NoUser");
  const [userList, setUserList] = useState([]);

  const isData = async () => {
    try {
      setIsloading("loading");
      const data = await merryList();
      setIsloading("NoUser");
      handleStatus(data.matchList, data.matchId);
      if (data.matchList.length !== 0) {
        setIsloading("data");
      }
    } catch (err) {
      setIsloading("err");
    }
  };

  const handleStatus = (data, id) => {
    const swipeId = id.map((value) => value.swiper);
    const userList = [...data];

    swipeId.map((id) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].user_id === id) {
          const user = {
            ...data[i],
            status: "match",
          };
          userList[i] = user;
        }
      }
    });
    setUserList(userList);
  };

  useEffect(() => {
    isData();
  }, [props.clickCountinue]);

  console.log(props.clickCountinue);

  console.log(userList);

  return (
    <div className="MatchLog w-[250px] mt-[240px] h-full px-[16px] z-40 bg-[white] xl:w-[316px]">
      <div className="flex justify-center">
        <div className="w-[17.625rem] h-[11.688rem] text-center bg-[#F6F7FC] rounded-xl mt-[36px] border-2 border-[#D6D9E4]">
          <img src={search_heart} className="inline-block mt-[33px]" alt="" />
          <h1 className="text-[24px] font-bold text-[#95002B]">
            Discover New Match
          </h1>
          <p className="text-[14px] text-[#646D89] px-8 hidden xl:block">
            Start find and Merry to get know and connect with new friend!
          </p>
        </div>
      </div>
      <div className="w-full bg-[#D6D9E4] h-[2px] mt-[38px]"> </div>

      <h1 className="text-[#2A2E3F] text-[24px] font-bold mt-[24px]">
        Merry Match!
      </h1>
<<<<<<< HEAD
      {isLoading === "loading" ? (
        <div>Loading...</div>
      ) : isLoading === "data" ? (
=======

      <div className="relative flex items-center ">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}

        />
>>>>>>> 1ccfa67a (fix:responsive)
        <div
          id="slider"
          className="w-full h-[400px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth mt-[30px] "
        >
<<<<<<< HEAD
          {userList.map((item, index) =>
            item.status === "match" ? (
              <div
                key={index}
                className="flex relative hover:scale-105 ease-in-out duration-300 cursor-pointer "
              >
                <img
                  src={two_heart}
                  className=" absolute bottom-0 left-[70px]"
                  alt=""
                />
                <div>
                  <img
                    className="w-[100px] h-[100px] inline-block p-2  rounded-3xl mt-[16px] object-cover"
                    src={item.profile_pics[0]}
                    alt="/"
                  />
                </div>
                <div className="flex flex-col justify-center ml-[5px]">
                  <p className="name font-bold">{item.name}</p>
                  <p className="age text-[#646D89]">{item.user_age}</p>
                  <p className="meeting_int text-[#646D89]">
                    {item.meeting_int}
                  </p>
                </div>
              </div>
            ) : null
          )}
=======
          {data.map((item, index) => (
            <div key={index} className="inline-block relative hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <img
                src={two_heart}
                className="inline-block absolute bottom-0 right-0"
                alt=""
              />
              <img
                className="w-[100px] h-[100px] inline-block p-2  rounded-3xl mt-[16px]"
                src={item.img}
                alt="/"
              />
            </div>
          ))}
>>>>>>> 1ccfa67a (fix:responsive)
        </div>
      ) : null}
    </div>
  );
};

export default MatchLog;
