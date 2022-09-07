import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import down from "../../components/Dashboard/down.png";
import maptree from "../../components/Dashboard/maptree.png";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Slider from "rc-slider";
import BarChart from "../../components/BarChart";
import { Tabler } from "../../components/Table";
import { PieChart } from "../../components/PieChart";
import { DonutChart } from "../../components/DonutChart";

// import Map from "../../components/Dashboard/Map";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FootprintData = () => {
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-6">
      <div className="flex flex-col md:flex-row sm:gap-10 gap-5 my-10 sm:px-8">
        <div className="w-full sm:w-auto">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                  Carbon Footprint
                </h3>
                <div className="dash-card p-4 pb-10 sm:p-6 sm:pt-8 sm:pr-15 sm:pb-20 rounded shadow flex-1 px-5">
                  <p className="font-bold sm:text-xl">Offsetted</p>
                  <div className="flex items-center lgreen">
                    <p className=" sm:text-4xl text-base font-bold pr-2">
                      300,000
                    </p>
                    <p>KG</p>
                  </div>
                </div>
              </div>
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                {/* <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                    Carbon Footprint
                  </h3> */}
                <div className="dash-card p-4 pb-10  sm:p-6 sm:pt-8 sm:pr-15 sm:pb-20 rounded shadow flex-1 px-5">
                  <p className="font-bold sm:text-xl">Not Yet Offset</p>
                  <div className="flex items-center lgreen">
                    <p className=" sm:text-4xl text-base font-bold pr-2">
                      300,000
                    </p>
                    <p>KG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="my-8">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
          <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
            Total Emission/offset
          </h3>
          <PieChart />
        </div>
        <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
          <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
            Total Earned
          </h3>
          <DonutChart />
        </div>
        <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
          <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
            Compensated Emissions
          </h3>
          <DonutChart />
        </div>
      </div>
      <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
        <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
          Transaction history
        </h3>
        <div className="shadow rounded max-w-80vw">
          {/* <Map /> */}
          <Tabler />
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default FootprintData;
