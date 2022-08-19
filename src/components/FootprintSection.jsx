import React from "react";
import { useState, useContext } from "react";
import { PageContext } from "../App";
import { Pix1, Pix2, Pix3, Pix4, Pix5, Pix7 } from "../../assets/GetInvolved";

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
// import Carouseler from "./Carousel";
import { FreightList } from "./FlightList";
import { POST } from "../../utils/request";
import Welcome from "./CarbonEmission/Welcome";
import { HomeEmissions } from "./CarbonEmission/HomeEmissions";
import { TransportEmissions } from "./CarbonEmission/TransportEmissions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const componentsArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Electricity",
      link: "How much Electricity do you use at home in KWh",

      text: "How much Electricity do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Natural Gas",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Heating Oil",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Coal",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix5,
    TextList: {
      title: "LPG",
      link: "Loyalty-Program-to-Customers",
      text: "How much LPG do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Propane",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Propane do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Wood",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Wood do you use at home in KWh",
    },
  },
];

const flightsArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Motorbike",
      link: "How much Motorbike do you use at home in KWh",

      text: "How much Motorbike do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Bus",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Subway",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Taxi",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix5,
    TextList: {
      title: "Rail",
      link: "Loyalty-Program-to-Customers",
      text: "How much LPG do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Sea",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Propane do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Fuel",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Wood do you use at home in KWh",
    },
  },
];

const freightArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Road Freight",
      link: "How much Motorbike do you use at home in KWh",

      text: "How much Motorbike do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Air Freight",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Rail Freight",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Sea Freight",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
];

const wasteArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Construction Waste",
      link: "How much Motorbike do you use at home in KWh",

      text: "How much Motorbike do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Electrical Waste",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "General Waste",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Plastic Waste",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Metal Waste",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
];

const secArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Holiday (travel/accomodation)",
      link: "How much Motorbike do you use at home in KWh",

      text: "How much Motorbike do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Hotal Stay",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Financial Intermediation Services(Except insurance and pension)",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Bank Fee",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Education",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Food and Beverage",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Restaurant",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
];

