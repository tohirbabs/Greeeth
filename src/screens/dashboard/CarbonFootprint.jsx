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
import { useCookies } from "react-cookie";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CarbonFootprint = () => {
  const [footprintSection, setFootprintSection] = useState("Footprint Data");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const [cookies, setCookie] = useCookies();
  const [emissionSection, setemissionSection] = useState("query");
  function postFootprint() {
    // setIsLoading(true);
    console.log("posting");
    console.log(cookies.key);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${cookies.key}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/carbonfootprint/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCookie("footprint", result, {
            path: "/",
          });
        });
    } catch (err) {
      // setErr(err.message);
    } finally {
      setFootprintSection("Calculate Footprint");
      // setIsLoading(false);
    }
  }

  var result;

  if (cookies.footprint.length > 0) {
    result = true;
  } else {
    result = false;
  }

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
        return <Emissions result={result} />;

      default:
        return <FootprintData />;
    }
  };
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-wrap sm:gap-6 gap-2">
        <div
          onClick={() => {
            postFootprint();
            console.log("Calculate Footprint");
          }}
          className={
            footprintSection === "Calculate Footprint"
              ? "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
              : "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
          }
        >
          Calculate Footprint
        </div>
        <FootprintNavItem name="Footprint Data" />
      </div>
      {FootprintSection()}
    </div>
    // </DashboardLayout>
  );
};

export default CarbonFootprint;
