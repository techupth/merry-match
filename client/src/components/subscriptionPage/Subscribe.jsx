import React from 'react'

import Star from "../../../public/asset/SubscriptionIcon/Star.png"
import Star2 from "../../../public/asset/SubscriptionIcon/Star2.png"
import Heart from "../../../public/asset/SubscriptionIcon/Heart.png"
import Correct from "../../../public/asset/SubscriptionIcon/correct.png"

const Subscribe = () => {
    return (
        <div className='h-[991px] w-full bg-[#FCFCFE]'>
            <div className='text-[#DF89C6] h-[369px] w-full'>
                <p className='pt-[195px] pl-[150px] text-[#7B4429]'>MERRY MEMBERSHIP</p>
                <p className=' pl-[150px] text-[#A62D82] text-[48px] font-[800] leading-[125%]'>Be part of Merry Membership
                </p>
                <p className=' pl-[150px] text-[#A62D82] text-[48px] font-[800] leading-[125%]'>
                    to make more Merry!</p>

            </div>


            <div className="w-full bg-[#FCFCFE] flex flex-col">


                <div className=" flex mt-[48px] justify-center h-[622px] ">
                    {/* item1 */}
                    <div className="cardItem border-[1px] border-solid border-[#D6D9E4] item3 w-[357px] h-[438px]  bg-[#FFFFFF]  rounded-[40px] mx-[12px]">
                        <div className="frameIMG w-[60px] h-[60px] rounded-2xl bg-[#F6F7FC] relative m-auto mt-[40px] ml-[40px]">
                            <div className="imgItem w-[32.4px] h-[32.4px] mt-[1.81px] ml-[1.81px]">
                                <img src={Heart} alt="" />
                            </div>
                        </div>
                        <div className=" w-[277px] mx-auto mt-[40px]">
                            <p className="text-[32px] text-[#411032] font-[700] leading-10  self-start">
                                Basic
                            </p>
                            <p className="text-[16px] font-[600] text-[#2A2E3F] leading-[150%]">
                                THB 59.00 <span className='text-[#9AA1B9] font-[400] leading-7'>/Month</span>
                            </p>
                        </div>

                        <div className=" w-[277px] mx-auto mt-[20px] border-b-[1px]">
                            <p className="text-[16px] font-[400] text-[#424C6B] leading-10  self-start">
                                <img src={Correct} alt="" className='inline mr-3' />‘Merry’ more than a daily limited
                            </p>
                            <p className="text-[16px] font-[400] text-[#424C6B] leading-10  self-start pb-7">
                                <img src={Correct} alt="" className='inline mr-3' />Up to 25 Merry per day
                            </p>
                        </div>
                        <button className='bg-[#FFE1EA] w-[277px] h-[48px] ml-[40px] rounded-[99px] mt-[20px] content-center'>

                            <p className=' text-center text-[#95002B] font-[700] leading-[150%] '>
                                Choose Package</p>

                        </button>

                    </div>
                    {/* End Item1 */}

                    {/* item2 */}
                    <div className="cardItem item3 w-[357px] h-[438px] border-[1px] border-solid border-[#D6D9E4]  bg-[#FFFFFF]  rounded-[40px] mx-[12px]">
                        <div className="frameIMG w-[60px] h-[60px] rounded-2xl bg-[#F6F7FC] relative m-auto mt-[40px] ml-[40px]">
                            <div className="imgItem w-[32.4px] h-[32.4px] mt-[1.81px] ml-[1.81px]">
                                <img src={Star2} alt="" />
                            </div>
                        </div>
                        <div className=" w-[277px] mx-auto mt-[40px]">
                            <p className="text-[32px] text-[#411032] font-[700] leading-10  self-start">
                                Platinum
                            </p>
                            <p className="text-[16px] font-[600] text-[#2A2E3F] leading-[150%]">
                                THB 99.00 <span className='text-[#9AA1B9] font-[400] leading-7'>/Month</span>
                            </p>
                        </div>

                        <div className=" w-[277px] mx-auto mt-[20px] border-b-[1px]">
                            <p className="text-[16px] font-[400] text-[#424C6B] leading-10  self-start">
                                <img src={Correct} alt="" className='inline mr-3' />‘Merry’ more than a daily limited
                            </p>
                            <p className="text-[16px] font-[400] text-[#424C6B] leading-10  self-start pb-7">
                                <img src={Correct} alt="" className='inline mr-3' />Up to 45 Merry per day
                            </p>
                        </div>
                        <button className='bg-[#FFE1EA] w-[277px] h-[48px] ml-[40px] rounded-[99px] mt-[20px] content-center'>

                            <p className=' text-center text-[#95002B] font-[700] leading-[150%] '>
                                Choose Package</p>

                        </button>

                    </div>
                    {/* End Item2 */}

                    {/* item3 */}
                    <div className="cardItem item3 w-[357px] h-[438px] border-[1px] border-solid border-[#D6D9E4]  bg-[#FFFFFF]  rounded-[40px] mx-[12px]">
                        <div className="frameIMG w-[60px] h-[60px] rounded-2xl bg-[#F6F7FC] relative m-auto mt-[40px] ml-[40px]">
                            <div className="imgItem w-[32.4px] h-[32.4px] mt-[1.81px] ml-[1.81px]">
                                <img src={Star} alt="" />
                            </div>
                        </div>
                        <div className=" w-[277px] mx-auto mt-[40px]">
                            <p className="text-[32px] text-[#411032] font-[700] leading-10  self-start">
                                Premium
                            </p>
                            <p className="text-[16px] font-[600] text-[#2A2E3F] leading-[150%]">
                                THB 149.00 <span className='text-[#9AA1B9] font-[400] leading-7'>/Month</span>
                            </p>
                        </div>

                        <div className=" w-[277px] mx-auto mt-[20px]  border-b-[1px]">
                            <p className="text-[16px] font-[400] text-[#424C6B] leading-10  self-start">
                                <img src={Correct} alt="" className='inline mr-3' />‘Merry’ more than a daily limited
                            </p>
                            <p className="text-[16px] font-[400] text-[#424C6B] leading-10  self-start pb-7">
                                <img src={Correct} alt="" className='inline mr-3' />Up to 70 Merry per day
                            </p>
                        </div>
                        <button className='bg-[#FFE1EA] w-[277px] h-[48px] ml-[40px] rounded-[99px] content-center mt-[20px]'>

                            <p className=' text-center text-[#95002B] font-[700] leading-[150%] '>
                                Choose Package</p>

                        </button>

                    </div>
                    {/* End Item3 */}

                </div>

            </div>
        </div>
    )
}

export default Subscribe