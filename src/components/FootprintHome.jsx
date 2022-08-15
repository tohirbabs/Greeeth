import React from "react";
import { calc } from "../../assets/GetInvolved";
import TreeBG from "../../assets/sponsor.png";

function FootprintHome() {
  return (
    <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
      <div className="container h-full  lg:mx-6 my-3 flex flex-col sm:flex-row  items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <div className="lg:max-w-6/11 text-left darkgreen">
          <h1 className="text-4xl  sm:(text-5xl !leading-tight) font-medium capitalize lgreen">
            Calculate your carbon emission
          </h1>

          <p className="mt-6 sm:leading-relaxed px-2 sm:text-base">
            The Personal Carbon Footprint attempts to quantify environmental
            effects. Its computation enables you to reduce or optimize your
            energy efficiency and adjust your consumption patterns to lessen
            your environmental effect. Many of our regular activities, such as
            consuming power, transportation, housing, food, and trash disposal,
            contribute to greenhouse gas emissions. These emissions add together
            to form a household's carbon footprint.
          </p>
        </div>
        <img
          src={calc}
          alt="Tree illustration"
          className="mx-auto lg:max-w-7/11"
        />
      </div>
    </section>
  );
}
export default FootprintHome;
