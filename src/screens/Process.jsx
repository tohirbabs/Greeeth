import React from "react";
import {
  Footer,
  PlantersHome,
  ProcessSection,
  UnderstandProcess,
} from "../components";
import {
  BG1,
  BG2,
  BG3,
  BG4,
  BG5,
  BG6,
  BG3a,
  BG3b,
  Pix1,
  Pix2,
  Pix3,
  Pix4,
  Pix5,
  Pix6,
  Pix7,
  Pix8,
} from "../../assets/Process";
import ProcessHome from "../components/ProcessHome";

const componentsArray = [
  {
    background: BG1,
    Illustration: Pix1,
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
    background: BG2,
    Illustration: Pix2,
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
    background: BG3,
    Illustration: Pix3,
    TextList: {
      title: "Autogenerate planting pattern",
      items: [
        "we generate planting pattern that beautifies the location",
        "It can also be customize by user who buys the cabon credit. (e.g with the name, organization name, logo, etc)",
      ],
    },
  },
  {
    background: BG3a,
    Illustration: Pix4,
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
    background: BG3b,
    Illustration: Pix5,
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
    background: BG4,
    Illustration: Pix6,
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
    background: BG5,
    Illustration: Pix7,
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
  {
    background: BG6,
    Illustration: Pix8,
    TextList: {
      title: "Planters get rewarded",
      items: [
        "Our platform automatically confirm the tree planted by cross-checking the coordinate and validate the task.",
        "(Other users/plasters closer to the location can also validate the task) for extended verification ",
        "Planter gets paid in crypto-currency, and virtual world",
      ],
    },
  },
];

function Process() {
  return (
    <div>
      <ProcessHome />
      {componentsArray.map((comp, i) => (
        <ProcessSection
          BG={comp.background}
          Pix={comp.Illustration}
          TextList={comp.TextList}
          Index={i}
        />
      ))}
      <Footer />
    </div>
  );
}
export default Process;
