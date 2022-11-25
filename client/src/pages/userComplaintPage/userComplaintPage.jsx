import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSwipe } from "../../contexts/swipeContext";
import jwtDecode from "jwt-decode";

// utility
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Banner from "../../../public/asset/Login/bannerLogin.png";
import Footer from "../../components/editPageComponents/Footer";

const UserComplaintPage = () => {
  const { eachUser, getEachUser } = useSwipe();
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("");
  const [issue, setIssue] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState("");



  const complaintForm = {
    issue: issue,
    description: desc,
    date: currentDate,
    user_id:userId,
  };

  const handleBirtday = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    const birthday = `${year}-${month}-${day}`;
    setStartDate(data);
    setCurrentDate(birthday);
  };

  const handleSubmit = async (complaintForm) => {
    try {
      console.log(complaintForm);
      const res = await axios.post(
        `http://localhost:4001/complaints`,
        complaintForm
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserId = async () =>{
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    setUserId(userData.user_id)
  }

  useEffect(() => {
    handleUserId()
    handleBirtday(new Date())
  }, []);

  return (
    <div className="w-[full] h-[70.25rem] bg-[white] flex flex-col">
      <div className="flex flex-row">
        {/* ********************************** Content *************************************** */}
        <div className="w-[45%] h-[50rem] mt-[10%] ml-[15%] overflow-hidden">
          {/* headline */}
          <p className="font-semibold text-[14px] mb-[2%] text-[#7B4429]">
            COMPLAINT
          </p>
          <h1 className="font-black text-[46px] mb-[5%] leading-[90%] text-[#A62D82]">
            If you have any trouble <br /> Don't be afraid to tell us!
          </h1>

          {/* form */}
          <div className="flex flew-col space-y-20 ml-[2%]">
            <form className="font-semibold">
              <label>Issue</label>
              <br />
              <input
                className="border border-1 border-[#D6D9E4] rounded-[8px] w-[548px] h-[48px] mb-[5%] focus:border-pink-300 focus:border-[2px]"
                placeholder="Issue"
                type="text"
                required
                onChange={(event) => {
                  setIssue(event.target.value);
                }}
              />
              <br />

              <label>Description</label>
              <br />
              <textarea
                id="message"
                rows="4"
                placeholder="Leave a description..."
                className="block p-2.5 w-[548px] border border-1 border-[#D6D9E4] rounded-[8px] h-[280px] focus:border-pink-300 focus:border-[2px]"
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
              />
              <br />

              <label>Date Submitted</label>
              <br />
              <DatePicker
                required
                dateFormat="dd/MM/yyyy"
                dropdownMode="select"
                selected={startDate}
                showMonthDropdown
                showYearDropdown
                onChange={(date) => {
                  handleBirtday(date);
                }}
                className="border border-1 border-[#D6D9E4] rounded-[8px] w-[120px] h-[48px] text-black mb-[5%] focus:border-pink-300 focus:border-[2px] text-center"
              />

              <br />

              <button
                type="submit"
                className="w-[102px] h-[48px] bg-[#C70039] rounded-full text-white text-[1rem] font-semibold hover:bg-[#a1002e]"
                onClick={() => handleSubmit(complaintForm)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* ********************************** Banner *************************************** */}
        <img
          src={Banner}
          alt="banner"
          className="w-[28.125rem] h-[42.313rem] mt-[10%]"
        />
      </div>

      {/* ********************************** Footer *************************************** */}
      <Footer />
    </div>
  );
};

export default UserComplaintPage;
