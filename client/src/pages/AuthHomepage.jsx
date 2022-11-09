import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Navbarauthen from "../components/NavbarAuthen";
import { useAuth } from "../contexts/authentication";
import axios from "axios";


const HomepageAuth = () => {
  return (
    <div>
      <Navbarauthen />
      <Home />
      
    </div>
  );
};

export default HomepageAuth;
