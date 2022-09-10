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
import { useCookies } from "react-cookie";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Emissions = () => {
  // console.log(result);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const [cookies, setCookie] = useCookies();
  const [emissionSection, setemissionSection] = useState("query");
  // function postFootprint() {
  //   // setIsLoading(true);
  //   console.log("posting");
  //   console.log(cookies.key);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Authorization", `Token ${cookies.key}`);

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //   };
  //   console.log(requestOptions);
  //   console.log(myHeaders);

  //   try {
  //     fetch("https://api.greeeth.com/carbonfootprint/", requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log(result);
  //       });
  //   } catch (err) {
  //     // setErr(err.message);
  //   } finally {
  //     // setIsLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   postFootprint();
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
