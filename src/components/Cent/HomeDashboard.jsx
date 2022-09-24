import React from "react";
import Ring from "./assets/dough.svg";
import solar from "./assets/solar.svg";
import greenhouse from "./assets/greenhouse.svg";
import culture from "./assets/culture.svg";
import "./cent.css";
import ImageCard from "./ImageCard";
const HomeDashboard = () => {
  return (
    <div className="container p-4 mx-auto">
      <section>
        <h1 className="mb-6 text-2xl font-bold md:text-4xl">Welcome Moses,</h1>
        <div className="bgColor flex flex-col px-4 py-2 mb-24 md:flex-row justify-between md:items-center md:px-12">
          <div>
            <p className="mb-6 text-xl">Last Viewed</p>
            <h2 className="mb-12 text-2xl font-bold md:text-4xl">
              Carbon Offset
            </h2>
            <a href="#" className="text-xl text-textGreen underline">
              Continue Course
            </a>
          </div>
          <div>
            <img src={Ring} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="borderGray flex flex-col mb-12 py-4 md:flex-row md:items-center">
          <div className="mb-8 p-4 md:flex-1">
            <h2 className="text-2xl mb-4 md:text-4xl">
              Offset your carbon footprint with Greeeth
            </h2>
            <p>
              The best way for individuals and organizations to plant trees,
              offset their carbon footprint to save the planet.
            </p>
          </div>
          <div>
            <button className="btnFill px-18 py-2 rounded-sm">Plant Now</button>
          </div>
        </div>
      </section>
      <section>
        <div className="gWidth flex flex-col mb-12 md:flex-row md:items-center md:justify-between">
          <div className="mb-4">
            <h4 className="text-xl mb-4 md:text-3xl">Recommended for you</h4>
            <p>You might also like these courses</p>
          </div>
          <div>
            <button className="btnOutline px-8 py-2">Explore Courses</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6">
          <ImageCard image={greenhouse} title="Carbon Footprint" />
          <ImageCard image={solar} title="Tree Planting" />
          <ImageCard image={culture} title="Silvicultures" />
        </div>
      </section>
    </div>
  );
};

export default HomeDashboard;
