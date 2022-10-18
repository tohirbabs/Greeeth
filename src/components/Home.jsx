import React from "react";
import TreeBG from "../../assets/TreeBG.png";
import NavBar from "./NavBar.jsx";

function Home() {
  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full sm:opacity-100"
        src={TreeBG}
        alt="Page background with Trees"
      />
      <div className="rect" />
      <NavBar />
      <div className="relative max-w-screen-xl px-2 py-2 ml-12 lg:h-screen lg:items-center lg:flex text-white">
        <div className="max-w-xl text-left sm:text-left">
          <h1 className="text-3xl  sm:text-5xl">
            Offset your carbon blueprint with GREEETH.
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            The best way for individuals and companies to plant trees, offset
            their carbon footprint and restore ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-1/2 px-12 py-3 text-sm font-semibold bg-white rounded-lg shadow text-green-900 sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
              href="/about"
            >
              Plant now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
