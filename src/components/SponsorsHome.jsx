import React from "react";
import TreeBG from "../../assets/sponsor.png";

function SponsorsHome() {
  return (
    <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
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
    </section>
  );
}
export default SponsorsHome;
