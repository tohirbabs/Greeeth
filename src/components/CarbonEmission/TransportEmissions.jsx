import React from "react";
import {
  bike,
  bus,
  flight,
  fuel,
  ship,
  taxi,
  train,
} from "../../../assets/CarbonEmissions";
import { EmissionEntry } from "../SectionElements.jsx/EmissionEntry";
import { CalcEmission } from "./CalcEmission";

export const TransportEmissions = () => {
  let homeElecVal = 0;
  return (
    <div className="BG-lgreen ">
      <h1 className="text-2xl  sm:(text-5xl !leading-tight) pt-8 mx-4 font-medium capitalize lgreen">
        Your Individual Footprint due to Transportation
      </h1>

      <p className="mt-6 sm:leading-relaxed px-2 sm:text-xl px-4 sm:px-10">
        This is calculated by taking into account, all forms of transportation.
        Including Flight, Bus and Rails, Motorbike, Fuel Expenses and Freight.
      </p>
      <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
        <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 bg-white w-screen">
          <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
            <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
              <h2 className="text-2xl lgreen font-bold md:text-4xl">Flight</h2>
              <div className="mt-6 text-gray-600 leading-loose">
                <div className="flex gap-4">
                  <div className="">
                    <label
                      for="state"
                      class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      for="state"
                      class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                      To
                    </label>
                    <input
                      type="text"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-5 text-center w-1/2">
                <label
                  for="state"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Class
                </label>
                <input
                  type="text"
                  id="state"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
              <img
                src={flight}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <EmissionEntry
        rightimg={false}
        title="MotorBike"
        text=""
        img={bike}
        val={homeElecVal}
      />
      <EmissionEntry
        rightimg={true}
        title="Bus"
        text=""
        img={bus}
        val={homeElecVal}
      />

      <EmissionEntry
        rightimg={false}
        title="Taxi"
        text=""
        img={taxi}
        val={homeElecVal}
      />
      <EmissionEntry
        rightimg={true}
        title="Rail"
        text=""
        img={train}
        val={homeElecVal}
      />
      <EmissionEntry
        rightimg={false}
        title="Sea"
        text=""
        img={ship}
        val={homeElecVal}
      />
      <EmissionEntry
        rightimg={true}
        title="Fuel"
        text=""
        img={fuel}
        val={homeElecVal}
      />
      <CalcEmission />
      {/* {flightsArray.map((comp, i) => (
        <CompaniesList
          Pix={comp.Illustration}
          TextList={comp.TextList}
          Index={i}
        />
      ))}
      {freightArray.map((comp, i) => (
        <FreightList
          Pix={comp.Illustration}
          TextList={comp.TextList}
          Index={i}
        />
      ))} */}
    </div>
  );
};
