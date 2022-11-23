import React, { useState, useRef } from "react";
import Swiper, { SwiperRefNode } from "react-id-swiper";

const SwipeComponent = () => {
  const arr = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7"];
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef < SwiperRefNode > null;

  const ref = useRef(null);
  console.log(ref);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      console.log("hello");
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  };

  return (
    <div className="bg-slate-600 h-[1000px]">
      <Swiper {...params} ref={ref} className="bg-slate-400">
        {arr.map((value, index) => {
          return (
            <div className=" text-slate-900 text-[45px] bg-pink-100 w-[100px] h-[1000px]  flex items-center justify-center  ">
                <div className="bg-yellow-300 w-[300px] h-[300px] text-cente relative">
              {value}
              <button className="absolute right-0 bottom-0" onClick={()=>{goNext()}}> next</button>
              <button className="absolute left-0 bottom-0" onClick={()=>{goNext()}}> prev</button>
              
                </div>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwipeComponent;
