import React from 'react';
import { Home, Solution, HowItWorks, PlantByHuman, PlantWithDrone, ManageEmission, Footer } from '../components';

function MainPage() {
  return (
    <div><Home />
      <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
      <ManageEmission />
      <Footer />
    </div>
  );
}

export default MainPage;
