import { useState } from "react";
import video from "./assets/videoCard.svg";
import play from "./assets/play.svg";

const courses = [
  {
    id: 1,
    chapters: ["chp1", "chp2", "chp3", "chp4", "chp5", "chp6", "chp7"],
    topics: [
      "Introduction to Sustainability",
      "Introduction to Sustainability",
      "Introduction to Sustainability",
      "Introduction to Sustainability",
      "Introduction to Sustainability",
      "Introduction to Sustainability",
      "Introduction to Sustainability",
    ],
    duration: ["5:20", "5:20", "5:20", "5:20", "5:20", "5:20", "5:20"],
  },
];

const Learning = () => {
  const [course, setCourse] = useState(courses[0]);
  const [isPlaying, setISPlaying] = useState(0);
  return (
    <>
      <section className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1>360 Degree Mentorship</h1>
            <p>Introduction to Degree Mentorship</p>
          </div>
          <div>
            <p>10 Classes</p>
            <p>Chapter 1</p>
          </div>
        </div>
        <div>
          <img src={video} alt="" />
        </div>
      </section>
      <section className="p-6ss">
        <div className="mb-8">
          <p>Lessons</p>
          <div className="relative bg-white">
            <div className="h-1 bg-gray-200 absolute w-full"></div>
            <div className="bgn w-28 z-10 h-1 absolute"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/8">
            <p>Chapters</p>
            {course.chapters.map((chap, id) => (
              <p key={id}>{chap}</p>
            ))}
          </div>
          <div className="md:w-1/2">
            <p>Topics</p>
            {course.topics.map((topic, id) => (
              <p key={id}>{topic}</p>
            ))}
          </div>
          <div className="md:w-1/3">
            <p>Duration</p>
            {course.duration.map((dur, id) => (
              <p key={id}>
                {isPlaying === id ? <img src={play} alt="" /> : dur}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Learning;
