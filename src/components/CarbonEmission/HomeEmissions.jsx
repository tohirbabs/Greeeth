import React, { useState } from "react";
import { elec, family, gas, log } from "../../../assets/CarbonEmissions";
import { calc } from "../../../assets/GetInvolved";
import { POST } from "../../../utils/request";
import { EmissionEntry } from "../SectionElements.jsx/EmissionEntry";
import { homeElec, homeGas, homeWood } from "./API";
import { CalcEmission } from "./CalcEmission";

export const HomeEmissions = () => {
  let homeElecVal = 0;
  let homeGasVal = 0;
  let homeWoodVal = 0;
  const CalcHomeEmissions = () => {
    const [calcHomeEmission, setcalcHomeEmission] = useState(0.0);
    const [calcHomeElec, setcalcHomeElec] = useState(0.0);
    const [calcHomeGas, setcalcHomeGas] = useState(0.0);
    const [calcHomeWood, setcalcHomeWood] = useState(0.0);

    // setcalcHomeEmission(calcHomeElec);
    return (
      <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 bg-white  w-screen">
        <div className="space-y-6 md:space-y-0  m-auto ">
          <div className="text-center mx-3 mb-6">
            <h2 className="text-2xl lgreen font-bold md:text-4xl">
              Total Emissions due to Home Energy
            </h2>
            <div className="gap-4 mt-10 mx-auto text-center w-1/2">
              <div
                className="block  py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                onClick={() => {
                  homeElec(homeElecVal, setcalcHomeElec);
                  homeGas(homeGasVal, setcalcHomeGas);
                  homeWood(homeWoodVal, setcalcHomeWood);
                }}
              >
                Calculate Emissions
              </div>
            </div>
            <div className="w-8/10 mx-auto">
              <img
                src={calc}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
              <div class="bg-gray-50 border border-gray-300 lgreen text-2xl bold text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {(calcHomeGas + calcHomeElec + calcHomeWood).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="BG-lgreen ">
      <h1 className="text-2xl  sm:(text-5xl !leading-tight) pt-8 mx-4 font-medium capitalize lgreen">
        Your Individual Footprint at Home
      </h1>

      <p className="mt-6 sm:leading-relaxed px-2 sm:text-xl">
        This is calculated by dividing the total amount of energy used in the
        house by the number of people.
      </p>
      <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG-lgreen">
        <EmissionEntry
          rightimg={false}
          title="How many People are in your Household?"
          text="NOTE: If youre calculating for your full household, and the data you input is estimated for everyone keep it at 1"
          img={family}
          val={homeElecVal}
        />
        <EmissionEntry
          rightimg={true}
          title="Electricity"
          text="How much household electricity do you use in kWh?"
          img={elec}
          val={homeElecVal}
        />
        <EmissionEntry
          rightimg={false}
          title="Natural Gas"
          text="Do you use natural Gas? if yes, enter the amount in kWh. if not enter 0."
          img={gas}
          val={homeGasVal}
        />
        <EmissionEntry
          rightimg={true}
          title="Wood"
          text="Do you use wood for heating and other domestic uses ? if yes, enter the amount in kWh. if not enter 0."
          img={log}
          val={homeWoodVal}
        />

        <CalcEmission title=" Total Emissions due to Home Energy" text="" />
      </div>
    </div>
  );
};
