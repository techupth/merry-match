import React from "react";
import vector from "../../../public/asset/SecondPart/vector.svg";

function SecondPartAuthen() {
  return (
    <div>
      <div className="w-[100%] bg-[#160404]  h-[533px] flex justify-center items-center space-x-9 ">
        <div className="Why-MM w-[549px] h-[325px] flex flex-col justify-center  mr-[210px] mt-32">
          <h1 className="text-[#DF89C6] text-[46px] font-[800] pl-[80px] 2xl:pl-0" id="why-merry">
            Why Merry Match?
          </h1>
          <br />
          <p className="text-[white] text-[25px] font-[600] pl-[80px] 2xl:pl-0">
            Merry Match is a new generation of online dating website for
            everyone
          </p>
          <br />
          <p className="text-[white] text-[20px] f0nt-[400] pl-[80px] 2xl:pl-0">
            Whether you’re committed to dating, meeting new people, expanding
            your social network, meeting locals while traveling, or even just
            making a small chat with strangers.
          </p>
          <br />
          <p className="text-[white] text-[20px] pl-[80px] 2xl:pl-0">
            This site allows you to make your own dating profile, discover new
            people, save favorite profiles, and let them know that you’re
            interested
          </p>
        </div>

        <div className="Picture w-[549px] h-[325px]">
          <img src={vector}></img>
        </div>
      </div>
    </div>
  );
}

export default SecondPartAuthen;
