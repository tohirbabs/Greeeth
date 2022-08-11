import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import down from "../../components/Dashboard/down.png";
import maptree from "../../components/Dashboard/maptree.png";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Slider from "rc-slider";
import BarChart from "../../components/BarChart";
import { DonutChart } from "../../components/DonutChart";
import { Tabler } from "../../components/Table";
import { Tables } from "../../components/Tables";
import { PieChart } from "../../components/PieChart";
// import DonutChart from "../../components/DonutChart";

// import Map from "../../components/Dashboard/Map";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CarbonOffset = () => {
  return (
    <DashboardLayout>
      <div className="sm:my-12 my-6">
        <div className="flex flex-col md:flex-row sm:gap-10 gap-5 my-10">
          <div className="sm:w-6/10 ">
            <div className="">
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                  CarbonOffset
                </h3>
                <div className="dash-card p-2 sm:p-6 sm:pt-8 sm:pr-15 sm:pb-20 rounded shadow flex-1 px-2">
                  <p className="font-bold sm:text-xl">Balance</p>
                  <div className="flex items-center lgreen">
                    <p className=" sm:text-4xl text-base font-bold pr-2">
                      300,000
                    </p>
                    <p>Points</p>
                  </div>
                </div>
              </div>
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                  CarbonOffset
                </h3>
                <div className="shadow rounded max-w-80vw">
                  {/* <Map /> */}
                  <Tables />
                </div>
              </div>
              <div className="text-left sm:mb-10 mb-5 mt-4 flex flex-1 flex-col">
                <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                  Amount purchased per months
                </h3>
                <BarChart />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 sm:max-w-500px max-w-80vw">
            <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
              <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                CarbonOffset
              </h3>
              <PieChart />
            </div>
            <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
              <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                CarbonOffset
              </h3>
              <DonutChart />
            </div>
            <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
              <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                CarbonOffset
              </h3>
              <DonutChart />
            </div>
          </div>
        </div>
        <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
          <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
            CarbonOffset
          </h3>
          <div className="shadow rounded max-w-80vw">
            {/* <Map /> */}
            <Tabler />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CarbonOffset;
