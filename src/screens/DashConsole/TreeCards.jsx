import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Footprinticon } from "../../components/Dashboard/Footprinticon";
import { Locate } from "../../components/Dashboard/locate";
import treepic from "../../components/Dashboard/treepic.png";

export const TreeCards = () => {
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  function getTrees() {
    setIsLoading(true);

    console.log("posting");
    console.log(cookies.key);
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
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getTrees();
  }, [cookies.key]);
  const TreeCard = ({ tree }) => {
    return (
      <div className="">
        <div className="dash-card mt-6 sm:max-w-400px  shadow-lg rounded-2xl">
          <div className="bg-lgreen flex text-white rounded-2xl p-2 text-xl font-bold  justify-end items-center">
            <div className="bg-lightgreen p-1 rounded-full my-auto mr-2">
              <Locate clr="#008000" />
            </div>
            <div>
              {tree.location.coordinates[0]}Lat,
              <br />
              {tree.location.coordinates[1]}Long
            </div>
          </div>
          <img
            src={tree.image}
            alt="Tree illustration"
            className="w-[300px] sm:h-[310px] h-[300px] m-3 rounded-2xl"
          />
          <div className="sm:p-6 sm:pb-4 p-4 flex flex-col gap-2">
            <div className="p-1 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-full flex  items-center">
              <div className="bg-lightgreen p-2 ml-1 mr-4 rounded-full my-auto">
                <Footprinticon clr="#008000" />
              </div>
            </div>
            <div className="p-1 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-full flex  items-center">
              <div className="bg-lightgreen p-2 ml-1 mr-4 rounded-full my-auto">
                <Footprinticon clr="#008000" />
              </div>
            </div>
            <div className="p-4 cursor-pointer bg-lgreen border   rounded-full">
              <div className="text-md font-bold text-white">Submit Tree</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      {cookies.treesData !== undefined ? (
        cookies.treesData.length !== 0 ? (
          <>
            {cookies.treesData.map((tree, i) => (
              <TreeCard tree={tree} key={i} />
            ))}
          </>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
