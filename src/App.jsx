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
import Companies1 from "./screens/GetInvolved/Sponsors/Companies1";
import Companies2 from "./screens/GetInvolved/Sponsors/Companies2";

import Companies3 from "./screens/GetInvolved/Sponsors/Companies3";

import Companies4 from "./screens/GetInvolved/Sponsors/Companies4";

import Companies5 from "./screens/GetInvolved/Sponsors/Companies5";

import Companies6 from "./screens/GetInvolved/Sponsors/Companies6";

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
              <Route
                path="/get-involved/sponsors/companies/Offset-your-carbon-footprint"
                element={<Companies1 />}
              />
              <Route
                path="/get-involved/sponsors/companies/Corporate-gifting-to-customers"
                element={<Companies2 />}
              />
              <Route
                path="/get-involved/sponsors/companies/Use-as-Employee-engagement"
                element={<Companies3 />}
              />
              <Route
                path="/get-involved/sponsors/companies/Unique-Reward"
                element={<Companies4 />}
              />
              <Route
                path="/get-involved/sponsors/companies/Loyalty-Program-to-Customers"
                element={<Companies5 />}
              />
              <Route
                path="/get-involved/sponsors/companies/Use-Tree-in-Corporate-Social-Responsibility-(CSR)"
                element={<Companies6 />}
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
