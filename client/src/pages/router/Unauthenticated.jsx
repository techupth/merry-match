import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../landingPage/Home";
import Login from "../loginPage/Login";
import Register from "../registerPage/Register";
import SwipeComponent from "../../components/swipe/swipe";

const Unauthenticated = () => {
  return (
    <>
      <Navbar />
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />

        {/* // For dev import element here */}
        <Route path="/dev" element={<SwipeComponent />} />
      </Routes>
    </>
  );
};

export default Unauthenticated;
