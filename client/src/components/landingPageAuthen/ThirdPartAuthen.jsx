import React from "react";
import emoji_img1 from "../../../public/asset/ThirdPart_Pic/emoji_img1.png";
import emoji_img2 from "../../../public/asset/ThirdPart_Pic/emoji_img2.png";
import emoji_img3 from "../../../public/asset/ThirdPart_Pic/emoji_img3.png";
import emoji_img4 from "../../../public/asset/ThirdPart_Pic/emoji_img4.png";

function ThirdPartAuthen() {
  return (
    <div className=" w-full h-[650px]" id="howtomerry">
      <h2 className="howtomerry text-[#DF89C6] text-[46px] text-center font-[800] mt-32">
        How to Merry
      </h2>
      <div className="card flex mt-[48px] justify-center mb-82 ">
        {/* item1 */}
        <div className="cardItem item1 w-[300px] h-[350px] bg-[#2A0B21] text-center rounded-[40px] mx-[12px] mb-[500px]">
          <div className="frameIMG w-[120px] h-[120px] rounded-full bg-[#411032] relative m-auto mt-[32px]">
            <div className="imgItem w-[50px] h-[50px] ">
              <img src={emoji_img1} alt="" />
            </div>
          </div>
          <div className="containerText w-[198px] mx-auto mt-[40px]">
            <p className="text-[24px] text-[#FFFFFF] font-[700] leading-[125%]">
              Upload your cool picture
            </p>
            <p className="text-[16px] text-[#C8CCDB] font-[400] leading-[150%]">
              Lorem ipsum is a placeholder text
            </p>
          </div>
        </div>
        {/* End Item1 */}

        {/* item2 */}
        <div className="cardItem item2 w-[300px] h-[350px] bg-[#2A0B21] text-center rounded-[40px] mx-[12px]">
          <div className="frameIMG w-[120px] h-[120px] rounded-full bg-[#411032] relative m-auto mt-[32px]">
            <div className="imgItem w-[50px] h-[50px] ">
              <img src={emoji_img2} alt="" />
            </div>
          </div>
          <div className="containerText w-[198px] mx-auto mt-[40px]">
            <p className="text-[24px] text-[#FFFFFF] font-[700] leading-[125%]">
              Explore and find the one you like
            </p>
            <p className="text-[16px] text-[#C8CCDB]">
              Lorem ipsum is a placeholder text
            </p>
          </div>
        </div>
        {/* End Item2 */}

        {/* item3 */}
        <div className="cardItem item3 w-[300px] h-[350px] bg-[#2A0B21] text-center rounded-[40px] mx-[12px]">
          <div className="frameIMG w-[120px] h-[120px] rounded-full bg-[#411032] relative m-auto mt-[32px]">
            <div className="imgItem w-[50px] h-[50px] ">
              <img src={emoji_img3} alt="" />
            </div>
          </div>
          <div className="containerText w-[198px] mx-auto mt-[40px]">
            <p className="text-[24px] text-[#FFFFFF] font-[700] leading-[125%]">
              Click ‘Merry’ for get to know!
            </p>
            <p className="text-[16px] text-[#C8CCDB]">
              Lorem ipsum is a placeholder text
            </p>
          </div>
        </div>
        {/* End Item3 */}

        {/* item4 */}
        <div className="cardItem item4 w-[300px] h-[350px] bg-[#2A0B21] text-center rounded-[40px] mx-[12px]">
          <div className="frameIMG w-[120px] h-[120px] rounded-full bg-[#411032] relative m-auto mt-[32px]">
            <div className="imgItem w-[50px] h-[50px] ">
              <img src={emoji_img4} alt="" />
            </div>
          </div>
          <div className="containerText w-[198px] mx-auto mt-[40px]">
            <p className="text-[24px] text-[#FFFFFF] font-[700] leading-[125%]">
              Start chating and relationship{" "}
            </p>
            <p className="text-[16px] text-[#C8CCDB] leading-6">
              Lorem ipsum is a placeholder text
            </p>
          </div>
        </div>
        {/* End Item1 */}
      </div>
    </div>
  );
}

export default ThirdPartAuthen;
