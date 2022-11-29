import React from "react";

const PopupWhenSwipe = ({ close }) => {
  return (
      <div className="bg-[] w-[2500px] h-[1500px] flex justify-center absolute z-10 ">
        <button className="animate-pulse rotate-[25deg] absolute ml-[12%] mt-[12.25rem] font-[700] w-[300px] h-[90px] rounded-full bg-[rgba(240,249,249,0.6);]  text-[#95002B] text-[55px] border-[4px] border-[#C70039]">
          <p className="animate-none">Merry!</p>
        </button>
      </div>
  );
};

export default PopupWhenSwipe;
