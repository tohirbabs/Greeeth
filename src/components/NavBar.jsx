import React, { useState } from "react";
import { HamMenu, ShopIcon, Logo, GreenLogo } from "../../assets";

/* This DropdownNavItem requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const getInvolvedMenuItems = [
  {
    menuItemName: "Companies",
    menuItemLink: "#",
  },
  {
    menuItemName: "Individuals",
    menuItemLink: "#",
  },
  {
    menuItemName: "NGOs",
    menuItemLink: "#",
  },
  {
    menuItemName: "Governmental Organizations",
    menuItemLink: "#",
  },
];

function DropdownNavItem({ itemName, itemMenu }) {
  console.log(itemMenu);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center text-base font-medium leading-snug text-zinc-800 hover:opacity-75 w-full ">
          {itemName}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
            {itemMenu.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={item.menuItemLink}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.menuItemName}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-center px-2 bg-transparent shadow-lg ">
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
            <li className="nav-item ml-2 py-4 px-7 flex items-center">
              <DropdownNavItem
                itemName="What We Do"
                itemMenu={getInvolvedMenuItems}
              />
            </li>
            <li className="nav-item ml-2 py-4 px-7 flex items-center">
              <DropdownNavItem
                itemName="Get Involved"
                itemMenu={getInvolvedMenuItems}
              />
            </li>

            <li className="nav-item  py-2">
              <a
                className="px-7 py-2 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 py-4">Map</span>
              </a>
            </li>
            <li className="nav-item ml-2 py-4 px-7 flex items-center mr-35">
              <DropdownNavItem
                itemName="Crypto"
                itemMenu={getInvolvedMenuItems}
              />
            </li>

            <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-base  font-normal leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2">
                  {" "}
                  <ShopIcon />
                  Shop
                </span>
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="px-3 py-2 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 bg-lgreen text-white py-2 px-5 rounded-lg hover:text-zinc-800 hover:bg-transparent hover-bd-lgreen hover:border-2">
                  Donate
                </span>
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="px-3 py-2 flex  items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
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
