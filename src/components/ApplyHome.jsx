import React from "react";

function ApplyHome() {
  return (
    <section className=" grad-lgreen flex-wrap items-center justify-center  flex flex-col">
      <div className="container h-full  lg:mx-6 my-10 flex flex-col flex-wrap items-center justify-around lg:max-w-9/10 px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <div className="lg:max-w-8/11 text-center darkgreen">
          <h1 className="text-4xl  sm:(text-5xl !leading-tight) font-medium capitalize lgreen">
            Apply to be a Sponsor today
          </h1>

          <p className="mt-10 text-lg sm:leading-relaxed text-bold px-2 sm:text-xl">
            Companies, Individuals, Non-Governmental Organization and
            Governmental Organizations
          </p>
        </div>
      </div>
    </section>
  );
}
export default ApplyHome;
