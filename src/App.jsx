import React from 'react';
import './App.css';
import Home from './components/Home';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import PlantByHuman from './components/PlantByHuman';
import PlantWithDrone from './components/PlantWithDrone';

function App() {
  return (
    <div className="App">
      <Home />
      <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
    </div>
  );
}

export default App;
