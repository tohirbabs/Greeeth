import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import down from "../../components/Dashboard/down.png";
import maptree from "../../components/Dashboard/maptree.png";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Slider from "rc-slider";
import BarChart from "../../components/BarChart";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";
import { Tabler } from "../../components/Table";
import { Tables } from "../../components/Tables";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Goal = () => {
  const percentage = 66;
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-col md:flex-row sm:gap-10 gap-5 my-10 sm:px-8">
        <div className="w-full sm:w-1/2">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="text-left mb-5 flex flex-1 flex-col ">
                <h3 className="font-bold sm:text-xl text-lg sm:p-4 ">
                  Tree Planting Goal
                </h3>
                <div className="dash-card p-2 flex items-center justify-center sm:p-6 sm:pt-8 sm:px-15 sm:pb-18 rounded-lg shadow flex-1 px-5">
                  <div className="flex items-center justify-center ligreen">
                    <p className=" sm:text-4xl text-base font-bold pr-2">50</p>
                    <p>Trees to be planted this month</p>
                  </div>
                </div>
              </div>
              <div className="text-left flex-1 sm:mb-10 mb-5">
                <h3 className="font-bold text-lg sm:p-4 ">
                  Here is your tree planting goal track
                </h3>
                <div className="w-full sm:w-8/10 mx-auto">
                  <div className="border-[#008000] border-1px w-full h-10px rounded-full bg-white mt-6">
                    <div className="w-1/2 h-full rounded-full bg-lgreen"></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p>September 2022</p>
                    <p>50%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left mb-10 bg-white sm:px-8 px-2 py-10">
              <h3 className="font-bold">Critical Categories</h3>
              <p className="text-sm">
                Here's where you are emitting the most co2
              </p>
              <div className="dash-card p-4 sm:pb-18 rounded-lg shadow my-4">
                <div className="car my-4">
                  <p className="my-2 font-bold">Car</p>
                  <div className="border-[#E0AE58] border-1px w-full h-10px rounded-full bg-white">
                    <div className="w-3/10 h-full rounded-full bg-[#E0AE58]"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm flex-end">
                    <p>1000kgCo2</p>
                    <p>Status:High</p>
                  </div>
                </div>

                <div className="car my-4">
                  <p className="my-2 font-bold">Car</p>
                  <div className="border-[#E0AE58] border-1px w-full h-10px rounded-full bg-white">
                    <div className="w-3/10 h-full rounded-full bg-[#E0AE58]"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm flex-end">
                    <p>1000kgCo2</p>
                    <p>Status:High</p>
                  </div>
                </div>
                <div className="car my-4">
                  <p className="my-2 font-bold">Car</p>
                  <div className="border-[#E0AE58] border-1px w-full h-10px rounded-full bg-white">
                    <div className="w-3/10 h-full rounded-full bg-[#E0AE58]"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm flex-end">
                    <p>1000kgCo2</p>
                    <p>Status:High</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex sm:gap-4 gap-2">
            <div className="text-left flex-1  sm:mb-10 mb-5">
              <h3 className="font-bold sm:text-xl text-md py-2 sm:p-4 ">
                Carbon reduction Goal
              </h3>
              <div className="dash-card rounded-lg flex flex-col justify-between items-center shadow">
                <div className=" p-2 py-10">
                  <div className="flex flex-col items-center justify-center ligreen">
                    <p className=" sm:text-xl font-bold pr-2 mb-10">
                      Reduce your Footprint by 300kg
                    </p>
                    <p>Your foot print for the last 3 months was 3,000kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2">
            {/* <h3 className="text-sm sm:text:base font-bold text-left mb-2">
              Estimated CO2 emitted balance and offset balance
            </h3> */}
            {/* <CircularSlider
              label="Footprint Reduced by"
              labelColor="#008000"
              knobColor="#393939"
              progressColorFrom="#008000"
              progressColorTo="#008000"
              progressSize={24}
              trackColor="#fff"
              trackSize={24}
              data={["50Kg", "100Kg", "150Kg", "200kg", "250kg", "300kg"]} //...
              dataIndex={10}
              onChange={(value) => {
                console.log(value);
              }}
            /> */}
            <div className="max-w-400px">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>

            <div className=" text-sm sm:text-base m-2">
              <p>You are to save 300 kg and emit maximum of 2,700 kg</p>
            </div>
          </div>
          <div className="my-8">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="shadow bg-white rounded max-w-80vw">
        {/* <Map /> */}
        <Tables />
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default Goal;
