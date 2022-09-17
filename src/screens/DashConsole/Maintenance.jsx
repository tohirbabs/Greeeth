import React, { useEffect } from "react";

import plant from "../../../assets/landing/plant.png";

import before from "../../components/Dashboard/before.png";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";
import Modal from "react-modal";
import geobutt from "../../components/Dashboard/geobutt.png";

import maped from "../../components/Dashboard/maped.png";
import treetag from "../../components/Dashboard/treetag.png";

// import Map from "../../components/Dashboard/Map";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { UploadImage } from "../../components/UploadImage";

import { ThreeDots } from "react-loader-spinner";
import { useCookies } from "react-cookie";

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

const Maintenance = () => {
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

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [cookies, setCookie] = useCookies();

  const [images, setImages] = useState([]);
  const [treeNameInput, setTreeNameInput] = useState("");
  const [treeHeightInput, setTreeHeightInput] = useState(0);

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
  console.log(cookies.key);
  function maintainTree() {
    setIsLoading(true);
    var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Token ${cookies.key}`);
    const body = JSON.stringify({
      location: `{"type":"Point","coordinates": [${locationLat},${locationLon}]}`,
      tree: treeNameInput,
      height: treeHeightInput,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/maintainance/", requestOptions)
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
  const percentage = 66;
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
  const handleCapture = (file) => {
    var reader = new FileReader();
    reader.onload = function () {
      console.log(reader);
      pic = reader.result;
    };
    reader.readAsDataURL(file.files[0]);
  };
  useEffect(() => locate());

  return (
    // <DashboardLayout>
    <div className="sm:my-12 my-2">
      <div className="flex flex-col gap-6 sm:gap-10 sm:flex-row sm:my-8">
        <div className="text-left sm:w-4/10">
          <h3 className="ligreen font-bold sm:text-4xl my-6">
            Procedure to getting tree for maintenance
          </h3>
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
          <div className="">
            <h3 className="ligreen font-bold sm:text-2xl mt-15 text-center">
              Picture geotagged sample
            </h3>
            <div className="flex gap-4 justify-center text-center">
              <div className="">
                <p className="sm:my-4 my-2 sm:text-base">Before</p>
                <img
                  src={before}
                  alt=""
                  className="w-150px rounded-md h-180px"
                />
              </div>
              <div className="">
                <p className="sm:my-4 my-2 sm:text-base">After</p>
                <img
                  src={plant}
                  alt=""
                  className="w-150px rounded-md h-180px bg-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="">
            {/* <h3 className="ligreen font-bold sm:text-xl my-2">Picture Sample</h3> */}
            <div
              onClick={() => {
                openModal();
                locate();
              }}
              className="block w-9/10 mx-auto p-4 flex justify-center text-base text-center font-normal bg-lgreen rounded-3xl shadow-md text-white  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
            >
              Maintain tree
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h3 className="ligreen font-bold sm:text-4xl my-6">
                Tree Maintenance
              </h3>
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
                  onClick={() => maintainTree()}
                >
                  {isLoading ? (
                    <ThreeDots
                      height="20"
                      width="100"
                      color="white"
                      ariaLabel="loading"
                    />
                  ) : (
                    "Maintain Tree"
                  )}
                </div>
              </form>
            </Modal>
          </div>
          <div className="text-left ">
            <h3 className="ligreen font-bold sm:text-4xl my-6">
              Good maintenance practice
            </h3>
            <p className="sm:my-4 my-2 sm:text-base">
              Properly water: You must water trees, just like any other plant!
              Check to see whether your tree needs a drink if it hasn't rained
              in a few weeks.{" "}
            </p>
            <p className="sm:my-4 my-2 sm:text-base">
              Mulch: Mulch prevents dry soil by insulating tree roots, shielding
              them from lawnmower cuts. By removing the grass from beneath the
              tree and applying 2 to 4 inches of mulch, you can assist the tree
              in gaining these advantages. Take cautious not to enclose the
              trunk's base.
            </p>
            <p className="sm:my-4 my-2 sm:text-base">
              Fertilize: Natural plant matter feeds the soil around trees in a
              forest. However, we rake and remove all those organic nutrients
              from our yards, such as leaves and grass clippings. That issue is
              resolved by fertilizer. To release nutrients into the soil, apply
              a slow-release fertilizer frequently. Additionally, periodically
              check your soil to determine if any elements are missing or in
              short supply.
            </p>
            <p className="sm:my-4 my-2 sm:text-base">
              Prune: Trimming trees correctly strengthens their structure and
              gets rid of any deadwood that's been holding them back. When the
              tree is dormant and without leaves, perform extensive pruning (if
              possible). Then, over the summer, concentrate on organizing and
              removing any small, dead, or broken twigs.{" "}
            </p>
            <p className="sm:my-4 my-2 sm:text-base">
              Checkups: Scheduling your yearly examination? Schedule a time for
              your tree as well! Early detection of illness or insect symptoms
              can make all the difference.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </DashboardLayout>
  );
};

export default Maintenance;
