import React, { useState } from "react";
import tree from "../../components/Dashboard/tree2.png";

export const ProjectPage = () => {
  const [projectSection, setprojectSection] = useState("Ongoing Projects");

  const [section, setsection] = useState("Ongoing Projects");

  const NavItem = ({ name }) => {
    return (
      <div
        onClick={() => {
          setprojectSection(name);
          console.log(name);
        }}
        className={
          projectSection === `${name}`
            ? "px-2 sm:px-8  py-2  text-sm sm:text-base font-bold rounded-md cursor-pointer bg-lgreen text-white"
            : "px-2 sm:px-8 py-2  text-sm sm:text-base font-bold rounded-md cursor-pointer bg-white text-lgreen"
        }
      >
        {name}
      </div>
    );
  };

  const Solution = () => {
    return (
      <div className="mx-4 text-left">
        <h3 className="ligreen font-bold sm:text-2xl mt-6 mb-2">Problem</h3>
        <p className="sm:my-4 my-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
          ip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolor e eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum."
        </p>
        <h3 className="ligreen font-bold sm:text-2xl mt-6 mb-2">Solution</h3>
        <p className="sm:my-4 my-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
          ip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolor e eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum."
        </p>
        <h3 className="ligreen font-bold sm:text-2xl mt-6 mb-2">Impact</h3>
        <p className="sm:my-4 my-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu
          ip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolor e eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum."
        </p>
      </div>
    );
  };

  const Section = () => {
    switch (section) {
      case "Solution":
        return <Solution />;

      default:
        return <Solution />;
    }
  };
  return (
    <div className="mt-10">
      <div className="detail sm:flex sm:gap-14 items-center">
        <div className="sm:w-5/10 bg-white rounded-xl">
          <img
            src={tree}
            alt=""
            className="cursor-pointer sm:max-w-350px sm:max-h-400px bg-white rounded-md mx-auto"
          />
        </div>

        <div className="sm:w-5/10 text-left">
          <h3 className="ligreen font-bold sm:text-4xl my-6">
            Project Details
          </h3>
          <p className="sm:my-4 my-2 sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy.
          </p>
          <p className="text-sm">15/4/2022 - 28/12/2022</p>
          <div className="share flex justify-between my-5">
            <div className="">Like</div>
            <div className="">Copy Link</div>
            <div className="">Share</div>
            <div className="">Facebook</div>
            <div className="">Twitter</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:gap-10 gap-4">
        <div className="bg-white sm:my-15 w-min rounded-lg border-2 ">
          <div className="flex flex-wrap w-max ">
            <NavItem name="Statement" />
            <NavItem name="Planting site" />
            <NavItem name="Resources" />
            <NavItem name="team" />
          </div>
          <div className="max-h-500px overflow-y-scroll">
            <Section />
          </div>
        </div>
        <div className="flex flex-col sm:gap-10 gap-4">
          <div className="dash-card p-6 pt-8 sm:pr-15 sm:pb-18 rounded-lg shadow flex-1 px-5">
            {/* <p className="font-bold sm:text-xl">Balance</p> */}
            <div className="flex items-center ligreen">
              <p className=" sm:text-4xl text-base font-bold pr-2">3000</p>
              <p>Trees Planted</p>
            </div>
          </div>
          <div className="dash-card p-2 sm:p-6 sm:pt-8 sm:pr-8 sm:pb-18 rounded-lg shadow flex-1 px-5">
            {/* <p className="font-bold sm:text-xl">Balance</p> */}
            <div className="flex items-center ligreen">
              <p className=" sm:text-4xl text-base font-bold pr-2">10,000</p>
              <p>co2 kg sequestrated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
