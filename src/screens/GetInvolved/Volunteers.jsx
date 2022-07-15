import React from "react";
import { volunteers } from "../../../assets/GetInvolved";
import { Footer, NavBar } from "../../components";

const Volunteers = () => {
  return (
    <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
      <div className="container h-full  lg:mx-6 my-3 flex flex-col flex-wrap items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <div className="lg:max-w-6/11 text-center darkgreen">
          <h1 className="text-6xl  sm:(text-7xl !leading-tight) font-medium capitalize lgreen">
            Volunteers
          </h1>

          <p className="mt-6 sm:leading-relaxed sm:text-xl">
            You can join tree planting volunteer programs anywhere in the world.
            Leave a lasting impact in your community
          </p>
          <div className="gap-4 mt-10 mx-auto text-center w-1/2">
            <a
              className="block  py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
              href="/about"
            >
              Volunteer
            </a>
          </div>
        </div>
        <img
          src={volunteers}
          alt="Tree illustration"
          className="mx-auto lg:max-w-7/11"
        />
      </div>
    </section>
  );
};

export default Volunteers;
