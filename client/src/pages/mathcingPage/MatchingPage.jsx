import React from "react";
import MatchFilter from "../../components/matchingComponents/MatchFilter";
import Swipe from "../../components/matchingComponents/Swipe";
const MatchingPage = () => {
  return (
    <div className="w-[100%] h-[1200px] bg-black flex flex-row justify-end items-start">
      <Swipe />
      <MatchFilter />
    </div>
  );
};

export default MatchingPage;
