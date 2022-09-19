import React, { useState } from "react";

import { useCookies } from "react-cookie";
import { DashOverview } from "./DashOverview";
import { Footprint } from "./Footprint";
import { ReduceFootprint } from "./ReduceFootprint";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Overview = () => {
  const [cookies, setCookie] = useCookies();
  const [section, setsection] = useState("Footprint");

  console.log(cookies.treesData);
  console.log(section);

  const overviewSection = () => {
    switch (section) {
      case "DashOverview":
        return <DashOverview setsection={setsection} />;

      case "Footprint":
        return <Footprint setsection={setsection} />;
      case "ReduceFootprint":
        return <ReduceFootprint setsection={setsection} />;

      default:
        return <Footprint setsection={setsection} />;
    }
  };

  return <>{overviewSection()}</>;
};

export default Overview;
