import React from "react";

export const FootprintResult = () => {
  return (
    <div className="sm:flex-row flex flex-col gap-10 my-10">
      <div className="footprint   sm:w-1/2 bg-lgreen rounded-xl p-8 px-2 sm:px-8 text-white flex flex-col items-center">
        <h3 className="text-3xl font-bold w-full sm:text-left">
          CONGRATULATIONS!
        </h3>
        <p className="w-full text-lg mt-6 sm:text-left">
          Your annual footprint is well below the Global average. Keep up the
          great work and share your score!
        </p>
        <div className="mt-4 font-bold flex flex-col items-center gap-6 mt-20">
          <p className="sm:text-2xl text-xl">YOUR FOOTPRINT IS EQUAL TO</p>
          <p className="text-7xl">7.4</p>
          <p className="text-5xl">TONNES*</p>
          <div className=" rounded-xl p-4 w-full border-2 bd-lgreen relative w-9/10 p-3 text-base  my-3 cursor-pointer  bg-white lgreen">
            SHARE SCORE
          </div>
        </div>
      </div>
      <div className="averages font-bold text-left sm:w-1/2 flex flex-col  gap-8 ligreen">
        <div className="year bg-white sm:h-1/2 rounded-xl p-4 px-4 flex items-center gap-4">
          <img
            className="max-w-1/3"
            src="../../../assets/CarbonEmissions/globe.png"
            alt=""
          />
          <div className="">
            <h3 className="text-lg">WORLD AVERAGE FOOTPRINT FOR 2022</h3>
            <p className="text-5xl mt-6">10.5</p>
            <p className="text-3xl">TONNES</p>
          </div>
        </div>
        <div className="percent sm:h-1/2 bg-white rounded-xl p-4 px-4 flex items-center gap-4">
          <img
            className="max-w-1/3 max-h-30"
            src="../../../assets/CarbonEmissions/percent.png"
            alt=""
          />
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
