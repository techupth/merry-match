import React from "react";
import { useState, useEffect } from "react";
//icons
import location from "../../../public/asset/MerryList/location.png";
import twoheart from "../../../public/asset/MerryList/twoheart.png";
import chat from "../../../public/asset/MerryList/chat.png";
import view from "../../../public/asset/MerryList/view.png";
import heartWhite from "../../../public/asset/MerryList/heartWhite.png";
import heartRed from "../../../public/asset/MerryList/heartRed.png";
import { Progress, Spinner } from "@chakra-ui/react";

//components
import Footer from "../../components/editPageComponents/Footer";

// Modal
import EditModal from "../../components/merryListComponents/EditModal";

import { useSwipe } from "../../contexts/swipeContext";

const MerryList = () => {
  const { merryList, setUnMatch, deleteMatch, unMatch } = useSwipe();

  const [isLoading, setIsloading] = useState("NoUser");
  const [userList, setUserList] = useState([]);
  const [modalId, setModalId] = useState(null);

  const [matchId, setMatchId] = useState([]);

  const [preview, setPreview] = useState(false);

  const [deleteId, setDeleteId] = useState([]);

  const isData = async () => {
    try {
      setIsloading("loading");
      const data = await merryList();
      // console.log(data)
      setIsloading("NoUser");
      handleStatus(data.matchList, data.matchId);
      // console.log(data.matchId)
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
      // console.log(id);
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

  const handleLike = (id) => {
    const unSwipeType = [...userList];
    unSwipeType[id].swipe_type = false;
    setUserList(unSwipeType);
  };

  const handleUnLike = (id) => {
    const unSwipeType = [...userList];
    unSwipeType[id].swipe_type = true;
    setUserList(unSwipeType);
  };

  const handlePushUpMatchId = (index) => {
    setDeleteId([...deleteId, userList[index].swipe_id]);
  };

  const handlepulloutMatchId = (index) => {
    const arr = [...deleteId];
    const newarr = arr.filter((value) => value !== userList[index].swipe_id);
    setDeleteId(newarr);
  };

  const handleDeleteSwipe = () => {
    const unLikeList = [...deleteId];
    setUnMatch(unLikeList);
  };

  setTimeout(() => {
    window.onload = deleteMatch(unMatch);
  }, 2500);

  useEffect(() => {
    isData();
  }, []);

  useEffect(() => {
    handleDeleteSwipe();
  }, [deleteId]);

  return (
    <div className="flex items-center flex-col h-[900px] overflow-scroll border-3 border-black">
      {preview && (
        <EditModal
          close={() => setPreview(!preview)}
          data={userList[modalId]}
        />
      )}
      <div className="w-full flex  justify-center z-0 relative">
        {isLoading === "loading" ? (
          <div className="w-full h-[1000px] flex flex-col justify-center items-center">
            <Spinner
              thickness="7px"
              speed="0.65s"
              emptyColor="gray.200"
              color="pink"
              size="xl"
            />
            Loading...
          </div>
        ) : isLoading === "data" ? (
          <div className="w-[933px] mt-[200px]">
            <h4 className="text-[14px] text-[#7B4429]">MERRY LIST</h4>
            <h1 className="text-[#A62D82] font-extrabold text-[46px] sticky">
              Let’s know each other
            </h1>
            <h1 className="text-[#A62D82] font-extrabold text-[46px]">
              with Merry!
            </h1>
            <div className="mt-[56px]">
              {/* เริ่ม return map ตั้งแต่ตรงนี้ */}
              {userList.map((user, index) => {
                return (
                  <div key={index}>
                    <div className="flex mt-[40px]">
                      {/* ซ้าย */}
                      <div
                        className="w-1/3 flex justify-center "
                        key={user.swipe_id}
                      >
                        <img
                          className="w-[187px] h-[187px] rounded-3xl object-cover"
                          src={user.profile_pics[0]}
                          alt=""
                        />
                      </div>

                      {/* กลาง */}
                      <div className="w-2/3 ml-[40px] ">
                        <div className="flex items-baseline">
                          <p className="text-[24px] font-bold">{user.name}</p>
                          <p className="text-[#646D89] text-[24px] ml-[8px] font-bold">
                            {user.user_age}
                          </p>
                          <div className="ml-[18px]">
                            <img src={location} alt="location" />
                          </div>
                          <p className="text-[#646D89] ml-[8px]">
                            {user.city},
                          </p>
                          <p className="text-[#646D89] ml-[2px]">
                            {user.location}{" "}
                          </p>
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
                              {user.sex_identity}
                            </p>
                            <p className="text-[#646D89] mb-[8px]">
                              {user.sex_pref}
                            </p>
                            <p className="text-[#646D89] mb-[8px]">
                              {user.racial_pref}
                            </p>
                            <p className="text-[#646D89] mb-[8px]">
                              {user.meeting_int}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* ขวา */}

                      <div className="w-1/3 flex flex-col items-end ">
                        {user.status === "match" ? (
                          <div className="w-[160px] h-[32px] flex border border-[#C70039] rounded-2xl justify-center items-center mr-[16px]">
                            <img
                              className="w-[20px] h-[12px]"
                              src={twoheart}
                              alt=""
                            />
                            <p className="ml-[12px]">Merry Match!</p>
                          </div>
                        ) : (
                          <div className="w-[160px] h-[32px] flex border border-[#646D89] rounded-2xl justify-center items-center mr-[16px]">
                            <p className="ml-[12px] text-[#646D89]">
                              {" "}
                              Not Match yet{" "}
                            </p>
                          </div>
                        )}
                        <div className="flex mt-[25px]">
                          {user.status === "match" ? (
                            <button className="w-[48px] h-[48px] bg-white rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]">
                              {" "}
                              <img src={chat} alt="" />
                            </button>
                          ) : null}
                          <button
                            className="w-[48px] h-[48px] bg-white rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]"
                            onClick={(event) => {
                              event.preventDefault();
                              setPreview(!preview);
                              setModalId(index);
                            }}
                          >
                            {" "}
                            <img src={view} alt=" " />
                          </button>
                          {user.swipe_type === true ? (
                            <button
                              className="w-[48px] h-[48px] bg-[#C70039] rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]"
                              onClick={(e) => {
                                e.preventDefault();
                                handleLike(index);
                                handlePushUpMatchId(index);
                              }}
                            >
                              {" "}
                              <img
                                src={heartWhite}
                                className="ml-[5px] mt-[5px]"
                                alt=""
                              />
                            </button>
                          ) : (
                            <button
                              className="w-[48px] h-[48px] bg-white  rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]"
                              onClick={(e) => {
                                e.preventDefault();
                                handleUnLike(index);
                                handlepulloutMatchId(index);
                              }}
                            >
                              {" "}
                              <img
                                src={heartRed}
                                className="ml-[5px] mt-[5px]"
                                alt=""
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-[#D6D9E4] h-[1px] mt-[38px]">
                      {" "}
                    </div>
                    {/* จบ return map */}
                  </div>
                );
              })}
            </div>
          </div>
        ) : isLoading === "NoUser" ? (
          <div>
            <h4 className="text-[14px] text-[#7B4429] mt-[200px]">
              MERRY LIST
            </h4>
            <h1 className="text-[#A62D82] font-extrabold text-[46px]">
              Let’s know each other
            </h1>
            <h1 className="text-[#A62D82] font-extrabold text-[46px]">
              with Merry!
            </h1>

            <div className="flex flex-row justify-center items-center  text-[45px] mt-[150px] mb-[150px] ">
              No user
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default MerryList;
