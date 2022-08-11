import React from "react";
import DropdownNavItem from "./DropdownNavItem";

const TopBar = () => {
  const getInvolvedMenuItems = [
    "sponsors",
    "volunteers",
    "schools",
    "partners",
    "planters",
    "ambassadors",
  ];
  return (
    <div className="sm:p-2 py-2 sm:py-2 grow px-2 w-full max-w-1100px fixed top-0 bg-lightgreen">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex items-center sm:gap-4 gap-2">
            <img src="/assets/profile.png" alt="" className="w-2rem h-2rem" />
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
        <ul className="flex  md:h-55px justify-center hidden sm:flex lg:pt-0 items-center list-none md:flex-row list-none ">
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
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
