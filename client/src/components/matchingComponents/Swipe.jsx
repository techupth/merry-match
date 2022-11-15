import React, { useState, useMemo, useRef, useContext, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { SwipeProvider, useSwipe } from "../../contexts/swipeContext";
import axios from "axios";

// Mock pictures for example
import sek_1 from "../../../public/Mock/imgMock/sek_1.jpg";
import sek_2 from "../../../public/Mock/imgMock/sek_2.jpg";
import sekCute from "../../../public/Mock/imgMock/sekCute.jpg";
import pSekWDog from "../../../public/Mock/imgMock/pSekWDog.jpg";
import pSekYoung from "../../../public/Mock/imgMock/pSekYoung.jpg";
import chad1 from "../../../public/Mock/imgMock/Chad1.jpg";
import chad2 from "../../../public/Mock/imgMock/Chad2.jpg";
import auth1 from "../../../public/Mock/imgMock/auth4s2.jpg";
import auth2 from "../../../public/Mock/imgMock/authAlbum2.jpg";
import auth4 from "../../../public/Mock/imgMock/authSSSS.jpg";
import johnny from "../../../public/Mock/imgMock/Johnny.jpg";
import nunez from "../../../public/Mock/imgMock/nunez.jpg";

// utility
import arrowLeftWhite from "../../../public/asset/swipeComponentsItems/arrowLeftWhite.svg";
import arrowRightWhite from "../../../public/asset/swipeComponentsItems/arrowRightWhite.svg";
import eyeIcon from "../../../public/asset/swipeComponentsItems/eyeIcon.svg";
import heartLogo from "../../../public/asset/editModalItems/hearthLogo.svg";
import xLogo from "../../../public/asset/editModalItems/xLogo.svg";

const db = [
  {
    name: "Sek",
    url: [sek_2, pSekWDog, pSekYoung, sekCute],
    age: "48",
  },
  {
    name: "CHAD",
    url: [chad1, chad2],
    age: "55",
  },
  {
    name: "Johnny",
    url: [johnny, nunez],
    age: "18",
  },
  {
    name: "Auth",
    url: [auth1, auth2, auth4],
    age: "60",
  },
];

const Swipe = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [step, setStep] = useState(0);
  const [currenId, setCurrenId] = useState(0);
  const [userData, setUserData] = useState({});
  const [Images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const currentIndexRef = useRef(currentIndex);

//  ------------------------------------------------//
  //   getdata
  
 const allUserData = async () => {
    const result = await axios(
        "http://localhost:4001/users"
    );

    setUserData(result.data.data[0])
    setName(result.data.data.username)
    setImages(result.data.data[0].profile_pics[0])
    setAge(result.data.data.user_age)

 };


  //----------------------------------------------------------------//

  // useMemo
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const handleNext = (index) => {
    console.log(db[index].url.length);

    if (step !== db[index].url.length) {
      setStep(step + 1);
    }
  };

  const handleBack = (index) => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    allUserData();
  }, []);

  return (
    <div className="w-[100%] h-[46.9rem] bg-[#160404] flex justify-center items-start overflow-hidden overflow-x-hidden z-30">
      <div className="overflow-hidden">
        <div className="cardContainer text-[white] w-[25rem] h-[25rem] overflow-hidden mt-[30%]">
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => {
                outOfFrame(character.name, index);
                setStep(0);
                setCurrenId(index);
              }}
            >
              <div
                style={{ backgroundImage: "url(" + character.url[step] + ")" }}
                className="card w-[28.75rem] h-[28.75rem] bg-cover bg-center rounded-[32px] overflow-hidden flex flex-row items-end relative z-0"
              >
                <div className="flex flex-row z-40 w-full">
                  <h3 className="text-[white] text-[1.5rem] m-[5%] mr-[0] font-[700]">
                    {character.name}
                  </h3>
                  <h3 className="text-[white] text-[1.5rem] m-[5%] ml-[2%] mr-[1%] font-[700]">
                    {character.age}
                  </h3>
                  <button className="">
                    <img src={eyeIcon} />
                  </button>
                </div>

                {/* left and right */}
                <div className="buttons absolute right-[5%] space-x-6 bottom-[6%] z-40 ">
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

              <div className="Button flex flex-row items-center justify-center space-x-3 overflow-hidden z-10 mt-[-25%]   ">
                <a
                  className="XButton w-[4rem] h-[4rem] drop-shadow-2xl mt-[20%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#2A2E3F] z-10"
                  onClick={() => swipe("left")}
                >
                  <img src={xLogo} />
                </a>

                <a
                  className="HeartButton w-[4rem] h-[4rem] drop-shadow-2xl mt-[20%]  bg-white rounded-[30%] flex justify-center items-center hover:bg-[#FFB1C8] z-10"
                  onClick={() => swipe("right")}
                >
                  <img src={heartLogo} className="ml-1 mt-1" />
                </a>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swipe;
