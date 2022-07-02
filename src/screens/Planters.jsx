import React from "react";
import {
  PlantersHome,
  Solution,
  HowItWorks,
  PlantByHuman,
  PlantWithDrone,
  ManageEmission,
  Footer,
} from "../components";
import PlantersSection from "../components/PlantersSection";

function Planters() {
  return (
    <div>
      <PlantersHome />
      <PlantersSection />
      {/* <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
      <ManageEmission /> */}
      <Footer />
    </div>
  );
}

export default Planters;
