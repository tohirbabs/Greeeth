import React from "react";

import { Pic1, Pic2, Pic3, Pic4 } from "../../assets/GetInvolved/Partners";

const componentsArray = [
  {
    // background: BG1,
    Illustration: Pic1,
    TextList: {
      title: "Take part in offsetting projects",
    },
  },
  {
    // background: BG2,
    Illustration: Pic2,
    TextList: {
      title: "Integrate tree planting on your website checkout",
    },
  },
  {
    // background: BG3,
    Illustration: Pic3,
    TextList: {
      title: "Donate a percentage of sales to plant a tree",
    },
  },
  {
    // background: BG3a,
    Illustration: Pic4,
    TextList: {
      title: "Tree planting organization Partner",
    },
  },
];

function PartnersSection() {
  function PartnersInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 max-w-xl px-2 flex flex-col items-center justify-center py-1rem mb-30 h-445px ">
        <div className="md:5/12 lg:w-8/12 mb-8">
          <img
            src={Pic}
            alt="Location pins illustration"
            loading="lazy"
            className="mx-auto"
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
    <section className="relative grad-lgreen flex flex-col pt-20">
      <div className="relative flex flex-wrap items-center justify-center gap-2rem">
        {componentsArray.map((comp, i) => (
          <PartnersInfo
            // BG={comp.background}
            Pic={comp.Illustration}
            TextList={comp.TextList}
          />
        ))}
      </div>
    </section>
  );
}
export default PartnersSection;
