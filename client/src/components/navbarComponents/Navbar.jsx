import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll' 

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="Navbar text-[#191C77] text-[1rem] bg-[#FFFFFF] absolute z-10 overflow-auto  flex flex-row items-center justify-between h-[88px] w-full font-bold shadow-[2px_2px_12px_0_rgba(64,50,133,0.12)] 2xl:h-[120px] ">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="/asset/header/header-merrymatch-logo.svg"
          alt="merry match logo"
          className="ml-[170px]"
        />
      </button>

      <div className="mr-[10%]  flex flex-row  items-center justify-between p-0 gap-8 ">
        <Link to="why-merry" smooth={true} duration={500}>

          <h2 onClick={() => {
            navigate("/");
          }}>Why Merry Match?</h2>
        </Link>
        <Link to="howtomerry" smooth={true} duration={500}>
          <h2 onClick={() => {
            navigate("/");
          }}>How to Merry</h2>
        </Link>
        <button
          className="button-nav bg-[#c70039] shadow-[2px_2px_12px_0_rgba(64, 50, 133, 0.16)] rounded-[99px] text-[#ffffff] h-[48px] w-[90px] font-[700] hover:bg-[#FFE1EA] hover:text-[#95002B] "
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
