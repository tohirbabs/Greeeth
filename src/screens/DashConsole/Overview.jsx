import React from "react";
import TreeBG from "/assets/landing/home-bg.png";

import DashboardLayout from "../../components/DashboardLayout";
import down from "../../components/Dashboard/down.png";
import maptree from "../../components/Dashboard/maptree.png";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Slider from "rc-slider";
import BarChart from "../../components/BarChart";
import { Footprinticon } from "../../components/Dashboard/Footprinticon";
import { Walleticon } from "../../components/Dashboard/Walleticon";
import { Treeicon } from "../../components/Dashboard/Tree";

// import Map from "../../components/Dashboard/Map";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Overview = () => {
  return (
    // <DashboardLayout>
    <div className="sm:mt-8 my-2 sm:py-10 py-4 ">
      <div className="flex flex-col md:flex-row sm:gap-10 gap-5 my-10 sm:px-8">
        <div className="w-full sm:max-w-400px">
          <div className="">
            <div className="flex gap-4 sm:flex-col">
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <div className="dash-card shadow-lg hover:bg-lightgreen cursor-pointer rounded-xl">
                  <div className="sm:p-6 sm:pb-4 p-4 mb-4">
                    <h3 className="font-bold text-xl ">Wallet Balance</h3>

                    <div className="flex items-center lgreen">
                      <p className=" sm:text-4xl font-bold pr-2">300</p>
                      <p>Points</p>
                    </div>
                  </div>

                  <div className="bg-lgreen text-white rounded-lg p-2 text-sm sm:text-base text-right">
                    Total 5000 Point
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left ">
              <div className="dash-card shadow-lg hover:bg-lightgreen cursor-pointer rounded-xl">
                <div className="sm:p-6 sm:pb-4 p-4 mb-4">
                  <img
                    src={TreeBG}
                    alt="Tree illustration"
                    className="mx-auto mb-6"
                  />
                  <h3 className="font-bold text-xl ">Tress Planted</h3>

                  <div className="flex items-center lgreen sm:pr-30">
                    <p className=" sm:text-4xl font-bold pr-2">300</p>
                    <p>Trees</p>
                  </div>
                </div>

                <div className="bg-lgreen text-white rounded-lg p-2 text-sm sm:text-base text-right">
                  Total 5000 Point
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex sm:gap-4 gap-2">
            <div className="text-left flex-1 flex-col sm:mb-10 mb-5">
              <div className="dash-card hover:bg-lightgreen cursor-pointer  shadow-lg rounded-xl">
                <div className="sm:p-6 sm:pb-4 p-4">
                  <h3 className="font-bold text-xl ">Carbon Footprint</h3>

                  <div className="flex items-center lgreen mb-4">
                    <p className=" sm:text-4xl font-bold pr-2">7,680</p>
                    <p>KG</p>
                  </div>
                </div>

                <div className="bg-lgreen  text-white rounded-lg p-2 text-sm sm:text-base text-right">
                  Calculated 17-09-2022
                </div>
              </div>
            </div>
            <div className="text-left flex-1  sm:mb-10 mb-5">
              <div className="dash-card hover:bg-lightgreen cursor-pointer  shadow-lg rounded-xl">
                <div className="sm:p-6 sm:pb-4 p-4">
                  <h3 className="font-bold text-xl ">Total Carbon Offset</h3>

                  <div className="flex items-center lgreen mb-4">
                    <p className=" sm:text-4xl font-bold pr-2">4,200</p>
                    <p>KG</p>
                  </div>
                </div>

                <div className="bg-lgreen  text-white rounded-lg p-2 text-sm sm:text-base text-right">
                  Calculated 17-09-2022
                </div>
              </div>
            </div>
          </div>
          <div className="dash-card sm:min-w-500px  shadow-lg rounded-xl">
            <div className="bg-lgreen  text-white rounded-lg p-2 text-xl font-bold  text-right">
              Recent Activities
            </div>
            <div className="sm:p-6 sm:pb-4 p-4 flex flex-col gap-2">
              <div className="p-2 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-xl flex justify-between items-center">
                <div className="left flex gap-4">
                  <div className="bg-lightgreen p-3 rounded-full my-auto">
                    <Footprinticon clr="#008000" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-md font-bold">
                      Calculated Footprint
                    </div>
                    <p className="text-sm text-left">23-09-2022</p>
                  </div>
                </div>
                <div className="font-bold text-base lgreen">7,654KG</div>
              </div>
              <div className="p-2 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-xl flex justify-between items-center">
                <div className="left flex gap-4">
                  <div className="bg-lightgreen p-3 rounded-full">
                    <Walleticon clr="#008000" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-md font-bold">Credit</div>
                    <p className="text-sm text-left">20-09-2022</p>
                  </div>
                </div>
                <div className="font-bold text-base lgreen">70 Points</div>
              </div>
              <div className="p-2 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-xl flex justify-between items-center">
                <div className="left flex gap-4">
                  <div className="bg-lightgreen p-3 rounded-full my-auto">
                    <Treeicon clr="#008000" />
                  </div>
                  <div className="flex flex-col ">
                    <div className="text-md font-bold">Planted Tree</div>
                    <p className="text-sm text-left">16-08-2022</p>
                  </div>
                </div>
                <div className="font-bold text-base lgreen">Mango Tree</div>
              </div>
              <div className="p-2 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-xl flex justify-between items-center">
                <div className="left flex gap-4">
                  <div className="bg-lightgreen p-3 rounded-full">
                    <Walleticon clr="#008000" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="text-md font-bold">Debit</div>
                    <p className="text-sm text-left">11-06-2022</p>
                  </div>
                </div>
                <div className="font-bold text-base lgreen">20 Points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default Overview;
