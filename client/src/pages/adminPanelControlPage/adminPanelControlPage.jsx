import React from "react";
import AdminSideBar from "../../components/adminPanelControlPageComponents/AdminSideBar";
import ComplaintList from "../../components/adminPanelControlPageComponents/ComplaintList";
import ComplaintDetail from "../../components/adminPanelControlPageComponents/ComplaintDetail";

const AdminPanelControlPage = () => {
  return (
    <div className="h-[100vh] w-[100vw]  flex flex-row justify-start items-center">
      <AdminSideBar />
      {/* <ComplaintDetail /> */}
      <ComplaintList />
    </div>
  );
};

export default AdminPanelControlPage;
