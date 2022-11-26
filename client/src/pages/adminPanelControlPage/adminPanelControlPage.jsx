import React from "react";
import AdminSideBar from "../../components/adminPanelControlPageComponents/adminSideBar";
import ComplaintList from "../../components/adminPanelControlPageComponents/complaintList";

const AdminPanelControlPage = () => {
  return (
    <div className="h-[100vh] w-[100vw]  flex flex-row justify-start items-center">
      <AdminSideBar />
      <ComplaintList />
    </div>
  );
};

export default AdminPanelControlPage;
