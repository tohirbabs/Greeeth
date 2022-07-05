import React from "react";
import {
  ProcessHome,
  Solution,
  HowItWorks,
  PlantByHuman,
  PlantWithDrone,
  ManageEmission,
  Footer,
  ProcessSection,
} from "../components";

function Process() {
  return (
    <div>
      <ProcessHome />
      <ProcessSection />
      {/* <ProcessSection /> */}
      {/* <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
      <ManageEmission /> */}
      <Footer />
    </div>
  );
}

export default Process;
