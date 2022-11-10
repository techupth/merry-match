import { Route, Routes } from "react-router-dom";
import EditModal from '../../components/editPageComponents/EditModal';
import Navbar from "../../components/Navbar/Navbar";
import Navbarauthen from "../../components/Navbar/NavbarAuthen";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";



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
        <Route path="/dev" element={<Navbarauthen />} />


      </Routes>
    </>
  );
}

export default Unauthenticated;
