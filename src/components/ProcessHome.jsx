import React from "react";
import TreeBG from "../../assets/processtrees.png";
import NavBar from "./NavBar.jsx";

function ProcessHome() {
  return (
    <section className=" grad-lgreen  flex-wrap items-center justify-center h-viewheight w-100vw overflow-hidden flex flex-col">
      <div className="container mx-2  sm:mx-6 my-3 flex flex-col sm:flex-row  sm:flex-wrap items-center sm:justify-between mx-auto sm:max-w-screen-xl px-2 py-2 sm:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <div className="sm:max-w-5/11 my-auto sm:text-left text-center sm:text-left darkgreen ">
          <h1 className="text-3xl  sm:(text-5xl !leading-tight) font-medium capitalize lgreen">
            Understanding The Process
          </h1>

          <p className="sm:max-w-10/12 mt-6 sm:leading-relaxed sm:text-xl">
            The best way for individuals and companies to plant trees, offset
            their carbon footprint and restore ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 justify-center text-center w-full">
            <a
              className="block w-1/2 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
              href="/about"
            >
              Plant now
            </a>
          </div>
        </div>
        <img
          src={TreeBG}
          alt="Tree illustration"
          // width={600}
          // height={600}
          // loading="lazy"
          className="sm:absolute sm:right-0 sm:-top-70px sm:block hidden sm:w-55vw"
        />
      </div>
    </section>
  );
}
export default ProcessHome;
