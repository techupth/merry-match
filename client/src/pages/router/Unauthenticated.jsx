import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../landingPage/Home";
import Login from "../loginPage/Login";
import Register from "../registerPage/Register";

// For dev import here
import DeleteButton from "../../components/editPageComponents/DeleteButton";
import MatchingPage from "../mathcingPage/MatchingPage";




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
        {/* <Route path="/dev" element={<SwipeTest />} /> */}




      </Routes>
    </>
  );
}

export default Unauthenticated;
