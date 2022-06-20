import React from 'react';
import './App.css';
import { NavBar, Home, DetectLocation, Footer } from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <DetectLocation />
      <Footer />
    </div>
  );
}

export default App;
