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
import MatchedLogo from "../../components/matchingComponents/MatchedLogo";
import PopupWhenSwipe from "./PopupWhenSwipe";
import PopupWhenClickX from "./PopupWhenClickX";

const Swipe = (props) => {
  const { filterData, postSwipe, merryList } = useSwipe();

  const [currentIndex, setCurrentIndex] = useState(filterData.data.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [step, setStep] = useState(0);
  const [currenId, setCurrenId] = useState([]);

  // Modal
  const [modalId, setModalId] = useState(null);
  const [preview, setPreview] = useState(false);
  const [justSwipe, setJustSwipe] = useState(false);
  const [justX, setJustX] = useState(false);

  const [matchingId, setMatchingId] = useState([]);
  const [isMatch, setIsMatch] = useState(false);
  const [isIndex, setIsIndex] = useState(null);
  const [isLastIndex, setIsLastIndex] = useState(false);

  const currentIndexRef = useRef(currentIndex);

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
  const swiped = (direction, index) => {
    if (step > filterData.data[index - 1].profile_pics.length - 1) {
      setStep(0);
    }

    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  //   Handle pictures
  const handleNext = (index) => {
    if (
      step !== filterData.data[index].profile_pics.length - 1 &&
      index === currentIndex
    ) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  const handleBack = (index) => {
    if (step !== 0 && index === currentIndex) {
      setStep(step - 1);
    } else {
      setStep(filterData.data[index].profile_pics.length - 1);
    }
  };

  // Swipe
  const swipe = async (dir) => {
    if (currentIndex < filterData.data.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const handleMatchingId = async () => {
    const data = await merryList();

    const matchId = data.matchId.map((value) => value.swiper);
    setMatchingId(matchId);
  };

  const clickCountinueCount = () => {
    props.setClickCountinue(props.clickCountinue + 1);
  };

  //   handle when click <3 button
  const handleJustSwiped = () => {
    setJustSwipe(true);
  };

  const setHandleJustSwiped = () => setTimeout(handleJustSwipedClose, 400);

  const handleJustSwipedClose = () => {
    setJustSwipe(false);
  };

  //   handle when click X button
  const handleJustX = () => {
    setJustX(true);
  };

  const setHandleJustX = () => setTimeout(handleJustXClose, 400);

  const handleJustXClose = () => {
    setJustX(false);
  };

  //   useEffect
  useEffect(() => {
    handleMatchingId();
  }, []);

  return (
    <div className="w-full h-[54rem]  bg-[url('../../../public/asset/header/hero-swipe.png')] flex justify-center items-start overflow-hidden overflow-x-hidden xl:h-full">
      {justSwipe && <PopupWhenSwipe close={() => setJustSwipe(!justSwipe)} />}
      {justX && <PopupWhenClickX close={() => setJustX(!justX)} />}
      {preview && (
        <SwipeModal
          close={() => setPreview(!preview)}
          data={filterData.data[modalId]}
        />
      )}

      {currentIndex == 0 ? (
        <div className="flex mt-[20%] flex-col justify-start items-center z-0 absolute w-[550px] h-[100px]">
          <h1 className="text-white text-[3rem] font-[800]">
            No more to Merry!
          </h1>

          <button
            className="bg-[#C70039] rounded-[99px] text-[white] font-[700] w-[190px] mt-[15%] h-[48px] absolute hover:bg-[#FF1659] active:text-[#A62D82]"
            onClick={() => window.location.reload(false)}
          >
            Find again!
          </button>
        </div>
      ) : null}

      <div className="overflow-hidden">
        <div className="cardContainer text-[white] w-[20rem] h-[25rem] overflow-hidden mt-[25%] ">
          {filterData.data.map((user, index) => (
            <TinderCard
              ref={childRefs[index]}
              // className="swipe  absolute top-[140px] left-[30%] xl:left-[30.5%] 2xl:left-[32%]"
              className="swipe ml-[-5.5%] xl:mt-[2%] xl:ml-[-10.5%]  2xl:mt-[3.5%] 2xl:ml-[-9.5%]"
              key={user.username}
              onSwipe={(dir) => swiped(dir, index)}
              onCardLeftScreen={() => {
                outOfFrame(filterData.name, index);
                // setStep(0);
                setCurrenId(index);
              }}
              swipeRequirementType="position"
              swipeThreshold={100}
            >
              <div className="flex justify-center items-center">
                {/* Matched logo */}
                {isMatch === true && isIndex === index ? (
                  <div className="z-30 absolute inset-0 top-[40%] flex flex-col items-center">
                    <MatchedLogo
                      swipe={swipe}
                      index={index}
                      clickCountinueCount={clickCountinueCount}
                      currentIndex={currentIndex}
                    />
                  </div>
                ) : null}

                {currentIndex === 0 ? null : index === currentIndex ||
                  (index === currentIndex - 1 && index !== 0) ? (
                  <div
                    style={{
                      backgroundImage: "url(" + user.profile_pics[step] + ")",
                    }}
                    className="card relative w-[30rem] h-[30rem] bg-cover bg-center rounded-[32px] overflow-hidden  items-end flex flex-row z-0 xl:w-[40rem] xl:h-[40rem] 2xl:w-[44rem] 2xl:h-[46rem]"
                  >
                    <div className="flex flex-col z-[0] w-full ml-[3%]">
                      {/* name & age */}
                      <div className="flex flex-row mb-[4%]">
                        <h3 className="text-[white] text-[2rem] m-[0%] mr-[0] font-[700]">
                          {user.name}
                        </h3>
                        <h3 className="text-[#afb4c5] text-[2rem] m-[0%] ml-[1.5%] mr-[1%] font-[700]">
                          {user.user_age}
                        </h3>
                        {/* eye icon */}
                        <button
                          className="w-[5rem] h-[auto]"
                          onClick={(event) => {
                            event.preventDefault();
                            setPreview(!preview);
                            setModalId(index);
                          }}
                        >
                          <img
                            className=" w-[65px] h-[65px] mt-[-10%] ml-[-13%]"
                            src={eyeIcon}
                          />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        clickCountinueCount();
                      }}
                    ></button>
                    {/* slide pictures */}
                    <div className="arrow-buttons absolute right-[5%] space-x-6 bottom-[6%] z-40 ">
                      <button
                        onClick={() => {
                          handleBack(index);
                        }}
                      >
                        <img
                          src={arrowLeftWhite}
                          className="w-[1rem] h-[1rem]"
                        />
                      </button>

                      <button
                        onClick={() => {
                          handleNext(index);
                        }}
                      >
                        <img
                          src={arrowRightWhite}
                          className="w-[1rem] h-[1rem]"
                        />
                      </button>
                    </div>
                  </div>
                ) : null}

                {currentIndex === 0 ? null : index === currentIndex ? (
                  <div className="button flex flex-row items-center justify-center space-x-3   top-[90%] right-[35%] z-60 absolute   ">
                    <button
                      className="XButton w-[60px] h-[60px] drop-shadow-2xl mr-[10px] mt-[25.5%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#2A2E3F] z-70 xl:w-[70px] xl:h-[70px] 2xl:w-[76px] 2xl:h-[76px]"
                      onClick={() => {
                        setTimeout(() => {
                          swipe("right", index);
                        }, 500);
                        handleJustX();
                        setHandleJustX();
                      }}
                    >
                      <img src={xLogo} />
                    </button>

                    <button
                      className="HeartButton w-[60px] h-[60px] drop-shadow-2xl mt-[25.5%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#FFB1C8] z-70 xl:w-[70px] xl:h-[70px] 2xl:w-[76px] 2xl:h-[76px]"
                      onClick={() => {
                        let isMatch = false;

                        handleJustSwiped();
                        setHandleJustSwiped();

                        matchingId.map((id) => {
                          if (id === user.user_id) {
                            setIsMatch(true);
                            setIsIndex(index);
                            postSwipe(index, true);
                            isMatch = true;
                          }
                        });

                        if (isMatch === false) {
                          setTimeout(() => {
                            swipe("right", index);
                          }, 500);
                          postSwipe(index, true);
                        }
                      }}
                    >
                      <img src={heartLogo} className="ml-1 mt-1" />
                    </button>
                  </div>
                ) : null}
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swipe;
