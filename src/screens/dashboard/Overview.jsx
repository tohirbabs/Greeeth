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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Overview = () => {
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-wrap sm:gap-6 gap-2">
        <div className="sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md bg-white text-lgreen">
          Plant New Trees
        </div>
        <div className="sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md bg-white text-lgreen">
          Maintenance Task
        </div>
        <div className="sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md bg-white text-lgreen">
          Planting Task
        </div>
      </div>
      <div className="flex flex-col md:flex-row sm:gap-10 gap-5 my-10 sm:px-8">
        <div className="w-full sm:w-auto">
          <div className="">
            <div className="flex gap-4 sm:flex-col">
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                  Wallet
                </h3>
                <div className="dash-card p-2 sm:p-6 sm:pt-8 sm:pr-15 sm:pb-18 rounded-lg shadow flex-1 px-5">
                  <p className="font-bold sm:text-xl">Balance</p>
                  <div className="flex items-center lgreen">
                    <p className=" sm:text-4xl text-base font-bold pr-2">
                      300,000
                    </p>
                    <p>Points</p>
                  </div>
                </div>
              </div>
              <div className="text-left flex-1 sm:mb-10 mb-5">
                <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">Debit</h3>
                <div className="dash-card rounded-lg shadow ">
                  <div className="sm:p-6 sm:pb-4 p-4">
                    <div className="flex items-center lgreen">
                      <p className=" sm:text-4xl font-bold pr-2">300</p>
                      <p>Points</p>
                    </div>
                    <p>2021</p>
                  </div>

                  <div className="bg-lgreen text-white rounded-lg p-2 text-sm sm:text-base text-right">
                    Total 5000 Point
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left mb-10">
              <h3 className="font-bold sm:text-2xl text-xl sm:p-4 p-2 ">
                Trees Planted
              </h3>
              <div className="dash-card p-4 sm:pb-18 rounded-lg shadow ">
                <Menu as="div" className="relative text-left">
                  <div>
                    <Menu.Button className="flex justify-between items-center w-full sm:p-4 p-2 font-medium lgreen focus:outline-none ">
                      Total Planted Trees: 38,000
                      <img className="ml-4" src={down} alt="" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Running: 20,000
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Ended: 18, 000
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="relative text-left">
                  <div>
                    <Menu.Button className="flex justify-between items-center w-full p-2 sm:p-4 font-medium lgreen focus:outline-none ">
                      Total Planted Trees: 38,000
                      <img className="ml-4" src={down} alt="" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Running: 20,000
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Ended: 18, 000
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <div className="lgreen font-bold p-2 sm:p-4">
                  Trees Planted: 20
                </div>
                <div className="lgreen font-bold p-2 sm:p-4">
                  Trees Gifted: 200
                </div>
                <div className="lgreen font-bold p-2 sm:p-4">
                  Trees Received: 200
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex sm:gap-4 gap-2">
            <div className="text-left flex-1 flex-col sm:mb-10 mb-5">
              <h3 className="font-bold sm:text-2xl py-2 sm:p-4 ">
                Carbon footprint
              </h3>
              <div className="dash-card sm:min-h-[160px] min-h-115px flex-1  rounded-lg flex flex-col justify-between shadow">
                <div className="sm:p-6 sm:pb-4 p-2">
                  <div className="flex items-center lgreen">
                    <p className="sm:text-2xl font-bold pr-2">30 tons of CO2</p>
                  </div>
                </div>

                <div className="self-end m-2 border text-lgreen w-max  rounded-lg p-2 text-sm sm:text-base text-right">
                  See details
                </div>
              </div>
            </div>
            <div className="text-left flex-1  sm:mb-10 mb-5">
              <h3 className="font-bold sm:text-2xl py-2 sm:p-4 ">
                Carbon offset
              </h3>
              <div className="dash-card min-h-115px sm:min-h-[160px] rounded-lg flex flex-col justify-between shadow">
                <div className="sm:p-6 sm:pb-4 p-2">
                  <div className="flex items-center lgreen">
                    <p className=" sm:text-2xl font-bold pr-2">
                      2000 tons of CO2
                    </p>
                  </div>
                </div>

                <div className="self-end m-2 border text-lgreen w-max  rounded-lg p-2 text-sm sm:text-base text-right">
                  See details
                </div>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h3 className="text-sm sm:text:base font-bold text-left mb-2">
              Estimated CO2 emitted balance and offset balance
            </h3>
            <Slider />
            <div className="flex justify-between text-sm sm:text-base m-2">
              <p>CO2 Footprint</p>
              <p>CO2 Offset</p>
            </div>
          </div>
          <div className="my-8">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="shadow rounded">
        {/* <Map /> */}
        <img src={maptree} alt="" />
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default Overview;
