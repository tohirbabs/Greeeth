import React, { useState } from "react";
import { CompletedProjects } from "./CompletedProjects";
import { OngoingProjects } from "./OngoingProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectPage } from "./ProjectPage";

export const Project = () => {
  const [projectSection, setprojectSection] = useState("Ongoing Projects");

  const ProjectNavItem = ({ name }) => {
    return (
      <div
        onClick={() => {
          setprojectSection(name);
          console.log(name);
        }}
        className={
          projectSection === `${name}`
            ? "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
            : "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
        }
      >
        {name}
      </div>
    );
  };

  const ProjectSection = () => {
    switch (projectSection) {
      case "Ongoing Projects":
        return <OngoingProjects setProject={setprojectSection} />;
      case "Completed Projects":
        return <CompletedProjects setProject={setprojectSection} />;

      case "details":
        return <ProjectPage setProject={setprojectSection} />;

      default:
        return <OngoingProjects />;
    }
  };
  return (
    <div className="sm:my-12 my-2 min-h-100vh">
      <div className="flex flex-wrap sm:gap-6 gap-2 my-4">
        <ProjectNavItem name="Ongoing Projects" />
        <ProjectNavItem name="Completed Projects" />
        <ProjectNavItem name="Create New Project" />
        <ProjectNavItem name="Join a Project" />
      </div>

      <ProjectSection />
    </div>
  );
};
