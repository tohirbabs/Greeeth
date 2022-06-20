import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './screens/MainPage';
import Process from './screens/Process';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/process" element={<Process />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
