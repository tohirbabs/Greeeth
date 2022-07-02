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
      title: "Detect planting location",
      items: [
        "Get data of vulnurable location",
        "We check for plantable area",
        "Individuals/communities/locals can map out planting locations on the map",
        "Check location with map, more CO2 emission on the map",
        "choose where to plant (manually)",
        "vet foundation with location",
      ],
    },
  },
  {
    // background: BG2,
    Illustration: Pic2,
    TextList: {
      title: "Send planting location to user",
      items: [
        "We send planting location to users closer to the location mapped out for planting ",
        "Users can also take part in planting project ",
        "User gets recommended tree type and planting pattern with our pattern generator. Auto generare planting pattern that will beautify the environment and still fight climate change.",
      ],
    },
  },
  {
    // background: BG3,
    Illustration: Pic3,
    TextList: {
      title: "Autogenerate planting pattern",
      items: [
        "we generate planting pattern that beautifies the location",
        "It can also be customize by user who buys the cabon credit. (e.g with the name, organization name, logo, etc)",
      ],
    },
  },
  {
    // background: BG3a,
    Illustration: Pic4,
    TextList: {
      title: "Planting by human ",
      items: [
        "Allows tree to be planted in locations easily accessible by humans ",
        "Planter plant the tree and geo-tag it with our software by taking the picture and video of the planting process",
        "We then get the cordinates and location of the tree planted",
      ],
    },
  },
  {
    // background: BG3b,
    Illustration: Pic5,
    TextList: {
      title: "Tree bombing",
      items: [
        "We use unarmed drone to do tree bombing when planting in a large area or location that are not easily accessible by human.",
        "We can plant up to 3,000 tree in 30 minutes by going to an high altitude and pusing pressure to bomb the seeds from the sky to make the spread out.",
        "real time data",
        "visible in 3d simulated enviroment and actual planting image process",
      ],
    },
  },
  {
    // background: BG4,
    Illustration: Pic6,
    TextList: {
      title: "Confirmation",
      items: [
        "Our platform automatically confirm the tree planted by cross-checking the coordinate and validate the task.",
        "(Other users/plasters closer to the location can also validate the task) for extended verification ",
        "Planter gets paid in crypto-currency, and virtual world",
      ],
    },
  },
  {
    // background: BG5,
    Illustration: Pic7,
    TextList: {
      title: "Blockchain",
      items: [
        "Three planted gets connected to blockchain and viablr on the virtual world",
        "Digital tree version (NFT) which is viewable / accessible on the virtal world",
        "NFT can be gifted (Rewarding customers, employees, loved ones, birthday gift, etc",
        "Every NFT (digital tree) as a physical / real tree planted in a location blockchain and the virtual world",
      ],
    },
  },
];

function PlantersSection() {
  function PlantersInfo({ Pic, TextList }) {
    return (
      <div className="bg-white BG1 max-w-2xl">
        <div className=" px-6 text-gray-600 ">
          <div className="  ">
            <div className="">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src={Pic}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
              <div className="text-left">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  {TextList.title}
                </h2>
                <ul className="mt-6 text-gray-600 list-disc leading-loose">
                  {TextList.items.map((item) => (
                    <li key={item.i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative bg-white flex flex-col">
      <div className="relative flex flex-wrap items-center justify-center ">
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
