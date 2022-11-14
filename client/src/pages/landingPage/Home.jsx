import React from "react";
import Footer from "../../components/ladingPage/footer";
import Header from "../../components/ladingPage/Header";
import SecondPart from "../../components/ladingPage/SecondPart";
import ThirdPart from "../../components/ladingPage/ThirdPart";
import Navbar from "../../components/Navbar/Navbar";
function Home() {
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
