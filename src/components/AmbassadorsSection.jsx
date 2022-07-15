import React from "react";
import { useState, useContext } from "react";
import ForestBG from "../../assets/company forest.png";
import { PageContext } from "../App";
import {
  pic1,
  pic2,
  pic3,
  Ambassadors,
  hypebg,
} from "../../assets/GetInvolved/Ambassadors";

const componentsArray = [
  {
    // background: BG1,
    Illustration: pic1,
    TextList: {
      title: "Take part in offsetting projects",
    },
  },
  {
    // background: BG2,
    Illustration: pic2,
    TextList: {
      title: "Integrate tree planting on your website checkout",
    },
  },
  {
    // background: BG3,
    Illustration: pic3,
    TextList: {
      title: "Donate a percentage of sales to plant a tree",
    },
  },
];

function AmbassadorsSection() {
  function AmbassadorsInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 lg:w-3/11 px-2 flex flex-col items-center justify-center py-1rem lg:mb-30 mb-10 h-310px card">
        <div className="md:5/12 lg:w-8/12 mb-8">
          <img
            src={Pic}
            alt="Location pins illustration"
            loading="lazy"
            className="mx-auto max-h-190px"
          />
        </div>
        <div className="text-center max-w-9/12">
          <h2 className="text-2xl lgreen font-bold md:text-2xl">
            {TextList.title}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative grad-lgreen flex flex-col pt-20">
        <h2 className="text-4xl  sm:(text-5xl !leading-tight) font-medium capitalize lgreen">
          What will you gain?
        </h2>
        <div className="relative flex flex-col items-center justify-center gap-2rem mt-2rem">
          {componentsArray.map((comp, i) => (
            <AmbassadorsInfo
              Pic={comp.Illustration}
              TextList={comp.TextList}
              Index={i}
            />
          ))}
        </div>
      </section>
      <div className="relative hypeBG centerize">
        <p className="w-6/10 text-white text-xl mb-10">
          The Ambassador program will provide you tips and options to spread the
          word about our mission and bring more climate fighters into our cause.
        </p>
        <a
          className=" px-10 py-4 text-base font-medium bg-white rounded-lg shadow-md lgreen  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
          href="/about"
        >
          Apply for free
        </a>
        {/* <img
          src={hypebg}
          alt="Location pins illustration"
          loading="lazy"
          className="mx-auto"
        /> */}
      </div>
    </>
  );
}

export default AmbassadorsSection;
