import React from "react";
import GymHeader from "../components/Header";
import Workout from "../assets/workout.jpg";
import Boxing from "../assets/boxing.jpg";
import Yoga from "../assets/yoga.jpg";
import Calisthenics from "../assets/calisthenics.jpg";
import Taekwondo from "../assets/taekwondo.jpg";
import Zumba from "../assets/zumba.jpg";

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
  {
    id: 4,
    image: Calisthenics,
    name: "Calisthenics",
  },
  {
    id: 5,
    image: Taekwondo,
    name: "Taekwondo",
  },
  {
    id: 6,
    image: Zumba,
    name: "Zumba",
  },
];

const ClassesPage = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <GymHeader headerName="CLASSES" />
      <div className="max-w-7xl w-full flex justify-center ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 py-8">
          {classes.map((gymclass) => (
            <div
              key={gymclass.id}
              className="relative hover:scale-[101%] duration-300 cursor-pointer"
            >
              <img
                src={gymclass.image}
                alt=""
                className="w-72 h-72 object-center object-cover rounded-tr-[10%] rounded-bl-[10%] "
              />
              <p className="absolute bottom-4 left-4 text-white font-bold text-3xl ">
                {gymclass.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
