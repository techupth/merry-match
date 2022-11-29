import { Routes, Route } from "react-router-dom";
import AdminPanelControlPage from "../adminPanelControlPage/adminPanelControlPage";
import { SwipeProvider } from "../../contexts/swipeContext";
import ComplaintDetail from "../../components/adminPanelControlPageComponents/ComplaintDetail"

const AdminAuthenticated = () => {
  return (
    <>
      <SwipeProvider>
        <Routes>
          <Route path="/admin" element={<AdminPanelControlPage />} />
          <Route path="*" element={<AdminPanelControlPage />} />
          <Route path="/admin/view/:complaintID" element={<ComplaintDetail />} />
        </Routes>
      </SwipeProvider>
    </>
  );
};

export default AdminAuthenticated;
