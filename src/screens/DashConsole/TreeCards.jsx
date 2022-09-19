import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Footprinticon } from "../../components/Dashboard/Footprinticon";
import { Locate } from "../../components/Dashboard/locate";
import treepic from "../../components/Dashboard/treepic.png";
import TreeBG from "/assets/landing/home-bg.png";

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
          <img
            // src={tree.image}
            src={TreeBG}
            alt="Tree illustration"
            className="w-[300px] sm:h-[310px] h-[300px] m-3 p-3 rounded-2xl"
          />

          <div className="bg-lgreen text-white rounded-2xl p-2 text-xl text-center">
            Banana Tree
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
