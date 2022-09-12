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
import { useCookies } from "react-cookie";
import { global, percent } from "../../../assets/CarbonEmissions";

import {
  ecofood,
  ecohome,
  ecosec,
  ecotravel,
} from "../../../assets/CarbonEmissions";
import { useEffect } from "react";

// import Map from "../../components/Dashboard/Map";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FootprintData = () => {
  const [cookies, setCookie] = useCookies();

  function postFootprint() {
    // setIsLoading(true);
    console.log("posting");
    console.log(cookies.key);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${cookies.key}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/carbonfootprint/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCookie(`footprintData`, result, {
            path: "/",
          });
        });
    } catch (err) {
      // setErr(err.message);
    } finally {
      // setIsLoading(false);
    }
  }
  useEffect(() => {
    postFootprint();
  }, [cookies.key]);

  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-6">
      {cookies.footprintData !== undefined ? (
        cookies.footprintData.length !== 0 ? (
          <div>
            {" "}
            <div className="my-10 bg-lgreen sm:p-6 p-4 px-2 rounded-xl text-white ">
              <div className=" text-left p-2  bg-white ligreen w-max px-6 font-bold mb-5 rounded-md">
                Total Footprint {parseInt(cookies.footprintData[0].total)} KG
              </div>
              <div className="">
                <p className="font-bold text-right">
                  Calculated{" "}
                  {cookies.footprintData[0].calculated_on.slice(0, 10)}
                </p>
                <div className="flex w-full h-2px bg-white my-2 rounded"></div>
              </div>
              <div className=" flex flex-wrap gap-4 justify-center max-w-1000px mx-auto my-10">
                <div className="flex bg-white sm:min-h-200px ligreen sm:w-10/21 rounded-xl overflow-hidden">
                  <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-2 justify-center items-center bg-blue-200">
                    <img className="sm:w-2/4 w-4/5" src={ecohome} alt="" />
                    <p className="text-2xl font-bold ligreen">
                      {parseInt(cookies.footprintData[0].home_emmission)}KG
                    </p>
                    <p className="sm:text-lg text-base font-bold ligreen">
                      {(
                        (parseInt(cookies.footprintData[0].home_emmission) *
                          100) /
                        parseInt(cookies.footprintData[0].total)
                      ).toFixed(1)}
                      %
                    </p>
                  </div>
                  <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                    <p className="sm:text-3xl text-2xl font-bold ">HOME</p>
                    <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                      Your Consumption is equal to 1 small car
                    </p>
                    <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-sm font-bold w-9/10">
                      Reduce Footprint
                    </div>
                  </div>
                </div>
                <div className="flex bg-white sm:min-h-200px ligreen sm:w-10/21 rounded-xl overflow-hidden">
                  <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-2 justify-center items-center bg-red-200">
                    <img className="sm:w-2/4 w-4/5" src={ecotravel} alt="" />
                    <p className="text-2xl font-bold ligreen">
                      {parseInt(cookies.footprintData[0].travel_emmission)}KG
                    </p>

                    <p className="sm:text-lg text-base font-bold ligreen">
                      {(
                        (parseInt(cookies.footprintData[0].travel_emmission) *
                          100) /
                        parseInt(cookies.footprintData[0].total)
                      ).toFixed(1)}
                      %
                    </p>
                  </div>
                  <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                    <p className="sm:text-3xl text-2xl font-bold ">TRAVEL</p>
                    <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                      Your Consumption is equal to 1 small car
                    </p>
                    <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-sm font-bold w-9/10">
                      Reduce Footprint
                    </div>
                  </div>
                </div>
                <div className="flex bg-white sm:min-h-200px ligreen sm:w-10/21 rounded-xl overflow-hidden">
                  <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-2 justify-center items-center bg-amber-400">
                    <img className="sm:w-2/4 w-4/5" src={ecofood} alt="" />
                    <p className="text-2xl font-bold ligreen">
                      {parseInt(cookies.footprintData[0].food_emmission)}KG
                    </p>

                    <p className="sm:text-lg text-base font-bold ligreen">
                      {(
                        (parseInt(cookies.footprintData[0].food_emmission) *
                          100) /
                        parseInt(cookies.footprintData[0].total)
                      ).toFixed(1)}
                      %
                    </p>
                  </div>
                  <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                    <p className="sm:text-3xl text-2xl font-bold ">FOOD</p>
                    <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                      Your Consumption is equal to 1 small car
                    </p>
                    <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-sm font-bold w-9/10">
                      Reduce Footprint
                    </div>
                  </div>
                </div>
                <div className="flex bg-white sm:min-h-200px ligreen sm:w-10/21 rounded-xl overflow-hidden">
                  <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-2 justify-center items-center bg-sky-300">
                    <img className="sm:w-2/4 w-4/5" src={ecosec} alt="" />
                    <p className="text-2xl font-bold ligreen">
                      {parseInt(cookies.footprintData[0].secondary_emmission)}KG
                    </p>

                    <p className="sm:text-lg text-base font-bold ligreen">
                      {(
                        (parseInt(
                          cookies.footprintData[0].secondary_emmission
                        ) *
                          100) /
                        parseInt(cookies.footprintData[0].total)
                      ).toFixed(1)}
                      %
                    </p>
                  </div>
                  <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                    <p className="sm:text-3xl text-2xl font-bold ">SECONDARY</p>
                    <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                      Your Consumption is equal to 1 small car
                    </p>
                    <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-sm font-bold w-9/10">
                      Reduce Footprint
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around gap-4 flex-wrap">
              {" "}
              {cookies.footprintData.map((data) =>
                cookies.footprintData[0] !== data ? (
                  <div
                    className=" bg-lgreen sm:p-2 p-2 px-2 rounded-xl text-white sm:w-4/10"
                    key={data.id}
                  >
                    <div className="">
                      <p className="font-bold text-right">
                        Calculated {data.calculated_on.slice(0, 10)}
                      </p>
                      <div className="flex w-full h-2px bg-white my-2 rounded"></div>
                    </div>
                    <div className=" flex flex-wrap gap-4 justify-center max-w-1000px mx-auto my-4">
                      <div className="flex bg-white  ligreen  rounded-xl overflow-hidden">
                        <div className=" flex flex-col  p-1 justify-center items-center bg-blue-200">
                          <p className="sm:text-lg text-base font-bold ">
                            HOME
                          </p>

                          {/* <img className="sm:w-2/4 w-3/4" src={ecohome} alt="" /> */}
                        </div>
                        <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                          <p className="sm:text-lg text-base font-bold ligreen">
                            {parseInt(data.home_emmission)}KG
                          </p>
                          <p className=" font-bold ligreen">
                            {(
                              (parseInt(data.home_emmission) * 100) /
                              parseInt(data.total)
                            ).toFixed(1)}
                            %
                          </p>

                          {/* <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                        Reduce Footprint
                      </div> */}
                        </div>
                      </div>
                      <div className="flex bg-white  ligreen  rounded-xl overflow-hidden">
                        <div className=" flex flex-col  p-1 justify-center items-center bg-red-200">
                          <p className="sm:text-lg text-base font-bold ">
                            TRAVEL
                          </p>

                          {/* <img className="sm:w-2/4 w-3/4" src={ecohome} alt="" /> */}
                        </div>
                        <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                          <p className="sm:text-lg text-base font-bold ligreen">
                            {parseInt(data.travel_emmission)}KG
                          </p>
                          <p className=" font-bold ligreen">
                            {(
                              (parseInt(data.travel_emmission) * 100) /
                              parseInt(data.total)
                            ).toFixed(1)}
                            %
                          </p>

                          {/* <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                        Reduce Footprint
                      </div> */}
                        </div>
                      </div>
                      <div className="flex bg-white  ligreen  rounded-xl overflow-hidden">
                        <div className=" flex flex-col  p-1 justify-center items-center bg-amber-400">
                          <p className="sm:text-lg text-base font-bold ">
                            FOOD
                          </p>

                          {/* <img className="sm:w-2/4 w-3/4" src={ecohome} alt="" /> */}
                        </div>
                        <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                          <p className="sm:text-lg text-base font-bold ligreen">
                            {parseInt(data.food_emmission)}KG
                          </p>
                          <p className=" font-bold ligreen">
                            {(
                              (parseInt(data.food_emmission) * 100) /
                              parseInt(data.total)
                            ).toFixed(1)}
                            %
                          </p>

                          {/* <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                        Reduce Footprint
                      </div> */}
                        </div>
                      </div>
                      <div className="flex bg-white  ligreen  rounded-xl overflow-hidden">
                        <div className=" flex flex-col  p-1 justify-center items-center bg-sky-300">
                          <p className="sm:text-lg text-base font-bold ">
                            SECONDARY
                          </p>

                          {/* <img className="sm:w-2/4 w-3/4" src={ecohome} alt="" /> */}
                        </div>
                        <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
                          <p className="sm:text-lg text-base font-bold ligreen">
                            {parseInt(data.secondary_emmission)}KG
                          </p>
                          <p className=" font-bold ligreen">
                            {(
                              (parseInt(data.secondary_emmission) * 100) /
                              parseInt(data.total)
                            ).toFixed(1)}
                            %
                          </p>

                          {/* <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                        Reduce Footprint
                      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}

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
