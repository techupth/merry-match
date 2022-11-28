import React from "react";

const Complaint = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-start justify-start bg-[#F6F7FC]">
      <div className=" nav-bar w-[80vw] h-[13vh] bg-white border-b-2 flex flex-row items-center justify-between">
        <div
          className="ml-[4rem] text-[2.5em] font-[700]
          flex
          flex-row
          items-center"
        >
          <svg
            className="w-6 h-6 mr-4"
            fill="none"
            stroke="#9AA1B9"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Complaint List
        </div>

        <div className="w-[600px] mr-10 flex flex-row justify-center items-center">
          <button
            className="text-[#C70039] font-[700] text-[1.5em] w-[250%] h-[100px] hover:text-[#FF1659] active:text-[#A62D82]"
            onClick={() => {}}
          >
            Cancel Complaint
          </button>
          <button
            className="bg-[#C70039] rounded-[99px] text-[white] font-[700] text-[1.5em] w-[250%] h-[90px] hover:bg-[#FF1659] active:text-[#A62D82]"
            onClick={() => {}}
          >
            Resolved Complaint
          </button>
        </div>
      </div>
      {/* each complaint */}
      <div className="h-full w-full mt-16 flex flex-row items-start justify-center">
        <div className="rounded-[30px] bg-white w-[90%] h-[60%] flex flex-col items-start justify-start">
          <div className="border-b-2 w-[90%] ml-20 h-[160px] flex flex-row items-center justify-start">
            <p className=" text-[600] font-[#646D89] text-[20px] mt-20 ">
              Complaint by :{" "}
            </p>
            <p className=" text-black text-[1em] mt-20 ml-2 "> name</p>
          </div>
          <p className="text-[600] font-[#646D89] text-[20px] mt-20 ml-20">
            Issue
          </p>
          <p className="text-[600] font-[#646D89] text-[20px] mt-20 ml-20">
            Description
          </p>
          <p className="text-[600] font-[#646D89] text-[20px] mt-20 ml-20">
            Date Submitted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
