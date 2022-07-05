import React from "react";
import TreeBG from "../../assets/sponsor.png";
import NavBar from "./NavBar.jsx";

function GetInvolvedHome() {
  return (
    <section className="relative bg-white lg:h-screen flex flex-col">
      <div className="rect" />
      <NavBar />
      <div className="relative flex flex-wrap flex-grow items-center justify-center grad-lgreen">
        <div className="container  mx-6 my-3 flex flex-col flex-wrap items-center justify-around max-w-screen-xl px-2 py-2 ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
          <div className="max-w-6/11 text-center darkgreen">
            <h1 className="text-6xl  sm:(text-7xl !leading-tight) font-medium capitalize lgreen">
              Sponsor
            </h1>

            <p className="mt-6 sm:leading-relaxed sm:text-xl">
              Companies, Individuals, Non-Governmental Organization and
              Governmental Organizations
            </p>
          </div>
          <img
            src={TreeBG}
            alt="Tree illustration"
            className="mx-auto max-w-7/11"
          />
        </div>
      </div>
    </section>
  );
}
export default GetInvolvedHome;
