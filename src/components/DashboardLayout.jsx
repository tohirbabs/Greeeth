import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-lightgreen">
      <Sidebar />
      <div className="lg:ml-257px ml-50px flex-1">
        <TopBar />
        <div className=" bg-lightgreen sm:px-10 px-2 ">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
