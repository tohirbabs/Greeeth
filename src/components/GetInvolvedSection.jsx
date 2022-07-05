import React from "react";
import { Pix1, Pix2, Pix3, Pix4, Pix5, Pix6 } from "../../assets/GetInvolved";

const componentsArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Offset your carbon footprint",
      text: "Offset your company's carbon emissions by planting a tree. ",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Corporate gifting to customers",
      text: "Give your clients a thoughtful gift like a tree that you plant in their honor. ",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Use as Employee engagement",
      text: "Plant a forest and distribute a tree from it to each employee.",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Unique Reward ",
      text: "Reward respondents with newly planted trees for completing a survey. ",
    },
  },
  {
    Illustration: Pix5,
    TextList: {
      title: "Loyalty Program to Customers ",
      text: "Provide clients with a way to convert points into trees to reduce your financial burden. ",
    },
  },
  {
    Illustration: Pix6,
    TextList: {
      title: "Use Tree in Corporate Social Responsibility (CSR) ",
      text: "Offset your company's carbon emissions by planting a tree. ",
    },
  },
];

function GetInvolvedSection() {
  function GetInvolvedList({ Pix, TextList, Index }) {
    return (
      <div className="BG-lgreen ">
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          {Index % 2 === 0 ? (
            <div className="container flex items-center max-w-screen-xl m-auto py-20 px-15 text-gray-600 md:px-12 xl:px-22  BG-lgreen w-screen">
              <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
                <div className="text-left md:6/12 lg:w-6/12 ml-12">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center">
                    <a
                      className="block w-1/2 px-30 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                      href="/about"
                    >
                      Read More . . .
                    </a>
                  </div>
                </div>
                <div className="md:6/12 lg:w-6/12">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="container flex items-center max-w-screen-xl m-auto py-20 text-gray-600 md:px-12 xl:px-22  bg-white w-screen">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-6/12">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
                <div className="text-left md:6/12 lg:w-6/12 ml-12">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center">
                    <a
                      className="block w-1/2 px-30 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring"
                      href="/about"
                    >
                      Read More . . .
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div>
      {componentsArray.map((comp, i) => (
        <GetInvolvedList
          Pix={comp.Illustration}
          TextList={comp.TextList}
          Index={i}
        />
      ))}
    </div>
  );
}

export default GetInvolvedSection;
