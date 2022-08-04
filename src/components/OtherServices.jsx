import React from "react";
import services from "../../assets/services/services.png";
import maintain from "../../assets/services/maintain.png";
import legal from "../../assets/services/legal.png";
import illegal from "../../assets/services/illegal.png";
import reward from "../../assets/services/reward.png";
import track from "../../assets/services/track.png";

import TreeBG from "../../assets/t1.png";

const componentsArray = [
  {
    // background: BG1,
    Illustration: maintain,
    TextList: {
      title: "1. Tree maintainance",
      subtitle: "",
      items: [
        "We use weather forecast to get weather condition of the tree planted. Ultra-valent index, Wind, Humidity, Temperature.",
        "Our platform monitors tree health and sends maintenance tasks to planters when needed ",
        "Maintenance confirmation is sent by geotagging with field data",
      ],
    },
  },
  {
    // background: BG2,
    Illustration: track,
    TextList: {
      title: "2. Track progress",
      subtitle: "",
      items: [
        " Get your tree data and track progress",
        "Show your impact and CO2 offset in real-time ",
      ],
    },
  },
  {
    // background: BG3,
    Illustration: reward,
    TextList: {
      title: "3. Plant at home and get rewarded",
      subtitle: "",
      items: [
        " Do you have a  backyard or vacant space in your home?",
        "Offset your carbon emission by planting a tree in your home. ",
        "Get paid to offset other's emission.",
        "Easy access to maintenance.",
      ],
    },
  },
  {
    // background: BG3a,
    Illustration: illegal,
    TextList: {
      title: "4. Illegal Deforestation ",
      subtitle: "",
      items: [
        "Planters can flag an attempt for illegal deforestation in a particular location with evidence and report it to the nearest authority and they get rewarded. Other members also confirm the attempt for illegal deforestation.",
        "We will work with government to avoid illegal deforestation. ",
      ],
    },
  },
  {
    // background: BG3b,
    Illustration: legal,
    TextList: {
      title: "4. Legal/proper Deforsetation",
      subtitle: "",
      items: [
        "Merge deforestation time with actual time needed for tree to be planted.",
        "Corporations who want to cut down the tree will have planted the same amount for substitute earlier, before that will have captured/locked carbon emitted closer to the one that will be cut down.",
        "With Silviculture we can control the growth, composition/structure, and quality of forests to meet values and needs, specifically timber production",
      ],
    },
  },
];

function OtherServices() {
  function ProcessList({ BG, Pix, TextList, Index }) {
    return (
      <>
        <div className="BG-lgreen">
          <div
            className="py-20 flex flex-wrapitems-center justify-center BG1"
            // style={{ backgroundImage: `url(${BG})` }}
          >
            <div className="container flex  flex-col items-center  m-auto sm:px-15 px-4 text-gray-600 md:px-12 xl:px-22">
              {Index % 2 === 0 ? (
                <div className="">
                  <div className="space-y-6 p-4 md:space-y-0 md:flex md:gap-4 lg:items-center lg:gap-6">
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
                      <h2 className="text-xl text-gray-600 font-bold md:text-3xl">
                        {TextList.subtitle}
                      </h2>
                      <ul className="mt-6 text-gray-600 list-disc leading-loose">
                        {TextList.items.map((item) => (
                          <li key={item.i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white w-100vw flex justify-center">
                  <div className="space-y-6  max-w-screen-xl sm:p-10 p-4 md:space-y-0 md:flex md:gap-4 lg:items-center lg:gap-6">
                    <div className="text-left md:6/12 lg:w-6/12 ml-12">
                      <h2 className="text-2xl lgreen font-bold md:text-4xl">
                        {TextList.title}
                      </h2>
                      <h2 className="text-xl text-gray-600 font-bold md:text-3xl">
                        {TextList.subtitle}
                      </h2>
                      <ul className="mt-6 text-gray-600 list-disc leading-loose">
                        {TextList.items.map((item) => (
                          <li key={item.i}>{item}</li>
                        ))}
                      </ul>
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
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
        <div className="container h-full  lg:mx-6 my-3 flex flex-col lg:flex-wrap items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex-row text-zinc-800">
          <div className="lg:max-w-6/11 text-center sm:text-left darkgreen">
            <h1 className="text-3xl  sm:(text-7xl !leading-tight) font-medium capitalize lgreen">
              Other Services we offer
            </h1>

            <p className="lg:max-w-10/12 mt-6 sm:leading-relaxed sm:text-xl">
              The best way for individuals and companies to plant trees, offset
              their carbon footprint and restore ecosystem.
            </p>

            <div className="flex justify-center sm:justify-start flex-wrap lg:gap-4 mt-10 text-center">
              <a
                className="block w-1/2 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white  hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                href="/about"
              >
                Plant now
              </a>
            </div>
          </div>
          <img
            src={services}
            alt="Tree illustration"
            width={350}
            height={500}
            // loading="lazy"
            className="mx-auto sm:max-w-3/5 sm:w-3/7 lg:max-w-7/11"
          />
        </div>
      </section>
      {componentsArray.map((comp, i) => (
        <ProcessList
          // BG={comp.background}
          Pix={comp.Illustration}
          TextList={comp.TextList}
          Index={i}
        />
      ))}
    </div>
  );
}

export default OtherServices;
