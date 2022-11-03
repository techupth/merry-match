import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();

function AuthProviders(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  const navigate = useNavigate();

  const register = async (data) => {
    await axios.post("http://localhost:4001/auth/register", data);
    navigate("/login");
  };

  const login = async (data) => {
    await axios.post("http://localhost:4001/auth/login", data);

    const token = result.data.token;
    localStorage.setItem("token", token);

    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    console.log(state);
  };
  navigate("/");
}
const logout = () => {
  localStorage.removeItem("token");
  setState({ ...state, user: null });
};

export default AuthProviders;
