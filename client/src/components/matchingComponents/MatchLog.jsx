import React from "react";
import { useState, useEffect } from "react";
import search_heart from "../../../public/asset/merryMatchIMG/search_heart.png";
import two_heart from "../../../public/asset/merryMatchIMG/two_heart.png";
import { useSwipe } from "../../contexts/swipeContext";
import MatchLogPreview from "./MatchLogPreview";

const MatchLog = (props) => {
  const { merryList, merryListUser, setUnMatch, deleteMatch, unMatch } =
    useSwipe();

  const [isLoading, setIsloading] = useState("NoUser");
  const [userList, setUserList] = useState([]);
  const [preview, setPreview] = useState(false);
  const [modalId, setModalId] = useState(null);

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

      <h1 className="text-[#2A2E3F] text-[24px] font-bold mt-[24px] text-center">
        Merry Match!
      </h1>
      {isLoading === "loading" ? (
        <div className="text-pink-500 text-[24px] text-center mt-[30%]">
          Loading...
        </div>
      ) : isLoading === "data" ? (
        <a
          id="slider"
          type="button"
          className="w-full h-[400px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth mt-[-2%] "
        >
          {preview && (
            <MatchLogPreview
              close={() => setPreview(!preview)}
              data={userList[modalId]}
            />
          )}
          {userList.map((item, index) =>
            item.status === "match" ? (
              <div
                key={index}
                className="flex hover:scale-105 ease-in-out duration-300 cursor-pointer relative"
                onClick={(event) => {
                  event.preventDefault();
                  setPreview(!preview);
                  setModalId(index);
                }}
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
                <div className="flex flex-col justify-center ml-[5px]  overflow-x-scroll">
                  <p className="name font-bold text-[1.20rem] ">{item.name}</p>
                  <p className="age text-[#646D89]">Age {item.user_age}</p>
                  <p className="meeting_int text-[#646D89]">
                    {item.meeting_int}
                  </p>
                </div>
              </div>
            ) : null
          )}
        </a>
      ) : null}
    </div>
  );
};

export default MatchLog;
