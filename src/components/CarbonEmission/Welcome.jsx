import React from "react";
import { map } from "../../../assets/CarbonEmissions";
import { CountryOptions } from "../FormElements/CountryOptions";

const Welcome = () => {
  return (
    <div>
      <div className="BG-lgreen ">
        <h1 className="text-2xl  sm:(text-5xl !leading-tight) pt-8 mx-4 font-medium capitalize lgreen">
          Welcome to the Carbon Footprint Calculator
        </h1>

        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          <div className="container flex items-center max-w-screen-xl m-auto py-10 md:py-20 md:px-15 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-between w-full m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Where do you Live?
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  <label
                    for="country"
                    class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  >
                    Country
                  </label>

                  <CountryOptions />
                </div>
                <div className="mt-4">
                  <label
                    for="state"
                    class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  >
                    State
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
                  src={map}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                  // onClick={() => climatiq()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
