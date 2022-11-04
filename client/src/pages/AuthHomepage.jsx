import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";

const HomepageAuth = () => {
  return (
    <div>
      {/* must be authenticated navBar */}
      <Navbar />
      <h1 className="text-[30px]">Authenticated Home page</h1>
      <Home />
    </div>
  );
};

export default HomepageAuth;