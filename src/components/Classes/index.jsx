import React from "react";
import Workout from "../../assets/workout.jpg";
import Boxing from "../../assets/boxing.jpg";
import Yoga from "../../assets/yoga.jpg";

const Classes = () => {
  return (
    <div className="bg-[#202020] px-4">
      <div className="text-center text-white py-6">
        <p className="font-bold italic text-2xl">GYM CLASSES</p>
        <p>Be part of our fun community</p>
      </div>
      <div className="grid md:grid-cols-3">
        <img src={Workout} alt="" />
      </div>
    </div>
  );
};

export default Classes;
