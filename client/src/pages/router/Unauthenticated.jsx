import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../landingPage/Home";
import Login from "../login/Login";
import Register from "../register/Register";
// For dev import here
import DeleteButton from "../../components/editPageComponents/DeleteButton";




function Unauthenticated() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />

        {/* // For dev import element here */}
        <Route path="/dev" element={<DeleteButton />} />
      </Routes>
    </>
  );
}

export default Unauthenticated;
