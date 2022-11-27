import { Routes, Route } from "react-router-dom";
import AdminPanelControlPage from "../adminPanelControlPage/adminPanelControlPage";
import { SwipeProvider } from "../../contexts/swipeContext";

const AdminAuthenticated = () => {
  return (
    <>
      <SwipeProvider>
        <Routes>
          <Route path="*" element={<AdminPanelControlPage />} />
        </Routes>
      </SwipeProvider>
    </>
  );
};

export default AdminAuthenticated;
