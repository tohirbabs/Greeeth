import React, { useState } from "react";
import { CountryOptions } from "../../components/FormElements/CountryOptions";
import { useCookies } from "react-cookie";

export const ProjectForm = () => {
  const [cookies, setCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setname] = useState("");

  const [location, setlocation] = useState("");

  const [date, setdate] = useState("");
  const [err, setErr] = useState("");
  function postProject() {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Token ${cookies.key}`);
    let data = {
      name: name,
      status: "active",
      ended_on: date,
      location: location,
    };
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/projects/create", requestOptions)
        .then((response) => console.log(response))
        .then((result) => {
          // setCookie(`token`, result.key, {
          //   path: "/",
          // });
          console.log(result);
          // if (result.key) {
          //   navigate("/dashboard");
          // }
        });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  function getProject() {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Token ${cookies.key}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    console.log(requestOptions);
    console.log(myHeaders);

    try {
      fetch("https://api.greeeth.com/projects/create", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // setCookie(`token`, result.key, {
          //   path: "/",
          // });
          console.log(result);
          // if (result.key) {
          //   navigate("/dashboard");
          // }
        });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const ImpactOption = ({ option }) => {
    const [active, setActive] = useState(false);
    return (
      <li
        onClick={() => {
          setActive(!active);
        }}
        className="w-full cursor-pointer border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div className="flex items-center pl-3 ">
          <span
            className={
              active
                ? "w-4 h-4  bg-lgreen rounded-lg bd-lgreen border-1px"
                : "w-4 h-4 text-blue-600 bg-gray-100 rounded-lg bd-lgreen border-1px"
            }
          ></span>
          <div
            for="gender-none"
            className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {option}
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="BG-lgreen ">
      <div className="max-w-6xl mx-auto p-5 sm:p-16">
        <div>
          <h2 className="text-3xl text-left  mb-10 sm:(text-4xl !leading-tight) font-medium capitalize lgreen">
            Create a new project
          </h2>
          <div className="mb-6">
            <label
              for="email"
              className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Project Title
            </label>
            <input
              type="text"
              id="project title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // placeholder="Enter the name of your organization"
              // required
              onInput={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              for="favtree"
              className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Project Background
            </label>
            <textarea
              type="text"
              id="favtree"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-30 p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please Briefly explain the project background"
              // required
            />
          </div>
          <div className="mb-6">
            <label
              for="favtree"
              className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Problem
            </label>
            <textarea
              type="text"
              id="favtree"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-30 p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Briefly explain the problem you are trying to solve with this project"
              // required
            />
          </div>
          <div className="mb-6">
            <label
              for="favtree"
              className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Solution
            </label>
            <textarea
              type="text"
              id="favtree"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-30 p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Briefly explain the solution to this project"
              // required
            />
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Project Location ( Select location to deploy this project)
            </label>
            <input
              type="text"
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // placeholder="Enter the name of your organization"
              // required
              onInput={(e) => setlocation(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              for="gender"
              className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              IMPACT ( Sustainable developmental goals)
            </label>

            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <ImpactOption option="No Poverty" />
              <ImpactOption option="Zero Hunger" />
              <ImpactOption option="Good health and wellbeing" />
              <ImpactOption option="Quality Education" />
            </ul>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <ImpactOption option="Gender Equality" />
              <ImpactOption option="Decent work & economic growth" />
              <ImpactOption option="Clean water & sanitation" />
              <ImpactOption option="Affordable & clean energy" />
            </ul>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <ImpactOption option="Industry, innovation & infastructure" />
              <ImpactOption option="Reduced inequalities" />
              <ImpactOption option="Sustainable cities and communities" />
              <ImpactOption option="Responsible consumption" />
            </ul>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <ImpactOption option="Climate action" />
              <ImpactOption option="Life below water" />
              <ImpactOption option="Life on land" />
              <ImpactOption option="Peace & justice strong institutions" />
            </ul>

            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <ImpactOption option="Partnership for the goals" />
            </ul>
          </div>

          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                for="first_name"
                className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Start Date
              </label>
              <input
                type="date"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g www.greeethxyz.com"
                // required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                End Date
              </label>
              <input
                type="date"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onInput={(e) => setdate(e.target.value)}

                // required
              />
            </div>
            <div>
              <label
                for="company"
                className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Number of Planter’s needed for this project
              </label>
              <input
                type="number"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                // required
              />
            </div>
            <div>
              <label
                for="phone"
                className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Select planter’s location
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                // required
              />
            </div>
            <div>
              <label
                for="phone"
                className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter zip code"
                // required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="gender"
              className="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Resources you will be providing
            </label>

            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <ImpactOption option="Seeds" />
              <ImpactOption option="Planting tools" />
              <ImpactOption option="Transportation" />
              <ImpactOption option="Merchandise" />
            </ul>
          </div>

          <button
            onClick={() => {
              // postProject();
              getProject();
            }}
            className="text-white mt-5  bg-lgreen hover:bg-green hover:lgreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
