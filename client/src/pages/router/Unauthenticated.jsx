import { Route, Routes } from "react-router-dom";
import EditModal from '../../components/editPageComponents/EditModal';
import Navbar from "../../components/Navbar/Navbar";
import NavbarAuthen from "../../components/Navbar/NavbarAuthen";
import Home from "../landingPage/Home";
import Login from "../login/Login";
import Register from "../register/Register";



function Unauthenticated() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
        <Route path="/dev" element={<EditModal />} />
        <Route path="/dev" element={<NavbarAuthen />} />


      </Routes>
    </>
  );
}

export default Unauthenticated;
