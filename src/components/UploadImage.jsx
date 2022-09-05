import React, { useEffect, useState } from "react";

export const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const newImageURLs = [];
  useEffect(() => {
    if (images.length < 1) {
      return;
    }

    console.log(URL.createObjectURL(images[0]));

    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);
  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  console.log(imageURLs);
  return (
    <div className="my-6">
      <label for="treeImage" className="imgButton ">
        Capture Tree
      </label>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={onImageChange}
        id="treeImage"
        className="imgFile"
      />
      <div className=" m-2 overflow-hidden">
        {imageURLs.map((imageSrc) => (
          <img
            src={imageSrc}
            className="max-w-300px rounded-xl  sm:max-w-400px"
          />
        ))}
      </div>
    </div>
  );
};
