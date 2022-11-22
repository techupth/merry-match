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

const Swipe = () => {
  // import filterData มาให้แล้ว แล้วต้องนำลงมา map ลงหน้าแผน swipe
  // import MerryList from './../../pages/merryListPage/MerryList';
  // console.log("swipe compoenent rendered!!");
  const { filterData, postSwipe, merryList } = useSwipe();

  // console.log(indexUsers, "from swipe");
  const [currentIndex, setCurrentIndex] = useState(filterData.data.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [step, setStep] = useState(0);
  const [currenId, setCurrenId] = useState([]);

  // Modal
  const [modalId, setModalId] = useState(null);
  const [preview, setPreview] = useState(false);

  const [matchingId, setMatchingId] = useState([]);
  const [isMatch, setIsMatch] = useState(false);
  const [isIndex, setIsIndex] = useState(null);

  // console.log(isMatch);
  // console.log(matchingId);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);
  // console.log(currentIndexRef)
  // useMemo
  const childRefs = useMemo(
    () =>
      Array(filterData.data.length)
        .fill(0)
        .map((i) => React.createRef()),
    [filterData]
  );

  // console.log(childRefs)
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  //   Set swipe index
  const canGoBack = currentIndex < filterData.length - 1;
  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    // console.log(index);
  };

  const outOfFrame = (name, idx) => {
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
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
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMatchingId = async () => {
    const data = await merryList();

    const matchId = data.matchId.map((value) => value.swiper);
    console.log(matchId);
    setMatchingId(matchId);
  };

  useEffect(() => {
    handleMatchingId();
  }, []);

  return (
    <div className="w-full h-full bg-[#160404] flex justify-center items-start overflow-hidden overflow-x-hidden">
      {preview && (
        <SwipeModal
          close={() => setPreview(!preview)}
          data={filterData.data[modalId]}
        />
      )}
      <div className="overflow-hidden">
        <div className="cardContainer text-[white] w-[25rem] h-[25rem] overflow-hidden mt-[30%] ">
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
                className="card w-[46rem] h-[46rem] bg-cover bg-center rounded-[32px] overflow-hidden  items-end flex flex-row z-0"
              >
                <div className="flex flex-row z-[0] w-full">
                  <h3 className="text-[white] text-[1.5rem] m-[5%] mr-[0] font-[700]">
                    {user.name}
                  </h3>
                  <h3 className="text-[white] text-[1.5rem] m-[5%] ml-[2%] mr-[1%] font-[700]">
                    {user.user_age}
                  </h3>
                  <button
                    className=""
                    onClick={(event) => {
                      event.preventDefault();
                      setPreview(!preview);
                      setModalId(index);
                    }}
                  >
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

              {isMatch === true && isIndex === index ? (
                <div className=" absolute top-[300px] left-[40%] w-[150px]">
                  <div className="">
                    <div className="flex flex-col items-center justify-center relative">
                      <svg
                        className="absolute top-0 rigth-0"
                        width="278"
                        height="133"
                        viewBox="0 0 278 133"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M117.663 52.0221C118.877 52.789 120.117 53.5164 121.379 54.2029L121.391 54.2095L121.403 54.2159L121.462 54.247L122.243 52.7634L122.409 52.4865L122.26 52.7845L121.484 54.2596C122.102 54.5848 122.79 54.7542 123.489 54.7532C123.997 54.7525 124.499 54.6617 124.972 54.4865H125.116L125.559 54.2209L125.568 54.2159L125.582 54.2085L125.596 54.2009C129.856 51.8717 133.863 49.1084 137.553 45.9549L137.56 45.9492C143.348 40.9598 150.309 33.0559 150.309 23.2723V23.2721C150.309 19.9711 149.285 16.7514 147.379 14.0563C145.473 11.3612 142.779 9.32323 139.666 8.22305C136.554 7.12287 133.177 7.01457 130.001 7.91306C127.56 8.60359 125.329 9.8627 123.486 11.574C121.642 9.8627 119.412 8.60359 116.97 7.91306C113.794 7.01457 110.417 7.12287 107.305 8.22305C104.193 9.32323 101.498 11.3612 99.5921 14.0563C97.6861 16.7514 96.6624 19.9711 96.6621 23.2721V23.2723C96.6621 33.0561 103.627 40.9601 109.411 45.9488L109.418 45.9547C112.015 48.1746 114.771 50.2024 117.663 52.0221ZM117.663 52.0221C117.662 52.0217 117.662 52.0214 117.661 52.021L118.729 50.3303L117.664 52.0227C117.663 52.0225 117.663 52.0223 117.663 52.0221Z"
                          fill="#FF1659"
                          stroke="white"
                          stroke-width="4"
                        />
                        <path
                          d="M154.897 52.0214C156.112 52.7886 157.352 53.5161 158.614 54.2029L158.626 54.2095L158.638 54.216L158.648 54.2209L158.681 54.241L158.741 54.2707C159.353 54.5887 160.034 54.7542 160.724 54.7532C161.232 54.7525 161.734 54.6617 162.208 54.4865H162.352L162.794 54.2209L162.804 54.216L162.818 54.2085L162.832 54.2009C167.091 51.8717 171.098 49.1084 174.789 45.9549L174.795 45.9492C180.583 40.9598 187.545 33.0559 187.545 23.2723V23.2721C187.544 19.9711 186.521 16.7514 184.615 14.0563C182.709 11.3612 180.014 9.32323 176.902 8.22305C173.789 7.12287 170.413 7.01457 167.236 7.91306C164.795 8.60359 162.565 9.8627 160.721 11.574C158.877 9.8627 156.647 8.60359 154.206 7.91306C151.029 7.01457 147.653 7.12287 144.54 8.22305C141.428 9.32323 138.733 11.3612 136.827 14.0563C134.921 16.7514 133.898 19.9711 133.897 23.2721V23.2723C133.897 33.0561 140.862 40.9601 146.646 45.9488L146.653 45.9547C149.25 48.1743 152.005 50.2019 154.897 52.0214ZM154.897 52.0214C154.898 52.0218 154.898 52.0223 154.899 52.0227L155.964 50.3299L154.896 52.021C154.897 52.0211 154.897 52.0213 154.897 52.0214Z"
                          fill="#FF1659"
                          stroke="white"
                          stroke-width="4"
                        />
                      </svg>
                      <div className="absolute top-24 left-22">
                        <div className="flex  items-center  relative   font-bold	">
                          <div className="text-[46px] z-10 text-[#FF1659]  absolute right-[18px] tracking-tight	 ">
                            Merry
                          </div>
                          <div className="text-[50px] text-[#FFFFFF] absolute right-3  tracking-tighter font-extrabold">
                            Merry
                          </div>
                          <div className="text-[46px] z-10 text-[#FF1659] absolute left-[10px] tracking-tighter	 ">
                            Match!
                          </div>
                          <div className="text-[50px] text-[#FFFFFF]  absolute left-2 tracking-tighter font-extrabold">
                            Match!
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-52 ">
                        <button
                        
                        className="bg-[#FFE1EA] py-[12px] px-[24px] rounded-[99px] w-[188px] text-[20px] text-[#95002B] font-bold"
                          onClick={() => {
                            swipe("right", index);
                          }}
                        >
                          continuous
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

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
                    // swipe("right", index);
                    let isMatch = false;
                    matchingId.map((id) => {
                      if (id === user.user_id) {
                        setIsMatch(true);
                        setIsIndex(index);
                        postSwipe(index, true);
                        isMatch = true;
                      }
                    });

                    if (isMatch === false) {
                      swipe("right", index);
                      postSwipe(index, true);
                    }
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
