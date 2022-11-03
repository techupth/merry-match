import React from 'react'
import bannerLogin from '../../public/asset/Login/bannerLogin.png'
import { useState } from 'react';
import { useAuth } from '../contexts/authentication';

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const { login } = useAuth();
  const handleLogin = (e) =>{
    e.preventDefault();
    login({
      username,
      password
    })
  }
  console.log(username)
  console.log(password)
  return (

    <div className="contanerLogin bg-white h-[1000px] w-full flex items-center mt-[80px]">
      <div className="lSide w-1/2 flex justify-center">
        {/*  Lside */}
        <img src={bannerLogin} alt="" />
      </div>

      {/*  Rside */}
      <div className="rSide w-1/2 flex flex-col ">
        <p className='text-[#7B4429]'>LOGIN</p>
        <h1 className='text-[#A62D82] text-[46px] font-extrabold'>Welcome back to
          <h1 className='text-[#A62D82] text-[46px] font-extrabold'>Merry Match</h1>
        </h1>
        <label className='mt-[40px]'>Username or Email</label>
        <input className='w-[453px] h-[48px] border-[#D6D9E4] mt-[4px] rounded-lg' type="text" placeholder='Enter Username or Email' onChange={(e)=>setUsername(e.target.value)} />
        <label className='mt-[40px]'>Password</label>
        <input className='w-[453px] h-[48px] border-[#D6D9E4] mt-[4px] rounded-lg' type="text" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />
        <button className='w-[453px] h-[48px] bg-[#C70039] rounded-full mt-[40px] text-[#FFFFFF]' onClick={handleLogin}>Log in</button>
        <div className='flex mt-[40px]'>
          <p className='mr-[12px]'>Don’t have an account?</p>
          <a href="" className='text-[#C70039]'>Register</a>
        </div>


      </div>
    </div>
  )
}

export default Login