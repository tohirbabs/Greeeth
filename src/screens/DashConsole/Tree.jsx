import React, { useEffect } from "react";
import Modal from "react-modal";
import TreeBG from "/assets/landing/home-bg.png";

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
import { Footprinticon } from "../../components/Dashboard/Footprinticon";
import { Walleticon } from "../../components/Dashboard/Walleticon";
import { Treeicon } from "../../components/Dashboard/Tree";
import { Locate } from "../../components/Dashboard/locate";

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
  const [image, setImage] = useState("no image");
  const [geotag, setgeotag] = useState(false);

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
        {geotag ? (
          <div className="left flex gap-4 items-center mr-5 ">
            <div className="p-2 cursor-pointer bg-lgreen border   rounded-full flex justify-between items-center">
              <div className="bg-lightgreen p-2 rounded-full">
                <Treeicon clr="#008000" />
              </div>
              <div className="flex flex-col text-left ml-2">
                <div className="text-md font-bold text-white">
                  Provide Tree Catalogue
                </div>
              </div>
            </div>
          </div>
        ) : (
          <UploadImage
            setImage={setImage}
            image={image}
            setGeotag={setgeotag}
          />
        )}
      </div>
      <div className="mx-auto my-auto flex justify-center">
        <div
          className={
            geotag
              ? "dash-card mt-6 sm:max-w-400px  shadow-lg rounded-2xl"
              : "hidden"
          }
        >
          <div className="bg-lgreen flex text-white rounded-2xl p-2 text-xl font-bold  justify-end items-center">
            <div className="bg-lightgreen p-1 rounded-full my-auto mr-2">
              <Locate clr="#008000" />
            </div>
            <div>Recent Activities</div>
          </div>
          <img
            src={TreeBG}
            alt="Tree illustration"
            className="sm:max-w-[400px] max-w-[300px] p-4"
          />
          <div className="sm:p-6 sm:pb-4 p-4 flex flex-col gap-2">
            <div className="p-1 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-full flex  items-center">
              <div className="bg-lightgreen p-2 ml-1 mr-4 rounded-full my-auto">
                <Footprinticon clr="#008000" />
              </div>
              <input
                type="text"
                placeholder="Enter Tree type"
                id="treeName"
                value={treeNameInput}
                onInput={(e) => setTreeNameInput(e.target.value)}
                className="text-gray-900 text-base"
              />
            </div>
            <div className="p-1 border cursor-pointer hover:bg-lightgreen bd-lgreen border w-full rounded-full flex  items-center">
              <div className="bg-lightgreen p-2 ml-1 mr-4 rounded-full my-auto">
                <Footprinticon clr="#008000" />
              </div>
              <select id="employeenum" name="employeenum">
                <option value="one">Enter tree Height</option>
                <option value="two">10mm - 49mm</option>
                <option value="three">50mm - 99mm</option>
                <option value="four">100mm - 499mm</option>
                <option value="five">500mm+</option>
              </select>
            </div>
            <div className="p-4 cursor-pointer bg-lgreen border   rounded-full">
              <div
                onClick={() => {
                  setgeotag(false);
                }}
                className="text-md font-bold text-white"
              >
                Submit Tree
              </div>
            </div>
          </div>
        </div>
      </div>
      <TreeCards />
    </div>
    // </DashboardLayout>
  );
};

export default Tree;
