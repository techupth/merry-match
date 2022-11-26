import React from "react";
import { useState } from "react";

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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
      <div className="complaint-list w-[80vw] h-[85vh] bg-[#F6F7FC]">
        complaint-list
      </div>
      <div>{!isOpen && <div>Hi</div>}</div>
    </div>
  );
};

export default ComplaintList;
