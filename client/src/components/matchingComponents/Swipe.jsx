import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useSwipe } from "../../contexts/swipeContext";

// utility
import arrowLeftWhite from "../../../public/asset/swipeComponentsItems/arrowLeftWhite.svg";
import arrowRightWhite from "../../../public/asset/swipeComponentsItems/arrowRightWhite.svg";
import eyeIcon from "../../../public/asset/swipeComponentsItems/eyeIcon.svg";
import heartLogo from "../../../public/asset/editModalItems/hearthLogo.svg";
import xLogo from "../../../public/asset/editModalItems/xLogo.svg";

const Swipe = () => {
  // import filterData มาให้แล้ว แล้วต้องนำลงมา map ลงหน้าแผน swipe
  const { getAllUsers, users, filterData } = useSwipe();
  const [currentIndex, setCurrentIndex] = useState(users.length);
  const [lastDirection, setLastDirection] = useState();
  const [step, setStep] = useState(0);
  const [currenId, setCurrenId] = useState([]);

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  // useMemo
  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  //   Set swipe index
  const canGoBack = currentIndex < users.length - 1;
  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    console.log(users[index - 1].username)
    console.log(users[index - 1].profile_pics.length)
    console.log(step)
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
    if (step !== users[index - 1].profile_pics.length - 1) {
      setStep(step + 1);
    }


  };

  const handleBack = (index) => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };

  // Swipe
  const swipe = async (dir) => {
    if (currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }

  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  //   getdata
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="w-[100%] h-[46.9rem] bg-[#160404] flex justify-center items-start overflow-hidden overflow-x-hidden z-30">
      <div className="overflow-hidden">
        <div className="cardContainer text-[white] w-[25rem] h-[25rem] overflow-hidden mt-[30%]">
          {users.map((user, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={user.username}
              onSwipe={(dir) => swiped(dir, user.username, index)}
              onCardLeftScreen={() => {
                outOfFrame(users.username, index);
                setStep(0);
                setCurrenId(index);
              }}
            >
              <div
                style={{
                  backgroundImage: "url(" + user.profile_pics[step] + ")",
                }}
                className="card w-[28.75rem] h-[28.75rem] bg-cover bg-center rounded-[32px] overflow-hidden flex flex-row items-end relative z-0"
              >
                <div className="flex flex-row z-40 w-full">
                  <h3 className="text-[white] text-[1.5rem] m-[5%] mr-[0] font-[700]">
                    {user.username}
                  </h3>
                  <h3 className="text-[white] text-[1.5rem] m-[5%] ml-[2%] mr-[1%] font-[700]">
                    {user.user_age}
                  </h3>
                  <button className="">
                    <img src={eyeIcon} />
                  </button>
                </div>

                {/* left and right */}
                <div className="arrow-buttons absolute right-[5%] space-x-6 bottom-[6%] z-40 ">
                  <button
                    onClick={() => {
                      handleBack(currenId);
                    }}
                  >
                    <img src={arrowLeftWhite} className="w-[1rem] h-[1rem]" />
                  </button>

                  <button
                    onClick={() => {
                      handleNext(currenId);
                    }}
                  >
                    <img src={arrowRightWhite} className="w-[1rem] h-[1rem]" />
                  </button>
                </div>
              </div>


            </TinderCard>

          ))}

        </div>
        <div className="button flex flex-row items-center justify-center space-x-3 overflow-hidden z-10 mt-[-25%]   ">
          <button
            className="XButton w-[4rem] h-[4rem] drop-shadow-2xl mt-[20%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#2A2E3F] z-10"
            onClick={() => swipe("left")}
          >

            <img src={xLogo} />
          </button>

          <button
            className="HeartButton w-[4rem] h-[4rem] drop-shadow-2xl mt-[20%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#FFB1C8] z-10"
            onClick={() => swipe("right")}
          >
            <img src={heartLogo} className="ml-1 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
