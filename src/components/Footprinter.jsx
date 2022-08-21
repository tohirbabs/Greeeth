import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { sec, food, homicon, transicon } from "../../assets/CarbonEmissions";
import { calc } from "../../assets/GetInvolved";
import { Query } from "./CarbonEmission/QuerySection";

export const Footprinter = () => {
  const dataset = [
    {
      title: "HOME",
      icon: { homicon },
      questions: [
        "What kind of house do you live in?",
        "How many bedrooms does your house have?",
        "How many people (aged 17 and over) live in your house?",
        "What is your main source of energy at home?",

        "How much energy do you use on average?",
      ],
      options: [
        ["Flat", "Condo", "Detached", "Semi-detached"],
        ["2", "3", "4", "5 or more"],
        ["1", "2", "3", "4", "5 or more"],
        ["Electricity", "Natural Gas", "Liquid Fuel", "Wood"],

        [
          "Less than 100kwh",
          "Less than 1000kwh",
          "Less than 10,000kwh",
          "More than 10,000kwh",
        ],
      ],
    },
    {
      title: "TRAVEL",
      icon: { transicon },
      questions: [
        "What kind of vehicle do you travel in most often as driver or passenger? (This question is finding out about your private car/motorbike use — we’ll ask about public transport next. If you walk or cycle everywhere, just click ‘Neither’.)",
        "How many hours a week do you spend on the train for commuting?",
        "How many hours a week do you spend on the bus for personal use including commuting?",
        "In the last year, how many return flights have you made in total to the following locations?",
      ],
      options: [
        [
          "Car",
          "Motorbike",
          "Neither - I walk, cycle or use public transport for all my journeys",
        ],
        [
          "Under 2 hours",
          "2 to 5 hours",
          "5 to 15 hours",
          "15 to 25 hours",
          "Over 25 hours",
          "I dont travel by train",
        ],
        [
          "Under an hour",
          "1 to 3 hours",
          "3 to 6 hours",
          "6 to 10 hours",
          "Over 10 hours",
          "I dont travel by bus",
        ],
        ["1", "2", "3", "4", "5 or more"],
      ],
    },
    {
      title: "FOOD",
      icon: { food },
      questions: [
        "How would you best describe your diet?",
        "In a week, how much do you spend on food from restaurants, canteens and takeaways?",
        "Of the food you buy how much is wasted and thrown away?",
        " How often do you buy locally produced food that is not imported to your country?",
      ],
      options: [
        [
          "Vegetarian",
          "Vegan",
          "Meat/beef in meals very rarely",
          "Meat/beef in meals frequently",
        ],
        ["$0", "$1 - $10", "$10 - $60", "more than $60"],
        ["None", "0% - 10%", "10% - 30%", "more than 30%"],
        [
          "A lot of the food I buy is locally sourced",
          "Some of the food I buy is locally sourced",
          "I don't worry about where my food comes from",
        ],
      ],
    },
    {
      title: "SECONDARY",
      icon: { sec },
      questions: [
        "In the last 12 months, have you bought any of these new household items?",
        "In a typical month, how much do you spend on clothes and footwear?",
        "In a typical month, how much do you spend on phone, internet and TV contracts?",
        "In a typical month, how much do you spend on entertainment and hobbies (sports/gym, cinema, books, newspapers, gardening, computer games)",

        "Which of these types of waste do you recycle and/or compost?",
      ],
      options: [
        [
          "TV, laptop or PC",
          "Large item of furniture",
          "Washing machine/Dishwasher or Fridge",
          "Mobile phone or tablet",
        ],
        ["$0 - $10", "$10 - $60", "$60+"],
        ["$0 - $25", "$25 - $50", "$50 - $75", "$75+"],
        ["$0 - $25", "$25 - $50", "$50 - $75", "$75+"],

        ["Food", "Paper", "Tin cans", "Plastic", "Glass"],
      ],
    },
  ];

  const nextQuery = (dataIndex) => {
    setdataIndex(dataIndex + 1);
  };
  const prevQuery = (dataIndex) => {
    setdataIndex(dataIndex - 1);
  };

  const [dataIndex, setdataIndex] = useState(0);
  console.log(dataset.length);
  return (
    <Query
      dataSet={dataset[dataIndex]}
      dataSections={dataset.length}
      nextQuery={nextQuery}
      prevQuery={prevQuery}
      dataIndex={dataIndex}
    />
  );
};
