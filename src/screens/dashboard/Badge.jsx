import React from "react";

import cert from "../../components/Dashboard/cert.png";
import badge from "../../components/Dashboard/badge.png";

export const Badge = () => {
  return (
    <div className="mt-6 min-h-100vh">
      <h3 className="font-bold sm:text-3xl text-lg text-left sm:p-4 my-4">
        Badge
      </h3>
      <div className="flex gap-4">
        <img src={badge} alt="" className="max-w-20vw" />
        <div className=""></div>
      </div>
      <h3 className="font-bold sm:text-3xl text-lg text-left sm:p-4 my-4">
        Certificate
      </h3>
      <img src={cert} alt="" />
    </div>
  );
};
