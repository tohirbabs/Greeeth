import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useCookies } from "react-cookie";
import Overview from "../screens/dashboard/Overview";
import Wallet from "../screens/dashboard/Wallet";
import CarbonFootprint from "../screens/dashboard/CarbonFootprint";
import CarbonOffset from "../screens/dashboard/CarbonOffset";
import Goal from "../screens/dashboard/Goal";
import Tree from "../screens/dashboard/Tree";

const Dashboard = ({ children }) => {
  const [cookies, setCookie] = useCookies();

  const dashSection = () => {
    switch (cookies.dashnav) {
      case "Overview":
        return <Overview />;

      case "Wallet":
        return <Wallet />;
      case "Carbon footprint":
        return <CarbonFootprint />;
      case "Carbon Offset":
        return <CarbonOffset />;
      case "Goal":
        return <Goal />;
      case "Tree":
        return <Tree />;

      default:
        return <Overview />;
    }
  };
  return (
    <div className="flex bg-lightgreen">
      <Sidebar />
      <div className="lg:ml-257px ml-50px flex-1">
        <TopBar />
        <div className=" bg-lightgreen sm:px-10 px-2 ">
          {/* <main>{children}</main> */}
          {dashSection()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
