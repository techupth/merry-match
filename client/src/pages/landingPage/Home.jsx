import React from "react";
import Footer from "../../components/landingPageComponents/Footer";
import Header from "../../components/landingPageComponents/Header";
import SecondPart from "../../components/landingPageComponents/SecondPart";
import ThirdPart from "../../components/landingPageComponents/ThirdPart";




const Home = () => {
  return (
    <div className="bg-[#160404]">
      <Header />
      <SecondPart />
      <ThirdPart />
      <Footer />
    </div>
  );
}

export default Home;
