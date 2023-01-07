import React from "react";
import teampic from "../../assets/team.png";
import active from "../../assets/trash.png";
import active2 from "../../assets/trash2.png";
import waste from "../../assets/gall.png";

export const Gallery = () => {
  return (
    <div>
      <h1 className="text-3xl text-center sm:(text-5xl !leading-tight) font-medium capitalize text-zinc-800">
        Gallery
      </h1>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={active2}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={active}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={teampic}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={waste}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
