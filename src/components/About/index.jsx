import React from "react";
import AboutImage from "../../assets/about.png";
import GymEquip from "../../assets/gym-equipment.png";
import GymMachine from "../../assets/tool.png";
import Trainer from "../../assets/weight-lifting.png";

const About = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl w-full relative">
        <p className="text-[#CB060620] font-bold text-9xl absolute top-1/2 xl:-translate-x-1/2 -translate-y-1/2">
          ABOUT US
        </p>
        <div className="z-10 w-full flex justify-center">
          <img src={AboutImage} alt="" className="w-96" />
        </div>
        <div className="z-10">
          <p className="md:text-lg">
            At Gymlarious, we fuse fitness and fun, turning workouts into
            joy-packed experiences. Break free from routine and embrace a unique
            approach where every rep is a punchline, and sweat comes with a
            smile. Discover the lighter side of fitness with us, because getting
            fit should be as fun as it is rewarding!
          </p>
          <div className="flex justify-center py-4 items-center gap-20 text-center">
            <div className="flex flex-col justify-center items-center">
              <img src={Trainer} alt="" className="w-16" />
              <p>
                Cheerful <br /> Trainers
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={GymEquip} alt="" className="w-16" />
              <p>
                Enjoyable <br /> Equipments
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={GymMachine} alt="" className="w-16" />
              <p>
                Whimsical <br /> Machines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
