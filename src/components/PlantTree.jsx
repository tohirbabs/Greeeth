import React from "react";
import rewardicon from "../../assets/landing/rewardicon.png";
import send from "../../assets/landing/send.png";
import locate from "../../assets/landing/locate.png";
import cloud from "../../assets/landing/cloud.png";
import confirm from "../../assets/landing/confirm.png";

export const PlantTree = () => {
  const Card = ({ img, text, tag }) => {
    return (
      <div className="p-4 bg-white rounded-xl relative text-center flex flex-col items-center max-w-150px">
        <p className="text-xl font-bold ligreen absolute left-2 top-1">
          {tag}.
        </p>
        <img src={img} alt="" />
        <p className="mt-4 text-sm">{text}</p>
      </div>
    );
  };
  return (
    <div className="my-8 sm:w-8/10">
      <div className="flex justify-between my-10">
        <Card tag="1" img={locate} text="Detect planting location" />
        <Card tag="2" img={send} text="User plants trees" />
        <Card tag="3" img={locate} text="User getrewarded" />
      </div>
      <div className="flex justify-between mt-15">
        <Card tag="4" img={confirm} text="Confirmation" />
        <Card tag="5" img={cloud} text="Connect to the cloud and map" />
        <Card tag="6" img={rewardicon} text="User get rewarded" />
      </div>
    </div>
  );
};
