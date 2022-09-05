import React from "react";
import Badgeicon from "./Dashboard/Badgeicon";
import { Cycleicon } from "./Dashboard/Cycleicon";
import Dashicon from "./Dashboard/Dashicon";
import { Footprinticon } from "./Dashboard/Footprinticon";
import { Goalicon } from "./Dashboard/Goalicon";
// import { Logouticon } from "./Dashboard/Logout.png";
import { Offseticon } from "./Dashboard/Offseticon";
import { Projecticon } from "./Dashboard/Projecticon";
// import { Treeicon } from "./Dashboard/Treeico";
import { Walleticon } from "./Dashboard/Walleticon";
import FootLogo from "../../assets/FootLogo";
// import { Treeicon } from "./Dashboard/Treeicon";
import { Logouticon } from "./Dashboard/Logouticon";
// import { Offseticon } from "./Dashboard/Offseticon";
import { useCookies } from "react-cookie";
import { Treeicon } from "./Dashboard/Treeicon";
import logout from "./Dashboard/Logout.png";
import { Staricon } from "./Dashboard/Star";

const Sidebar = () => {
  const [cookies, setCookie] = useCookies();

  const SideNavItem = ({ Icon, name }) => {
    return (
      <div
        onClick={() => {
          setCookie("dashnav", `${name}`, {
            path: "/",
          });
          console.log(cookies);
        }}
        className={
          cookies.dashnav === `${name}`
            ? "bg-white rounded-lg flex items-center justify-center sm:justify-start my-4 sm:p-2 p-2 sm:gap-2 cursor-pointer"
            : "flex items-center justify-center sm:justify-start my-4 sm:p-2 p-2 sm:gap-2 cursor-pointer"
        }
      >
        <Icon clr={cookies.dashnav === `${name}` ? "#404040" : "white"} />
        <p
          className={
            cookies.dashnav === `${name}`
              ? "text-[#404040] hidden lg:block"
              : "text-white hidden lg:block"
          }
        >
          {name}
        </p>
      </div>
    );
  };
  return (
    <div className="bg-lgreen lg:px-8 lg:py-10 py-2 fixed min-h-100vh">
      <a href="/" className="lg:block hidden">
        <FootLogo />
      </a>
      <a href="/" className="lg:hidden">
        <FootLogo small={true} />
      </a>

      <div className="mt-16 sm:pl-4  sm:pl-0">
        <ul className="mx-auto">
          <SideNavItem Icon={Dashicon} name="Overview" />
          <SideNavItem Icon={Walleticon} name="Wallet" />
          <SideNavItem Icon={Footprinticon} name="Carbon footprint" />
          <SideNavItem Icon={Offseticon} name="Carbon Offset" />
          <SideNavItem Icon={Projecticon} name="Project" />
          <SideNavItem Icon={Treeicon} name="Tree" />
          <SideNavItem Icon={Cycleicon} name="Life cycle analysis" />
          <SideNavItem Icon={Goalicon} name="Goal" />
          <SideNavItem Icon={Badgeicon} name="Badge" />
          <SideNavItem Icon={Staricon} name="Impact" />

          <ul className="mt-15">
            <a
              href="/"
              className="flex items-center justify-center sm:justify-start my-4 sm:p-2 p-2 sm:gap-2 cursor-pointer"
            >
              <img className="max-w-7" src={logout} alt="" />
              <p className="text-white hidden lg:block">Logout</p>
            </a>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
