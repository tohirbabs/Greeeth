import React from "react";
import { useState, useContext } from "react";
import ForestBG from "../../assets/company forest.png";
import { PageContext } from "../App";
import {
  list,
  pic1,
  pic2,
  pic3,
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
} from "../../assets/GetInvolved/Ambassadors";

const componentsArray = [
  {
    // background: BG1,
    Illustration: pic1,
    TextList: {
      title: "Earn digital badge & certificate.",
    },
  },
  {
    // background: BG2,
    Illustration: pic2,
    TextList: {
      title: "Have trees planted by the company on your behalf ",
    },
  },
  {
    // background: BG3,
    Illustration: pic3,
    TextList: {
      title:
        "Earn our coin which can be used to purchase on our marketplace/shop",
    },
  },
];

function AmbassadorsSection() {
  function AmbassadorsInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 lg:w-3/11 px-2 flex flex-col items-center justify-center mx-2 py-1rem lg:mb-30 mb-10 h-310px card">
        <div className="md:5/12 lg:w-8/12 mb-8">
          <img
            src={Pic}
            alt="Location pins illustration"
            loading="lazy"
            className="mx-auto max-h-190px"
          />
        </div>
        <div className="text-center max-w-9/12">
          <h2 className="text-xl lgreen font-bold md:text-xl">
            {TextList.title}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative grad-lgreen flex flex-col items-center pt-20">
        <h2 className="text-3xl  sm:(text-3xl !leading-tight) font-medium capitalize lgreen">
          What will you gain?
        </h2>
        <div className="relative flex lg:flex-row flex-col items-center justify-center gap-2rem mt-2rem">
          {componentsArray.map((comp, i) => (
            <AmbassadorsInfo
              Pic={comp.Illustration}
              TextList={comp.TextList}
              Index={i}
            />
          ))}
        </div>
        <section className="flex flex-col sm:flex-row items-center justify-center max-w-screen-lg mx-4">
          <h2 className="text-3xl lgreen font-bold sm:hidden md:text-5xl">
            Who can apply to be an Ambassador?
          </h2>
          <div className="images my-6 flex gap-8">
            <div className="left-col flex flex-col gap-6">
              <div className="">
                <img src={profile2} alt="" className="sm:w-15rem w-12rem" />
              </div>
              <div className="">
                <img src={profile4} alt="" className="sm:w-15rem w-12rem" />
              </div>
            </div>
            <div className="right-col flex flex-col gap-6">
              <div className="">
                <img src={profile1} alt="" className="sm:w-15rem w-12rem" />
              </div>
              <div className="">
                <img src={profile3} alt="" className="sm:w-15rem w-12rem" />
              </div>

              <div className="">
                <img src={profile5} alt="" className="sm:w-15rem w-12rem" />
              </div>
            </div>
          </div>
          <div className="text-left md:10/12 lg:w-10/12 sm:ml-12">
            <h2 className="text-3xl lgreen hidden sm:block font-bold md:text-5xl">
              Who can apply to be an Ambassador?
            </h2>
            <ul className="mt-6 lgreen list-disc sm:text-lg sm:leading-loose">
              <li className="flex gap-4 items-center mb-2 ">
                <img src={list} alt="" className="" />
                <p>Be proactive and engage with our community.</p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>Promote Tree planting in your community</p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>Be passionate about sustainability and tree planting.</p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>Must have keen interest in preserving our environment.</p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>Brand ambassadors must be team players.</p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>
                  Knowledgeable on climate change, sustainability and tree
                  planting..
                </p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>
                  Demonstrate leadership skills, interpersonal skills, and must
                  be a team player.
                </p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>Must have top notch communication skills.</p>
              </li>
              <li className="flex gap-4 items-center mb-2">
                <img src={list} alt="" className="" />
                <p>Must be innovative and creative in their approaches.</p>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <div className="relative hypeBG centerize">
        <p className="sm:w-6/10 px-4 text-white text-lg mb-10">
          The Ambassador program will provide you tips and options to spread the
          word about our mission and bring more climate fighters into our cause.
        </p>
        <a
          className=" px-10 py-4 text-base font-medium bg-white rounded-lg shadow-md lgreen  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
          href="/get-involved/Ambassadors/apply"
        >
          Apply for free
        </a>
      </div>
    </>
  );
}

export default AmbassadorsSection;
