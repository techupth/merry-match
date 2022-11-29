import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box fixed w-full h-[100vh] bg-[#00000050] top-0 left-0">
      <div className="box relative  bg-white w-[528px] h-[200px] rounded-3xl mt-[20vh] left-[40%] p-5">
        <div className="flex justify-between ">
          {props.HeadContent}
          <button
            className="close-icon  text-[#C8CCDB] text-[20px]"
            onClick={props.handleClose}
          >
            x
          </button>
        </div>
        <div className="w-full bg-[#C8CCDB] h-[1px] mt-[10px]"></div>
        <div className="mt-[20px]">{props.MiddleContent}</div>
        <div className="mt-[20px]">{props.FotterContent}</div>
      </div>
    </div>
  );
};

export default Popup;
