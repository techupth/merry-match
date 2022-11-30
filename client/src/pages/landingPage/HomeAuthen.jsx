import React from "react";
import ThirdPartAuthen from "../../components/landingPageAuthen/ThirdPartAuthen";
import HeaderAuthen from "../../components/landingPageAuthen/HeaderAuthen";
import SecondPartAuthen from "../../components/landingPageAuthen/SecondPartAuthen";
import FooterAuthen from "../../components/landingPageAuthen/FooterAuthen";
import Navbar from "../../components/navbarComponents/Navbar"
function HomeAuthen() {
  return (
    <div className="bg-[#160404]">
      <HeaderAuthen />
      <SecondPartAuthen />
      <ThirdPartAuthen />
      <FooterAuthen />
    </div>
  );
}

export default HomeAuthen;
