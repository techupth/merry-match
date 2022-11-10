import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Navbarauthen from '../components/NavbarAuthen'
import EditModal from '../components/editPageComponents/EditModal'


const Unauthenticated = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
        <Route path="/dev" element={<EditModal />} />

      </Routes>
    </>
  );
};

export default Unauthenticated;
