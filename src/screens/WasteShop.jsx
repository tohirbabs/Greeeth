import React from "react";
import { easter } from "../../assets/GetInvolved/special_occasions/index";
import waste from "../../assets/gall.png";
export const WasteShop = () => {
  const WasteCard = () => {
    return (
      <div className="w-max relative BG-lgreen flex flex-col items-center rounded-3xl p-2">
        <img src={waste} className="max-h-25rem rounded-3xl" />
        <div className="flex justify-between m-1rem w-full px-4">
          <div className="text-cyan-300 w-max p-2 px-4 bg-white font-bold  rounded-full text-left">
            PLASTIC
          </div>
          <div className="bg-white w-max p-2 font-bold px-4 ligreen rounded-full text-left">
            $ 5.67
          </div>
        </div>
        <div className="text-left p-3 font-bold">
          <div className="description">Description: 5.67kg of plastic</div>
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
      <WasteCard />
      <WasteCard />
      <WasteCard />
      <WasteCard />
      <WasteCard />
    </div>
  );
};
