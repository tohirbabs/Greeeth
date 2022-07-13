import React from "react";
import {
  PlantersHome,
  Solution,
  HowItWorks,
  PlantByHuman,
  PlantWithDrone,
  ManageEmission,
  Footer,
  NavBar,
} from "../../components";
import SponsorsHome from "../../components/SponsorsHome";
import SponsorsSection from "../../components/SponsorsSection";

function Sponsors() {
  return (
    <div>
      <NavBar />
      <SponsorsHome />
      <SponsorsSection />
      {/* <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
      <ManageEmission /> */}
      <Footer />
    </div>
  );
}

export default Sponsors;
