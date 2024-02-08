import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Classes from "../components/Classes";
import Pricing from "../components/Pricing";
import Advertise from "../components/Advertise";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Classes />
      <Pricing />
      <Advertise />
    </div>
  );
};

export default HomePage;
