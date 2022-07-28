import React from "react";
import TreeBG from "../../assets/landing/home-bg.png";
import Drone from "../../assets/landing/Drone.png";

const LandingPage = () => {
  return (
    <div>
      <section className=" grad-lgreen flex-wrap items-center justify-center  flex flex-col">
        <div className="container h-full  lg:mx-6 my-3 flex flex-col items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-9/11 text-center darkgreen">
            <h1 className="text-3xl  sm:(text-7xl !leading-tight) font-medium capitalize text-zinc-800">
              Offset your carbon blueprint with
              <span className="lgreen"> GREEETH</span>
            </h1>

            <p className="mt-6 sm:leading-relaxed px-2 sm:text-xl">
              The best way for individuals and organizations to plant trees,
              offset their carbon footprint to save the planet.
            </p>
            <div className="gap-4 mt-10 mx-auto text-center w-1/2">
              <a
                className="block  py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                href="/get-involved/sponsors/apply"
              >
                Plant Now
              </a>
            </div>
          </div>
          <div className="relative ">
            <img
              src={Drone}
              alt="Tree illustration"
              className="absolute left-0 sm:(top-30 w-13rem) top-10 w-7rem"
            />

            <img
              src={TreeBG}
              alt="Tree illustration"
              className="mx-auto lg:max-w-7/11"
            />
            <img
              src={Drone}
              alt="Tree illustration"
              className="absolute right-0 top-0 sm:w-13rem w-7rem"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
