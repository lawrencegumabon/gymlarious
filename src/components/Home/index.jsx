import React from "react";
import HomeImage from "../../assets/home.jpg";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundRepeat: "no-repeat",
    height: "100vh", // h-screen equivalent
    width: "100%",
    "background-size": "cover",
  };
  return (
    <div style={backgroundImageStyle}>
      <div className="flex flex-col  gap-4 absolute top-36  lg:left-48 px-5">
        <h1 className="text-white font-bold text-4xl md:text-5xl ">
          Get ready to laugh your <br />
          way to fitness!
        </h1>
        <h2 className="text-white font-bold max-w-96">
          Welcome to Gymlarious! Where every workout is a comedy and gains are
          guaranteed with a smile!
        </h2>
        <div className="flex relative group ">
          <a
            href=""
            className="bg-white rounded-full text-center font-bold text-xl py-2 w-full z-10 group-hover:scale-[101%] duration-300"
          >
            OUR CLASSES
          </a>
          <div className="bg-transparent text-transparent py-1 rounded-full font-bold text-xl border-2 border-white w-full absolute top-3 left-2 group-hover:top-0 group-hover:left-0 duration-300">
            OUR CLASSES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
