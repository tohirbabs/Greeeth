import React from "react";
import { Footer, NavBar } from "../../components";
import AmbassadorsHome from "../../components/AmbassadorsHome";
import AmbassadorsSection from "../../components/AmbassadorsSection";
import PartnersHome from "../../components/PartnersHome";
import PartnersSection from "../../components/PartnersSection";

function Ambassadors() {
  return (
    <div>
      <AmbassadorsHome />
      <AmbassadorsSection />
    </div>
  );
}

export default Ambassadors;
