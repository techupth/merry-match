import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Register from "./pages/Register";
import RegisterNew from "./pages/RegisterNew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterNew />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
