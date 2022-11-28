import React from "react";
import { useState } from "react";
import { mockComplaints } from "./mockcomplaintdata";

const ComplaintList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-start justify-start">
      <div className=" nav-bar w-[80vw] h-[13vh] bg-white border-b-2 flex flex-row items-center justify-between">
        <div className="ml-[4rem] text-[2.5em] font-[700]">Complaint List</div>
        <div className="flex flex-row justify-between border-3 mr-[4rem]">
          <div className=" search-box relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-[300px] h-[100%] p-4 pl-10 text-[1em] font-[400] placeholder-[#9AA1B9] border border-gray-300 rounded-[10px] bg-gray-50 focus:ring-[#AF2758] focus:border-[#AF2758]"
              placeholder="Search..."
            />
          </div>
          <div>
            <button
              id="dropdownAdminDefault"
              data-dropdown-toggle="adminDropdown"
              className="ml-3 w-[15rem] h-[100%] text-[#9AA1B9] bg-gray-50 border border-gray-300 rounded-[10px] focus:ring-[#AF2758] focus:border-[#AF2758] focus:border-2 text-[16px] font-[400] px-4 py-2.5 text-center inline-flex items-center justify-between "
              type="button"
              onClick={() => {
                handleDropDown();
              }}
            >
              All Status{" "}
              <img
                className="h-1.5 ml-1"
                src="../../../public/asset/adminPanelControl/dropdown.svg"
                alt="dropdown button"
              />
            </button>

            <div
              id="adminDropdown"
              className={`z-30 w-[210px] ml-5 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${
                isOpen ? "fixed" : "hidden"
              } `}
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownAdminDefault"
              >
                <li>
                  <a
                    href="#"
                    className="new-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]">
                      {" "}
                      New
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="resolved-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#E7FFE7] rounded-[8px]  text-[#197418]  ">
                      {" "}
                      Resolved
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pending-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FFF6D5] rounded-[8px] text-[#393735]">
                      {" "}
                      Pending
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="canceled-option block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#F1F2F6] rounded-[8px] text-[#646D89]">
                      {" "}
                      Canceled
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="complaint-list w-[80vw] h-[90vh] bg-[#F6F7FC]  items-center">
        <div className=" w-full h-full overflow-y-scroll border-b-2 rounded-b-[30px]">
          <div className="bg-[#D6D9E4] h-[90px] w-[90%] mt-[2.5%] rounded-t-[30px] flex flex-row items-center justify-between font-[500] text-[22px]  ml-[5%]">
            <span className="ml-[5%] w-[120px]">User</span>
            <span className="w-[12%] ml-5 ">Issue</span>
            <span className="w-[35%]">Description</span>
            <span className="mr-5">Date Submitted</span>
            <span className="mr-[6%]">Status</span>
          </div>

          {/* complaints */}
          {mockComplaints.map((complaint) => {
            return (
              <div
                key={complaint.complaint_id}
                className="bg-[#ffffff] h-[120px] w-[90%] flex flex-row items-center justify-between font-[500] text-[22px] border-b-2 ml-[5%]"
              >
                <a href="">
                  <span className="ml-[5%] w-[120px] truncate">
                    {complaint.name}
                  </span>
                </a>
                <a href="">
                  <span className="w-[12%] ml-5 truncate">
                    {complaint.issue}
                  </span>
                </a>
                <a href="">
                  <span className="w-[30%] truncate">
                    {complaint.description}
                  </span>
                </a>
                <a href="">
                  <span className="w-[10%] ml-[3.5%] text-left">
                    {complaint.date_submitted}
                  </span>
                </a>
                {complaint.complaint_status === "New" ? (
                  <a href="">
                    <span className="mr-[3.5%] w-[6%]">
                      <span className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]">
                        {" "}
                        New{" "}
                      </span>
                    </span>
                  </a>
                ) : complaint.complaint_status === "Pending" ? (
                  <a href="">
                    <span className="mr-[3.5%] w-[6%]">
                      <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FFF6D5] rounded-[8px] text-[#393735]">
                        {" "}
                        Pending
                      </p>
                    </span>
                  </a>
                ) : complaint.complaint_status === "Resolved" ? (
                  <a href="">
                    <span className="mr-[3.5%] w-[6%]">
                      <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#E7FFE7] rounded-[8px]  text-[#197418]  ">
                        {" "}
                        Resolved
                      </p>
                    </span>
                  </a>
                ) : complaint.complaint_status === "Canceled" ? (
                  <a href="">
                    <span className="mr-[3.5%] w-[6%]">
                      <p className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#F1F2F6] rounded-[8px] text-[#646D89]">
                        {" "}
                        Canceled
                      </p>
                    </span>
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
