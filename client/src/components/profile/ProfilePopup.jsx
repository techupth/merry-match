import React from "react";
import john from '../../../public/asset/ProfilePopup/john.png'
import exit from '../../../public/asset/ProfilePopup/exit.png'
import crossbutton from '../../../public/asset/ProfilePopup/crossbutton.png'
import lovebutton from '../../../public/asset/ProfilePopup/lovebutton.png'
import L_Arrow from '../../../public/asset/ProfilePopup/L_Arrow.png'
import R_Arrow from '../../../public/asset/ProfilePopup/R_Arrow.png'
import location from '../../../public/asset/ProfilePopup/location.png'

const ProfilePopup = () => {
  return (
    <div className="w-[1140px] h-[740px]  mx-auto rounded-lg p-3 shadow-2xl">
      <div className="flex justify-end">
        <p>
          <button><img src={exit} alt="exit"/></button>
        </p>
      </div>
      <div className="flex">
        <div className="Lside w-1/2  flex justify-center relative">
            <div className="w-[400px] h-[400px] shadow-2xl rounded-2xl">  
            <img className="rounded-2xl " src={john} alt="" />
            <div className="flex justify-center absolute left-48 bottom-32">
                <div className="bg-white w-[60px] h-[60px] flex justify-center rounded-md mr-[12px]"><button><img src={crossbutton} alt="" /> </button></div>
                <div className="bg-white w-[60px] h-[60px] flex justify-center rounded-md ml-[12px]"><button><img src={lovebutton} alt="" /> </button></div>
            </div>
            <div className="flex justify-between mt-[12px]">
                <div className="PhotoCount flex">
                    <div>1</div>
                    <div>/</div>
                    <div>2</div>
                </div>
                <div className="arrowBtn flex">
                    <button className="mr-[32px]"><img src={L_Arrow} alt="leftArrow" /></button>
                    <button><img src={R_Arrow} alt="rightArrow" /></button>
                </div>
            </div>
            </div> 
        </div>
        
        <div className="Rside w-1/2 flex justify-center">
            <div className="w-[418px] ">
            <div className="flex">
            <p className="text-[46px]">John Snow</p>
            <p className="text-[46px] text-[#646D89] ml-[16px]">26</p>
        </div>

        <div className="flex">
        <img classname="w-[17px] h-[22px]" src={location} alt="" />
        <div className="flex ml-[20px] text-[#646D89]">
        <p>Bankok</p>
        <p>,</p>
        <p>Thailand</p>
        </div>
        </div>

        <div className=" flex flex-col ">
            {/* col1 */}
            <div className="col1 flex mt-[50px]">  
            <p className="w-[191px] text-[16px]">Sexual identities </p>
            <p className="text-[#646D89]">Male</p>
            </div>
          
            {/* col2 */}
            <div className="col2 flex mt-[20px]"> 
            <p className="w-[191px]">Sexual preferences</p>
            <p className="text-[#646D89]">Female</p>
            </div>
            
              {/* col3 */}
            <div className="col3 flex mt-[20px]">
            <p className="w-[191px]">Racial preferences</p>
            <p className="text-[#646D89]">Asian</p>
            </div>

            {/* col4 */}
            <div className="col4 flex mt-[20px]">
            <p className="w-[191px]">Meeting interests</p>
            <p className="text-[#646D89]">Friends</p>
            </div>
            
        </div>
        <h1 className="mt-[50px] text-[24px]">About me</h1>
        <div className="mt-[16px]">
        <p>I know nothing..but you</p>
        </div>
        <h1 className="mt-[40px] text-[24px]">Hobbies and Interests</h1>
        <div className="flex mt-[24px]">
            <div className="w-[86px] h-[40px] text-[#7D2262] border border-[#DF89C6] rounded-lg mr-2 flex items-center justify-center"> <p> e-sport</p></div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
