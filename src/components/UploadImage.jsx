import React, { useEffect, useState } from "react";
import { GeotagIcon } from "./Dashboard/GeotagIcon";
import { useCookies } from "react-cookie";

export const UploadImage = ({ setImage, image, setGeotag, setImageURL }) => {
  // const [imageURL, setImageURL] = useState("no image");
  const [cookies, setCookie] = useCookies();

  const newImageURL = {};
  var locationLon;
  var locationLat;
  // console.log(image);
  function locate() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      locationLat = position.coords.latitude;
      locationLon = position.coords.longitude;
      setCookie(`locationLat`, parseInt(position.coords.latitude), {
        path: "/",
      });
      setCookie(`locationLong`, parseInt(position.coords.longitude), {
        path: "/",
      });
    });
  }
  useEffect(() => {
    if (image == "no image") {
      return;
    }

    // newImageURL = ;
    setImageURL(URL.createObjectURL(image));
  }, [image]);
  function onImageChange(e) {
    locate();
    setImage(e.target.files[0]);
    setGeotag(true);
  }
  return (
    <div className="my-1">
      <label for="treeImage" className="">
        <div className="left flex gap-4 items-center mr-5 ">
          <div className="p-2 cursor-pointer bg-lgreen border   rounded-full flex justify-between items-center">
            <div className="bg-lightgreen p-2 rounded-full">
              <GeotagIcon />
            </div>
            <div className="flex flex-col text-left ml-2">
              <div className="text-md font-bold text-white">
                Geotag a Planted Tree
              </div>
            </div>
          </div>
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        id="treeImage"
        className="imgFile"
      />
    </div>
  );
};
