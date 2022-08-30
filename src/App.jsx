import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createContext, useState, useContext, useMemo, use } from "react";
import "./App.css";
import "./slider.css";

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
import Individuals1 from "./screens/GetInvolved/Sponsors/Individuals1";
import Benefits from "./screens/GetInvolved/Sponsors/Benefits";
import { LandingPage } from "./components";
import OtherServices from "./components/OtherServices";
import Overview from "./screens/dashboard/Overview";
import Wallet from "./screens/dashboard/Wallet";
import CarbonOffset from "./screens/dashboard/CarbonOffset";
import CarbonFootprint from "./screens/dashboard/CarbonFootprint";
import { Footprint } from "./screens/Footprint";
import Map from "./components/Map";
import DashboardLayout from "./components/DashboardLayout";
import { Footprinter } from "./components/Footprinter";
import { CookiesProvider } from "react-cookie";
import { FootprintResult } from "./components/CarbonEmission/FootprintResult";
import Dashboard from "./components/Dashboard";

export const PageContext = createContext({});

function App() {
  return (
    <CookiesProvider>
      <PageContext.Provider value={{}}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <LandingPage />
                  </Layout>
                }
              />
              <Route
                path="/other-services"
                element={
                  <Layout>
                    <OtherServices />
                  </Layout>
                }
              />
              <Route
                path="/process"
                element={
                  <Layout>
                    <Process />
                  </Layout>
                }
              />
              <Route
                path="/auth/sign-in"
                element={
                  <Layout>
                    <Signin />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors"
                element={
                  <Layout>
                    <Sponsors />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/apply"
                element={
                  <Layout>
                    <SponsorApply />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/companies/Offset-your-carbon-footprint"
                element={
                  <Layout>
                    <Companies1 />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/companies/Corporate-gifting-to-customers"
                element={
                  <Layout>
                    <Companies2 />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/companies/Use-as-Employee-engagement"
                element={
                  <Layout>
                    <Companies3 />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/companies/Unique-Reward"
                element={
                  <Layout>
                    <Companies4 />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/companies/Loyalty-Program-to-Customers"
                element={
                  <Layout>
                    <Companies5 />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/companies/Use-Tree-in-Corporate-Social-Responsibility-(CSR)"
                element={
                  <Layout>
                    <Companies6 />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/sponsors/individuals/gift-tree"
                element={
                  <Layout>
                    <Individuals1 />
                  </Layout>
                }
              />

              <Route
                path="/get-involved/volunteers"
                element={
                  <Layout>
                    <Volunteers />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/schools"
                element={
                  <Layout>
                    <Schools />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/schools/apply"
                element={
                  <Layout>
                    <SchoolsApply />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/planters"
                element={
                  <Layout>
                    <Planters />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/partners"
                element={
                  <Layout>
                    <Partners />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/ambassadors"
                element={
                  <Layout>
                    <Ambassadors />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/Ambassadors/apply"
                element={
                  <Layout>
                    <AmbassadorsApply />
                  </Layout>
                }
              />
              <Route
                path="/get-involved/benefits"
                element={
                  <Layout>
                    <Benefits />
                  </Layout>
                }
              />

              <Route
                path="/calculate-footprint"
                element={
                  <DashboardLayout>
                    <Footprinter />
                  </DashboardLayout>
                }
              />
              <Route
                path="/footprint-results"
                element={
                  <DashboardLayout>
                    <FootprintResult />
                  </DashboardLayout>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* <Route
              path="/calculate-footprint"
              element={
                <Layout>
                  <Footprint />
                </Layout>
              }
            /> */}
              <Route
                path="/map"
                element={
                  <Layout>
                    <Map />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </PageContext.Provider>
    </CookiesProvider>
  );
}

export default App;
