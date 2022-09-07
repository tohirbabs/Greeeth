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
import { FootprintResult } from "../../components/CarbonEmission/FootprintResult";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Emissions = () => {
  const [emissionSection, setemissionSection] = useState("query");
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     location = `${position.coords.latitude}`;
  //   });
  // });

  const EmissionSection = () => {
    switch (emissionSection) {
      case "query":
        return <Footprinter result={setemissionSection} />;

      case "result":
        return <FootprintResult />;

      default:
        return <Footprinter />;
    }
  };
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">{EmissionSection()}</div>
    // </DashboardLayout>
  );
};

export default Emissions;
