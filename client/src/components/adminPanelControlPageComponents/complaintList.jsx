import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ComplaintList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [complaints, setComplaints] = useState([]);
  console.log(complaints);
  const now = new Date();

  // function statusValue(e) {
  //   console.log(e.target.value)
  // }

  console.log(search);
  console.log(status);
  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getAllComplaints();
  }, []);

  const getAllComplaints = async () => {
    try {
      const result = await axios.get("http://localhost:4001/complaints");
      console.log(result.data.data);

      setComplaints(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleStatus = async (data) => {
    console.log(data);
    const complaintId = data.complaint_id;
    const newData = {
      ...data,
      updated_at:now.toLocaleString(),
      complaint_status: "Pending",
    };
    console.log(newData);
    if (data.complaint_status === "New") {
      await axios.put(
        `http://localhost:4001/complaints/${complaintId}`,
        newData
      );
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-start justify-center">
      <div className=" nav-bar w-[80vw] h-[12%] bg-white border-b-2 flex flex-row items-center justify-between">
        <div className="ml-[4rem] text-[1.5em] xl:text-[2.5em] font-[700] h-fit ">
          Complaint List
        </div>
        <div className=" two-box flex flex-row justify-between border-3 mr-[4rem]">
          <div className=" search-box relative">
            <div className="absolute inset-y-0 left-0 bottom-2 flex items-center pl-3 pointer-events-none">
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
              className="block w-[300px] h-[80%] p-4 pl-10 text-[1em] font-[400] placeholder-[#9AA1B9] border border-gray-300 rounded-[10px] bg-gray-50 focus:ring-[#AF2758] focus:border-[#AF2758]"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <select
              id="dropdownAdminDefault"
              data-dropdown-toggle="adminDropdown"
              className="ml-3 w-[15rem] h-[80%] text-[#9AA1B9] bg-gray-50 border border-gray-300 rounded-[10px] focus:ring-[#AF2758] focus:border-[#AF2758] focus:border-2 text-[16px] font-[400] px-4 py-2.5 text-left inline-flex items-center justify-between "
              type="select"
              onChange={(e) => setStatus(e.target.value)}
              // value={status}
            >
              <img
                className="h-1.5 ml-1"
                src="../../../public/asset/adminPanelControl/dropdown.svg"
                alt="dropdown button"
              />
              <option
                value="All Status"
                className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]"
              >
                All Status
              </option>
              <option
                value="New"
                className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]"
              >
                New
              </option>
              <option
                value="Resolved"
                className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#E7FFE7] rounded-[8px]  text-[#197418] "
              >
                Resolved
              </option>
              <option
                value="Pending"
                className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FFF6D5] rounded-[8px] text-[#393735]"
              >
                Pending
              </option>
              <option
                value="Canceled"
                className="w-fit p-1 px-2 font-[500] text-[1em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]"
              >
                Canceled
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="complaint-list w-[80vw] h-[95vh] bg-[#F6F7FC] items-center overflow-x-scroll">
        <div className=" w-full h-full overflow-y-scroll border-b-2 rounded-b-[30px]">
          <div className="bg-[#D6D9E4] h-[80px] w-[95%] mt-[2.5%] rounded-t-[30px] flex flex-row items-center justify-between font-[500] text-[16px] 2xl:text-[22px] ml-[3%]">
            <div className="w-[15.18%]">
              <span className=" w-[51.2%] ml-[23%] xl:ml-[22.3%] 2xl:ml-[20.3%]">
                User
              </span>
              {/* <span className="ml-[24.3%] w-[51.2%]">User</span> */}
            </div>
            <div className="w-[18.5%]">
              <span className="w-[84%] ml-[10%] xl:ml-[8%] 2xl:ml-[3%]">
                Issue
              </span>
              {/* <span className="w-[84%] ml-[8%]">Issue</span> */}
            </div>
            <div className="w-[35.88%]">
              <span className="w-[90%]  ml-[7%] xl:ml-[5%] 2xl:ml-[1.5%]">
                Description
              </span>
              {/* <span className="w-[90%] ml-[4%]">Description</span> */}
            </div>
            <div className="w-[18.18%]">
              <span className="w-[80%] ml-[20%] 2xl:ml-[15%]">
                Date Submitted
              </span>
              {/* <span className="w-[80%] ml-[10%]">Date Submitted</span> */}
            </div>
            <div className="w-[12.22%]">
              <span className="w-[76%] ml-[14%] 2xl:ml-[13%]">Status</span>
              {/* <span className="w-[76%] ml-[12%]">Status</span> */}
            </div>
          </div>

          {/* complaints */}

          {complaints
            .filter((complaint) => {
              if (status !== "All Status" && search.toLowerCase() !== "") {
                return (
                  (complaint.complaint_status.includes(status) &&
                    complaint.name.toLowerCase().includes(search)) ||
                  (complaint.complaint_status.includes(status) &&
                    complaint.issue.toLowerCase().includes(search))
                );
              } else if (status !== "All Status") {
                return complaint.complaint_status.includes(status);
              } else if (search.toLowerCase() !== "") {
                return (
                  complaint.name.toLowerCase().includes(search) ||
                  complaint.issue.toLowerCase().includes(search)
                );
              } else if (status === "All Status") {
                return complaint;
              } else if (search.toLowerCase() === "") {
                return complaint;
              }
            })
            .map((complaint, key) => {
              return (
                <div
                  key={complaint.complaint_id}
                  className="bg-[#ffffff] h-[100px] w-[95%] flex flex-row items-center justify-between font-[500] text-[22px] border-b-2 ml-[3%] hover:cursor-pointer hover:bg-[#F1F2F6]"
                  onClick={() => {
                    handleStatus(complaint);
                    console.log(complaint);
                    navigate(`/admin/view/${complaint.complaint_id}`);
                  }}
                >
                  <div
                    className="ml-[3%] w-[90px] truncate text-[0.8em] hover:cursor-pointer hover:bg-[#F1F2F6]"
                    onClick={() => {
                      navigate(`/admin/view/${complaint.complaint_id}`);
                    }}
                  >
                    <p>{complaint.name}</p>
                  </div>
                  <div href="" className="w-[12%] truncate text-[0.8em]">
                    <span>{complaint.issue}</span>
                  </div>
                  <div href="" className="w-[32%] truncate text-[0.8em]">
                    <span>{complaint.description}</span>
                  </div>
                  <div
                    href=""
                    className="w-[10%] text-left text-[0.6em] 2xl:text-[0.8em]"
                  >
                    <span>{complaint.date_submitted.substr(0, 10)}</span>
                  </div>
                  {complaint.complaint_status === "New" ? (
                    <a href="" className="mr-[3.5%] w-[7%]">
                      <span className="w-fit p-1 px-2 font-[500] text-[0.75em] 2xl:text-[0.8em] bg-[#FAF1ED] rounded-[8px] text-[#7B4429]">
                        New
                      </span>
                    </a>
                  ) : complaint.complaint_status === "Pending" ? (
                    <a href="" className="mr-[3.5%] w-[7%]">
                      <span className="w-fit p-1 px-2 font-[500] text-[0.75em] 2xl:text-[0.8em] bg-[#FFF6D5] rounded-[8px] text-[#393735]">
                        Pending
                      </span>
                    </a>
                  ) : complaint.complaint_status === "Resolved" ? (
                    <a href="" className="mr-[3.5%] w-[7%]">
                      <span className="w-fit p-1 px-2 font-[500] text-[0.75em] 2xl:text-[0.8em] bg-[#E7FFE7] rounded-[8px]  text-[#197418]  ">
                        Resolved
                      </span>
                    </a>
                  ) : complaint.complaint_status === "Canceled" ? (
                    <a href="" className="mr-[3.5%] w-[7%]">
                      <span className="w-fit p-1 px-2 font-[500] text-[0.75em] 2xl:text-[0.8em] bg-[#F1F2F6] rounded-[8px] text-[#646D89]">
                        Canceled
                      </span>
                    </a>
                  ) : null}
                </div>
              );
            })}
          <div className="bg-[#D6D9E4] h-[20px] w-[95%] border-b-2 ml-[3%] mb-10 rounded-b-[30px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
