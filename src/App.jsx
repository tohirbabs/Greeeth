import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useContext, useMemo } from "react";
import "./App.css";

import "../dist/output.css";
import MainPage from "./screens/MainPage";
import Process from "./screens/Process";
import Planters from "./screens/Planters";
import GetInvolved from "./screens/GetInvolved";

export const PageContext = createContext({
  showCompanies: "",
  setshowCompanies: () => {},
  showIndividuals: "",
  setshowIndividuals: () => {},
});

function App() {
  const [showCompanies, setshowCompanies] = useState(true);
  const [showIndividuals, setshowIndividuals] = useState(false);
  return (
    <PageContext.Provider
      value={{
        showCompanies,
        setshowCompanies,
        showIndividuals,
        setshowIndividuals,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/process" element={<Process />} />
            <Route path="/" element={<GetInvolved />} />
            <Route path="/planters" element={<Planters />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PageContext.Provider>
  );
}

export default App;
