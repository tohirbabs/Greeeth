import React from "react";
import { Pix1, Pix2, Pix3, Pix4, Pix5, Pix7 } from "../../assets/GetInvolved";

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
  { name: "Companies", href: "#", current: true, icon: "building-house" },
  { name: "Individuals", href: "#", current: false, icon: "user" },
  { name: "NGOs", href: "#", current: false, icon: "building-house" },
  {
    name: "Governmental Organizations",
    href: "#",
    current: false,
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
      text: "Offset your company's carbon emissions by planting a tree. ",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Corporate gifting to customers",
      text: "Give your clients a thoughtful gift like a tree that you plant in their honor. ",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Use as Employee engagement",
      text: "Plant a forest and distribute a tree from it to each employee.",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Unique Reward ",
      text: "Reward respondents with newly planted trees for completing a survey. ",
    },
  },
  {
    Illustration: Pix5,
    TextList: {
      title: "Loyalty Program to Customers ",
      text: "Provide clients with a way to convert points into trees to reduce your financial burden. ",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Use Tree in Corporate Social Responsibility (CSR) ",
      text: "Offset your company's carbon emissions by planting a tree. ",
    },
  },
];

function GetInvolvedSection() {
  function GetInvolvedList({ Pix, TextList, Index }) {
    return (
      <div className="BG-lgreen ">
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          {Index % 2 === 0 ? (
            <div className="container flex items-center max-w-screen-xl m-auto py-20 px-15 text-gray-600 md:px-12 xl:px-22  BG-lgreen w-screen">
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
                      className="block w-1/2 px-30 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
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
                      className="block w-1/2 px-30 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
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
  function Example() {
    return (
      <>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
        <div className="min-h-full">
          <Disclosure as="nav" className="shadow-md">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-center h-16">
                    <div className="flex items-center">
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-20">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? " lgreen border-bt"
                                  : "darkgrey hover:lgreen ",
                                "px-3 py-3 flex items-center"
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
                              <span className=" text-base font-medium">
                                {item.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
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
                    </div>
                  </div>
                </div>

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
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <header className="bg-white shadow"></header>
          <main>
            {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> */}
            {componentsArray.map((comp, i) => (
              <GetInvolvedList
                Pix={comp.Illustration}
                TextList={comp.TextList}
                Index={i}
              />
            ))}
            {/* </div> */}
          </main>
        </div>
      </>
    );
  }
  return (
    <div>
      <Example />
    </div>
  );
}

export default GetInvolvedSection;
