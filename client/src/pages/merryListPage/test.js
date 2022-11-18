import React from 'react'

const test = () => {
  return (
    <div>
          <div className="w-1/3 flex flex-col items-end ">
          <div className="w-[160px] h-[32px] flex border border-[#646D89] rounded-2xl justify-center items-center mr-[16px]">
            <p className="ml-[12px] text-[#646D89]">
              Not Match yet
            </p>
          </div>
          {/* <div className="w-[160px] h-[32px] flex border border-[#C70039] rounded-2xl justify-center items-center mr-[16px]">
            <img
              className="w-[20px] h-[12px]"
              src={twoheart}
              alt=""
            />
            <p className="ml-[12px]">Merry Match!</p>
          </div> */}
          <div className="flex mt-[25px]">
            <button
              className="w-[48px] h-[48px] bg-white rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]"
              onClick={(event) => {
                event.preventDefault();
                setPreview(!preview);
                setModalId(index);
              }}
            >
              {" "}
              <img src={view} alt="" />
            </button>
            <button className="w-[48px] h-[48px] bg-white  rounded-lg flex justify-center items-center drop-shadow-xl mr-[16px]">
              {" "}
              <img src={heartRed} className="ml-[5px]" alt="" />
            </button>
          </div>
        </div>
        </div>
  )
}

export default test