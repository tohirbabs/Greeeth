import React from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import treepic from "../../components/Dashboard/treepic.png";

export const TreeCards = () => {
  const [cookies, setCookie] = useCookies();

  function getTrees() {
    // setIsLoading(true);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
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
  console.log(cookies.treesData);
  const TreeCard = ({ tree }) => {
    return (
      <div className="">
        <div className="flex my-10 mx-2 gap-1 bg-white rounded-xl  sm:w-max ">
          <img src={tree.image} alt="" className="max-w-150px sm:max-h-30vw " />
          <div className="p-2 flex flex-col text-left font-bold ligreen sm:text-base justify-between gap-2 text-sm mr-8">
            <p>Tree ID: #{tree.id}</p>
            <p>Tree Type: </p>
            <p>
              Location: {tree.location.coordinates[0]}Lat,
              <br />
              {tree.location.coordinates[1]}Long
            </p>
            {/* <p>Age</p> */}
            <p>Date Planted: {tree.created_on.slice(0, 10)}</p>
            {/* <p>CO2 Sequestrated: </p>
            <p>Weather Forcast: </p> */}
          </div>
        </div>
        <div className=""></div>
      </div>
    );
  };
  let trees = [1, 2, 3];
  console.log(trees);
  return (
    <div className="flex flex-wrap justify-between">
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
