import { Routes, Route } from "react-router-dom";
import AdminPanelControlPage from "../adminPanelControlPage/adminPanelControlPage";

const AdminAuthenticated = () => {
  return (
    <>
      <SwipeProvider>
        <Routes>
          <Route path="/panel" element={<AdminPanelControlPage />} />
        </Routes>
      </SwipeProvider>
    </>
  );
};

export default AdminAuthenticated;
