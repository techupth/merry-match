import React from "react";
import Banner from "../../../public/asset/Login/bannerLogin.png";
import Footer from "../../components/editPageComponents/Footer";

const UserComplaintPage = () => {
  return (
    <div className="w-[full] h-[70.25rem] bg-[white] flex flex-col">
      <div className="flex flex-row">

        {/* ********************************** Content *************************************** */}
        <div className="w-[65%] h-[50rem] border border-3 border-red-600 mt-[10%] ml-[5%]">
            
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
