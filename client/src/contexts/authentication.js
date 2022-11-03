import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthProviders(props) {
  const navigate = useNavigate();

  const register = async (data) => {
    await axios.post("http://localhost:4001/auth/register", data);
    navigate("/login");
  };
}
