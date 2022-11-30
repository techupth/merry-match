import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/navbarComponents/Navbar"
import Home from "../landingPage/Home";
import Login from "../loginPage/Login";
import Register from "../registerPage/Register";
import AdminPanelControlPage from "../adminPanelControlPage/adminPanelControlPage";
import SwipeModal from "../../components/matchingComponents/swipeModal";

const Unauthenticated = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default Unauthenticated;
