import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useSwipe } from "../../contexts/swipeContext";
import SwipeModal from "./swipeModal";

// utility
import arrowLeftWhite from "../../../public/asset/swipeComponentsItems/arrowLeftWhite.svg";
import arrowRightWhite from "../../../public/asset/swipeComponentsItems/arrowRightWhite.svg";
import eyeIcon from "../../../public/asset/swipeComponentsItems/eyeIcon.svg";
import heartLogo from "../../../public/asset/editModalItems/hearthLogo.svg";
import xLogo from "../../../public/asset/editModalItems/xLogo.svg";

const alreadyRemoved = [];

const Swipe = () => {
  const {
    filterData,
    postSwipe,
    merryList,
  } = useSwipe();

  const [currentIndex, setCurrentIndex] = useState(filterData.data.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [step, setStep] = useState(0);
  const [currenId, setCurrenId] = useState([]);
  const [isLoading, setIsloading] = useState("NoUser");
  
  // Modal
  const [modalId, setModalId] = useState(null);
  const [preview, setPreview] = useState(false);



  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  // useMemo
  const childRefs = useMemo(
    () =>
      Array(filterData.data.length)
        .fill(0)
        .map((i) => React.createRef()),
    [filterData]
  );


  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  //   Set swipe index
  const canGoBack = currentIndex < filterData.length - 1;
  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const alreadyRemoved = [];

  const swiped = (direction, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    alreadyRemoved.push(index);
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  //   Handle pictures
  const handleNext = (index) => {
    if (step !== filterData.data[index].profile_pics.length - 1) {
      console.log(step);
      setStep(step + 1);
    }
  };

  const handleBack = (index) => {
    if (step !== 0) {
      console.log(step);
      setStep(step - 1);
    }
  };

  // Swipe
  const swipe = async (dir) => {
    if (currentIndex < filterData.data.length) {
      await childRefs[currentIndex].current.swipe(dir); 
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full h-full bg-[#160404] flex justify-center items-start overflow-hidden overflow-x-hidden">
       {preview && (
                <SwipeModal
                  close={() => setPreview(!preview)}
                  data={filterData.data[modalId]}
                />
              )}
      <div className="overflow-hidden">
        <div className="cardContainer text-[white] w-[10rem] h-[10rem] overflow-hidden mt-[30%] ">
          {filterData.data.map((user, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe absolute top-[140px] left-[32%]"
              key={user.name}
              onSwipe={(dir) => swiped(dir, index)}
              onCardLeftScreen={() => {
                outOfFrame(filterData.name, index);
                setStep(0);
                setCurrenId(index);
              }}
              swipeRequirementType="position"
              swipeThreshold={100}
             
            >
              <div
                style={{
                  backgroundImage: "url(" + user.profile_pics[step] + ")",
                }}
                className="card w-[30rem] h-[30rem] bg-cover bg-center rounded-[32px] overflow-hidden  items-end flex flex-row z-0"
              >
                <div className="flex flex-row z-[0] w-full">
                  <h3 className="text-[white] text-[1.5rem] m-[5%] mr-[0] font-[700]">
                    {user.name}
                  </h3>
                  <h3 className="text-[white] text-[1.5rem] m-[5%] ml-[2%] mr-[1%] font-[700]">
                    {user.user_age}
                  </h3>
                  <button className="" onClick={(event)=>{
                     event.preventDefault();
                     setPreview(!preview);
                     setModalId(index);
                    }}>
                    <img src={eyeIcon} />
                  </button>
                </div>

                {/* slide pictures */}
                <div className="arrow-buttons absolute right-[5%] space-x-6 bottom-[6%] z-40 ">
                  <button
                    onClick={() => {
                      handleBack(index);
                    }}
                  >
                    <img src={arrowLeftWhite} className="w-[1rem] h-[1rem]" />
                  </button>

                  <button
                    onClick={() => {
                      handleNext(index);
                    }}
                  >
                    <img src={arrowRightWhite} className="w-[1rem] h-[1rem]" />
                  </button>
                </div>
              </div>

              <div className="button flex flex-row items-center justify-center space-x-3 overflow-hidden  top-[90%] right-[35%] z-60 absolute   ">
                <button
                  className="XButton w-[80px] h-[80px] drop-shadow-2xl mr-[10px] mt-[20%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#2A2E3F] z-70"
                  onClick={() => {
                    swipe("left", index);
                    postSwipe(index, false);
                  }}
                >
                  <img src={xLogo} />
                </button>

                <button
                  className="HeartButton w-[80px] h-[80px] drop-shadow-2xl mt-[20%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#FFB1C8] z-70"
                  onClick={() => {
                    setTimeout(() => {
                      swipe("right", index);
                      postSwipe(index, true);
                    }, 1000);
                  }}
                >
                  <img src={heartLogo} className="ml-1 mt-1" />
                </button>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swipe;
