import React from "react";
import { global, percent } from "../../../assets/CarbonEmissions";
import { useCookies } from "react-cookie";
import {
  ecofood,
  ecohome,
  ecosec,
  ecotravel,
} from "../../../assets/CarbonEmissions";

export const FootprintResult = () => {
  const [cookies, setCookie] = useCookies();
  console.log(cookies["How much energy do you use on average?"]);
  var homefoot =
    parseInt(cookies["How much energy do you use on average?"]) +
    parseInt(cookies["What kind of house do you live in?"]) +
    parseInt(
      cookies["How many people (aged 17 and over) live in your house?"]
    ) +
    parseInt(cookies["How many bedrooms does your house have?"]);

  var travelfoot =
    parseInt(
      cookies[
        "How many hours a week do you spend in your car or on your motorbike for personal use including commuting?"
      ]
    ) +
    parseInt(
      cookies["How many hours a week do you spend on the train for commuting?"]
    ) +
    parseInt(
      cookies[
        "How many hours a week do you spend on the bus for personal use including commuting?"
      ]
    ) +
    parseInt(
      cookies[
        "In the last year, how many local and International flights have you made in total ?"
      ]
    );

  var foodfoot =
    parseInt(cookies["How would you best describe your diet?"]) +
    parseInt(
      cookies[
        "In a week, how much do you spend on food from restaurants, canteens and takeaways?"
      ]
    ) +
    parseInt(
      cookies["Of the food you buy how much is wasted and thrown away?"]
    ) +
    parseInt(
      cookies[
        "How often do you buy locally produced food that is not imported to your country?"
      ]
    );
  var secfoot =
    parseInt(
      cookies[
        "In the last 12 months, have you bought any of these new household items?"
      ]
    ) +
    parseInt(
      cookies[
        "In a typical month, how much do you spend on clothes and footwear?"
      ]
    ) +
    parseInt(
      cookies[
        "In a typical month, how much do you spend on phone, internet and TV contracts?"
      ]
    ) +
    parseInt(
      cookies[
        "In a typical month, how much do you spend on entertainment and hobbies (sports/gym, cinema, books, newspapers, gardening, computer games)"
      ]
    ) +
    parseInt(
      cookies["Which of these types of waste do you recycle and/or compost?"]
    );

  var totalfoot = homefoot + travelfoot + foodfoot + secfoot;
  return (
    <div className="">
      <div className="my-10 bg-lgreen sm:p-6 p-4 px-2 rounded-xl text-white ">
        <div className=" text-left p-4 bg-white ligreen w-max px-6 font-bold mb-10 rounded-md">
          LET'S BREAK IT DOWN
        </div>
        <div className="">
          <p className="font-bold text-lg text-right">
            YOUR FOOTPRINT IS EQUAL TO {totalfoot / 1000}T
          </p>
          <div className="flex w-full h-4px bg-white my-2 rounded">
            <div className="home h-4px bg-blue-200"></div>
            <div className="travel h-4px">
              <div className="food h-4px"></div>
              <div className="sec h-4px"></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap gap-4 justify-center max-w-1000px mx-auto my-10">
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-blue-200">
              <img className="sm:w-2/4 w-3/4" src={ecohome} alt="" />
              <p className="text-4xl font-bold ligreen">
                {((homefoot * 100) / totalfoot).toFixed(1)}%
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">HOME</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-red-200">
              <img className="sm:w-2/4 w-3/4" src={ecotravel} alt="" />
              <p className="text-4xl font-bold ligreen">
                {((travelfoot * 100) / totalfoot).toFixed(1)}%
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">TRAVEL</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-amber-400">
              <img className="sm:w-2/4 w-3/4" src={ecofood} alt="" />
              <p className="text-4xl font-bold ligreen">
                {((foodfoot * 100) / totalfoot).toFixed(1)}%
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">FOOD</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
          <div className="flex bg-white sm:min-h-230px ligreen sm:w-10/21 rounded-xl overflow-hidden">
            <div className="sm:w-1/2 w-3/8 flex flex-col gap-2 py-5 justify-center items-center bg-sky-300">
              <img className="sm:w-2/4 w-3/4" src={ecosec} alt="" />
              <p className="text-4xl font-bold ligreen">
                {((secfoot * 100) / totalfoot).toFixed(1)}%
              </p>
            </div>
            <div className="sm:w-1/2 w-5/8 text-left sm:px-4 px-2 flex flex-col justify-center ">
              <p className="sm:text-3xl text-2xl font-bold ">SECONDARY</p>
              <p className="sm:mt-3 mt-1 text-sm sm:text-base">
                Your Consumption is equal to 1 small car
              </p>
              <div className="sm:py-2 rounded-lg sm:px-4 p-2 my-4 bg-lgreen text-white sm:text-lg text-base font-bold w-9/10">
                Find out more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex-row flex flex-col gap-10 my-10 ">
        <div className="footprint   sm:w-1/2 bg-white rounded-xl p-8 px-2 sm:px-8 ligreen flex flex-col items-center sm:pb-20">
          <h3 className="text-3xl font-bold w-full sm:text-left">
            CONGRATULATIONS!
          </h3>
          <p className="w-full text-lg mt-6 sm:text-left text-gray">
            Your annual footprint is well below the Global average. Keep up the
            great work and share your score!
          </p>
          <div className="mt-4 font-bold flex flex-col items-center gap-6 sm:mt-20">
            <p className="sm:text-2xl text-xl">YOUR FOOTPRINT IS EQUAL TO</p>
            <p className="sm:text-7xl text-4xl">{totalfoot / 1000}</p>
            <p className="sm:text-5xl text-2xl">TONNES*</p>
            <div className=" rounded-xl sm:p-4 p-2 w-full relative w-9/10 p-3 text-base  my-3 cursor-pointer  bg-lgreen text-white">
              SHARE SCORE
            </div>
          </div>
        </div>
        <div className="averages font-bold text-left sm:w-1/2 flex flex-col  gap-8 text-white">
          <div className="year bg-lgreen sm:h-1/2 rounded-xl p-4 px-4 flex items-center gap-4">
            <img className="max-w-1/3" src={global} alt="" />
            <div className="">
              <h3 className="text-lg">WORLD AVERAGE FOOTPRINT FOR 2022</h3>
              <p className="sm:text-5xl text-4xl mt-4">10.5</p>
              <p className="sm:text-3xl text-2xl">TONNES</p>
            </div>
          </div>
          <div className="percent sm:h-1/2 bg-lgreen rounded-xl p-4 px-4 flex items-center gap-4">
            <img className="max-w-1/3 max-h-30" src={percent} alt="" />
            <div className="">
              <h3 className="sm:text-xl text-lg">YOUR FOOTPRINT IS</h3>
              <p className="sm:text-5xl text-4xl mt-4">
                {(totalfoot / 105).toFixed(1)}%
              </p>
              <p className="sm:text-xl text-lg">
                OF THE GLOBAL AVERAGE FOR 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
