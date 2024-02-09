import React from "react";
import { Link } from "react-scroll";
import Workout from "../../assets/workout.jpg";
import Boxing from "../../assets/boxing.jpg";
import Yoga from "../../assets/yoga.jpg";

const classes = [
  {
    id: 1,
    image: Workout,
    name: "Workout",
  },
  {
    id: 2,
    image: Boxing,
    name: "Boxing",
  },
  {
    id: 3,
    image: Yoga,
    name: "Yoga",
  },
];

const Classes = () => {
  return (
    <div className="bg-[#202020] px-4 py-12 ">
      <div className="text-center text-white pb-6">
        <a href="/classes" className="font-bold italic text-2xl underline">
          GYM CLASSES
        </a>
        <p>Be part of our fun community</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {classes.map((gymclass) => (
          <div key={gymclass.id} className="relative">
            <img
              src={gymclass.image}
              alt=""
              className="w-80 h-80 object-center object-cover rounded-tr-[10%] rounded-bl-[10%]"
            />
            <p className="absolute bottom-4 left-4 text-white font-bold text-3xl ">
              {gymclass.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
