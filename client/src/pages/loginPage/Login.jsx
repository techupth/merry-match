import React from "react";
import bannerLogin from "../../../public/asset/Login/bannerLogin.png";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, userData, setUserData } = useAuth();
  const [loginMsg, setLoginMsg] = useState({ loginKey: "", passwordKey: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginResult = await login({
      username,
      password,
    });
    console.log(loginResult);
    if (loginResult.match("Admin")) {
      setLoginMsg({ ...loginMsg, passwordKey: loginResult });
    } else if (loginResult.match("Username")) {
      setLoginMsg({ ...loginMsg, loginKey: loginResult });
    } else if (loginResult.match("Password")) {
      setLoginMsg({ ...loginMsg, passwordKey: loginResult });
      setTimeout(() => {
        setPassword("");
      }, 1000);
    }
  };

  // console.log(username);
  // console.log(password);
  return (
    <div className="contanerLogin bg-white h-[1000px] w-full flex items-center ">
      <div className="lSide w-1/2 flex justify-center">
        {/*  Lside */}
        <img src={bannerLogin} alt="" />
      </div>

      {/*  Rside */}
      <div className="rSide w-1/2 flex flex-col ">
        <p className="text-[#7B4429]">LOGIN</p>
        <h1 className="text-[#A62D82] text-[46px] font-[800] leading-[125%]">
          Welcome back to
        </h1>
        <h1 className="text-[#A62D82] text-[46px]  font-[800] leading-[125%]">
          Merry Match
        </h1>

        <label className="mt-[40px] font-[400]">Username or Email</label>
        <input
          className="w-[453px] h-[48px] border-[#D6D9E4] mt-[4px] rounded-lg"
          type="text"
          placeholder="Enter Username or Email"
          onChange={(e) => {
            setUsername(e.target.value);
            if (e.target.value == "") {
              setLoginMsg({ ...loginMsg, loginKey: "" });
            }
          }}
        />
        {loginMsg.loginKey && (
          <div className="error-message text-[#C70039]">
            {loginMsg.loginKey}
          </div>
        )}
        <label className="mt-[40px] font-[400]">Password</label>
        <input
          className="w-[453px] h-[48px] border-[#D6D9E4] mt-[4px] rounded-lg"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (password == "") {
              setLoginMsg({ ...loginMsg, passwordKey: "" });
            }
          }}
        />
        {loginMsg.passwordKey && (
          <div className="error-message text-[#C70039]">
            {loginMsg.passwordKey}
          </div>
        )}
        <button
          className="w-[453px] h-[48px] font-[700] bg-[#C70039] rounded-full mt-[40px] text-[#FFFFFF]"
          onClick={handleLogin}
        >
          Log in
        </button>
        <div className="flex mt-[40px]">
          <p className="mr-[12px] font-[400] text-[16px]">
            Don’t have an account?
          </p>
          <a
            href=""
            className="text-[#C70039] font-[800] text-[16px]"
            onClick={() => navigate("/register")}
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
