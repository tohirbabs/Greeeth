import React from "react";

const CourseCard = ({ myCourses }) => {
  return (
    <div>
      {myCourses.map((course) => (
        <div className="flex gap-8 mb-8" key={course.id}>
          <div>
            <img src={course.img} alt={course.tutor} />
          </div>
          <div className="py-4">
            <h2 className="text-2xl text-500 mb-4">{course.title}</h2>
            <h6 className="textGreen text-xl mb-6">{course.tutor}</h6>

            <h3 className="text-xl mb-4">
              Status:{" "}
              <span
                className={
                  course.status === "Completed" ? "textGreen" : "textProgress"
                }
              >
                {course.status}
              </span>
            </h3>
            <p className="text-2xl">
              Points: <span className="textGreen">{course.points}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
