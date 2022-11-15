import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";

export const AuthContext = React.createContext();


const AuthProvider = (props) => {
  const [userData, setUserData] = useState({
    user: null,
  });
  const [loginMsg, setLoginMsg] = useState({ loginKey: "", passwordKey: "" });
  const [errorInputMsg, setErrorInputMsg] = useState(null);
  const [msg, setMsg] = useState({ username: "", email: "" });

  const navigate = useNavigate();

  const register = async (userInfo) => {
    try {
      const result = await axios.post(
        "http://localhost:4001/auth/register",
        userInfo,
        {
          headers: { "Content-Types": "multipart/form-data" },
        }
      );
      console.log(result.data.message);
      return result.data.message;
    } catch (error) {
      console.log(error);
    }
  };

  const checkRegister = async (inputData) => {
    try {
      const result = await axios.get("http://localhost:4001/auth/register", {
        params: inputData,
      });
      console.log(result.data.message);
      if (result.data.message.match("Username")) {
        setMsg({ ...msg, username: result.data.message });
      } else if (result.data.message.match("Email")) {
        setMsg({ ...msg, email: result.data.message });
      }
      return result.data.message;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data) => {
    try {
      const result = await axios.post("http://localhost:4001/auth/login", data);
      console.log(result);

      if (result.data.token) {
        const token = result.data.token;
        // console.log(token);
        localStorage.setItem("token", token);
        const userData = jwtDecode(token);
        setUserData({ ...userData, user: userData });
        navigate("/");
        return result.data.message;
      } else {
        if (result.data.message.match("Username")) {
          setMsg({ ...loginMsg, loginKey: result.data.message });
        } else if (result.data.message.match("Password")) {
          setMsg({ ...msg, passwordKey: result.data.message });
        }

        return result.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserData({ ...userData, user: null });
  };

  const deleteuser = async (userId) => {
    console.log(userId)
    localStorage.removeItem("token");
    setUserData({ ...userData, user: null });
    await axios.delete(`http://localhost:4001/users/${userId}`)

  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{
        userData,
        login,
        logout,
        register,
        msg,
        checkRegister,
        isAuthenticated,
        deleteuser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
