import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authentication'


const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth()
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <nav className="bg-[#FFFFFF] absolute z-10 overflow-auto  flex flex-row items-center justify-between h-[100px] w-full text-[16px] font-bold ">
      <img
        src="/asset/header/header-merrymatch-logo.svg"
        alt="merry match logo"
        className="ml-[10%]"
      />

      <div className="mr-[10%]  flex flex-row  items-center justify-between p-0 gap-8">

        <a href="#why-merry">Why Merry Match?</a>
        <a href="#how-merry">How to Merry</a>
        <button className="button-nav bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[48px] w-[90px]" onClick={handleNavigate}>
          Login
        </button>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
