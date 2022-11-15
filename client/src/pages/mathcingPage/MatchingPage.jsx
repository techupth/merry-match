import React from "react";
import MatchFilter from "../../components/matchingComponents/MatchFilter";
import Swipe from "../../components/matchingComponents/Swipe";
import MatchLog from "../../components/matchingComponents/MatchLog";

const MatchingPage = () => {
  return (
    <div className="w-[100%] h-[1200px]  flex flex-row justify-end items-start">
      <MatchLog />
      <Swipe />
      <MatchFilter />

    </div>
  );
};

export default MatchingPage;
