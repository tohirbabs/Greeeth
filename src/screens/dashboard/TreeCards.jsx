import React from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import treepic from "../../components/Dashboard/treepic.png";

export const TreeCards = () => {
  const [cookies, setCookie] = useCookies();

  function getTrees() {
    // setIsLoading(true);
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
      // setErr(err.message);
    } finally {
      // setIsLoading(false);
    }
  }
  useEffect(() => {
    getTrees();
  }, [cookies.key]);
  console.log(cookies.treesData);
  const TreeCard = () => {
    return (
      <div className="">
        <div className="flex my-10 mx-2 gap-2 bg-white rounded-xl  sm:w-max ">
          <img
            src={cookies.treesData[0].image}
            alt=""
            className="max-w-150px sm:max-h-30vw "
          />
          <div className="p-2 flex flex-col text-left font-bold ligreen sm:text-base justify-between gap-2 text-sm mr-8">
            <p>Tree No: #004/657</p>
            <p>Tree Type: </p>
            <p>Location: </p>
            <p>Age</p>
            <p>Date Planted: </p>
            <p>CO2 Sequestrated: </p>
            <p>Weather Forcast: </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap justify-between">
      {cookies.treesData !== undefined ? (
        cookies.treesData.length !== 0 ? (
          <>
            <TreeCard />
            <TreeCard />
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
