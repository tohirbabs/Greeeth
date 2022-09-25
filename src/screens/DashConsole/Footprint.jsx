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

export const Footprint = ({ setsection }) => {
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
            setsection("ReduceFootprint");
          }}
          className="p-2 cursor-pointer bg-white border   rounded-full flex justify-between items-center"
        >
          <div className="bg-lgreen p-1 rounded-full">
            <WindIcon clr="white" />
          </div>
          <div className="flex flex-col text-left ml-2">
            <div className="text-sm font-bold ligreen">
              Tips to reduce Footprint
            </div>
          </div>
        </div>
      </div>
      {cookies.footprintData !== undefined ? (
        cookies.footprintData.length !== 0 ? (
          <div className="mt-12">
            <div className="dash-card mx-auto shadow-lg hover:bg-lightgreen cursor-pointer rounded-2xl pb-4 max-w-750px">
              <div className="bg-lgreen flex justify-between items-center  text-white rounded-2xl p-2  font-bold  text-right">
                <div className=" p-1   bg-white ligreen  px-6 rounded-full">
                  {parseInt(cookies.footprintData[currentPrint].total)} KG
                </div>
                <p className="font-bold text-sm text-right">
                  {cookies.footprintData[currentPrint].calculated_on.slice(
                    0,
                    10
                  )}
                </p>
              </div>

              <div className=" flex sm:flex-wrap  flex-col sm:flex-row gap-4 justify-center  mx-auto my-6 mx-2">
                <div className="sm:w-350px p-2 sm:px-4 ligreen cursor-pointer bg-lightgreen  rounded-full flex justify-between items-center">
                  <div className="left flex gap-4 ">
                    <div className="bg-lgreen p-2 rounded-full my-auto">
                      <HomeIcon clr="white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-md font-bold">Home Emission</div>
                      <p className="text-sm text-left">
                        {(
                          (parseInt(
                            cookies.footprintData[currentPrint].home_emmission
                          ) *
                            100) /
                          parseInt(cookies.footprintData[currentPrint].total)
                        ).toFixed(1)}
                        %
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-base ">
                    {parseInt(
                      cookies.footprintData[currentPrint].home_emmission
                    )}
                    KG
                  </div>
                </div>
                <div className="sm:w-350px p-2 sm:px-4 ligreen cursor-pointer bg-lightgreen  rounded-full flex justify-between items-center">
                  <div className="left flex gap-4 ">
                    <div className="bg-lgreen p-2 rounded-full my-auto">
                      <TravelIcon clr="white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-md font-bold">Travel Emission</div>
                      <p className="text-sm text-left">
                        {(
                          (parseInt(
                            cookies.footprintData[currentPrint].travel_emmission
                          ) *
                            100) /
                          parseInt(cookies.footprintData[currentPrint].total)
                        ).toFixed(1)}
                        %
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-base ">
                    {parseInt(
                      cookies.footprintData[currentPrint].travel_emmission
                    )}
                    KG
                  </div>
                </div>
                <div className="sm:w-350px p-2 sm:px-4 ligreen cursor-pointer bg-lightgreen  rounded-full flex justify-between items-center">
                  <div className="left flex gap-4 ">
                    <div className="bg-lgreen p-2 rounded-full my-auto">
                      <FoodIcon clr="white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-md font-bold">Home Emission</div>
                      <p className="text-sm text-left">
                        {(
                          (parseInt(
                            cookies.footprintData[currentPrint].food_emmission
                          ) *
                            100) /
                          parseInt(cookies.footprintData[currentPrint].total)
                        ).toFixed(1)}
                        %
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-base ">
                    {parseInt(
                      cookies.footprintData[currentPrint].food_emmission
                    )}
                    KG
                  </div>
                </div>
                <div className="sm:w-350px p-2 sm:px-4 ligreen cursor-pointer bg-lightgreen  rounded-full flex justify-between items-center">
                  <div className="left flex gap-4 ">
                    <div className="bg-lgreen p-2 rounded-full my-auto">
                      <RenewableIcon clr="white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="text-md font-bold">
                        Secondary Emission
                      </div>
                      <p className="text-sm text-left">
                        {(
                          (parseInt(
                            cookies.footprintData[currentPrint]
                              .secondary_emmission
                          ) *
                            100) /
                          parseInt(cookies.footprintData[currentPrint].total)
                        ).toFixed(1)}
                        %
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-base ">
                    {parseInt(
                      cookies.footprintData[currentPrint].secondary_emmission
                    )}
                    KG
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around gap-4 flex-wrap m-10">
              {" "}
              {cookies.footprintData.map((data) =>
                cookies.footprintData[currentPrint] !== data ? (
                  <div
                    key={data.id}
                    onClick={() => {
                      setCurrentPrint(cookies.footprintData.indexOf(data));
                    }}
                    className="dash-card hover:bg-lightgreen cursor-pointer  shadow-lg rounded-xl"
                  >
                    <div className="sm:p-6 sm:pb-4 p-4">
                      <h3 className="font-bold text-xl ">Carbon Footprint</h3>

                      <div className="flex items-center lgreen mb-4">
                        <p className=" sm:text-4xl font-bold pr-2">
                          {parseInt(parseInt(data.total))}
                        </p>
                        <p>KG</p>
                      </div>
                    </div>

                    <div className="bg-lgreen  text-white rounded-lg p-2 text-sm sm:text-base text-right">
                      Calculated {data.calculated_on.slice(0, 10)}
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
    </div>
  );
};
