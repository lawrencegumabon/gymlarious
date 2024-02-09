import React, { useState } from "react";
import Beginner from "../../assets/beginner.jpg";
import Advanced from "../../assets/advanced.jpg";
import Intermediate from "../../assets/intermediate.jpg";

const prices = [
  {
    id: 1,
    image: Beginner,
    name: "Beginner",
    price: "$39",
  },
  {
    id: 2,
    image: Advanced,
    name: "Advanced",
    price: "$49",
  },
  {
    id: 3,
    image: Intermediate,
    name: "Intermediate",
    price: "$59",
  },
];

const Pricing = () => {
  const [text, setText] = useState(prices[0].name);

  return (
    <div className="flex justify-center py-4">
      <div className="relative max-w-7xl">
        <p className="absolute text-8xl md:text-9xl font-bold text-[#CB060620] z-10 top-0 right-0 lg:-right-32">
          PRICING
        </p>
        <div className="flex flex-wrap justify-center gap-8 py-20 z-30 relative">
          {prices.map((price, index) => (
            <div key={price.id} className="relative">
              <img
                src={price.image}
                alt=""
                className="w-80 h-80 object-center object-cover rounded-md"
              />
              <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20
            "
              >
                <p className="bg-white py-2 px-4 font-bold duration-500 cursor-pointer">
                  <a
                    href="/pricing"
                    onMouseOver={() => setText(price.price)}
                    onMouseLeave={() => setText(price.name)}
                  >
                    {text === price.price ? text : price.name}
                  </a>
                </p>
              </div>
              <div className="absolute bottom-3 left-[52%] -translate-x-1/2 ">
                <p className=" py-2 px-4 text-transparent bg-transparent border-white border-2">
                  {text === price.price ? text : price.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
