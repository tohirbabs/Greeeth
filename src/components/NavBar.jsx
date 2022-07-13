import React, { useState, useContext } from "react";
import { HamMenu, ShopIcon, Logo, GreenLogo } from "../../assets";

/* This DropdownNavItem requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { PageContext } from "../App";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const getInvolvedMenuItems = [
  {
    menuItemName: "Companies",
  },
  {
    menuItemName: "Individuals",
  },
  {
    menuItemName: "NGOs",
  },
  {
    menuItemName: "Governmental Organizations",
  },
];

function NavBar() {
  const {
    setshowCompanies,
    showCompanies,
    setshowIndividuals,
    showIndividuals,
  } = useContext(PageContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  function DropdownNavItem({ itemName, itemMenu }) {
    console.log(itemMenu);
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center text-base font-medium leading-snug text-zinc-800 hover:opacity-75 w-full ">
            {itemName}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setshowIndividuals(false);
                      setshowCompanies(true);
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    href="/get-involved/sponsors"
                  >
                    Sponsor
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      setshowIndividuals(true);
                      setshowCompanies(false);
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    href="/get-involved/volunteers"
                  >
                    Volunteers
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    href="/get-involved/schools"
                  >
                    Schools
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    href="/get-involved/partners"
                  >
                    Partners
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    href="/get-involved/planters"
                  >
                    Planters
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    href="/get-involved/ambassadors"
                  >
                    Ambassador
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }

  return (
    <nav className="relative  z-100 flex flex-wrap items-center justify-center px-2 bg-transparent shadow-lg ">
      <div className="container  mx-6 flex flex-wrap items-center justify-between max-w-screen-xl">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-4xl font-medium leading-relaxed inline-block mr-4 whitespace-nowrap  text-zinc-800"
            href="/"
          >
            <GreenLogo />
          </a>
          <button
            className="text-zinc-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <HamMenu />
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center${
            navbarOpen ? " flex" : " hidden"
          }`}
          id="navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item ml-8 py-2 px-2 flex items-center">
              <DropdownNavItem
                itemName="What We Do"
                itemMenu={getInvolvedMenuItems}
              />
            </li>
            <li className="nav-item ml-8 py-2 px-2 flex items-center">
              <DropdownNavItem
                itemName="Get Involved"
                itemMenu={getInvolvedMenuItems}
              />
            </li>

            <li className="nav-item  ml-4 py-2 px-2 flex items-center ">
              <a
                className="px-4 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 py-2">Map</span>
              </a>
            </li>
            <li className="nav-item ml-4 py-2 px-2 flex items-center ">
              <a
                className="px-4flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="/process"
              >
                <span className="ml-2 py-2">Process</span>
              </a>
            </li>

            <li className="nav-item   ml-20 py-2 flex items-center ">
              <a
                className="px-3flex items-center text-base  font-normal leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2">
                  {" "}
                  <ShopIcon />
                  Shop
                </span>
              </a>
            </li>
            <li className="nav-item  ml-2 py-2 flex items-center ">
              <a
                className="px-3  flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 bg-lgreen text-white py-2 px-5 rounded-lg hover:text-zinc-800 hover:bg-transparent hover-bd-lgreen hover:border-2">
                  Donate
                </span>
              </a>
            </li>
            <li className="nav-item  ml-2 py-2 flex items-center ">
              <a
                className="px-3 flex  items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="auth/sign-in"
              >
                <span className="ml-2 text-zinc-800 py-2 px-5 rounded-lg hover:text-white hover-bg-lgreen hover:border-white hover:border-2 bd-lgreen border-2">
                  Sign in
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