function FootprintSection() {
  const {} = useContext(PageContext);
  const [showWaste, setshowWaste] = useState(false);
  const [showTransport, setshowTransport] = useState(false);
  const [showHome, setshowHome] = useState(false);
  const [showWelcome, setshowWelcome] = useState(true);
  const [showCloth, setshowCloth] = useState(false);
  const [showSec, setshowSec] = useState(false);
  const [showResult, setshowResult] = useState(false);
  // const [homeElecVal, setHomeElec] = useState(0);
  let homeElecVal = 0;
  let homeGasVal = 0;
  let homeWoodVal = 0;
  // const [homeGasVal, setHomeGas] = useState(0);
  const [err, setErr] = useState("");

  function CompaniesList({ Pix, TextList, Index }) {
    return (
      <div className="BG-lgreen ">
        <div className="py-5  flex  flex-col  flex-wrapitems-center justify-center BG1">
          {Index % 2 === 0 ? (
            <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 bg-white  w-screen">
              <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
                <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
                    <input
                      type="number"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-6/12 w-9/10 mx-auto">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
                <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
                    <input
                      type="number"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const Transport = () => {
    return (
      <div className="BG-lgreen ">
        <h1 className="text-2xl  sm:(text-5xl !leading-tight) pt-8 mx-4 font-medium capitalize lgreen">
          Your Individual Footprint due to Transportation
        </h1>

        <p className="mt-6 sm:leading-relaxed px-2 sm:text-xl px-4 sm:px-10">
          This is calculated by taking into account, all forms of
          transportation. Including Flight, Bus and Rails, Motorbike, Fuel
          Expenses and Freight.
        </p>
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 BG-lgreen  w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Flight
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  <div className="flex gap-4">
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        From
                      </label>
                      <input
                        type="text"
                        id="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        To
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
                </div>
                <div className="flex flex-wrap mt-5 text-center w-1/2">
                  <label
                    for="state"
                    class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  >
                    Class
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
                  src={Pix3}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {flightsArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
        {freightArray.map((comp, i) => (
          <FreightList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
      </div>
    );
  };

  const Waste = () => {
    return (
      <>
        {wasteArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
      </>
    );
  };

  const Cloth = () => {
    return (
      <div className="py-5  flex  flex-col  flex-wrapitems-center justify-center BG1">
        <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-6/12 w-9/10 mx-auto">
              <img
                src={Pix4}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
              <h2 className="text-2xl lgreen font-bold md:text-4xl">
                Clothing and Footwear
              </h2>
              <div className="mt-6 text-gray-600 leading-loose">
                Calculate upstream emissions produced by entering average amount
                spent on purchasing clothes and footwear (in euros)
              </div>
              <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
                <input
                  type="number"
                  id="state"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Sec = () => {
    return (
      <>
        {secArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
      </>
    );
  };

  const Result = () => {
    return (
      <>
        <div className="BG-lgreen ">
          <h1 className="text-2xl pt-10 sm:(text-5xl !leading-tight) mx-4 font-medium capitalize lgreen">
            Your Carbon Footprint
          </h1>

          <div className="py-5  flex  flex-col  flex-wrapitems-center justify-center BG1">
            <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-5 md:px-15 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
              <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
                <div className="text-left md:6/12  lg:w-6/12 md:mx-4 mx-3">
                  <div className="flex justify-between items-center ">
                    <h2 className="text-base text-gray-900 font-bold md:text-base">
                      Home Emissions
                    </h2>

                    <div class="block text-gray-900">
                      <p className="lgreen font-bold text-base px-4 py-2 bg-white rounded">
                        {(calcHomeElec + calcHomeGas).toFixed(2)}
                      </p>
                      metric tonnes of CO2e
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 items-center ">
                    <h2 className="text-base text-gray-900 font-bold md:text-base">
                      Transportation Emissions
                    </h2>

                    <div class="block text-gray-900">
                      <p className="lgreen font-bold text-base px-4 py-2 bg-white rounded">
                        0.00
                      </p>
                      metric tonnes of CO2e
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 items-center ">
                    <h2 className="text-base text-gray-900 font-bold md:text-base">
                      Waste Emissions
                    </h2>

                    <div class="block text-gray-900">
                      <p className="lgreen font-bold text-base px-4 py-2 bg-white rounded">
                        0.00
                      </p>
                      metric tonnes of CO2e
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 items-center ">
                    <h2 className="text-base text-gray-900 font-bold md:text-base">
                      Clothing and Footwear Emission
                    </h2>

                    <div class="block text-gray-900">
                      <p className="lgreen font-bold text-base px-4 py-2 bg-white rounded">
                        0.00
                      </p>
                      metric tonnes of CO2e
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 items-center ">
                    <h2 className="text-base text-gray-900 font-bold md:text-base">
                      Secondary Emission
                    </h2>

                    <div class="block text-gray-900">
                      <p className="lgreen font-bold text-base px-4 py-2 bg-white rounded">
                        0.00
                      </p>
                      metric tonnes of CO2e
                    </div>
                  </div>
                </div>

                <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
                  <img
                    src={Pix1}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                    onClick={() => climatiq()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="shadow-md">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center  lg:h-16">
                <div className="flex items-center">
                  <div className="block">
                    <div className="sm:ml-10 flex w-menu flex-col md:flex-row items-baseline space-x-20">
                      <div
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(true);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(false);
                          setshowResult(false);
                        }}
                        className={classNames(
                          showWelcome
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 py-3 flex items-center cursor-pointer"
                        )}
                        aria-current={showWelcome ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showWelcome ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-8"
                          )}
                        >
                          <i className={`bx bxs-calculator bx-sm`}></i>
                        </span>
                        <span className=" text-sm font-medium">Welcome</span>
                      </div>
                      <div
                        onClick={() => {
                          setshowHome(true);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(false);
                          setshowResult(false);
                        }}
                        className={classNames(
                          showHome
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        aria-current={showHome ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showHome ? " lgreen" : "text-gray-400",
                            "inline-flex items-center justify-center h-10 w-8"
                          )}
                        >
                          <i className={`bx bxs-home bx-sm`}></i>
                        </span>
                        <span className=" text-sm font-medium">
                          Home Energy
                        </span>
                      </div>
                      <div
                        className={classNames(
                          showTransport
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(true);
                          setshowCloth(false);
                          setshowSec(false);
                          setshowResult(false);
                        }}
                        aria-current={showTransport ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showTransport ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-8"
                          )}
                        >
                          <i className={`bx bxs-plane-take-off bx-sm`}></i>
                        </span>
                        <span className="text-sm font-medium">
                          Transportation Effects
                        </span>
                      </div>

                      <div
                        className={classNames(
                          showWaste
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(true);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(false);
                          setshowResult(false);
                        }}
                        aria-current={showWaste ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showWaste ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-8"
                          )}
                        >
                          <i className={`bx bxs-trash bx-sm`}></i>
                        </span>
                        <span className=" text-sm font-medium">Waste</span>
                      </div>
                      <div
                        className={classNames(
                          showCloth
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(true);
                          setshowSec(false);
                          setshowResult(false);
                        }}
                        aria-current={showCloth ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showCloth ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-8"
                          )}
                        >
                          <i className={`bx bxs-t-shirt bx-sm`}></i>
                        </span>
                        <span className=" text-sm font-medium">
                          Clothing and Footwear
                        </span>
                      </div>

                      <div
                        className={classNames(
                          showSec
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(true);
                          setshowResult(false);
                        }}
                        aria-current={showSec ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showSec ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-8"
                          )}
                        >
                          <i className={`bx bx-money bx-sm`}></i>
                        </span>
                        <span className=" text-sm font-medium">Secondary</span>
                      </div>
                      <div
                        className={classNames(
                          showResult
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(false);
                          setshowResult(true);
                          homeElec();
                          homeGas();
                        }}
                        aria-current={showResult ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showResult ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-8"
                          )}
                        >
                          <i className={`bx bxs-check-shield bx-sm`}></i>
                        </span>
                        <span className=" text-sm font-medium">Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel> */}
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow"></header>
      <main>
        {showWelcome ? (
          <Welcome />
        ) : showHome ? (
          <HomeEmissions />
        ) : showTransport ? (
          <TransportEmissions />
        ) : showWaste ? (
          <Waste />
        ) : showCloth ? (
          <Cloth />
        ) : showSec ? (
          <Sec />
        ) : showResult ? (
          <Result />
        ) : (
          <Welcome />
        )}
      </main>
    </div>
  );
}

export default FootprintSection;
