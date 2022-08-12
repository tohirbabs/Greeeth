import React, { useState } from "react";
import { ShopIcon } from "../../assets";
import DropdownNavItem from "./DropdownNavItem";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import DropdownTopNavItem from "./DropdownTopNavItem";

const TopBar = () => {
  const getInvolvedMenuItems = [
    "sponsors",
    "volunteers",
    "schools",
    "partners",
    "planters",
    "ambassadors",
  ];
  const MenuItems = ["What we do", "Map", "Process", "Shop"];
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="sm:p-2 z-100 py-2 sm:py-2 grow px-2 w-full  bg-lightgreen">
      <div className="flex justify-between items-center sm:mr-4">
        <div className="">
          <div className="flex items-center sm:gap-4 gap-2">
            <img
              src="/assets/profile.png"
              alt=""
              className="w-2.5rem h-2.5rem"
            />
            <input
              className="rounded border sm:p-2 p-1 sm:w-30vw text-sm sm:text-base"
              placeholder="Search here"
              type="search"
              name=""
              id=""
            />
            <button
              className="bg-lgreen p-2 sm:px-4 text-white rounded text-sm sm:text-base"
              type="submit"
            >
              search
            </button>
          </div>
        </div>
        <DropdownTopNavItem
          itemName={
            <MenuIcon
              className="sm:hidden block h-8 w-8 lgreen"
              aria-hidden="true"
            />
          }
          itemMenu={MenuItems}
        />
        {/* <button
          className="cursor-pointer px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <XIcon className="block h-8 w-8 lgreen" aria-hidden="true" />
          ) : (
            <MenuIcon className="block h-8 w-8 lgreen" aria-hidden="true" />
          )}
        </button> */}
        <div
          className={`lg:flex w-screen lg:w-auto  font-medium items-center${
            navbarOpen
              ? " flex flex-col items-center absolute h-[calc(100vh-55px)] bg-white z-100 left-0 top-55px"
              : " hidden"
          }`}
        >
          <ul className="flex flex-col h-scrn sm:flex-row md:h-55px justify-center pt-10 sm:flex lg:pt-0 items-center list-none md:flex-row list-none ">
            <li className="my-5 lg:my-auto ml-6 px-2 flex items-center">
              <DropdownNavItem
                itemName="What We Do"
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
