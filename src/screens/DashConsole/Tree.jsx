import React, { useEffect } from "react";
import Modal from "react-modal";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";
import PlantTree from "./PlantTree";
import Maintenance from "./Maintenance";
import { GeotagIcon } from "../../components/Dashboard/GeotagIcon";
import { TreeCards } from "./TreeCards";
import { useCookies } from "react-cookie";
import { UploadImage } from "../../components/UploadImage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tree = () => {
  const [treeSection, settreeSection] = useState("Plant New Trees");
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     location = `${position.coords.latitude}`;
  //   });
  // });

  var pic;
  var locationLon;
  var locationLat;
  function locate() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      locationLat = position.coords.latitude;
      locationLon = position.coords.longitude;
    });
  }
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [images, setImages] = useState([]);
  const [treeNameInput, setTreeNameInput] = useState("");
  const [treeHeightInput, setTreeHeightInput] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
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
  // console.log(locationLat);

  function postTree() {
    setIsLoading(true);
    console.log(locationLat);
    var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Token ${cookies.key}`);
    let form_data = new FormData();
    form_data.append("image", images[0]);
    form_data.append(
      "location",
      `{"type":"Point","coordinates": [12.234,3.56]
    }`
    );
    form_data.append("height", treeHeightInput);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: form_data,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/trees/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // setCookie(`token`, result.key, {
          //   path: "/",
          // });
          console.log(result);
          // if (result.key) {
          //   navigate("/dashboard");
          // }
        });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const TreeNavItem = ({ name }) => {
    return (
      <div
        onClick={() => {
          settreeSection(name);
          console.log(name);
        }}
        className={
          treeSection === `${name}`
            ? "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
            : "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
        }
      >
        {name}
      </div>
    );
  };

  const TreeSection = () => {
    switch (treeSection) {
      case "Planted Trees":
        return <TreeCards />;
      case "Plant New Trees":
        return <PlantTree />;
      case "Maintenance Task":
        return <Maintenance />;

      default:
        return <TreeCards />;
    }
  };
  return (
    // <DashboardLayout>
    <div className="my-2 py-6">
      <div className="flex flex-wrap sm:gap-6 gap-2">
        <div className="">
          {/* <h3 className="ligreen font-bold sm:text-xl my-2">Picture Sample</h3> */}
          <div
            onClick={() => {
              locate();
              openModal();
            }}
            className="p-1 cursor-pointer bg-lgreen border  rounded-full flex justify-between items-center"
          >
            <div className="left flex gap-4 items-center mr-5">
              <div className="bg-lightgreen p-2 rounded-full">
                <GeotagIcon />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-md font-bold text-white">
                  Geotag a Planted Tree
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h3 className="ligreen font-bold sm:text-4xl my-6">Geotag Tree</h3>
            <button onClick={closeModal}>close</button>
            {/* <div>I am a modal</div> */}
            <form>
              <UploadImage setImages={setImages} images={images} />
              <div className="mb-6">
                <label
                  htmlFor="treeName"
                  className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tree type
                </label>
                <input
                  type="text"
                  id="treeName"
                  value={treeNameInput}
                  onInput={(e) => setTreeNameInput(e.target.value)}
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
                  value={treeHeightInput}
                  onInput={(e) => setTreeHeightInput(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 sm:min-w-400px min-w-320px dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter tree height in millimeters"
                />
              </div>
              <div
                className="block w-9/10 mx-auto p-4 flex justify-center text-base text-center font-normal bg-lgreen rounded-3xl shadow-md text-white  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                // type="submit"
                onClick={() => postTree()}
              >
                Geotag
              </div>
            </form>
          </Modal>
        </div>
      </div>
      <TreeCards />
    </div>
    // </DashboardLayout>
  );
};

export default Tree;
