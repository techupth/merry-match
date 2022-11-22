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

const Swipe = (props) => {
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
    setMatchingId(matchId);
  };

  const clickCountinueCount = () => {  
    props.setClickCountinue(props.clickCountinue+1); 
   }; 
   console.log(props)

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
                <button  onClick={()=>{ clickCountinueCount();}}>ทดสอบ</button>
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
                <div className=" absolute top-[300px] left-[35%]">
                  <div>
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        width="106"
                        height="63"
                        viewBox="0 0 106 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.6616 52.0214C32.8767 52.7886 34.1163 53.5161 35.3786 54.2029L35.3907 54.2095L35.403 54.216L35.4123 54.2209L35.4459 54.241L35.5053 54.2707C36.118 54.5887 36.7984 54.7542 37.4889 54.7532C37.9968 54.7525 38.4989 54.6617 38.9725 54.4865H39.1165L39.559 54.2209L39.5683 54.216L39.5824 54.2085L39.5964 54.2009C43.8557 51.8717 47.8627 49.1084 51.5534 45.9549L51.5601 45.9492C57.348 40.9598 64.3092 33.0559 64.3092 23.2723V23.2721C64.3089 19.9711 63.2852 16.7514 61.3792 14.0563C59.4732 11.3612 56.7785 9.32323 53.6663 8.22305C50.5541 7.12287 47.1773 7.01457 44.0009 7.91306C41.5598 8.60359 39.3292 9.8627 37.4856 11.574C35.642 9.8627 33.4115 8.60359 30.9704 7.91306C27.794 7.01457 24.4172 7.12287 21.305 8.22305C18.1927 9.32323 15.4981 11.3612 13.5921 14.0563C11.6861 16.7514 10.6624 19.9711 10.6621 23.2721V23.2723C10.6621 33.0561 17.6268 40.9601 23.4108 45.9488L23.4177 45.9547C26.0148 48.1743 28.7701 50.2019 31.6616 52.0214ZM31.6616 52.0214C31.6623 52.0218 31.663 52.0223 31.6637 52.0227L32.7288 50.3299L31.661 52.021C31.6612 52.0211 31.6614 52.0213 31.6616 52.0214Z"
                          fill="#FF1659"
                          stroke="white"
                          strokeWidth="4"
                        />
                        <path
                          d="M68.897 52.0214C70.1121 52.7886 71.3517 53.5161 72.614 54.2029L72.6261 54.2095L72.6383 54.216L72.6477 54.2209L72.6812 54.241L72.7407 54.2707C73.3534 54.5887 74.0338 54.7542 74.7243 54.7532C75.2321 54.7525 75.7343 54.6617 76.2078 54.4865H76.3518L76.7943 54.2209L76.8037 54.216L76.8178 54.2085L76.8318 54.2009C81.091 51.8717 85.098 49.1084 88.7888 45.9549L88.7954 45.9492C94.5833 40.9598 101.545 33.0559 101.545 23.2723V23.2721C101.544 19.9711 100.521 16.7514 98.6146 14.0563C96.7085 11.3612 94.0139 9.32323 90.9016 8.22305C87.7894 7.12287 84.4126 7.01457 81.2363 7.91306C78.7951 8.60359 76.5646 9.8627 74.721 11.574C72.8774 9.8627 70.6469 8.60359 68.2057 7.91306C65.0294 7.01457 61.6526 7.12287 58.5403 8.22305C55.4281 9.32323 52.7334 11.3612 50.8274 14.0563C48.9214 16.7514 47.8978 19.9711 47.8975 23.2721V23.2723C47.8975 33.0561 54.8621 40.9601 60.6461 45.9488L60.653 45.9547C63.2502 48.1743 66.0055 50.2019 68.897 52.0214ZM68.897 52.0214C68.8977 52.0218 68.8984 52.0223 68.8991 52.0227L69.9642 50.3299L68.8964 52.021C68.8966 52.0211 68.8968 52.0213 68.897 52.0214Z"
                          fill="#FF1659"
                          stroke="white"
                          strokeWidth="4"
                        />
                      </svg>

                      <div className="text-[46px] text-[]">Merry Match!</div>
                      <div className="">
                        <button
                          onClick={() => {
                            swipe("right", index);
                            clickCountinueCount();
                          }}
                        >
                          countinue
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
                        postSwipe(index, true)
                        isMatch = true;
                      }
                    });

                    if (isMatch === false) {
                      swipe("right", index);
                      postSwipe(index, true)
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
