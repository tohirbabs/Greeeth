import React from "react";
import { easter } from "../../assets/GetInvolved/special_occasions/index";
import waste from "../../assets/gall.png";
export const WasteShop = () => {
  const WasteCard = ({ wasteType, cost }) => {
    return (
      <div className="w-max relative BG-lgreen flex flex-col items-center rounded-3xl p-2">
        <img src={waste} className="max-h-25rem rounded-3xl" />
        <div className="flex justify-between m-1rem w-full px-4">
          <div className="text-cyan-300 w-max p-2 px-4 bg-white font-bold  rounded-full text-left">
            {wasteType}
          </div>
          <div className="bg-white w-max p-2 font-bold px-4 ligreen rounded-full text-left">
            $ {cost}
          </div>
        </div>
        <div className="text-left p-3 font-bold">
          <div className="description">Description: 5.67kg of {wasteType}</div>
          <div className="contact">Tel: +234 567 89012</div>
          <div className="address">
            Address: 24, Adetoun street, surulere,Lagos.
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="m-8 flex flex-wrap gap-10 justify-center ">
      <WasteCard wasteType="PLASTIC" cost="5.87" />
      <WasteCard wasteType="GLASS" cost="15.83" />
      <WasteCard wasteType="WOOD" cost="52.81" />
      <WasteCard wasteType="PLASTIC" cost="2.87" />
      <WasteCard wasteType="GLASS" cost="5.85" />
    </div>
  );
};
