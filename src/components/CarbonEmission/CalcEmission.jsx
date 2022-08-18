import React, { useState } from "react";
import { calcEmission } from "../../../assets/CarbonEmissions";
import { homeElec, homeGas, homeWood } from "./API";

export const CalcEmission = ({ title, text }) => {
  let homeElecVal = 0;
  let homeGasVal = 0;
  let homeWoodVal = 0;
  const [calcHomeElec, setcalcHomeElec] = useState(0.0);
  const [calcHomeGas, setcalcHomeGas] = useState(0.0);
  const [calcHomeWood, setcalcHomeWood] = useState(0.0);
  return (
    <div className="mt-8">
      <h2 className="text-2xl lgreen font-bold md:text-4xl">{title}</h2>
      <div className="container flex items-center max-w-screen-md m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22  w-screen">
        <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
          <div className="text-center mx-3">
            <div className="mt-6 text-gray-600 leading-loose">{text}</div>

            <div className="flex flex-wrap gap-4 mb-10 text-center mx-auto">
              <div class="bg-gray-50 border border-gray-300 lgreen text-2xl bold text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {(calcHomeGas + calcHomeElec + calcHomeWood).toFixed(2)}
                {/* 0.00 Kg */}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-center mx-auto ">
              <div
                className="block  p-4  text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring mx-auto"
                onClick={() => {
                  homeElec(homeElecVal, setcalcHomeElec);
                  homeGas(homeGasVal, setcalcHomeGas);
                  homeWood(homeWoodVal, setcalcHomeWood);
                }}
              >
                Calculate Emissions
              </div>
            </div>
          </div>
          <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
            <img
              src={calcEmission}
              alt="Location pins illustration"
              loading="lazy"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
