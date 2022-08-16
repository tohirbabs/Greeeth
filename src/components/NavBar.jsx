import React, { useState, useContext } from "react";
import { ShopIcon, GreenLogo } from "../../assets";

import DropdownNavItem from "./DropdownNavItem";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const getInvolvedMenuItems = [
  "sponsors",
  "volunteers",
  "schools",
  "partners",
  "planters",
  "ambassadors",
];

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky w-screen flex items-center justify-center p-4 bg-white shadow-md z-10">
      <div className="container  sm:mx-6 flex flex-wrap items-center justify-between max-w-screen-xl">
        <div className="w-full py-0 sm:py-0 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="flex items-center px-2 inline-block mr-4 whitespace-nowrap  text-zinc-800"
            href="/"
          >
            <GreenLogo color="#028000" />
          </a>
          <button
            className="cursor-pointer px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <XIcon className="block h-8 w-8 lgreen" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-8 w-8 lgreen" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          className={`lg:flex w-screen lg:w-auto  font-medium items-center${
            navbarOpen ? " flex flex-col items-center" : " hidden"
          }`}
        >
          <ul className="flex flex-col h-scrn md:h-55px justify-center pt-10 lg:pt-0 items-center list-none md:flex-row list-none md:ml-auto">
            <li className="my-5 lg:my-auto ml-6 px-2 flex items-center">
              <DropdownNavItem
                itemName="What We Do"
                itemMenu={getInvolvedMenuItems}
              />
            </li>
            <li className="my-5 lg:my-auto ml-6 px-2 flex items-center">
              <DropdownNavItem
                itemName="Get Involved"
                itemMenu={getInvolvedMenuItems}
              />
            </li>

            <li className="my-3 lg:my-auto  ml-2  flex items-center ">
              <a
                className="px-2 flex items-center text-base font-medium  text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 py-2">Map</span>
              </a>
            </li>
            <li className="my-3 lg:my-auto ml-2 flex items-center ">
              <a
                className="px-2 flex items-center text-base font-medium  text-zinc-800 hover:opacity-75"
                href="/process"
              >
                <span className="ml-2 py-2">Process</span>
              </a>
            </li>

            <li className="my-3 lg:my-auto   ml-4 flex items-center ">
              <a
                className="px-3  items-center text-base font-medium  text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <ShopIcon />
                <p>shop</p>
              </a>
            </li>
            <li className="my-3 lg:my-auto  ml-2 flex items-center ">
              <a
                className="px-3  flex items-center text-base font-medium  text-zinc-800 hover:opacity-75"
                href="/auth/sign-in"
              >
                <span className="ml-2 bg-lgreen text-white py-2 px-5 rounded-lg hover:text-zinc-800 hover:bg-transparent hover-bd-lgreen hover:border-1">
                  Sign up
                </span>
              </a>
            </li>
            <li className="my-5 lg:my-auto  ml-2 flex items-center ">
              <a
                className="px-3 flex  items-center text-base font-medium  text-zinc-800 hover:opacity-75"
                href="/auth/sign-in"
              >
                <span className="ml-2 text-zinc-800 py-2 px-5 rounded-lg hover:text-white hover-bg-lgreen hover:border-white hover:border-1 bd-lgreen border-1">
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
