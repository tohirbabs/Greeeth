import React, { useEffect, useState } from "react";
import { GeotagIcon } from "./Dashboard/GeotagIcon";

export const UploadImage = ({ setImage, image, setGeotag }) => {
  const [imageURL, setImageURL] = useState("no image");
  const newImageURL = {};
  console.log(image);
  useEffect(() => {
    if (image == "no image") {
      return;
    }

    // newImageURL = URL.createObjectURL(image);
    // setImageURL(newImageURL);
    setGeotag(true);
  }, [image]);
  function onImageChange(e) {
    setImage(e.target.files);
  }
  console.log(imageURL);
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
      {/* <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        id="treeImage"
        className="imgFile"
      /> */}
      {/* <div className=" m-2 overflow-hidden">
        {imageURL === "no image" ? (
          <></>
        ) : (
          <img
            src={imageURL}
            className="max-w-300px rounded-xl  my-2 sm:max-w-400px"
          />
        )}
      </div> */}
    </div>
  );
};
