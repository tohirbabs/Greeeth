import React from 'react';
import './App.css';
import { Home, Solution, HowItWorks, PlantByHuman, PlantWithDrone, ManageEmission } from './components';

function App() {
  return (
    <div className="App">
      <Home />
      <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
      <ManageEmission />
    </div>
  );
}

export default App;
