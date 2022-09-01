import React, { useEffect } from "react";

import plant from "../../../assets/landing/plant.png";

import before from "../../components/Dashboard/before.png";

// import CircularSlider from "@fseehawer/react-circular-slider";

import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
