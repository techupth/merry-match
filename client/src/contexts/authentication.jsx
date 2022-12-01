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
  const [isAdmin, setIsAdmin] = useState(false);

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

      if (result.data.token) {
        const token = result.data.token;
        localStorage.setItem("token", token);
        const userData = jwtDecode(token);
        localStorage.setItem("profileImg", userData.profile_pics[0]);
        localStorage.setItem("profileName", userData.name);
        setUserData({ ...userData, user: userData });
        navigate("/");
        return result.data.message;
      } else if (result.data.adminToken) {
        const adminToken = result.data.adminToken;
        localStorage.setItem("adminToken", adminToken);
        navigate("/admin");
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
    localStorage.removeItem("adminToken");
    setUserData({ ...userData, user: null });
  };

  const deleteuser = async (userId) => {
    try {
      localStorage.removeItem("token");
      setUserData({ ...userData, user: null });
      await axios.delete(`http://localhost:4001/users/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(isAdmin);
  const isAdminAuthenticated = Boolean(localStorage.getItem("adminToken"));
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
        isAdminAuthenticated,
        deleteuser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
