import React from "react";

export const EmissionEntry = ({ rightimg, title, text, img, val }) => {
  return (
    <>
      {rightimg ? (
        <div className="container flex items-center max-w-screen-lg m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 bg-white  w-screen">
          <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
            <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
              <h2 className="text-2xl lgreen font-bold md:text-4xl">{title}</h2>
              <div className="mt-6 text-gray-600 leading-loose">{text}</div>
              <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onInput={(e) => (val = e.target.value)}
                />
              </div>
            </div>
            <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
              <img
                src={img}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container flex justify-center  items-center max-w-screen-xl m-auto py-5 md:py-10 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-6/12 w-9/10 mx-auto">
              <img
                src={img}
                alt="Location pins illustration"
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
              <h2 className="text-2xl lgreen font-bold md:text-4xl">{title}</h2>
              <div className="mt-6 text-gray-600 leading-loose">{text}</div>
              <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onInput={(e) => (val = e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
