import React from "react";
import About from "../components/About";
import Story from "../components/About/story";
import GymHeader from "../components/Header";

const AboutPage = () => {
  return (
    <div className="pt-20">
      <GymHeader headerName="ABOUT&nbsp;US" />
      <About />
      <Story />
    </div>
  );
};

export default AboutPage;
