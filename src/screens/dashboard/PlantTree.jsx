import React, { useEffect } from "react";
import Modal from "react-modal";
import geobutt from "../../components/Dashboard/geobutt.png";

import maped from "../../components/Dashboard/maped.png";
import treetag from "../../components/Dashboard/treetag.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";
import { UploadImage } from "../../components/UploadImage";
import { Overlay } from "../../components/Modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxHeight: "90vh",
    overflow: "scroll",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "DM Sans",
  },
};

const PlantTree = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
  var location = "";
  function locate() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      location = `${position.coords.latitude}`;
    });
  }
  // const handleCapture = (file) => {
  //   var reader = new FileReader();
  //   reader.onload = function () {
  //     console.log(reader);
  //     pic = reader.result;
  //   };
  //   reader.readAsDataURL(file.files[0]);
  // };

  console.log(location);

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
          <img
            onClick={() => {
              openModal();
              locate();
            }}
            src={geobutt}
            alt=""
          />
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h3 className="ligreen font-bold sm:text-4xl my-6">Geotag Tree</h3>
            {/* <button onClick={closeModal}>close</button>
            <div>I am a modal</div> */}
            <form>
              <UploadImage />
              <div className="mb-6">
                <label
                  htmlFor="treeName"
                  className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tree Name
                </label>
                <input
                  type="text"
                  id="treeName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 sm:min-w-400px min-w-320px dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="treeHeight"
                  className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tree Height (mm)
                </label>
                <input
                  type="number"
                  id="treeHeight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 sm:min-w-400px min-w-320px dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter tree height in millimeters"
                />
              </div>
              <button
                className="block w-9/10 mx-auto p-4 text-base font-normal bg-lgreen rounded-3xl shadow-md text-white  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                type="submit"
                onClick={closeModal}
              >
                Geotag
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default PlantTree;
