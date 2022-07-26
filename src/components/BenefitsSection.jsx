import React from "react";
import { useState, useContext } from "react";
import ForestBG from "../../assets/company forest.png";
import { PageContext } from "../App";
import {
  Pix1,
  Pix2,
  Pix3,
  Pix4,
  Pix5,
  Pix7,
  co2,
  gift,
  calc,
  charity,
  government,
} from "../../assets/GetInvolved";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
// import Carouseler from "./Carousel";
import Carousel from "./Carousel";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  {
    name: "Companies",
    href: "#",

    icon: "building-house",
  },
  { name: "Individuals", href: "#", icon: "user" },
  { name: "NGOs", href: "#", icon: "building-house" },
  {
    name: "Governmental Organizations",
    href: "#",

    icon: "building-house",
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#", icon: "building-house" },
  { name: "Settings", href: "#", icon: "user" },
  { name: "Sign out", href: "#", icon: "building-house" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const componentsArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Offset your carbon footprint",
      link: "Offset-your-carbon-footprint",

      text: "Offset your company's carbon emissions by planting a tree. ",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Corporate gifting to customers",
      link: "Corporate-gifting-to-customers",
      text: "Give your clients a thoughtful gift like a tree that you plant in their honor. ",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Use as Employee engagement",
      link: "Use-as-Employee-engagement",
      text: "Plant a forest and distribute a tree from it to each employee.",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Unique Reward ",
      link: "Unique-Reward",
      text: "Reward respondents with newly planted trees for completing a survey. ",
    },
  },
  {
    Illustration: Pix5,
    TextList: {
      title: "Loyalty Program to Customers ",
      link: "Loyalty-Program-to-Customers",
      text: "Provide clients with a way to convert points into trees to reduce your financial burden. ",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Use Tree in Corporate Social Responsibility (CSR) ",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "Offset your company's carbon emissions by planting a tree. ",
    },
  },
];

