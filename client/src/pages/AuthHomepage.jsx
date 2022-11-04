import React from "react";
import Home from "./Home";
import Navbarauthen from "../components/NavbarAuthen";

const HomepageAuth = () => {
  return (
    <div>
      {/* must be authenticated navBar */}
      <Navbarauthen />
      <Home />
    </div>
  );
};

export default HomepageAuth;