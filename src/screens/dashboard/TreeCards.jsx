import React from "react";
import treepic from "../../components/Dashboard/treepic.png";

export const TreeCards = () => {
  const TreeCard = () => {
    return (
      <div className="">
        <div className="flex my-10 mx-2 gap-2 bg-white rounded-xl p-4 sm:w-max ">
          <img src={treepic} alt="" className="max-w-30vw sm:max-h-30vw " />
          <div className="p-2 flex flex-col text-left font-bold ligreen sm:text-base justify-between gap-2 text-sm mr-8">
            <p>Tree No: #004/657</p>
            <p>Tree Type: </p>
            <p>Location: </p>
            <p>Age</p>
            <p>Date Planted: </p>
            <p>CO2 Sequestrated: </p>
            <p>Weather Forcast: </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap justify-between">
      <TreeCard />
      <TreeCard />
    </div>
  );
};
