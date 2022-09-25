import React from "react";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useState } from "react";
import Emissions from "./Emissions";
import FootprintData from "./FootprintData";

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
      <Emissions />
    </div>
    // </DashboardLayout>
  );
};

export default CarbonFootprint;
