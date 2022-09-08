import React, { useEffect } from "react";

import plant from "../../../assets/landing/plant.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";
import PlantTree from "./PlantTree";
import Maintenance from "./Maintenance";
import { TreeCards } from "./TreeCards";
import FootprintData from "./FootprintData";
import { Footprinter } from "../../components/Footprinter";
import Emissions from "./Emissions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CarbonFootprint = () => {
  const [footprintSection, setFootprintSection] = useState("Footprint Data");
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     location = `${position.coords.latitude}`;
  //   });
  // });

  const FootprintNavItem = ({ name }) => {
    return (
      <div
        onClick={() => {
          setFootprintSection(name);
          console.log(name);
        }}
        className={
          footprintSection === `${name}`
            ? "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
            : "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
        }
      >
        {name}
      </div>
    );
  };

  const FootprintSection = () => {
    switch (footprintSection) {
      case "Footprint Data":
        return <FootprintData />;

      case "Calculate Footprint":
        return <Emissions />;

      default:
        return <FootprintData />;
    }
  };
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-wrap sm:gap-6 gap-2">
        <FootprintNavItem name="Calculate Footprint" />
        <FootprintNavItem name="Footprint Data" />
      </div>
      {FootprintSection()}
    </div>
    // </DashboardLayout>
  );
};

export default CarbonFootprint;
