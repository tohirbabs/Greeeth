import React from "react";
import partners from "../../assets/waste.png";
import waste from "../../assets/gall.png";
export const WasteShop = () => {
  const WasteCard = ({ wasteType, cost }) => {
    return (
      <div className="w-max relative BG-lgreen flex flex-col items-center rounded-3xl p-2">
        <img src={waste} className="max-h-25rem rounded-3xl" />
        <div className="flex justify-between m-1rem w-full px-4">
          <div className="text-cyan-300 w-max p-2 px-4 bg-white font-bold  rounded-full text-left">
            {wasteType}
          </div>
          <div className="bg-white w-max p-2 font-bold px-4 ligreen rounded-full text-left">
            $ {cost}
          </div>
        </div>
        <div className="text-left p-3 font-bold">
          <div className="description">Description: 5.67kg of {wasteType}</div>
          <div className="contact">Tel: +234 567 89012</div>
          <div className="address">
            Address: 24, Adetoun street, surulere,Lagos.
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
        <div className="container h-full  lg:mx-6 my-3 flex flex-col flex-wrap items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-6/11 text-center darkgreen">
            <h1 className="text-6xl  sm:(text-7xl !leading-tight) font-medium capitalize lgreen">
              Waste Recycling
            </h1>

            <p className="mt-6 sm:leading-relaxed sm:text-xl">
              Greeth makes it easier for individuals to sell their waste
              (plastic, gless, metal, paper) for it to be recycled, when they
              are calculating their carbon footprint
            </p>
            <div className="gap-4 mt-10 mx-auto text-center w-1/2">
              <a
                className="block py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                href="/about"
              >
                Sell Recyclable Waste
              </a>
            </div>
          </div>
          <img
            src={partners}
            alt="Tree illustration"
            className="mx-auto lg:max-w-7/11"
          />
        </div>
      </section>
      <div className="m-8 flex flex-wrap gap-10 justify-center ">
        <WasteCard wasteType="GLASS" cost="15.83" />
        <WasteCard wasteType="WOOD" cost="52.81" />
        <WasteCard wasteType="PLASTIC" cost="2.87" />
        <WasteCard wasteType="GLASS" cost="5.85" />
      </div>
    </div>
  );
};
