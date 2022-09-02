import React from "react";
import { ProjectCard } from "./ProjectCard";
import tree from "../../components/Dashboard/tree2.png";

export const OngoingProjects = ({ setProject }) => {
  const projectInfo = [
    {
      id: "2653",
      img: { tree },
      title: "Bamboo Tree",
      status: "Ongoing",
      percent: 60,
      details: {
        location: "6, Bariga Lagos State",
        organizer: "Matrix Medium",
        noOfTreesToBePlanted: 1000,
        lead: "Dayo Ademola",
        phone: "+2345678907",
        mail: "dayoademola@gmail.com",
      },
    },
    {
      id: "2653",
      img: { tree },
      title: "Bamboo Tree",
      status: "Ongoing",
      percent: 60,
      details: {
        location: "6, Bariga Lagos State",
        organizer: "Matrix Medium",
        noOfTreesToBePlanted: 1000,
        lead: "Dayo Ademola",
        phone: "+2345678907",
        mail: "dayoademola@gmail.com",
      },
    },
    {
      id: "2653",
      img: { tree },
      title: "Bamboo Tree",
      status: "Ongoing",
      percent: 60,
      details: {
        location: "6, Bariga Lagos State",
        organizer: "Matrix Medium",
        noOfTreesToBePlanted: 1000,
        lead: "Dayo Ademola",
        phone: "+2345678907",
        mail: "dayoademola@gmail.com",
      },
    },
    {
      id: "2653",
      img: { tree },
      title: "Bamboo Tree",
      status: "Ongoing",
      percent: 60,
      details: {
        location: "6, Bariga Lagos State",
        organizer: "Matrix Medium",
        noOfTreesToBePlanted: 1000,
        lead: "Dayo Ademola",
        phone: "+2345678907",
        mail: "dayoademola@gmail.com",
      },
    },
  ];

  return (
    <div className="projects flex flex-wrap gap-8 sm:mt-10 ">
      {projectInfo.map((info) => (
        <ProjectCard projectInfo={info} expand={setProject} />
      ))}
    </div>
  );
};
