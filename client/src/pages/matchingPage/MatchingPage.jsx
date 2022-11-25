import React, { useState, useEffect } from "react";
import MatchFilter from "../../components/matchingComponents/MatchFilter";
import Swipe from "../../components/matchingComponents/Swipe";
import MatchLog from "../../components/matchingComponents/MatchLog";
import { RemoveScroll } from "react-remove-scroll";
import { useSwipe } from "../../contexts/swipeContext";
import { Progress, Spinner } from "@chakra-ui/react";

const MatchingPage = () => {
  const {
    getEachUser,
    filterData,
    merryList,
    defaultDataToFilter,
    getDataByFilter,
  } = useSwipe();
  const [isLoading, setIsloading] = useState(null);
  const [dataForMap, setDataForMap] = useState({});
  const [clickCountinue, setClickCountinue] = useState(0);

  const handleDefualt = async () => {
    setIsloading(true);
    const defualt = await getEachUser();

    console.log(defualt);

    if (defualt) {
      console.log("each user", defualt);
      setIsloading("data");
    }
  };

  // console.log(filterData);
  // console.log(defaultDataToFilter);

  useEffect(() => {
    getDataByFilter(defaultDataToFilter);
    console.log("did");
  }, []);

  useEffect(() => {
    handleDefualt();
    merryList();
  }, []);

  return (
    <RemoveScroll>
      <div className="w-[100%] h-[1000px] overflow-hidden flex flex-row-reverse justify-center items-center">
        {isLoading === true ? null : isLoading === "data" ? (
          <>
            <MatchFilter />
          </>
        ) : null}

        {filterData.loading === true ? (
          <div className="bg-[#160404] w-[2000px] h-[1000px] text-gray-100 text-[50px] flex justify-center items-center">
            <Spinner
              thickness="7px"
              speed="0.65s"
              emptyColor="white"
              color="pink"
              size="xl"
            />
          </div>
        ) : filterData.data ? (
          <>
            {" "}
            <Swipe
              clickCountinue={clickCountinue}
              setClickCountinue={setClickCountinue}
            />
            <MatchLog clickCountinue={clickCountinue} />
          </>
        ) : null}
      </div>
    </RemoveScroll>
  );
};

export default MatchingPage;
