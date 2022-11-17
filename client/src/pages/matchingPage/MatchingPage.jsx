import React from "react";
import MatchFilter from "../../components/matchingComponents/MatchFilter";
import Swipe from "../../components/matchingComponents/Swipe";
import MatchLog from "../../components/matchingComponents/MatchLog";
import { RemoveScroll } from "react-remove-scroll";

const MatchingPage = () => {
  return (
    <RemoveScroll>
      <div className="w-[100%] h-[46.9rem] overflow-hidden flex flex-row justify-end items-start">
        <MatchLog />
        <Swipe />
        <MatchFilter />
      </div>
    </RemoveScroll>
  );
};

export default MatchingPage;
