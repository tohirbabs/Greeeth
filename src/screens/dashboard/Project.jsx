import React from "react";
import tree from "../../components/Dashboard/tree2.png";

import down from "../../components/Dashboard/down.png";
import maptree from "../../components/Dashboard/maptree.png";
import { CircularProgressbar } from "react-circular-progressbar";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export const Project = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const ProjectCard = () => {
    var percentage = 50;
    return (
      <div class="flex justify-center ">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm sm:min-w-400px min-w-80vw text-center">
          <div class="py-3 px-6 border-b border-gray-300">Project #1838</div>
          <img src={tree} alt="" className="max-h-250px mx-auto" />
          <div class="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Project Title - Bamboo Tree
            </h5>
            <div class="text-gray-700 text-base mb-4 flex items-center justify-center gap-4">
              Status:{"  "}
              <span class="py-1 px-2 text-white bg-lgreen rounded">
                Ongoing
                <div className="w-full h-2px bg-white mt-1 rounded">
                  <div className="w-3/5 h-2px rounded bg-blue-600"></div>
                </div>
              </span>
              <div className="font-bold ligreen">60%</div>
            </div>
            <div className="flex mx-auto justify-center gap-6">
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
                            Location: 6,Bariga Lagos State
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
                            Organizer: Matrix medium
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
                            Time: 11:20am
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
                            Tree Planted: 500/1000
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
                            Project Lead: Dayo Ademola
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
                            Phone number: +2345678907
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
                            Email: dayoademola@gmail.com
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
            </div>
          </div>
          <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
            2 days ago
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-8 sm:mt-10 ">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
