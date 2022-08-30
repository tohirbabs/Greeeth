import React from "react";

import plant from "../../../assets/landing/plant.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";
import { Tabler } from "../../components/Table";
import { Tables } from "../../components/Tables";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tree = () => {
  const percentage = 66;
  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-col gap-6 sm:gap-16 sm:flex-row sm:my-8">
        <div className="text-left sm:w-6/10">
          <h3 className="ligreen font-bold sm:text-4xl my-6">
            Plant new tree and geotag
          </h3>
          <p className="my-4 sm:text-lg">
            Trees are geotagged to get real time data of the tree planting done.
            With this, we will get the GPS cordinate, time swap, tree type, tree
            image, weather data, and who planted the tree.
          </p>
          <p className="my-4 sm:text-lg">
            The GPS coordinate and photo goes online and can be accessed by
            everyone on the interactive map.
          </p>
          <p className="my-4 sm:text-lg">
            With geotagging we can have traceability, accountability,
            transparency, no double counting, monitoring and validity.
          </p>
          <p className="my-4 sm:text-lg">
            Steps: <br />
            <ol>
              <li className="my-3">1. Click on the geotag button.</li>
              <li className="my-3">2. Enable Camera and gps location.</li>
              <li className="my-3">3. Take a good full picture of the tree.</li>
              <li className="my-3">
                4. Make sure the camera capture’s the entire tree and surrounded
                areas.
              </li>
              <li className="my-3">
                5. After geotagging input tree height ( you can use iphone
                measure or any other measure app for iphone advised)
              </li>
              <li className="my-3">6. Input the tree name</li>
            </ol>
          </p>
        </div>
        <div className="flex-1">
          <h3 className="ligreen font-bold sm:text-2xl my-6">
            Geotagged tree sample
          </h3>
          <img
            src={plant}
            alt="Location pins illustration"
            loading="lazy"
            className="mx-auto bg-white px-2rem py-1rem rounded-2xl shadow-md max-w-70vw"
          />
          <div className="text-lg my-4">
            Click the button below to geotag Tree
          </div>
          <input
            accept="image/*"
            className="block  p-4 mt-8  text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-8/10 mx-auto hover:text-white hover:bg-green-900 focus:outline-none animate-bounce"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default Tree;
