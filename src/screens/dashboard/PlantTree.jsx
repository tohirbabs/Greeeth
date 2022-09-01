import React, { useEffect } from "react";

import plant from "../../../assets/landing/plant.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PlantTree = () => {
  const email = useId();
  const password = useId();
  // const router = useRouter();
  const [mailInput, setMailInput] = useState("");
  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [status, setstatus] = useState("");
  const [signedIn, setsignedIn] = useState(false);

  // console.log(cookies);
  // console.log(pic.base64);
  const postTree = async () => {
    setIsLoading(true);
    console.log(pic);

    try {
      const body = JSON.stringify({
        location: `${location}`,
        height: "10",
        image: pic,
      });
      console.log(body);
      console.log("tree");

      const response = await POST("/trees/", body);

      if (response.ok) {
        const result = await response.json();

        console.log("result is: ", JSON.stringify(result));
      }

      response.json().then((text) => {
        console.log(text);
      });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const percentage = 66;
  var pic;
  var location;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      location = `${position.coords.latitude}`;
    });
  });
  const handleCapture = (file) => {
    var reader = new FileReader();
    reader.onload = function () {
      console.log(reader);
      pic = reader.result;
    };
    reader.readAsDataURL(file.files[0]);
  };

  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-col gap-6 sm:gap-16 sm:flex-row sm:my-8">
        <div className="text-left sm:w-5/10">
          <h3 className="ligreen font-bold sm:text-4xl my-6">
            Plant new tree and geotag
          </h3>
          <p className="sm:my-4 my-2 sm:text-base">
            Trees are geotagged to get real time data of the tree planting done.
            With this, we will get the GPS cordinate, time swap, tree type, tree
            image, weather data, and who planted the tree.
          </p>
          <p className="sm:my-4 my-2 sm:text-base">
            The GPS coordinate and photo goes online and can be accessed by
            everyone on the interactive map.
          </p>
          <p className="sm:my-4 my-2 sm:text-base">
            With geotagging we can have traceability, accountability,
            transparency, no double counting, monitoring and validity.
          </p>
          <p className="sm:my-4 my-2 sm:text-base">
            Steps: <br />
            <ol>
              <li className="my-3">1. Click on the geotag button.</li>
              <li className="my-3">2. Enable Camera and gps location.</li>
              <li className="my-3">3. Take a good full picture of the tree.</li>
              <li className="my-3">
                4. Make sure the camera capture's the entire tree and surrounded
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
            className="mx-auto bg-white px-2rem py-1rem rounded-2xl shadow-md max-w-70vw sm:w-8/10"
          />
          <div onClick={() => postTree()} className="text-lg sm:my-4 my-2">
            Click the button below to geotag Tree
          </div>
          <input
            accept="image/*"
            className="block  p-4 mt-8 w-8/10 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-8/10 mx-auto hover:text-white hover:bg-green-900 focus:outline-none animate-bounce"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
          <div className="mx-auto w-6/10 mb-5 mt-8 ">
            <label
              className="block text-blueGray-600 text-base text-left font-bold mb-2"
              htmlFor="tree-name"
            >
              Name
            </label>
            <input
              type="text"
              className="border-0 text-black  px-3 py-3 text-base font-bold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Enter tree name"
            />
          </div>

          <div className="mx-auto w-6/10 mb-5">
            <label
              className="block text-blueGray-600 text-base text-left font-bold text-base font-bold mb-2"
              htmlFor="tree-height"
            >
              Height (mm*)
            </label>
            <input
              type="number"
              className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Enter tree heights in millimeters*"
            />
          </div>
          <div
            onClick={() => {
              postTree();
            }}
            className="block  p-4 mt-8 w-8/10 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-8/10 mx-auto hover:text-white hover:bg-green-900 focus:outline-none "
          >
            Geotag
          </div>
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default PlantTree;
