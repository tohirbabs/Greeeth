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

import Carousel from "./Carousel";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

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

function SponsorsApply() {
  const {} = useContext(PageContext);
  const [showNgos, setshowNgos] = useState(false);
  const [showGo, setshowGo] = useState(false);
  const [showCompanies, setshowCompanies] = useState(true);
  function CompaniesList({ Pix, TextList, Index }) {
    return (
      <div className="BG-lgreen ">
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          {Index % 2 === 0 ? (
            <div className="container flex items-center max-w-screen-xl m-auto py-20  text-gray-600 md:px-12 xl:px-22  BG-lgreen w-screen">
              <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
                <div className="text-left md:6/12 lg:w-6/12 ml-12">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center">
                    <a
                      className="block w-3/4 px-4 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                      href="/about"
                    >
                      Read More . . .
                    </a>
                  </div>
                </div>
                <div className="md:6/12 lg:w-6/12">
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
            <div className="container flex items-center max-w-screen-xl m-auto py-20 text-gray-600 md:px-12 xl:px-22  bg-white w-screen">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-6/12">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
                <div className="text-left md:6/12 lg:w-6/12 ml-12">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center">
                    <a
                      className="block w-3/4 px-4 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                      href="/about"
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
      <div className="BG-lgreen ">
        <div class="max-w-6xl mx-auto p-5 sm:p-16">
          <form>
            <h2 className="text-3xl text-left  mb-10 sm:(text-4xl !leading-tight) font-medium capitalize lgreen">
              Company's General Information
            </h2>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Company Name
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the name of your company"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Number of Employee
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select the no of employee(s)"
                required
              />
            </div>

            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Industry
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select the type of Industry"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Company Email Address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g JohnDoe@xyz.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Company Address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your company address"
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  State
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Year Founded
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g +123840637788"
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Website Address
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g www.greeethxyz.com"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile URL
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Instagram Profile URL
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile URL
                </label>
                <input
                  type="url"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tiktok Profile URL
                </label>
                <input
                  type="number"
                  id="visitors"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <h2 className="text-3xl text-left mt-20 mb-10 sm:(text-4xl !leading-tight) font-medium capitalize lgreen">
              Representative Information
            </h2>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g JohnDoe@xyz.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Country
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  State
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g JohnDoe@xyz.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                LinkedIn Profile URL
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Instagram Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tiktok Profile URL
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="flex w-full items-start mb-6 mt-15">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              class="text-white mt-5  bg-lgreen hover:bg-green hover:lgreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Ngos = () => {
    return (
      <div className="BG-lgreen ">
        <div class="max-w-6xl mx-auto p-5 sm:p-16">
          <form>
            <h2 className="text-3xl text-left  mb-10 sm:(text-4xl !leading-tight) font-medium capitalize lgreen">
              Organization General Information
            </h2>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Organization Name
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the name of your organization"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Organization Email
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g JohnDoe@xyz.com"
                required
              />
            </div>

            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Year Founded
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Country Registered
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g +123840637788"
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Website Address
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g www.greeethxyz.com"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile URL
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Instagram Profile URL
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile URL
                </label>
                <input
                  type="url"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tiktok Profile URL
                </label>
                <input
                  type="number"
                  id="visitors"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <h2 className="text-3xl text-left mt-20 mb-10 sm:(text-4xl !leading-tight) font-medium capitalize lgreen">
              Representative Information
            </h2>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Country
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  State
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g +123840637788"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                LinkedIn Profile URL
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Instagram Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tiktok Profile URL
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="flex w-full items-start mb-6 mt-15">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              class="text-white mt-5  bg-lgreen hover:bg-green hover:lgreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    );
  };
  const Gos = () => {
    return (
      <div className="BG-lgreen ">
        <div class="max-w-6xl mx-auto p-5 sm:p-16">
          <form>
            <h2 className="text-3xl text-left  mb-10 sm:(text-4xl !leading-tight) font-medium capitalize lgreen">
              Organization General Information
            </h2>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Organization Name
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the name of your organization"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Organization Email
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g JohnDoe@xyz.com"
                required
              />
            </div>

            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Year Founded
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Country Registered
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g +123840637788"
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Website Address
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g www.greeethxyz.com"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile URL
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Instagram Profile URL
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile URL
                </label>
                <input
                  type="url"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tiktok Profile URL
                </label>
                <input
                  type="number"
                  id="visitors"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <h2 className="text-3xl text-left mt-20 mb-10 sm:(text-4xl !leading-tight) font-medium capitalize lgreen">
              Representative Information
            </h2>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Country
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  State
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g +123840637788"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                LinkedIn Profile URL
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Instagram Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tiktok Profile URL
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="flex w-full items-start mb-6 mt-15">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              class="text-white mt-5  bg-lgreen hover:bg-green hover:lgreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className=" grad-lgreen flex-wrap items-center justify-center  flex flex-col">
        <div className="container h-full  lg:mx-6 my-10 flex flex-col flex-wrap items-center justify-around lg:max-w-9/10 px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-8/11 text-center darkgreen">
            <h1 className="text-4xl  sm:(text-5xl !leading-tight) font-medium capitalize lgreen">
              Apply to be a Sponsor today
            </h1>

            <p className="mt-10 text-lg sm:leading-relaxed text-bold px-2 sm:text-xl">
              Companies, Individuals, Non-Governmental Organization and
              Governmental Organizations
            </p>
          </div>
        </div>
      </section>
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
                          className={classNames(
                            showNgos
                              ? " lgreen border-bt"
                              : "darkgrey hover:lgreen ",
                            "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                          )}
                          onClick={() => {
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
                            "px-3 py-3 !ml-0 sm:!ml-75px  flex items-center cursor-pointer"
                          )}
                          onClick={() => {
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
                  {/* <div className="-mr-2 flex md:hidden">
                    Mobile menu button
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div> */}
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
          {showCompanies ? (
            <Companies />
          ) : showNgos ? (
            <Ngos />
          ) : showGo ? (
            <Gos />
          ) : (
            <Companies />
          )}
        </main>
      </div>
    </>
  );
}

export default SponsorsApply;
