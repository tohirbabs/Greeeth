import React from "react";
import { Ambassadors } from "../../assets/GetInvolved/Ambassadors";

function AmbassadorsHome() {
  return (
    <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
      <div className="container  mx-6 my-3 flex flex-col flex-wrap items-center justify-around max-w-screen-xl px-2 py-2 ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <div className="max-w-9/11 text-center darkgreen">
          <h1 className="text-6xl  sm:(text-7xl !leading-tight) font-medium capitalize lgreen">
            Become a Greeth Ambassador
          </h1>

          <p className="mt-6 sm:leading-relaxed sm:text-xl">
            There are many ways to get involved as a partner
          </p>
          <div className="gap-4 mt-10 mx-auto text-center w-1/2">
            <a
              className="block px-10 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
              href="/about"
            >
              Apply for free
            </a>
          </div>
        </div>
        <img
          src={Ambassadors}
          alt="Tree illustration"
          className="mx-auto max-w-7/11"
        />
      </div>
    </section>
  );
}
export default AmbassadorsHome;
