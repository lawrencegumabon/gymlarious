import React from "react";
import GymHeader from "../components/Header";
import Beginner from "../assets/beginner.jpg";
import Advanced from "../assets/advanced.jpg";
import Intermediate from "../assets/intermediate.jpg";

const prices = [
  {
    id: 1,
    image: Beginner,
    name: "Beginner",
    price: "$ 39",
    packages: [
      "Basic workouts",
      "Fitness Assessment",
      "Group Laughter",
      "Nutrition Workshop",
    ],
  },
  {
    id: 2,
    image: Advanced,
    name: "Advanced",
    price: "$ 49",
    packages: [
      "Customized Programs",
      "Progress Tracking",
      "Laughter Sessions",
      "Nutrition Workshop",
    ],
  },
  {
    id: 3,
    image: Intermediate,
    name: "Intermediate",
    price: "$ 59",
    packages: [
      "Premium Access",
      "Personalized Training",
      "Nutrition Consultations",
      "Priority Booking",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <GymHeader headerName="PRICING" />
      <div className="max-w-7xl w-full flex justify-center ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 py-8">
          {prices.map((price) => (
            <div key={price.id} className="cursor-pointer shadow-md">
              <div className="relative">
                <img
                  src={price.image}
                  alt=""
                  className="w-full h-52 object-center object-cover  relative"
                />
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2  font-bold text-xl bg-white text-black py-2 px-4">
                  {price.name}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 py-8">
                <p className="font-bold text-5xl">{price.price}</p>
                <ul>
                  {price.packages.map((GymPackage, index) => (
                    <li key={index}>{GymPackage}</li>
                  ))}
                </ul>
                <div className="relative flex group">
                  <a
                    href="/contact"
                    className="bg-[#CB0606] text-white py-2 px-4 font-bold z-10"
                  >
                    Purchase now
                  </a>
                  <p className="border-2 border-[#CB0606] text-transparent py-1 px-3 font-bold absolute top-2 left-2 group-hover:top-0 group-hover:left-0 duration-300">
                    Purchase&nbsp;now
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
