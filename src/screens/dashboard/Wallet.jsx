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
import BarCharter from "../../components/BarCharter";
// import DonutChart from "../../components/DonutChart";

// import Map from "../../components/Dashboard/Map";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Wallet = () => {
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-6">
      <div className="flex flex-col md:flex-row sm:gap-10 gap-5 my-10">
        <div className="sm:w-auto">
          <div className="">
            <div className="flex sm:gap-4 gap-2">
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <div className="flex sm:p-4 gap-1 items-center">
                  <img
                    src="/assets/wallet.png"
                    alt=""
                    className="sm:h-1.5rem h-1rem"
                  />
                  <h3 className="font-bold sm:text-2xl text-xl ">Wallet</h3>
                </div>

                <div className="dash-card py-4 sm:py-6 p-2 sm:p-6 sm:pt-8 sm:pr-15 sm:pb-20 rounded shadow flex-1 ">
                  <p className="font-bold sm:text-xl">Balance</p>
                  <div className="flex items-center lgreen">
                    <p className=" sm:text-4xl text-base font-bold pr-2">500</p>
                    <p>Points</p>
                  </div>
                </div>
              </div>
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <div className="flex sm:p-4 gap-1 items-center">
                  <img
                    src="/assets/purchased.png"
                    alt=""
                    className="sm:h-1.5rem h-1rem"
                  />
                  <h3 className="font-bold sm:text-2xl text-xl ">Purchased</h3>
                </div>
                <div className=" bg-[#F2FCFF] py-4 sm:py-6 p-2 sm:p-6 sm:pt-8 sm:pr-15 sm:pb-20 rounded shadow flex-1 ">
                  <p className="font-bold sm:text-xl">Balance</p>
                  <div className="flex items-center text-[#1800A8]">
                    <p className=" sm:text-4xl text-base font-bold pr-2">
                      300,000
                    </p>
                    <p>Points</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:gap-4 gap-2">
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <div className="flex sm:p-4 gap-1 items-center">
                  <img
                    src="/assets/sent.png"
                    alt=""
                    className="sm:h-1.5rem h-1rem"
                  />
                  <h3 className="font-bold sm:text-2xl text-xl ">Sent</h3>
                </div>
                <div className="bg-[#FFF9F9] py-4 sm:py-6 p-2 sm:p-6 sm:pt-8 sm:pr-15 sm:pb-20 rounded shadow flex-1 ">
                  <p className="font-bold sm:text-xl">Balance</p>
                  <div className="flex items-center text-[#A70000]">
                    <p className=" sm:text-4xl text-base font-bold pr-2">
                      300,000
                    </p>
                    <p>Points</p>
                  </div>
                </div>
              </div>
              <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
                <div className="flex sm:p-4 gap-1 items-center">
                  <img
                    src="/assets/received.png"
                    alt=""
                    className="sm:h-1.5rem h-1rem"
                  />
                  <h3 className="font-bold sm:text-2xl text-xl ">Received</h3>
                </div>
                <div className="bg-[#FFF9E5] py-4 sm:py-6 p-2 sm:p-6 sm:pt-8 sm:pr-15 sm:pb-20 rounded shadow flex-1 ">
                  <p className="font-bold sm:text-xl">Balance</p>
                  <div className="flex items-center text-[#7C5A00]">
                    <p className=" sm:text-4xl text-base font-bold pr-2">
                      300,000
                    </p>
                    <p>Points</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left sm:mb-10 mb-5 mt-4 flex flex-1 flex-col">
              <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
                Amount purchased per month
              </h3>
              <BarCharter />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 sm:max-w-500px max-w-80vw">
          <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
            <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
              Total Earned
            </h3>
            <DonutChart />
          </div>
          <div className="text-left sm:mb-10 mb-5 flex flex-1 flex-col">
            <h3 className="font-bold sm:text-2xl text-xl sm:p-4 ">
              Total Used
            </h3>
            <DonutChart />
          </div>
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

export default Wallet;
