import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../landingPage/Home";
import Login from "../login/Login";
import Register from "../register/Register";
// For dev import here
import DeleteButton from "../../components/editPageComponents/DeleteButton";
import MatchingPage from "../mathcingPage/MatchingPage";
import MatchLog from "../../components/matchingComponents/MatchLog"
import MerryList from "../merryList/MerryList";




function Unauthenticated() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />

        {/* // For dev import element here */}
        {/* <Route path="/dev" element={<MatchLog />} /> */}
        <Route path="/dev" element={<MerryList />} />
 
      </Routes>
    </>
  );
}

export default Unauthenticated;
