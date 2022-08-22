import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  sec,
  food,
  homicon,
  transicon,
  greensec,
  greenhouse,
  train,
} from "../../assets/CarbonEmissions";
import { calc } from "../../assets/GetInvolved";
import { Query } from "./CarbonEmission/QuerySection";

export const Footprinter = () => {
  const dataset = [
    {
      title: "HOME",
      icon: "../../../assets/CarbonEmissions/homicon.png",
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
      icon: "../../../assets/CarbonEmissions/homicon.png",
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
      icon: "../../../assets/CarbonEmissions/food.png",
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
      displayImgs: [greensec, greensec, greensec, greensec],
      displayTitle: [
        "In the last 12 months, have you bought any of these new household items?",
        "In a typical month, how much do you spend on clothes and footwear?",
        "In a typical month, how much do you spend on phone, internet and TV contracts?",
        "In a typical month, how much do you spend on entertainment and hobbies (sports/gym, cinema, books, newspapers, gardening, computer games)",

        "Which of these types of waste do you recycle and/or compost?",
      ],
      displayText: [
        "In the last 12 months, have you bought any of these new household items?",
        "In a typical month, how much do you spend on clothes and footwear?",
        "In a typical month, how much do you spend on phone, internet and TV contracts?",
        "In a typical month, how much do you spend on entertainment and hobbies (sports/gym, cinema, books, newspapers, gardening, computer games)",

        "Which of these types of waste do you recycle and/or compost?",
      ],
    },
  ];

  const qureyDataset = [
    {
      icon: "../../../assets/CarbonEmissions/homicon.png",
      title: "HOME",
      index: 1,
      totalindex: 5,
      query: "What kind of house do you live in?",
      options: ["Flat", "Condo", "Detached", "Semi-detached"],
      displayImg: "../../../assets/CarbonEmissions/greenhouse.jpg",
      displayTitle:
        "HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
      displayText:
        "more than 70% of homes have poor levels of energy efficiency – meaning that people are wasting energy and money heating the street around their home!",
    },
    {
      icon: "../../../assets/CarbonEmissions/homicon.png",
      title: "HOME",
      index: 2,
      totalindex: 5,
      query: "How many bedrooms does your house have?",
      options: ["2", "3", "4", "5 or more"],
      displayImg: "../../../assets/CarbonEmissions/greenhouse.jpg",
      displayTitle:
        "HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
      displayText:
        "Lighting can account for up to 15% of your household electricity bill, so you can cut down just by turning off lights when they’re not needed. And don’t leave devices on standby — some of them use quite a lot of energy still, adding to your footprint.",
    },
    {
      icon: "../../../assets/CarbonEmissions/homicon.png",
      title: "HOME",
      index: 3,
      totalindex: 5,
      query: "How many people (aged 17 and over) live in your house?",
      options: ["1", "2", "3", "4", "5 or more"],
      displayImg: "../../../assets/CarbonEmissions/greenhouse.jpg",
      displayTitle:
        "HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
      displayText:
        "If every light in the UK was switched to low-energy LED lights, we could cut power needs by the equivalent to more than two new nuclear power stations!",
    },
    {
      icon: "../../../assets/CarbonEmissions/homicon.png",
      title: "HOME",
      index: 4,
      totalindex: 5,
      query: "What is your main source of energy at home?",
      options: ["Electricity", "Natural Gas", "Liquid Fuel", "Wood"],
      displayImg: "../../../assets/CarbonEmissions/greenhouse.jpg",
      displayTitle:
        "HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
      displayText:
        "By turning down your central heating thermostat by just 1°C you could reduce the energy you use for heating by 10%. The same principle applies to air conditioning when it's hot - the less you use it (a warmer home in summer), the more you save (in money and carbon).",
    },
    {
      icon: "../../../assets/CarbonEmissions/homicon.png",
      title: "HOME",
      index: 5,
      totalindex: 5,
      query: "How much energy do you use on average?",
      options: [
        "Less than 100kwh",
        "Less than 1000kwh",
        "Less than 10,000kwh",
        "More than 10,000kwh",
      ],
      displayImg: "../../../assets/CarbonEmissions/greenhouse.jpg",
      displayTitle:
        "HOW YOU USE ENERGY AT HOME PLAYS A BIG PART IN YOUR CARBON IMPACT ON THE WORLD.",
      displayText:
        "Basic energy efficiency measures – insulation, double-glazing, low-energy lighting – can cut your energy bills by up to a quarter.",
    },
    {
      icon: "../../../assets/CarbonEmissions/transicon.png",
      title: "TRAVEL",
      index: 1,
      totalindex: 5,
      query:
        "What kind of vehicle do you travel in most often as driver or passenger? (This question is finding out about your private car/motorbike use — we’ll ask about public transport next. If you walk or cycle everywhere, just click ‘Neither’.)",
      options: [
        "Car",
        "Motorbike",
        "Neither - I walk, cycle or use public transport for all my journeys",
      ],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "Transport is currently the UK’s largest source of carbon emissions causing climate change. What’s more the health of people of all ages is being affected by worsening air pollution and harmful particles in the air.",
    },
    {
      icon: "../../../assets/CarbonEmissions/transicon.png",
      title: "TRAVEL",
      index: 2,
      totalindex: 5,
      query:
        "How many hours a week do you spend in your car or on your motorbike for personal use including commuting?",
      options: [
        "Under 2 hours",
        "2 to 5 hours",
        "5 to 15 hours",
        "15 to 25 hours",
        "Over 25 hours",
        "I dont travel by train",
      ],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "It costs more to idle after 15 secs than to switch your car on/off. This can cut your carbon footprint and really helps the air quality in your neighbourhood. Plus, you’ll save money on petrol.",
    },

    {
      icon: "../../../assets/CarbonEmissions/transicon.png",
      title: "TRAVEL",
      index: 3,
      totalindex: 5,
      query: "How many hours a week do you spend on the train for commuting?",
      options: [
        "Under 2 hours",
        "2 to 5 hours",
        "5 to 15 hours",
        "15 to 25 hours",
        "Over 25 hours",
        "I dont travel by train",
      ],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "FLIGHT OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "Swedish climate activist Greta Thunberg made headlines when she spent two days travelling from Rome to London via train to address Parliament.",
    },
    {
      icon: "../../../assets/CarbonEmissions/transicon.png",
      title: "TRAVEL",
      index: 4,
      totalindex: 5,
      query:
        "How many hours a week do you spend on the bus for personal use including commuting?",
      options: [
        "Under an hour",
        "1 to 3 hours",
        "3 to 6 hours",
        "6 to 10 hours",
        "Over 10 hours",
        "I dont travel by bus",
      ],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/transicon.png",
      title: "TRAVEL",
      index: 5,
      totalindex: 5,
      query:
        "In the last year, how many local and International flights have you made in total ?",
      options: ["None", "1 - 10", "10 - 20", "20 - 30", "30 or more"],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "FLIGHT OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "A return flight from London to Madrid can generate almost 200kg of CO2 – More than the average person in many countries generates in a year.",
    },
    {
      icon: "../../../assets/CarbonEmissions/food.png",
      title: "FOOD",
      index: 1,
      totalindex: 4,
      query: "How would you best describe your diet?",
      options: [
        "Vegetarian",
        "Vegan",
        "Meat/beef in meals very rarely",
        "Meat/beef in meals frequently",
      ],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/food.png",
      title: "FOOD",
      index: 2,
      totalindex: 4,
      query:
        "In a week, how much do you spend on food from restaurants, canteens and takeaways?",
      options: ["$0", "$1 - $10", "$10 - $60", "more than $60"],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/food.png",
      title: "FOOD",
      index: 3,
      totalindex: 4,
      query: "Of the food you buy how much is wasted and thrown away?",
      options: ["None", "0% - 10%", "10% - 30%", "more than 30%"],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/food.png",
      title: "FOOD",
      index: 4,
      totalindex: 4,
      query:
        " How often do you buy locally produced food that is not imported to your country?",
      options: [
        "A lot of the food I buy is locally sourced",
        "Some of the food I buy is locally sourced",
        "I don't worry about where my food comes from",
      ],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/sec.png",
      title: "SECONDARY",
      index: 1,
      totalindex: 5,
      query:
        "In the last 12 months, have you bought any of these new household items?",
      options: [
        "TV, laptop or PC",
        "Large item of furniture",
        "Washing machine/Dishwasher or Fridge",
        "Mobile phone or tablet",
      ],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/sec.png",
      title: "SECONDARY",
      index: 2,
      totalindex: 5,
      query:
        "In a typical month, how much do you spend on clothes and footwear?",
      options: ["$0 - $10", "$10 - $60", "$60+"],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/sec.png",
      title: "SECONDARY",
      index: 3,
      totalindex: 5,
      query:
        "In a typical month, how much do you spend on phone, internet and TV contracts?",
      options: ["$0 - $25", "$25 - $50", "$50 - $75", "$75+"],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/sec.png",
      title: "SECONDARY",
      index: 4,
      totalindex: 5,
      query:
        "In a typical month, how much do you spend on entertainment and hobbies (sports/gym, cinema, books, newspapers, gardening, computer games)",
      options: ["$0 - $25", "$25 - $50", "$50 - $75", "$75+"],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
    },
    {
      icon: "../../../assets/CarbonEmissions/sec.png",
      title: "SECONDARY",
      index: 5,
      totalindex: 5,
      query: "Which of these types of waste do you recycle and/or compost?",
      options: ["Food", "Paper", "Tin cans", "Plastic", "Glass"],
      displayImg: "../../../assets/CarbonEmissions/train.png",
      displayTitle:
        "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.",
      displayText:
        "When you take a local bus, it emits just around half the emissions from an equivalent single occupancy car journey. Bus emissions should also go down over time as we see more electric and hydrogen buses on the road.",
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
    // <Query
    //   dataSet={dataset[dataIndex]}
    //   dataSections={dataset.length}
    //   nextQuery={nextQuery}
    //   prevQuery={prevQuery}
    //   dataIndex={dataIndex}
    //   dataSets={dataset}
    // />
    <Query dataSet={qureyDataset} />
    // <div className="">work</div>
  );
};
