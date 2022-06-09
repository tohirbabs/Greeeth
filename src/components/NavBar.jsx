import React, { useState } from 'react';
import HamMenu from '../../assets/HamMenu';
import ShopIcon from '../../assets/ShopIcon';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (

    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent ">
      <div className="container  mx-12 flex flex-wrap items-center justify-between ">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-4xl font-bold leading-relaxed inline-block mr-4 py-4 whitespace-nowrap uppercase text-white"
            href="/"
          >
            GREEETH
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <HamMenu />
          </button>
        </div>
        <div
          className={
              `lg:flex flex-grow items-center${navbarOpen ? ' flex' : ' hidden'}`
            }
          id="navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 py-4">What we do</span>
              </a>
            </li>
            <li className="nav-item  py-2">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#somelinks"
              ><span className="ml-2"> <ShopIcon />Shop</span>
              </a>
            </li>
            <li className="nav-item py-2">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#somelinks"
              >
                <span className="ml-2 bg-white text-green-900 p-4 rounded-lg hover:text-white hover:bg-green-900 hover:border-white hover:border-2">Donate</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
