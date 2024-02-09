import React from "react";

const Story = () => {
  return (
    <div className="bg-[#202020] p-6 text-white flex justify-center">
      <div className="max-w-7xl ">
        <div>
          <p className="font-bold text-xl mb-2">OUR STORY</p>
          <p>
            Gymlarious is the culmination of a passion for laughter, fitness,
            and a commitment to redefine the gym experience. We believe in the
            power of a joy-filled workout, turning every session into a
            celebration. Beyond a gym, Gymlarious is an adventure where each
            step is a punchline, and every drop of sweat is a moment of joy. Our
            dedicated team, led by our Cheerful Trainers, ensures that
            Gymlarious is not just a place to work out but a community where
            fitness is fun, laughter is essential, and everyone is celebrated on
            their journey to a healthier, happier life. Join us in this unique
            fitness journey!
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold text-xl mb-2 text-right">OUR PEOPLE</p>
          <p>
            At Gymlarious, our strength lies in our dedicated team of fitness
            enthusiasts, laughter advocates, and wellness professionals. Our
            Cheerful Trainers go beyond guiding – they're motivators,
            entertainers, and companions on your fitness journey. Their
            infectious energy and commitment to blending laughter with exercise
            create an environment where every session is brimming with
            enthusiasm and joy. Behind the scenes, our team of fitness
            professionals and support staff ensures Gymlarious remains an
            inspiring place. Embracing the power of community, we see our
            members not as clients but as cherished parts of the Gymlarious
            family. Join us and become a part of a community where fitness is
            fun, laughter is essential, and every individual is celebrated on
            their journey to a healthier, happier life.
          </p>
        </div>
        <div className="mt-6 py-12 flex justify-center relative">
          <div className="relative group">
            <a
              href="/gymlarious/contact"
              className="text-white bg-[#CB0606] py-3 px-5 font-bold text-lg z-20 border-2 border-[#CB0606] relative"
            >
              GET IN TOUCH
            </a>
            <p className="text-transparent bg-transparent border-2 border-[#CB0606] py-1 px-5 font-bold text-lg absolute top-2 -right-2 z-10 group-hover:right-0 group-hover:-top-1 duration-300">
              GET&nbsp;IN&nbsp;TOUCH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
