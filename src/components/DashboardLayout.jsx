import React from "react";
// import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}

      <div className="flex-1 bg-lightgreen sm:px-10 px-2">
        <TopBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
