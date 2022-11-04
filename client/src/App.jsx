import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProfilePopup from "./components/profile/ProfilePopup";

function App() {
  return (
    <>
    <ProfilePopup />
      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </>
  );
}

export default App;
