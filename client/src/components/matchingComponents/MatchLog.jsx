import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { data } from "../../utils/mock-photo/data";
import search_heart from "../../../public/asset/merryMatchIMG/search_heart.png";
import two_heart from "../../../public/asset/merryMatchIMG/two_heart.png";

const MatchLog = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className="MatchLog w-[316px] mt-[240px] h-full px-[16px] z-40 bg-[white]">
      <div className="flex justify-center">
        <div className="w-[17.625rem] h-[11.688rem] text-center bg-[#F6F7FC] rounded-xl mt-[36px] border-2 border-[#D6D9E4]">
          <img src={search_heart} className="inline-block mt-[33px]" alt="" />
          <h1 className="text-[24px] font-bold text-[#95002B]">
            Discover New Match
          </h1>
          <p className="text-[14px] text-[#646D89] px-8">
            Start find and Merry to get know and connect with new friend!
          </p>
        </div>
      </div>
      <div className="w-full bg-[#D6D9E4] h-[2px] mt-[38px]"> </div>

      <h1 className="text-[#2A2E3F] text-[24px] font-bold mt-[24px]">
        Merry Match!
      </h1>

      <div className="relative flex items-center ">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
          
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {data.map((item,index) => (
            <div key={index} className="inline-block relative hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <img
                src={two_heart}
                className="inline-block absolute bottom-0 right-0"
                alt=""
              />
              <img
                className="w-[100px] h-[100px] inline-block p-2  rounded-3xl mt-[16px]"
                src={item.img}
                alt="/"
              />
            </div>
          ))}
        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
};

export default MatchLog;
