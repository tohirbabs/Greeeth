import React, { Profiler, useState } from "react";
import { useCookies } from "react-cookie";
import { CompletedProjects } from "./CompletedProjects";
import { OngoingProjects } from "./OngoingProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectForm } from "./ProjectForm";
import { ProjectPage } from "./ProjectPage";

export const Project = () => {
  const [projectSection, setprojectSection] = useState("Completed Projects");
  const [cookies, setCookie] = useCookies();

  const ProjectNavItem = ({ name }) => {
    return (
      <div
        onClick={() => {
          setprojectSection(name);
          // console.log(name);
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

  function getProject() {
    // setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Token ${cookies.key}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    console.log(requestOptions);
    // console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/projects/create", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCookie(`projectData`, result, {
            path: "/",
          });
          // if (result.key) {
          //   navigate("/dashboard");
          // }
        });
    } catch (err) {
      // setErr(err.message);
    } finally {
      // setIsLoading(false);
    }
  }

  const ProjectSection = () => {
    switch (projectSection) {
      case "Ongoing Projects":
        return <OngoingProjects setProject={setprojectSection} />;
      case "Completed Projects":
        return <CompletedProjects setProject={setprojectSection} />;

      case "Create New Project":
        return <ProjectForm setProject={setprojectSection} />;

      case "details":
        return <ProjectPage setProject={setprojectSection} />;

      default:
        return <CompletedProjects />;
    }
  };
  return (
    <div className="sm:my-12 my-2 min-h-100vh">
      <div className="flex flex-wrap sm:gap-6 gap-2 my-4">
        <div
          onClick={() => {
            setprojectSection("Ongoing Projects");
            getProject();
          }}
          className={
            projectSection === "Ongoing Projects"
              ? "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
              : "sm:px-6 px-2 py-2 border-2 text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
          }
        >
          {"Ongoing Projects"}
        </div>
        <ProjectNavItem name="Completed Projects" />
        <ProjectNavItem name="Create New Project" />
        <ProjectNavItem name="Join a Project" />
      </div>

      <ProjectSection />
    </div>
  );
};
