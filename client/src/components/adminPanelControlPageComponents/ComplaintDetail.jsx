import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminSideBar from "./AdminSideBar";
import Popup from "./Popup";

const Complaint = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.complaintID);
  const [complaint, setComplaint] = useState({});
  const [dateSubmit, setDateSubmit] = useState("");

  const [dateAction, setDateAction] = useState("");
  const [timeAction, setTimeAction] = useState("");

  const [isCancel, setIsCancel] = useState(false);
  const [isResolve, setIsResolve] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const now = new Date();

  const toggleCancel = () => {
    setIsCancel(!isCancel);
    setIsOpen(!isOpen);
  };

  const toggleResolve = () => {
    setIsResolve(!isResolve);
    setIsOpen(!isOpen);
  };

  const getComplaint = async () => {
    const results = await axios(
      `http://localhost:4001/complaints/${params.complaintID}`
    );
    setComplaint(results.data.data[0]);
    console.log(results.data.data[0].date_submitted);
    console.log(results.data.data[0].date_submitted.toLocaleString());
    setDateSubmit(results.data.data[0].date_submitted.substr(0, 10));
    console.log(results.data.data[0].updated_at);
    const dateArr = results.data.data[0].updated_at.split("T");
    console.log(dateArr);
    const time = dateArr[1].substr(0, 8);
    console.log(time.toLocaleString());
    setTimeAction(time);
    setDateAction(dateArr[0]);
  };
  console.log(dateSubmit);

  const handleStatus = async (data, status) => {
    console.log(data);
    console.log(status);
    console.log(now.toLocaleString());
    const complaintId = data.complaint_id;
    const newData = {
      ...data,
      updated_at: now.toLocaleString(),
      complaint_status: status,
    };
    await axios.put(`http://localhost:4001/complaints/${complaintId}`, newData);
  };

  console.log(complaint);
  useEffect(() => {
    getComplaint();
  }, []);

  return (
    <div className="flex flex-row">
      <AdminSideBar />
      <div className="w-[100%] h-[140vh] flex flex-col items-start justify-start bg-[#F6F7FC]">
        <div className=" nav-bar w-[80vw] h-[13vh] bg-white border-b-2 flex flex-row items-center justify-between">
          <div
            className="ml-[4rem] text-[2.5em] font-[700] w-[50vw] 
          flex
          flex-row
          items-center"
          >
            <button
              className="back-button"
              onClick={() => {
                navigate("/admin");
              }}
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
            </button>

            <div
              key={complaint.complaint_id}
              className="w-[50%] flex flex-row items-center justify-start"
            >
              <span className="ml-5 mr-5 truncate text-3xl">
                {complaint.issue}
              </span>
              {complaint.complaint_status === "New" ? (
                <span className="w-[20%]">
                  <p className="w-fit p-1 px-2 font-[500] text-[0.8em] bg-[#FFF6D5] rounded-[8px] text-[#393735]">
                    {" "}
                    Pending
                  </p>
                </span>
              ) : complaint.complaint_status === "Pending" ? (
                <span className="w-[20%]">
                  <p className="w-fit p-1 px-2 font-[500] text-[0.8em] bg-[#FFF6D5] rounded-[8px] text-[#393735]">
                    {" "}
                    Pending
                  </p>
                </span>
              ) : complaint.complaint_status === "Resolved" ? (
                <span className="w-[20%]">
                  <p className="w-fit p-1 px-2 font-[500] text-[0.8em] bg-[#E7FFE7] rounded-[8px]  text-[#197418]  ">
                    {" "}
                    Resolved
                  </p>
                </span>
              ) : complaint.complaint_status === "Canceled" ? (
                <span className="w-[20%]">
                  <p className="w-fit p-1 px-2 font-[500] text-[0.8em] bg-[#F1F2F6] rounded-[8px] text-[#646D89]">
                    {" "}
                    Canceled
                  </p>
                </span>
              ) : null}
            </div>
          </div>

          {complaint.complaint_status === "New" ||
            complaint.complaint_status === "Pending" ? (
            <div className="w-[40%] mr-10 flex flex-row justify-end items-center">
              <button
                className="text-[#C70039] font-[700] text-[1em] w-[150px] h-[50px] hover:text-[#FF1659] active:text-[#A62D82] mr-2"
                onClick={() => {
                  toggleCancel();
                }}
              >
                Cancel Complaint
              </button>
              <button
                className="bg-[#C70039] rounded-[99px] text-[white] font-[700] text-[1em] w-[180px] h-[50px] hover:bg-[#FF1659] active:text-[#A62D82]"
                onClick={() => {
                  toggleResolve();
                }}
              >
                Resolved Complaint
              </button>
            </div>
          ) : null}
        </div>
        {/* each complaint */}

        <div className="h-full w-full mt-16 flex flex-row items-start justify-center">
          <div className="rounded-[30px] bg-white w-[90%] h-fit flex flex-col items-start justify-start">
            <div className="border-b-2 w-[90%] ml-20 mr-20 h-[160px] flex flex-row items-center justify-start">
              <p className=" font-[600] font-[#646D89] text-[24px] mt-8">
                Complaint by :{" "}
              </p>
              <p className=" text-black text-[1em] font-[400] mt-8 ml-2 ">
                {" "}
                {complaint.name}
              </p>
            </div>
            <p className="font-[600] font-[#646D89] text-[24px] mt-16 ml-20">
              Issue
            </p>
            <p className=" text-black text-[1em] font-[400] ml-20 w-[85%] ">
              {complaint.issue}
            </p>
            <p className="font-[600] font-[#646D89] text-[24px] mt-16 ml-20">
              Description
            </p>
            <p className=" text-black text-[1em] font-[400] ml-20 w-[85%] ">
              {complaint.description}
            </p>
            <p className="font-[600] font-[#646D89] text-[24px] mt-16 ml-20">
              Date of Issue
            </p>
            <p className=" text-black text-[1em] font-[400] ml-20 pb-20">
              {" "}
              {dateSubmit}
            </p>
            {complaint.complaint_status === "Resolved" ? (
              <div className="border-t-2 w-[90%] ml-20 mr-20 h-[160px]">
                <p className="text-[600] font-[#646D89] text-[24px] mt-10 ">
                  Resolved date
                </p>
                <p className=" text-black text-[1em]  pb-20">
                  {`${dateAction}  ${timeAction}`}
                </p>
              </div>
            ) : complaint.complaint_status === "Canceled" ? (
              <div className="border-t-2 w-[90%] ml-20 mr-20 h-[160px]">
                <p className="text-[600] font-[#646D89] text-[24px] mt-10">
                  Canceled date
                </p>
                <p className=" text-black text-[1em] pb-20">
                  {`${dateAction}  ${timeAction}`}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        {/*  */}
        {isCancel && isOpen ? (
          <Popup
            HeadContent={
              <p className="text-[20px] font-semibold">Cancel Complaint</p>
            }
            MiddleContent={
              <p className="text-[16px] font-normal text-[#646D89]">
                Do you sure to cancel this complaint?
              </p>
            }
            FotterContent={
              <div className="flex ">
                <button
                  className="w-[239px] h-[48px] rounded-full bg-[#FFE1EA] font-[700]"
                  onClick={() => {
                    handleStatus(complaint, "Canceled");
                    toggleCancel();
                    navigate("/admin");
                  }}
                >
                  Yes, cancel this complaint
                </button>
                <button
                  className="w-[239px] h-[48px] rounded-full bg-[#C70039] ml-[16px] font-[700] text-white"
                  onClick={toggleCancel}
                >
                  No, give me more time
                </button>
              </div>
            }
            handleClose={toggleCancel}
          />
        ) : null}
        {isResolve && isOpen ? (
          <Popup
            HeadContent={
              <p className="text-[20px] font-semibold">Resolve Complaint</p>
            }
            MiddleContent={
              <p className="text-[16px] font-normal text-[#646D89]">
                This complaint is resolved?
              </p>
            }
            FotterContent={
              <div className="flex ">
                <button
                  className="w-[239px] h-[48px] rounded-full bg-[#FFE1EA] font-[700]"
                  onClick={() => {
                    handleStatus(complaint, "Resolved");
                    toggleResolve();
                    navigate("/admin");
                  }}
                >
                  Yes, it has been resolved
                </button>
                <button
                  className="w-[239px] h-[48px] rounded-full bg-[#C70039] ml-[16px]  text-white font-[700]"
                  onClick={toggleResolve}
                >
                  No, it’s not
                </button>
              </div>
            }
            handleClose={toggleResolve}
          />
        ) : null}
        {/*  */}
      </div>
    </div>
  );
};

export default Complaint;
