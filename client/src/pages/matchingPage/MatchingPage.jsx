import React, { useState, useEffect } from "react";
import MatchFilter from "../../components/matchingComponents/MatchFilter";
import Swipe from "../../components/matchingComponents/Swipe";
import MatchLog from "../../components/matchingComponents/MatchLog";
import { RemoveScroll } from "react-remove-scroll";
import { useSwipe } from "../../contexts/swipeContext";

const MatchingPage = () => {
  const { getEachUser, filterData, merryList } = useSwipe();
  const [isLoading, setIsloading] = useState(null);

  const handleDefualt = async () => {
    setIsloading(true);
    const defualt = await getEachUser();

    if (defualt) {
      console.log("each user", defualt);
      setIsloading("data");
    }
  };

  // console.log(filterData);
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
          <div className="bg-black w-[2000px] h-[1000px] text-gray-100 text-[50px] flex justify-center items-center">
            <MatchLog />
            Loading
          </div>
        ) : filterData.data ? (
          <>
            {" "}
            <Swipe />
            <MatchLog />
          </>
        ) : null}
      </div>
    </RemoveScroll>
  );
};

export default MatchingPage;
