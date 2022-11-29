import React from "react";
import { RemoveScroll } from "react-remove-scroll";

const PopupWhenSwipe = ({ close }) => {
  return (
      <div className="bg-[rgba(49,49,49,0.8);] w-[2500px] h-[1500px] flex justify-center absolute z-10 ">
        <button className="animate-pulse absolute mt-[31.25rem] font-[700] w-[239px] h-[70px] rounded-md bg-[#FFE1EA] text-[#95002B] text-[20px]">
          <p>You just swiped!</p>
        </button>
      </div>
  );
};

export default PopupWhenSwipe;
