import React from "react";
import GymHeader from "../components/Header";

const schedules = [
  {
    id: 1,
    day: "Tuesday to Saturday",
    time: "(7:00 AM to 10:00 PM)",
    scheds: [
      "7:00 AM to 9:30 AM",
      "9:30 AM to 11:30 AM",
      "12:00 PM to 2:00 PM",
      "3:00 PM to 5:00 PM",
      "5:30 PM to 7:30 PM",
      "8:00 PM to 10:00 PM",
    ],
    exercises: [
      "Morning Laughter Lift",
      "Whimsical Workouts",
      "Lunchtime Energizer",
      "Afternoon Chuckle Challenge",
      "Evening Grin & Gain",
      " Night Owl Fitness Fiesta",
    ],
  },
  {
    id: 2,
    day: "Sunday",
    time: "(7:00 AM to 8:00 PM)",
    scheds: [
      "7:00 AM to 9:30 AM",
      "9:30 AM to 11:30 AM",
      "12:00 PM to 2:00 PM",
      "3:00 PM to 5:00 PM",
      "5:30 PM to 7:00 PM",
      "7:00 PM to 80:00 PM",
    ],
    exercises: [
      "Sunrise Stretch & Smile",
      "Family Fun Fitness",
      "Laughter Yoga Lounge",
      "Serene Sunday Sweat",
      "Sunset Strength & Laughter",
      "Evening Blissful Breath",
    ],
  },
  {
    id: 3,
    day: "Monday",
    time: "",
    scheds: ["Closed"],
    exercises: ["Closed"],
  },
];

const SchedulePage = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <GymHeader headerName="SCHEDULE" />
      <div className="max-w-7xl w-full flex flex-col justify-center p-4 gap-2">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="shadow-md p-4 rounded-md">
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg ">{schedule.day}</p>
              <p>{schedule.time}</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                {schedule.scheds.map((sched, index) => (
                  <p key={index} className="">
                    {sched}
                  </p>
                ))}
              </div>
              <div>
                {schedule.exercises.map((exercise, index) => (
                  <p key={index} className="text-right">
                    {exercise}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center pt-4">
          <div className="relative flex group">
            <a
              href="/gymlarious/contact"
              className="bg-[#CB0606] text-white py-2 px-4 font-bold z-10"
            >
              START NOW
            </a>
            <p className="border-2 border-[#CB0606] text-transparent py-1 px-3 font-bold absolute top-2 left-2 group-hover:top-0 group-hover:left-0 duration-300">
              START&nbsp;NOW
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
