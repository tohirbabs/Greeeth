import React from "react";
import SolidStar from "./SolidStar";
import student from "./assets/student.svg";
import time from "./assets/time.svg";
import video from "./assets/video.svg";

const ImageCard = ({ image, title }) => {
  return (
    <div className="dashboard__card flex flex-col mb-8">
      <img src={image} alt="" className="mb-4" />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 mb-2">
            <SolidStar />
            <SolidStar />
            <SolidStar />
            <SolidStar />
            <SolidStar />
          </div>
          <p>
            <span>5.0</span>(5 Ratings)
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between p-2 mt-2">
        <div className="flex items-center gap-3">
          <span>
            <img src={student} alt="" />
          </span>
          <span>300</span>
        </div>
        <div className="flex items-center gap-3">
          <span>
            <img src={time} alt="" />
          </span>
          <span>3hr 30min</span>
        </div>
        <div className="flex items-center gap-3">
          <span>
            <img src={video} alt="" />
          </span>
          <span>Video Lecture</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
