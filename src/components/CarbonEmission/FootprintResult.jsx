import React from "react";
import { global, percent } from "../../../assets/CarbonEmissions";
import { useCookies } from "react-cookie";
import {
  ecofood,
  ecohome,
  ecosec,
  ecotravel,
} from "../../../assets/CarbonEmissions";

export const FootprintResult = () => {
  const [cookies, setCookie] = useCookies();
  console.log(cookies["How much energy do you use on average?"]);

  console.log(cookies.totalfoot);
  return (
    <div className="py-6">
      <div className="averages font-bold text-left  flex   gap-8 text-white">
        <div className="dash-card shadow-lg hover:bg-lightgreen cursor-pointer rounded-xl">
          <div className="sm:p-6 sm:pb-4 p-4 mb-4">
            <h3 className="font-bold text-xl text-gray-900">
              WORLD AVERAGE FOOTPRINT
            </h3>

            <div className="flex items-center lgreen">
              <p className=" sm:text-4xl font-bold pr-2">7.2</p>
              <p>Tonnes</p>
            </div>
          </div>

          <div className="bg-lgreen text-white rounded-lg p-2 text-sm sm:text-base text-right">
            Total 5000 Point
          </div>
        </div>
        <div className="dash-card shadow-lg hover:bg-lightgreen cursor-pointer rounded-xl">
          <div className="sm:p-6 sm:pb-4 p-4 mb-4">
            <h3 className="font-bold text-xl text-gray-900">
              YOUR FOOTPRINT IS
            </h3>

            <div className="flex items-center lgreen">
              <p className=" sm:text-4xl font-bold pr-2">
                {(parseInt(cookies.totalfoot) / 70).toFixed(1)}
              </p>
              <p>% OF THE GLOBAL AVERAGE</p>
            </div>
          </div>

          <div className="bg-lgreen text-white rounded-lg p-2 text-sm sm:text-base text-right">
            Total 5000 Point
          </div>
        </div>
      </div>
      <div className="my-10 bg-lgreen sm:p-6 p-4 px-2 rounded-xl text-white ">
        <div className=" text-left p-4 bg-white ligreen w-max px-6 font-bold mb-10 rounded-md">
          LET'S BREAK IT DOWN
        </div>
        <div className="">
          <p className="font-bold text-lg text-right">
            YOUR FOOTPRINT IS EQUAL TO {parseInt(cookies.totalfoot) / 1000}T
          </p>
          <div className="flex w-full h-4px bg-white my-2 rounded">
            <div className="home h-4px bg-blue-200"></div>
            <div className="travel h-4px">
              <div className="food h-4px"></div>
              <div className="sec h-4px"></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap gap-4 justify-center max-w-1000px mx-auto my-10">
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-blue-200">
              <img className="sm:w-2/4 w-3/4" src={ecohome} alt="" />
              <p className="text-4xl font-bold ligreen">
                {(
                  (parseInt(cookies.homefoot) * 100) /
                  parseInt(cookies.totalfoot)
                ).toFixed(1)}
                %
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">HOME</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-red-200">
              <img className="sm:w-2/4 w-3/4" src={ecotravel} alt="" />
              <p className="text-4xl font-bold ligreen">
                {(
                  (parseInt(cookies.travelfoot) * 100) /
                  parseInt(cookies.totalfoot)
                ).toFixed(1)}
                %
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">TRAVEL</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-amber-400">
              <img className="sm:w-2/4 w-3/4" src={ecofood} alt="" />
              <p className="text-4xl font-bold ligreen">
                {(
                  (parseInt(cookies.foodfoot) * 100) /
                  parseInt(cookies.totalfoot)
                ).toFixed(1)}
                %
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">FOOD</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-sky-300">
              <img className="sm:w-2/4 w-3/4" src={ecosec} alt="" />
              <p className="text-4xl font-bold ligreen">
                {(
                  (parseInt(cookies.secfoot) * 100) /
                  parseInt(cookies.totalfoot)
                ).toFixed(1)}
                %
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">SECONDARY</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
