import React, { useState, useContext } from "react";
import { GreenLogo, ShopIcon } from "../../../assets"
import DropdownNavItem from "../DropdownNavItem";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import cart from "../../../assets/learing-assets/cart.png"
import { Link } from "react-router-dom";

const LearningPageNavbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return   <nav className="sticky w-screen flex items-center justify-center p-4 bg-white shadow-md z-10 ">
		<div className="container  sm:mx-6 flex flex-wrap items-center justify-between max-w-screen-xl">
			<div className="w-full py-0 sm:py-0 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
				<a
				className="flex items-center px-2  mr-4 whitespace-nowrap  text-zinc-800"
				href="/learning"
				>
				<GreenLogo color="#028000" />
				</a>
				<div className="flex items-center">
				<a
					className={`px-3  items-center text-base font-medium  text-zinc-800 hover:opacity-75 ${navbarOpen && "hidden"} lg:hidden`}
					href="/learning/cart"
					>
					
					<img src={cart} alt="cart" className="w-6"/>
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
			</div>
			<div
				className={`w-full lg:flex lg:w-auto  font-medium ${
				navbarOpen ? " flex flex-col" : " hidden"
				}`}
			>
				<ul className="flex flex-col  md:h-55px justify-center pt-10 lg:pt-0 items-center list-none md:flex-row  md:ml-auto w-full">
				<li className="my-3 lg:my-auto  ml-2  flex items-center ">
					<Link
					className="px-2 flex items-center text-base font-medium  text-zinc-800 hover:opacity-75"
					to="/learning"
					>
					<span className="ml-2 py-2">Home</span>
					</Link>
				</li>
				<li className="my-3 lg:my-auto  ml-2  flex items-center ">
					<Link
					className="px-2 flex items-center text-base font-medium  text-zinc-800 hover:opacity-75"
					to="/map"
					>
					<span className="ml-2 py-2">Map</span>
					</Link>
				</li>
				<li className="my-3 lg:my-auto ml-2 flex items-center ">
					<Link
					className="px-2 flex items-center text-base font-medium  text-zinc-800 hover:opacity-75"
					to="/process"
					>
					<span className="ml-2 py-2">Blog</span>
					</Link>
				</li>

				<li className="my-3 lg:my-auto   ml-4 flex items-center ">
					<Link
					className="px-3  items-center text-base font-medium  text-zinc-800 hover:opacity-75"
					to="#"
					>
					
					<p>Contact Us</p>
					</Link>
				</li>
				<li className="my-3 lg:my-auto   ml-4 flex items-center ">
					<Link
					className="px-3  items-center text-base font-medium  text-zinc-800 hover:opacity-75"
					to="/learning/cart"
					>
					
					<img src={cart} alt="cart" className={`w-8 ${navbarOpen && "hidden"}`}/>
					</Link>
				</li>
				<li className="my-3 lg:my-auto  ml-2 flex items-center ">
					<Link
					className="px-3  flex items-center text-base font-medium  text-zinc-800 hover:opacity-75"
					to="/learning/dashboard"
					>
					<span className="ml-2 bg-lgreen text-white py-2 px-5 rounded-lg hover:text-zinc-800 hover:bg-transparent hover-bd-lgreen hover:border-1">
						Sign up
					</span>
					</Link>
				</li>
				<li className="my-5 lg:my-auto  ml-2 flex items-center ">
					<Link
					className="px-3 flex  items-center text-base font-medium  text-zinc-800 hover:opacity-75"
					to="/learning/dashboard"
					>
					<span className="ml-2 text-zinc-800 py-2 px-5 rounded-lg hover:text-white hover-bg-lgreen hover:border-white hover:border-1 bd-lgreen border-1">
						Sign in
					</span>
					</Link>
				</li>
				</ul>
			</div>
		</div>
  </nav>
}
export default LearningPageNavbar