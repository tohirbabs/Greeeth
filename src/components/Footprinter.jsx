import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { greenhouse, homicon, transicon } from "../../assets/CarbonEmissions";
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
        " kind of house do you live in?",
        " many bedrooms does your house have?",
        " many people (aged 17 and over) live in your house?",
        " is your main source of energy at home?",

        " much energy do you use on average?",
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
      title: "FOOD",
      icon: { transicon },
      questions: [
        " kind of house do you live in?",
        " many bedrooms does your house have?",
        " many people (aged 17 and over) live in your house?",
        " is your main source of energy at home?",

        " much energy do you use on average?",
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
      title: "STUFF",
      icon: { transicon },
      questions: [
        " kind of house do you live in?",
        " many bedrooms does your house have?",
        " many people (aged 17 and over) live in your house?",
        " is your main source of energy at home?",

        " much energy do you use on average?",
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
