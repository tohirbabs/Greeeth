import React from "react";
import { useState, useContext } from "react";
import ForestBG from "../../assets/company forest.png";
import { PageContext } from "../App";

import Carousel from "./Carousel";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AmbassadorsApply() {
  const {} = useContext(PageContext);

  const AmbassadorForm = () => {
    return (
      <div className="BG-lgreen ">
        <div class="max-w-6xl mx-auto p-5 sm:p-16">
          <form>
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
                  placeholder="John"
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
                Gender
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select your gender"
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
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Why do you want to become a Greeeth Ambassador?
              </label>
              <textarea
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-60 p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Why do you want to become a Greeeth Ambassador? "
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                What is your Favorite Tree?
              </label>
              <textarea
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-30 p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the name of your favorite Tree"
                required
              />
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
              Apply to be an Ambassador today
            </h1>

            <p className="mt-10 text-lg sm:leading-relaxed text-bold px-2 sm:text-xl">
              Become our ambassador and encourage tree planting in your
              community, state and country.
            </p>
          </div>
        </div>
      </section>
      <div className="min-h-full">
        <AmbassadorForm />
      </div>
    </>
  );
}

export default AmbassadorsApply;
