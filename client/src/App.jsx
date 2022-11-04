import Unauthenticated from "./pages/Unauthenticated";
import { useAuth } from "./contexts/authentication";
import Authenticated from "./pages/Authenticated";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Devtools from "./components/devtools"


function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Authenticated /> : <Unauthenticated />
}

export default App;