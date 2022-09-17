import React, { useState } from "react";
import { profilePic, ShopIcon } from "../../assets";
import DropdownNavItem from "./DropdownNavItem";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import DropdownTopNavItem from "./DropdownTopNavItem";
import { SearchIcon } from "@heroicons/react/solid";
import { Cookies, useCookies } from "react-cookie";

const TopNav = () => {
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
  const [cookies, setCookie] = useCookies();

  return (
    <div className="sm:p-2  py-2 sm:py-2 px-2 w-full ">
      <div className="flex justify-between items-center sm:mr-4">
        <div className="">
          <h1 className="sm:text-3xl text-base font-bold ligreen">
            Dashboard<span className="sm:text-xl "> - {cookies.dashnav}</span>
          </h1>
        </div>
        <div className="">
          <div className="flex items-center sm:gap-4 gap-2">
            <div className="hidden sm:block  rounded-xl bg-lgreen text-white p-1 px-4">
              {/* <SearchIcon className="sm:hidden block h-8 w-8 ligreen" />
              <input
                className="p-1 sm:w-20vw text-sm sm:text-base"
                placeholder="Search here"
                type="search"
                name=""
                id=""
              /> */}
              <h2 className="">Timmy Abubakar</h2>
            </div>
            <img
              src={profilePic}
              alt=""
              className="w-2.2rem h-2.2rem bd-lgreen border-2px rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
