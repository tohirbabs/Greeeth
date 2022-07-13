import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useContext, useMemo } from "react";
import "./App.css";

import "../dist/output.css";
import MainPage from "./screens/MainPage";
import Process from "./screens/Process";
import Sponsors from "./screens/GetInvolved/Sponsors";
import Volunteers from "./screens/GetInvolved/Volunteers";
import Schools from "./screens/GetInvolved/Schools";
import Planters from "./screens/GetInvolved/Planters";
import Partners from "./screens/GetInvolved/Partners";

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
            <Route path="/" element={<Sponsors />} />
            <Route path="/get-involved/sponsors" element={<Sponsors />} />
            <Route path="/get-involved/volunteers" element={<Volunteers />} />
            <Route path="/get-involved/schools" element={<Schools />} />
            <Route path="/get-involved/planters" element={<Planters />} />
            <Route path="/get-involved/partners" element={<Partners />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PageContext.Provider>
  );
}

export default App;
