import React from "react";
import Dashicon from "./Dashboard/Dashicon";
import { Footprinticon } from "./Dashboard/Footprinticon";

import { Walleticon } from "./Dashboard/Walleticon";
import FootLogo from "../../assets/FootLogo";
import { useCookies } from "react-cookie";
import logout from "./Dashboard/Logout.png";
import { Treeicon } from "./Dashboard/Tree";
import { useState } from "react";
// import Tree from "../screens/dashboard/Tree";
// import { Treeicon } from "./Dashboard/Treeicon";

const SideNav = () => {
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  function getTrees() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${cookies.key}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/trees/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCookie(`treesData`, result, {
            path: "/",
          });
        });
    } catch (err) {
      // setErr(err.message);
    } finally {
      // setIsLoading(false);
    }
  }

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
            ? "bg-white rounded-lg flex items-center justify-center sm:justify-start my-6 sm:p-2 p-2 sm:gap-2 cursor-pointer"
            : "flex items-center justify-center sm:justify-start my-6 sm:p-2 p-2 sm:gap-2 cursor-pointer"
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
          <SideNavItem Icon={Footprinticon} name="Calculate Footprint" />
          <div
            onClick={() => {
              //   getTrees();
              setCookie("dashnav", `Trees`, {
                path: "/",
              });
              //   console.log(cookies);
            }}
            className={
              cookies.dashnav === `Trees`
                ? "bg-white rounded-lg flex items-center justify-center sm:justify-start my-6 sm:p-2 p-2 sm:gap-2 cursor-pointer"
                : "flex items-center justify-center sm:justify-start my-6 sm:p-2 p-2 sm:gap-2 cursor-pointer"
            }
          >
            <Treeicon clr={cookies.dashnav === `Trees` ? "#404040" : "white"} />
            <p
              className={
                cookies.dashnav === `Trees`
                  ? "text-[#404040] hidden lg:block"
                  : "text-white hidden lg:block"
              }
            >
              Trees
            </p>
          </div>

          <SideNavItem Icon={Walleticon} name="Wallet" />

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

export default SideNav;
