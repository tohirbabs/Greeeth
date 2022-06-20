import React from 'react';
import './App.css';
import { Home, Solution, HowItWorks, PlantByHuman, PlantWithDrone, ManageEmission, Footer } from './components';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
      <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
      <ManageEmission />
      <Footer />
    </div>
  );
}

export default App;
