import React from 'react';
import './App.css';
import Home from './components/Home';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import PlantByHuman from './components/PlantByHuman';

function App() {
  return (
    <div className="App">
      <Home />
      <Solution />
      <HowItWorks />
      <PlantByHuman />
    </div>
  );
}

export default App;
