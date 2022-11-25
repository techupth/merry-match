import React from "react";

function AdminSideBar() {
  return (
    <div className="h-[100vh] w-[25%]">
      <div className="w-[100%] h-[100%] bg-[#ffffff] z-20  border-r-2 ">
        <div className="flex flex-col items-center justify-center">
          <img
            className="mt-[8rem] h-[full] w-[80%]"
            src="/public/asset/header/header-merrymatch-logo.svg"
            alt="Merry Match logo"
          />
          <p className="font-[#646D89] text-[1.3rem]">Admin Panel Control</p>
        </div>

        <div className="categories flex flex-col items-center justify-between mt-10 h-[60%]">
          <div className="complaint_btn  flex flex-row justify-start items-center hover:bg-[#F1F2F6] w-[100%] h-[100px]">
            <button
              className=" flex flex-row items-center
           text-[#424C6B] font-[800] ml-[50px]"
            >
              {" "}
              <img
                className=""
                src="../../../public/asset/adminPanelControl/Vector.svg"
                alt="caution symbol"
              />{" "}
              <p className="ml-3 text-[1.2em]">Complaint</p>
            </button>
          </div>

          <div className="logout_btn flex flex-row justify-start items-center hover:bg-[#F1F2F6] w-[100%] h-[100px] border-t-2">
            <button
              className=" flex flex-row items-center
           text-[#424C6B] font-[800] ml-[50px]"
            >
              {" "}
              <img
                className=""
                src="../../../public/asset/adminPanelControl/logout-btn.svg"
                alt="caution symbol"
              />{" "}
              <p className="ml-3 text-[1.2em]">Log out</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
