import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import UserPopup from "../Navbar/userPopup";

import React from 'react'


const Devtools = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-white mt-[5%]">
      <Button className="w-[100px] bg-slate-500">Button</Button>

      <div className="w-[100%] h-[180px] bg-[#FF1659] mt-[5%]">
        <div className="flex justify-start">
          <h1 className="text-[70px] text-white font-[450] mt-[1.3%] ml-[3%]">
            🎨 Design system
          </h1>
        </div>
      </div>

      <div className="w-[100%] h-[500px] border-3 border-red-700 bg-[#FFF6D4] flex justify-center items-center ">
        {/* Render your components right here */}
        <UserPopup />
      </div>

      <div className="mt-[3%] ml-[3%]">
        <h1>Red</h1>
        <button className="w-[100px] h-[80px] bg-[#FFE1EA]"></button>
        <button className="w-[100px] h-[80px] bg-[#FFB1C8]"></button>
        <button className="w-[100px] h-[80px] bg-[#FF6390]"></button>
        <button className="w-[100px] h-[80px] bg-[#FF1659]"></button>
        <button className="w-[100px] h-[80px] bg-[#95002B]"></button>
        <button className="w-[100px] h-[80px] bg-[#64001D]"></button>
        <button className="w-[100px] h-[80px] bg-[#32000E]"></button>
        <button className="w-[100px] h-[80px] bg-[#FF1659]"></button>
        <button className="w-[100px] h-[80px] bg-[#200009]"></button>
      </div>

      <div className="mt-[3%] ml-[3%]">
        <h1>Purple</h1>
        <button className="w-[100px] h-[80px] bg-[#F4EBF2]"></button>
        <button className="w-[100px] h-[80px] bg-[#EFC4E2]"></button>
        <button className="w-[100px] h-[80px] bg-[#DF89C6]"></button>
        <button className="w-[100px] h-[80px] bg-[#FF1659]"></button>
        <button className="w-[100px] h-[80px] bg-[#A62D82]"></button>
        <button className="w-[100px] h-[80px] bg-[#7D2262]"></button>
        <button className="w-[100px] h-[80px] bg-[#411032]"></button>
        <button className="w-[100px] h-[80px] bg-[#411032]"></button>
        <button className="w-[100px] h-[80px] bg-[#2A0B21]"></button>
      </div>

      <div className="mt-[3%] ml-[3%]">
        <h1>Beige</h1>
        <button className="w-[100px] h-[80px] bg-[#FAF1ED]"></button>
        <button className="w-[100px] h-[80px] bg-[#F3E4DD]"></button>
        <button className="w-[100px] h-[80px] bg-[#E8CABB]"></button>
        <button className="w-[100px] h-[80px] bg-[#DCAF99]"></button>
        <button className="w-[100px] h-[80px] bg-[#D19477]"></button>
        <button className="w-[100px] h-[80px] bg-[#B8653E]"></button>
        <button className="w-[100px] h-[80px] bg-[#7B4429]"></button>
        <button className="w-[100px] h-[80px] bg-[#612F16]"></button>
        <button className="w-[100px] h-[80px] bg-[#3D2215]"></button>
      </div>

      <div className="mt-[3%] ml-[3%]">
        <h1>Gray</h1>
        <button className="w-[100px] h-[80px] bg-[#F6F7FC]"></button>
        <button className="w-[100px] h-[80px] bg-[#F1F2F6]"></button>
        <button className="w-[100px] h-[80px] bg-[#E4E6ED]"></button>
        <button className="w-[100px] h-[80px] bg-[#FFFFFF]"></button>
        <button className="w-[100px] h-[80px] bg-[#C8CCDB]"></button>
        <button className="w-[100px] h-[80px] bg-[#9AA1B9]"></button>
        <button className="w-[100px] h-[80px] bg-[#646D89]"></button>
        <button className="w-[100px] h-[80px] bg-[#424C6B]"></button>
        <button className="w-[100px] h-[80px] bg-[#2A2E3F]"></button>
      </div>

      <div className="mt-[3%] ml-[3%]">
        <h1>Yellow</h1>
        <button className="w-[100px] h-[80px] bg-[#FFF6D4]"></button>
        <button className="w-[100px] h-[80px] bg-[#393735]"></button>
      </div>

      <div className="mt-[3%] ml-[3%]">
        <h1>Green</h1>
        <button className="w-[100px] h-[80px] bg-[#E7FFE7]"></button>
        <button className="w-[100px] h-[80px] bg-[#197418]"></button>
      </div>

      <div className="mt-[3%] ml-[3%]">
        <h1>Utility</h1>
        <button className="w-[100px] h-[80px] bg-[#FFFFFF]"></button>
        <button className="w-[100px] h-[80px] bg-[#000000]"></button>
        <button className="w-[100px] h-[80px] bg-[#AF2758]"></button>
        <button className="w-[100px] h-[80px] bg-[#160404]"></button>
        <button className="w-[100px] h-[80px] bg-[#FCFCFE]"></button>
        <button className="w-[100px] h-[80px] bg-gradient-to-r from-[#742138] to-[#9E66A4]"></button>
      </div>
    </div>
  );
}

export default Devtools;
