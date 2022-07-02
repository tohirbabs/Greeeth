import React from "react";

import {
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  Pic5,
  Pic6,
  Pic7,
} from "../../assets/Planters";

const componentsArray = [
  {
    // background: BG1,
    Illustration: Pic1,
    TextList: {
      title: "Real Time Data",
      item: "Planters can easily collect, manage, upload, and deliver tree  data to sponsors in real-time.",
    },
  },
  {
    // background: BG2,
    Illustration: Pic2,
    TextList: {
      title: "Actionable Insight",
      item: "Planters can easily check the inventory of trees and get recommendations on what next to do to improve tree quality.",
    },
  },
  {
    // background: BG3,
    Illustration: Pic3,
    TextList: {
      title: "Data driven",
      item: "Planters can easily input, select, and get tree data on the platform with our available resources on the platform.",
    },
  },
  {
    // background: BG3a,
    Illustration: Pic4,
    TextList: {
      title: "Interactive map",
      item: "Planters can view the tree planted on the interactive map and can easily track the tree.",
    },
  },
  {
    // background: BG3b,
    Illustration: Pic5,
    TextList: {
      title: "Maintenance",
      item: "Planters can easily schedule maintenance for trees and get notified. With our weather data, we give the best time for maintenance.",
    },
  },
  {
    // background: BG4,
    Illustration: Pic6,
    TextList: {
      title: "Monitoring",
      item: "Planters can easily monitor tree growth and health on the platform.",
    },
  },
  {
    // background: BG5,
    Illustration: Pic7,
    TextList: {
      title: "Engage",
      item: "Planters and sponsors can have direct engagement through our messaging platform with themselves to know more about the tree planted. Sponsors can also tip planters.",
    },
  },
];

function PlantersSection() {
  function PlantersInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 max-w-2xl px-6 flex flex-col items-center mb-30">
        <div className="md:5/12 lg:w-8/12 mb-8">
          <img
            src={Pic}
            alt="Location pins illustration"
            loading="lazy"
            className="mx-auto"
          />
        </div>
        <div className="text-center max-w-9/12">
          <h2 className="text-2xl lgreen font-bold md:text-4xl">
            {TextList.title}
          </h2>
          <p className="mt-6 text-gray-900 list-disc">{TextList.item}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative bg-white flex flex-col">
      <div className="relative flex flex-wrap items-center justify-center">
        {componentsArray.map((comp, i) => (
          <PlantersInfo
            // BG={comp.background}
            Pic={comp.Illustration}
            TextList={comp.TextList}
          />
        ))}
      </div>
    </section>
  );
}
export default PlantersSection;