function BenefitsSection() {
  const {} = useContext(PageContext);
  const [showNgos, setshowNgos] = useState(false);
  const [showGo, setshowGo] = useState(false);
  const [showIndividuals, setshowIndividuals] = useState(false);
  const [showCompanies, setshowCompanies] = useState(true);
  function CompaniesList({ Pix, TextList, Index }) {
    return (
      <div className="BG-lgreen ">
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          {Index % 2 === 0 ? (
            <div className="container flex items-center max-w-screen-xl m-auto py-10 md:py-20 md:px-15 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
              <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
                <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center">
                    <a
                      className="block md:w-3/4 w-2/4 px-4 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                      href={`get-involved/sponsors/companies/${TextList.link}`}
                    >
                      Read More . . .
                    </a>
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
            <div className="container flex items-center max-w-screen-xl m-auto py-10 md:py-20 text-gray-600  md:px-12 xl:px-22  bg-white w-screen">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-6/12 w-9/10 mx-auto">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
                <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center">
                    <a
                      className="block md:w-3/4 w-2/4 px-4 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                      href={`get-involved/sponsors/companies/${TextList.link}`}
                    >
                      Read More . . .
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const Companies = () => {
    return (
      <div>
        {componentsArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
        <div className="relative forestBG centerize">
          <a
            className=" px-10 py-4 text-base font-medium bg-white rounded-lg shadow-md lgreen  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
            href="/about"
          >
            Create Company Forest
          </a>
        </div>
      </div>
    );
  };

  const Individuals = () => {
    return (
      <div className="BG-lgreen ">
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          <div className="container flex items-center max-w-screen-xl m-auto sm:py-20 sm:px-15 pb-10 px-5 text-gray-600 md:px-12 xl:px-22  BG-lgreen w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="md:6/12 lg:w-6/12">
                <img
                  src={co2}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
              <div className="text-left md:6/12 lg:w-6/12 sm:ml-12">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Offset your CO2 emission
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  Offset Climate change is a major issue in our civilization,
                  and one of the greenhouse gases that exacerbate it is CO2.
                  This gas absorbs radiation and stores heat in the atmosphere,
                  resulting in a variety of environmental disasters. The most
                  effective measure is to limit your CO2 emissions via daily
                  activities; nevertheless, carbon offsets can provide a
                  solution by producing a benefit for the earth and aiding
                  Earth's natural filtering. These carbon-offsetting projects
                  rely on the preservation of existing forests as well as the
                  planting of new trees.
                </div>
              </div>
            </div>
          </div>
          <div className="container flex items-center max-w-screen-xl m-auto sm:py-20 py-10px-5 text-gray-600 md:px-12 xl:px-22  bg-white w-screen">
            <div className="space-y-6 md:space-y-0 md:flex flex-col md:gap-6 lg:items-center lg:gap-12">
              <div className="text-center  sm:ml-12">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Calculate your carbon emission
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  The Personal Carbon Footprint attempts to quantify an
                  individual's environmental effect. Its computation enables you
                  to reduce or optimize your energy efficiency and adjust your
                  consumption patterns to lessen your environmental effect. Many
                  of our regular activities, such as consuming power,
                  transportation, housing, food, and trash disposal, contribute
                  to greenhouse gas emissions. These emissions add together to
                  form a household's carbon footprint.
                </div>
              </div>
              <div className="">
                <img
                  src={calc}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="container  BG-lgreen flex items-center max-w-screen-xl m-auto py-10 sm:py-20 px-5 text-gray-600 md:px-12 xl:px-22  w-screen">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="text-left md:6/12 lg:w-6/12 sm:ml-12">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Gift tree
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  A heartfelt and enduring method to express your gratitude is
                  to give someone a tree in their honor. Make someone happy
                  knowing they are contributing to a healthy earth!
                </div>
                <div className="flex flex-wrap gap-4 mt-10 text-center">
                  <a
                    className="block sm:w-1/2 w-full  py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                    href="get-involved/sponsors/individuals/gift-tree"
                  >
                    Read More . . .
                  </a>
                </div>
              </div>
              <div className="md:5/12 lg:w-6/12">
                <img
                  src={gift}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <Carousel />
      </div>
    );
  };

  const Ngos = () => {
    return (
      <div className="BG-lgreen ">
        <div className=" sm:py-10 flex  flex-col  flex-wrapitems-center justify-center BG1">
          <div className="container flex items-center max-w-screen-xl m-auto sm:py-20 py-10 px-5 text-gray-600 md:px-12 xl:px-22  BG-lgreen w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="text-left md:6/12 lg:w-6/12 sm:ml-12">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Non Governmental Organizations
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  Non-governmental Organizations can promote and sponsor tree
                  planting and other carbon offsetting projects to tackle
                  environmental issues and protect diversity.
                </div>
                <div className="flex flex-wrap gap-4 mt-10 text-center">
                  <a
                    className="block sm:w-1/2 w-full py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                    href="/about"
                  >
                    Read More . . .
                  </a>
                </div>
              </div>
              <div className="md:6/12 lg:w-6/12">
                <img
                  src={charity}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Gos = () => {
    return (
      <div className="BG-lgreen ">
        <div className=" sm:py-10 flex  flex-col  flex-wrapitems-center justify-center BG1">
          <div className="container flex items-center max-w-screen-xl m-auto sm:py-20 py-10 px-5 text-gray-600 md:px-12 xl:px-22  BG-lgreen w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="text-left md:6/12 lg:w-6/12 sm:ml-12">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Governmental Organizations
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  Governmental Organizations can promote and sponsor tree
                  planting and other carbon offsetting projects to tackle
                  environmental issues.
                </div>
                <div className="flex flex-wrap gap-4 mt-10 text-center">
                  <a
                    className="block w-full sm:w-1/2  py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                    href="/about"
                  >
                    Read More . . .
                  </a>
                </div>
              </div>
              <div className="md:6/12 lg:w-6/12">
                <img
                  src={government}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HeaderLink = ({ item, index }) => {
    const [current, setCurrent] = useState(false);
    return (
      <a
        onClick={() => setCurrent(true)}
        key={item.name}
        href={item.href}
        className={classNames(
          item.current ? " lgreen border-bt" : "darkgrey hover:lgreen ",
          "px-3 py-3 flex items-center cursor-pointer"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        <span
          className={classNames(
            item.current ? " lgreen" : "  text-gray-400",
            "inline-flex items-center justify-center h-10 w-12"
          )}
        >
          <i className={`bx bxs-${item.icon} bx-sm`}></i>
        </span>
        <span className=" text-base font-medium">{item.name}</span>
      </a>
    );
  };

  return (
    <div className="min-h-full">
      {/* <Disclosure as="nav" className="shadow-md">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center  lg:h-16">
                <div className="flex items-center">
                  <div className="block">
                    <div className="sm:ml-10 flex w-menu flex-col md:flex-row items-baseline space-x-20">
                      <div
                        onClick={() => {
                          setshowIndividuals(false);
                          setshowCompanies(true);
                          setshowNgos(false);
                          setshowGo(false);
                        }}
                        className={classNames(
                          showCompanies
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 py-3 flex items-center cursor-pointer"
                        )}
                        aria-current={showCompanies ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showCompanies ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-building-house bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">
                          Companies
                        </span>
                      </div>
                      <div
                        onClick={() => {
                          setshowIndividuals(true);
                          setshowCompanies(false);
                          setshowNgos(false);
                          setshowGo(false);
                        }}
                        className={classNames(
                          showIndividuals
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        aria-current={showIndividuals ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showIndividuals ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-user bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">
                          Individuals
                        </span>
                      </div>
                      <div
                        className={classNames(
                          showNgos
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowIndividuals(false);
                          setshowCompanies(false);
                          setshowNgos(true);
                          setshowGo(false);
                        }}
                        aria-current={showNgos ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showNgos ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-building-house bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">NGOs</span>
                      </div>
                      <div
                        className={classNames(
                          showGo
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowIndividuals(false);
                          setshowCompanies(false);
                          setshowNgos(false);
                          setshowGo(true);
                        }}
                        aria-current={showGo ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showGo ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-user bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">
                          Governmental Organizations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </>
        )}
      </Disclosure> */}

      <header className="bg-white shadow"></header>
      <main>
        <div className="flex flex-col px-4 mx-auto sm:flex-row lg:max-w-screen-lg mb-40 mt-10 gap-10 leading-loose lgreen text-left text-lg">
          <div className="">
            <h1 className="text-3xl  sm:(text-4xl !leading-tight) font-bold capitalize  lgreen">
              Trees Are Our Only Source of Oxygen
            </h1>
            <p className="mt-4 text-gray-600 text-base">
              Creatures on the earth are alive because they inhale oxygen from
              the air, which helps run their bodily mechanisms and exhale carbon
              dioxide as a by-product of the function of the body. Nature's only
              source of oxygen is the trees. Through a process called
              photosynthesis, trees prepare food for their survival.
            </p>
            <p className="mt-4 text-gray-600 text-base">
              This process requires carbon dioxide from the air as a material
              and produces oxygen as a by-product. Trees emit this gas into the
              air, increasing its proportion and thereby meeting the need of the
              living creatures. An acre of land full of mature trees can produce
              enough oxygen for 18 people in a year.
            </p>
          </div>
          <div className="">
            <h1 className="text-3xl mt-4 sm: mt-0 sm:(text-4xl !leading-tight) font-bold capitalize  lgreen">
              Trees Absorb Other Harmful Gases
            </h1>
            <p className="mt-4 text-gray-600 text-base">
              Trees absorb pollutant gases like nitrogen oxides, sulfur dioxide,
              ammonia, and ozone from the air and purify them. They filter
              particulates out of the air and trap them on their barks and
              leaves.
            </p>
            <p className="mt-4 text-gray-600 text-base">
              Trees and shrubs, like all plants, also help to protect us from
              pollutants by acting as natural filters. Harmful heavy metals,
              nitrogen, potassium, and phosphorus on our land surfaces can
              contaminate our water, but the roots of shrubs intercept these
              pollutants. This is why it is especially important to plant shrubs
              on land that borders water - this is called the riparian zone.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BenefitsSection;
