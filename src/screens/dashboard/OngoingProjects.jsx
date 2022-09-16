import React, { useEffect, useState } from "react";
// import { ProjectCard } from "./ProjectCard";
import tree from "../../components/Dashboard/tree2.png";
import { useCookies } from "react-cookie";

export const OngoingProjects = () => {
  const [cookies, setCookie] = useCookies();
  // const [isLoading, setIsLoading] = useState(false);

  // const [err, setErr] = useState("");

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

  // useEffect(() => {
  //   getProject();
  // }, [cookies.key]);

  return (
    <div className="projects flex flex-wrap gap-8 sm:mt-10 ">
      {cookies.projectData !== undefined ? (
        cookies.projectData.length !== 0 ? (
          <div>
            {cookies.projectData.map((info) => (
              <div
                class="flex justify-center"
                // onClick={() => {
                //   expand("details");
                // }}
              >
                <div class="block rounded-lg shadow-lg bg-white max-w-sm sm:min-w-400px min-w-80vw text-center">
                  <div class="py-3 px-6 border-b border-gray-300">
                    Project #{info.id}
                  </div>
                  <img
                    src={tree}
                    alt=""
                    className="cursor-pointer max-h-250px mx-auto"
                  />
                  <div class="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      Project Title - {info.name}
                    </h5>
                    <div class="text-gray-700 text-base mb-4 flex items-center justify-center gap-4">
                      Status:{"  "}
                      <span class="py-1 px-2 text-white bg-lgreen rounded">
                        {info.status}
                      </span>
                      {/* <div className="font-bold ligreen">{info.percent}%</div> */}
                    </div>
                    {/* <div className="flex mx-auto justify-center gap-6">
                      <Menu as="div" className="relative text-left">
                        <div>
                          <Menu.Button class=" inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Project Details
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Location: {info.details.location}
                                  </div>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Organizer: {info.details.organizer}
                                  </div>
                                )}
                              </Menu.Item>{" "}
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Trees Planted:{" "}
                                    {`${
                                      (info.percent *
                                        projectInfo.details
                                          .noOfTreesToBePlanted) /
                                      100
                                    }/${
                                      projectInfo.details.noOfTreesToBePlanted
                                    }`}
                                  </div>
                                )}
                              </Menu.Item>{" "}
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Project Lead: {projectInfo.details.lead}
                                  </div>
                                )}
                              </Menu.Item>{" "}
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Phone number: {projectInfo.details.phone}
                                  </div>
                                )}
                              </Menu.Item>{" "}
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Email: {projectInfo.details.mail}
                                  </div>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <button
                        type="button"
                        class=" inline-block px-4 py-2.5 bg-lgreen text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Plant
                      </button>
                    </div> */}
                  </div>
                  <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                    2 days ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
