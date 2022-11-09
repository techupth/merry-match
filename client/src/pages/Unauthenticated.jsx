import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Navbarauthen from "../components/NavbarAuthen";

const Unauthenticated = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
        <Route path="/dev" element={<Navbarauthen />} />
        <Route path="/dev" element={<Login />} />

      </Routes>
    </>
  );
};

export default Unauthenticated;
