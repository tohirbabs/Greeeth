import { useState } from "react";
import CourseCard from "./CourseCard";
import windmill from "./assets/windmill.svg";
import socket from "./assets/switch.svg";
import arrow from "./assets/arrow.svg";

const myCourses = [
  {
    id: 1,
    title: "Sustainability",
    tutor: "Greeeth",
    status: "Completed",
    points: "100",
    img: windmill,
  },
  {
    id: 2,
    title: "Carbon Offset",
    tutor: "Mary Solomon",
    status: "In progress",
    points: "-",
    img: socket,
  },
];

const MyCourses = () => {
  const [courses, setCourses] = useState(myCourses);
  return (
    <div>
      {courses.length < 1 ? (
        <div className="p-4">
          <h2 className="text-2xl mb-12 md:text-3xl">Points Earned: 0</h2>
          <h2 className="text-xl mb-2 md:text-3xl">
            You haven't earned any points yet
          </h2>
          <p className="mb-2">You earn points when you complete a course</p>
          <a href="#" className="textGreen underline">
            Click here to buy a course
          </a>
        </div>
      ) : (
        <div className="p-4">
          <h2 className="text-2xl mb-8 md:text-3xl flex items-center gap-2">
            <span>
              <img src={arrow} alt="" />
            </span>{" "}
            Points Earned: 300
          </h2>
          <CourseCard myCourses={myCourses} flex />
        </div>
      )}
    </div>
  );
};

export default MyCourses;
