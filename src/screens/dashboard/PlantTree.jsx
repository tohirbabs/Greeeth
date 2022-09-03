import React, { useEffect } from "react";

import geobutt from "../../components/Dashboard/geobutt.png";

import maped from "../../components/Dashboard/maped.png";
import treetag from "../../components/Dashboard/treetag.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PlantTree = () => {
  // console.log(cookies);
  // console.log(pic.base64);
  // const postTree = async () => {
  //   setIsLoading(true);
  //   console.log(pic);

  //   try {
  //     const body = JSON.stringify({
  //       location: `${location}`,
  //       height: "10",
  //       image: pic,
  //     });
  //     console.log(body);
  //     console.log("tree");

  //     const response = await POST("/trees/", body);

  //     if (response.ok) {
  //       const result = await response.json();

  //       console.log("result is: ", JSON.stringify(result));
  //     }

  //     response.json().then((text) => {
  //       console.log(text);
  //     });
  //   } catch (err) {
  //     setErr(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const percentage = 66;
  var pic;
  var location;
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     location = `${position.coords.latitude}`;
  //   });
  // });
  // const handleCapture = (file) => {
  //   var reader = new FileReader();
  //   reader.onload = function () {
  //     console.log(reader);
  //     pic = reader.result;
  //   };
  //   reader.readAsDataURL(file.files[0]);
  // };

  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-col items-center gap-6  sm:flex-row sm:my-8">
        <div className="text-left sm:w-5/10">
          <h3 className="ligreen font-bold sm:text-4xl my-6">
            Plant new tree and geotag
          </h3>
          <p className="sm:my-4 my-2 sm:text-base">
            Trees are geotagged to get real time data of the tree planting done.
            With this, we will get the{" "}
            <span className="ligreen font-bold">
              {" "}
              GPS cordinate, time swap, tree type, tree image, weather data, and
              who planted the tree.
            </span>
          </p>
          <p className="sm:my-4 my-2 sm:text-base">
            The GPS coordinate and photo goes online and can be accessed by
            everyone on the interactive map.
          </p>
          <p className="sm:my-4 my-2 sm:text-base">
            With geotagging we can have{" "}
            <span className="ligreen font-bold">
              traceability, accountability, transparency, no double counting,
              monitoring and validity.
            </span>
          </p>
        </div>
        <div className="flex-1">
          <img
            src={maped}
            alt="Location pins illustration"
            loading="lazy"
            className="mx-auto bg-white px-2rem py-1rem rounded-2xl shadow-md max-w-70vw sm:w-8/10"
          />
        </div>
      </div>
      <div className="">
        <p className="sm:my-4 my-2 sm:text-base text-left">
          <h3 className="ligreen font-bold sm:text-4xl my-6">
            How To Successfully Geotag Your tree
          </h3>
          <ol>
            <li className="my-3">1. Click on the geotag button.</li>
            <li className="my-3">2. Enable Camera and gps location.</li>
            <li className="my-3">3. Take a good full picture of the tree.</li>
            <li className="my-3">
              4. Make sure the camera capture's the entire tree and surrounded
              areas.
            </li>
            <li className="my-3">
              5. After geotagging input tree height ( you can use iphone measure
              or any other measure app for iphone advised)
            </li>
            <li className="my-3">6. Input the tree name</li>
          </ol>
        </p>
      </div>
      <div className="bg-[#DBE3FF] p-2 sm:p-4 mt-8 items-center gap-10 justify-center flex flex-col sm:flex-row">
        {/* <input
          accept="image/*"
          className="block  p-4 mt-8 w-8/10 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-8/10 mx-auto hover:text-white hover:bg-green-900 focus:outline-none animate-bounce"
          id="icon-button-file"
          type="file"
          capture="environment"
          // onChange={(e) => handleCapture(e.target)}
        /> */}

        <div className="">
          <h3 className="ligreen font-bold sm:text-xl my-2">Picture Sample</h3>
          <img src={treetag} alt="" />
        </div>
        <div className="">
          {/* <h3 className="ligreen font-bold sm:text-xl my-2">Picture Sample</h3> */}
          <img src={geobutt} alt="" />
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default PlantTree;
