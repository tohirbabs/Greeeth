import React, { useEffect } from "react";

import plant from "../../../assets/landing/plant.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";
import PlantTree from "./PlantTree";
import Maintenance from "./Maintenance";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tree = () => {
  const [treeSection, settreeSection] = useState("Plant New Trees");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      location = `${position.coords.latitude}`;
    });
  });

  const TreeNavItem = ({ name }) => {
    return (
      <div
        onClick={() => {
          settreeSection(name);
          console.log(name);
        }}
        className={
          treeSection === `${name}`
            ? "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
            : "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
        }
      >
        {name}
      </div>
    );
  };

  const TreeSection = () => {
    switch (treeSection) {
      case "Plant New Trees":
        return <PlantTree />;
      case "Maintenance Task":
        return <Maintenance />;

      default:
        return <PlantTree />;
    }
  };
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-wrap sm:gap-6 gap-2">
        <TreeNavItem name="Plant New Trees" />
        <TreeNavItem name="Maintenance Task" />
        <TreeNavItem name="Planting Task" />
      </div>
      {TreeSection()}
    </div>
    // </DashboardLayout>
  );
};

export default Tree;
