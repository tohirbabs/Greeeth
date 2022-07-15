import React from "react";
import TreeBG from "../../assets/t1.png";
import NavBar from "./NavBar.jsx";

function PlantersHome() {
  return (
    <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
      <div className="container h-full  lg:mx-6 my-3 flex flex-col lg:flex-wrap items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <div className="lg:max-w-6/11 text-center darkgreen">
          <h1 className="text-3xl  sm:(text-7xl !leading-tight) font-medium capitalize lgreen">
            Planters complete tree-planting tasks & get Paid.
          </h1>

          <p className="lg:max-w-10/12 mt-6 sm:leading-relaxed sm:text-xl">
            Our platform offers easy-to-implement technology, information, and
            tips on planting.
          </p>

          <div className="flex justify-center flex-wrap lg:gap-4 mt-10 text-center">
            <a
              className="block w-1/2 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
              href="/about"
            >
              Plant now
            </a>
          </div>
        </div>
        <img
          src={TreeBG}
          alt="Tree illustration"
          width={350}
          height={500}
          // loading="lazy"
          className="mx-auto max-w-3/5 lg:max-w-7/11"
        />
      </div>
    </section>
  );
}
export default PlantersHome;
