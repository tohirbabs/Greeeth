import React from "react";
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
  comp,
} from "../../assets/Process";

const componentsArray = [
  {
    background: BG1,
    Illustration: Pix1,
    TextList: {
      title: "Detect planting location",
      subtitle: "",
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
      subtitle: "",
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
      title: "Autogenerative Planting Pattern",
      subtitle: "",
      items: [
        "Planters get recommended tree type and planting pattern that will benefit the environment and fight climate change.",
        "Planting pattern can be customised by sponsor (e.g  Organization name).",
      ],
    },
  },
  {
    background: BG3a,
    Illustration: Pix4,
    TextList: {
      title: "Planting type (A) ",
      subtitle: "Planting By Human",
      items: [
        "Planters plant the tree and geotag it on the platform and get on-field data",
        "GPS coordinates",
        "Pictures",
        "Videos",
        "Timestamp",
      ],
    },
  },
  {
    background: BG3b,
    Illustration: Pix5,
    TextList: {
      title: "Planting type (B)",
      subtitle: "Autonomous Seed Firing Drone",
      items: [
        "We use an unmanned autonomous drone to plant seeds by firing when planting in a large area or location that is not easily accessible by human.",
        "We can plant up to 100,000 seed pod daily, which is faster and easier than planting by a human. ",
        "The drone goes to a high altitude and uses pressure to fire the seedpod from the sky to make it spread out effectively.",
        "We get on field data like GPS coordinates, pictures, Video of the planting process, and  timestamp of the seedpod planted",
        "The drone can do: Terra Mapping and Soil Analysis",
      ],
    },
  },
  {
    background: BG4,
    Illustration: Pix6,
    TextList: {
      title: "Confirmation",
      subtitle: "",
      items: [
        "Our platform automatically confirm the tree planted by cross-checking the coordinate and validates the task.",
        "IPlanters closer to the location can also verify the task of the tree planted for further verification",
      ],
    },
  },
  {
    background: BG5,
    Illustration: Pix7,
    TextList: {
      title: "Cloud Database",
      items: [
        "Trees planted get connected to our database and are visible on the interactive map",
        "This will improve the forest database and would help improve sustainability, transparency, connectivity, and accessibility to the public and government.",
      ],
    },
  },
  {
    background: BG6,
    Illustration: Pix8,
    TextList: {
      title: "Planters get rewarded",
      subtitle: "",
      items: [
        " Planters get rewarded in ponit(s) for the planting task carried out when confirmed. Money can be withdrawn in fiat currency or cryptocurrency.",
        " Planters will also be rewarded for other tasks carried out.",
      ],
    },
  },
];

function ProcessSection() {
  function ProcessList({ BG, Pix, TextList, Index }) {
    return (
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
    );
  }
  return (
    <div>
      {componentsArray.map((comp, i) => (
        <ProcessList
          BG={comp.background}
          Pix={comp.Illustration}
          TextList={comp.TextList}
          Index={i}
        />
      ))}

      <div className="max-w-screen-xl text-center py-30 sm:px-20 px-4 m-auto">
        <img
          src={comp}
          alt="Location pins illustration"
          loading="lazy"
          className="mx-auto"
        />
        <h2 className="text-2xl lgreen font-bold md:text-4xl">
          With this solution, we will create:
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-loose">
          A single network for forest data, traceability and transparency for
          the tree planted and wood in supply chains, cross-border investment
          opportunity, accountability, absent double counting, validation...
        </p>
      </div>
    </div>
  );
}

export default ProcessSection;
