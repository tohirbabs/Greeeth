import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import "../dist/output.css";
import MainPage from "./screens/MainPage";
import Process from "./screens/Process";
import Planters from "./screens/Planters";
import GetInvolved from "./screens/GetInvolved";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Process />} /> */}
          <Route path="/" element={<GetInvolved />} />
          <Route path="/process" element={<Planters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
