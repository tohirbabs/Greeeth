import React from "react";
import TreeBG from "../../assets/GetInvolved/Pix1.png";

function BenefitsHome() {
  return (
    <section className=" ">
      
        <div className="mt-12">
          <h1 className="text-4xl font-bold capitalize text-green-600 md:text-5xl lg:text-6xl lg:font-extrabold 2xl:text-7xl" style={{color: "rgb(2, 128, 0)"}}>
            Benefits of Trees
          </h1>

          <p className="mb-8 mt-4 lg:text-xl text-center px-2  lg:text-left  lg:w-max mx-auto">
            Companies, Individuals, Non-Governmental Organization and <br />
            <span className="lg:pl-16 lg:pt-8">Governmental Organizations</span>
          </p>
          
            <a
              className="block py-4 text-base border-2 font-normal bg-lgreen rounded-lg shadow-md text-white  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce  mx-auto max-w-xs "
              href="/get-involved/sponsors/apply"
            >
              Sponsor
            </a>
          
        </div>
        <img
          src={TreeBG}
          alt="Tree illustration"
          className="mx-auto lg:max-w-6/11 block"
        />
      
    </section>
  );
}
export default BenefitsHome;
