import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createContext, useState, useContext, useMemo, use } from "react";
import "./App.css";

import "../dist/output.css";
import MainPage from "./screens/MainPage";
import Process from "./screens/Process";
import Volunteers from "./screens/GetInvolved/Volunteers";
import Schools from "./screens/GetInvolved/Schools/Schools";
import Planters from "./screens/GetInvolved/Planters";
import Partners from "./screens/GetInvolved/Partners";
import Ambassadors from "./screens/GetInvolved/Ambassadors/Ambassadors";
import Signin from "./screens/Auth/Signin";
import Layout from "./components/Layout";
import Sponsors from "./screens/GetInvolved/Sponsors/Sponsors";
import SponsorApply from "./screens/GetInvolved/Sponsors/Apply";
import SchoolsApply from "./components/SchoolsApply";
import AmbassadorsApply from "./components/AmbassadorsApply";

export const PageContext = createContext({});

function App() {
  return (
    <PageContext.Provider value={{}}>
      <div className="App">
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Sponsors />} />
              <Route path="/process" element={<Process />} />
              <Route path="/auth/sign-in" element={<Signin />} />
              <Route path="/get-involved/sponsors" element={<Sponsors />} />
              <Route
                path="/get-involved/sponsors/apply"
                element={<SponsorApply />}
              />
              <Route path="/get-involved/volunteers" element={<Volunteers />} />
              <Route path="/get-involved/schools" element={<Schools />} />
              <Route
                path="/get-involved/schools/apply"
                element={<SchoolsApply />}
              />
              <Route path="/get-involved/planters" element={<Planters />} />
              <Route path="/get-involved/partners" element={<Partners />} />
              <Route
                path="/get-involved/ambassadors"
                element={<Ambassadors />}
              />
              <Route
                path="/get-involved/Ambassadors/apply"
                element={<AmbassadorsApply />}
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    </PageContext.Provider>
  );
}

export default App;
