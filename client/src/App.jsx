import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Devtools from "./components/devtools"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/dev" element={<Devtools />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
