import React from "react";
import GymHeader from "../components/Header";

const ContactPage = () => {
  return (
    <div>
      <div className="pt-20 flex flex-col items-center ">
        <GymHeader headerName="CONTACT" />
        <div className="max-w-7xl w-full grid md:grid-cols-2 items-center  p-4 gap-8 ">
          <div>
            <p className="font-bold text-4xl mb-4">
              Your laughter-infused fitness journey awaits!
            </p>
            <p className="">
              Get in touch with us at Gymlarious! Whether you have questions
              about our laughter-filled fitness programs, want to schedule a
              consultation with our Cheerful Trainers, or simply need
              assistance, we're here for you. Reach out via the form, drop by
              our gym during business hours, or connect with us on social media.
              Your journey to joyful fitness starts with a message. We can't
              wait to hear from you!
            </p>
          </div>
          <div className="flex relative">
            <form
              action="/"
              className="bg-[#202020] flex flex-col items-center w-full p-8 z-10"
            >
              <p className="pb-4 text-white font-bold text-2xl text-left w-full">
                Connect with Gymlarious
              </p>
              <div className="bg-[#F6F6F6] w-full p-4 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name*"
                  className="p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="p-2 outline-none"
                />
                <select name="" id="" className="p-2 outline-none">
                  <option value="">Beginner</option>
                  <option value="">Advanced</option>
                  <option value="">Intermediate</option>
                </select>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Comment*"
                  className="p-2 outline-none"
                ></textarea>
                <div className="flex justify-center">
                  <div className="flex py-2 relative group">
                    <input
                      type="submit"
                      value="Submit"
                      className="text-white bg-[#CB0606] py-2 px-8 font-bold z-10 cursor-pointer"
                    />
                    <p className="text-transparent border-2 border-[#CB0606] bg-transparent py-1 px-7 font-bold absolute top-5 right-3 group-hover:top-2 group-hover:right-0 duration-300">
                      Submit
                    </p>
                  </div>
                </div>
              </div>
            </form>
            <div
              action="/gymlarious"
              className="border-[#202020] border-2 flex flex-col items-center w-full p-8 absolute -left-3 -bottom-3 z-0"
            >
              <p className="pb-4 text-white font-bold text-2xl text-left w-full">
                Connect with Gymlarious
              </p>
              <div className="bg-[#F6F6F6] w-full p-4 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name*"
                  className="p-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="p-2 outline-none"
                />
                <select name="" id="" className="p-2 outline-none">
                  <option value="">Beginner</option>
                  <option value="">Advanced</option>
                  <option value="">Intermediate</option>
                </select>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Comment*"
                  className="p-2 outline-none"
                ></textarea>
                <div className="flex justify-center">
                  <div className="flex py-2 relative group">
                    <input
                      type="submit"
                      value="Submit"
                      className="text-white bg-[#CB0606] py-2 px-8 font-bold z-10 cursor-pointer"
                    />
                    <p className="text-transparent border-2 border-[#CB0606] bg-transparent py-1 px-7 font-bold absolute top-5 right-3 group-hover:top-2 group-hover:right-0 duration-300">
                      Submit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
