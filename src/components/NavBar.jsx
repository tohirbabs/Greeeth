import React, { useState } from "react";
import { HamMenu, ShopIcon, Logo, GreenLogo } from "../../assets";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-center px-2 bg-transparent ">
      <div className="container  mx-6 my-3 flex flex-wrap items-center justify-between max-w-screen-xl">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-4xl font-medium leading-relaxed inline-block mr-4 whitespace-nowrap  text-zinc-800"
            href="/"
          >
            {/* <Logo /> */}
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
            <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 py-4">What we do</span>
              </a>
            </li>
            <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 py-4">Get involved</span>
              </a>
            </li>
            <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 py-4">Map</span>
              </a>
            </li>
            <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75 mr-28"
                href="#somelinks"
              >
                <span className="ml-2 py-4">Crypto</span>
              </a>
            </li>
            {/* <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-base  font-medium leading-snug text-zinc-800 hover:opacity-75 mr-28"
                href="/process"
              >
                <span className="ml-2 py-4">PROCESS</span>
              </a>
            </li> */}
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
