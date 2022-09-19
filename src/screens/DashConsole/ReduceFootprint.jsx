import React from "react";
import { useCookies } from "react-cookie";

import {
  ecofood,
  ecohome,
  ecosec,
  ecotravel,
} from "../../../assets/CarbonEmissions";
import { useEffect } from "react";
import { Walleticon } from "../../components/Dashboard/Walleticon";
import { HomeIcon } from "../../components/Dashboard/HomeIcon";
import { useState } from "react";
import { FoodIcon } from "../../components/Dashboard/foodIcon";
import { RenewableIcon } from "../../components/Dashboard/RenewableIcon";
import { TravelIcon } from "../../components/Dashboard/TravelIcon";
import { CancelIcon } from "../../components/Dashboard/CancelIcon";
import { Treeicon } from "../../components/Dashboard/Tree";
import { WindIcon } from "../../components/Dashboard/WindIcon";
import { Footprinticon } from "../../components/Dashboard/Footprinticon";

export const ReduceFootprint = ({ setsection }) => {
  const [cookies, setCookie] = useCookies();

  const [currentPrint, setCurrentPrint] = useState(0);

  return (
    <div className="sm:mt-8 my-2 sm:py-6  py-4 relative">
      <div
        onClick={() => {
          setsection("DashOverview");
        }}
        className="absolute right-6 top-6 p-2 rounded-full bg-lgreen cursor-pointer"
      >
        <CancelIcon clr="white" />
      </div>
      <div className="left flex gap-4 items-center mr-5 ">
        <div
          onClick={() => {
            setsection("Footprint");
          }}
          className="p-2 cursor-pointer bg-white border   rounded-full flex justify-between items-center"
        >
          <div className="bg-lgreen p-2 rounded-full">
            <Footprinticon clr="white" />
          </div>
          <div className="flex flex-col text-left ml-2">
            <div className="text-sm font-bold ligreen">Footprint Data</div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="dash-card mx-auto shadow-lg hover:bg-lightgreen cursor-pointer rounded-2xl pb-4 max-w-750px">
          <div className="bg-lgreen flex justify-between pl-4 text-lg items-center  text-white rounded-2xl p-2  font-bold  text-right">
            How to Reduce your carbon footprint
          </div>

          <div className=" flex sm:flex-wrap  flex-col sm:flex-row gap-4 justify-center  mx-auto my-6 mx-2">
            <div className="sm:w-350px bd-lgreen border-2px p-2 rounded-3xl">
              <div className="p-2 sm:px-4 ligreen bg-lightgreen  rounded-full ">
                <div className=" flex gap-4 items-center">
                  <div className="bg-lgreen p-2 rounded-full my-auto">
                    <HomeIcon clr="white" />
                  </div>
                  <div className="text-md font-bold">Home Emission</div>
                </div>
              </div>
              <ul className="m-2 mt-4">
                <li className="text-left">
                  Do an energy audit of your home. This will show how you use or
                  waste energy and help identify ways to be more energy
                  efficient.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Change incandescent light bulbs (which waste 90 percent of
                  their energy as heat) to light emitting diodes (LEDs).
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Switch lights off when you leave the room and unplug your
                  electronic devices when they are not in use.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Turn your water heater down to 120˚F. This can save about 550
                  pounds of CO2 a year.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Installing a low-flow showerhead to reduce hot water use can
                  save 350 pounds of CO2. Taking shorter showers helps, too.
                </li>
              </ul>
            </div>
            <div className="sm:w-350px bd-lgreen border-2px p-2 rounded-3xl">
              <div className="p-2 sm:px-4 ligreen bg-lightgreen  rounded-full ">
                <div className=" flex gap-4 items-center">
                  <div className="bg-lgreen p-2 rounded-full my-auto">
                    <TravelIcon clr="white" />
                  </div>
                  <div className="text-md font-bold">Travel Emission</div>
                </div>
              </div>
              <ul className="m-2 mt-4">
                <li className="text-left">
                  Drive less. Walk, take public transportation, carpool,
                  rideshare or bike to your destination when possible. This not
                  only reduces CO2 emissions, it also lessens traffic congestion
                  and the idling of engines that accompanies it.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Air conditioning and intensive city driving can make emissions
                  creep up. Cut down on these as often as possible.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  When doing errands, try to combine them to reduce your
                  driving.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Use cruise control on long drives — in most cases, this can
                  help to save gas.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Use traffic apps to help avoid getting stuck in traffic jams.
                </li>
              </ul>
            </div>{" "}
            <div className="sm:w-350px bd-lgreen border-2px p-2 rounded-3xl">
              <div className="p-2 sm:px-4 ligreen bg-lightgreen  rounded-full ">
                <div className=" flex gap-4 items-center">
                  <div className="bg-lgreen p-2 rounded-full my-auto">
                    <FoodIcon clr="white" />
                  </div>
                  <div className="text-md font-bold">Food Emission</div>
                </div>
              </div>
              <ul className="m-2 mt-4">
                <li className="text-left">
                  Eat low on the food chain. This means eating mostly fruits,
                  veggies, grains, and beans.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Choose organic and local foods that are in season.
                  Transporting food from far away, whether by truck, ship, rail
                  or plane, uses fossil fuels for fuel and for cooling to keep
                  foods in transit from spoiling.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Reduce your food waste by planning meals ahead of time,
                  freezing the excess and reusing leftovers.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Buy foodstuffs in bulk when possible using your own reusable
                  container.
                </li>
              </ul>
            </div>{" "}
            <div className="sm:w-350px bd-lgreen border-2px p-2 rounded-3xl">
              <div className="p-2 sm:px-4 ligreen bg-lightgreen  rounded-full ">
                <div className=" flex gap-4 items-center">
                  <div className="bg-lgreen p-2 rounded-full my-auto">
                    <RenewableIcon clr="white" />
                  </div>
                  <div className="text-md font-bold">Secondary Emission</div>
                </div>
              </div>
              <ul className="m-2 mt-4">
                <li className="text-left">
                  If you're in the market for a new computer, opt for a laptop
                  instead of a desktop. Laptops require less energy to charge
                  and operate than desktops.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Don’t put non-recyclables in the recycling bin. Garden hoses,
                  sewing needles, propane tanks or cylinders, aerosol cans that
                  aren’t empty, hazardous waste and syringes, broken glass and
                  broken light bulbs should all be avoided.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Don’t buy fast fashion. Trendy, cheap items that go out of
                  style quickly get dumped in landfills where they produce
                  methane as they decompose.
                </li>
                <div className="bg-lgreen h-1 my-4 w-6/10 mx-auto rounded-full"></div>
                <li className="text-left">
                  Shop at plastic-free stores and make a concerted effort to
                  reduce your reliance on plastic.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
