import React from "react";
import { global, percent } from "../../../assets/CarbonEmissions";

export const FootprintResult = () => {
  return (
    <div className="sm:flex-row flex flex-col gap-10 my-10 sm:pb-20">
      <div className="footprint   sm:w-1/2 bg-white rounded-xl p-8 px-2 sm:px-8 ligreen flex flex-col items-center sm:pb-20">
        <h3 className="text-3xl font-bold w-full sm:text-left">
          CONGRATULATIONS!
        </h3>
        <p className="w-full text-lg mt-6 sm:text-left text-gray">
          Your annual footprint is well below the Global average. Keep up the
          great work and share your score!
        </p>
        <div className="mt-4 font-bold flex flex-col items-center gap-6 mt-20">
          <p className="sm:text-2xl text-xl">YOUR FOOTPRINT IS EQUAL TO</p>
          <p className="text-7xl">7.4</p>
          <p className="text-5xl">TONNES*</p>
          <div className=" rounded-xl p-4 w-full relative w-9/10 p-3 text-base  my-3 cursor-pointer  bg-lgreen text-white">
            SHARE SCORE
          </div>
        </div>
      </div>
      <div className="averages font-bold text-left sm:w-1/2 flex flex-col  gap-8 text-white">
        <div className="year bg-lgreen sm:h-1/2 rounded-xl p-4 px-4 flex items-center gap-4">
          <img className="max-w-1/3" src={global} alt="" />
          <div className="">
            <h3 className="text-lg">WORLD AVERAGE FOOTPRINT FOR 2022</h3>
            <p className="text-5xl mt-6">10.5</p>
            <p className="text-3xl">TONNES</p>
          </div>
        </div>
        <div className="percent sm:h-1/2 bg-lgreen rounded-xl p-4 px-4 flex items-center gap-4">
          <img className="max-w-1/3 max-h-30" src={percent} alt="" />
          <div className="">
            <h3 className="sm:text-xl text-lg">YOUR FOOTPRINT IS</h3>
            <p className="text-5xl mt-6">70%</p>
            <p className="sm:text-xl text-lg">OF THE GLOBAL AVERAGE FOR 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
