import React from "react";

export const Tabler = () => {
  return (
    <table className="w-full text-sm sm:text-base">
      <tr className="w-1/2 bg-[#3E7307] text-white">
        <th className="p-2 ">Date</th>
        <th className="p-2 text-center">Ponits</th>
        <th className="p-2 text-center pr-4">Purpose</th>
        <th className="p-2 text-center pr-4">Status</th>
      </tr>
      <tr className="">
        <td className="p-2">15/06/2020</td>
        <td className="p-2 text-center text-green-600">50</td>
        <td className="p-2 pr-4 text-center">Planting</td>
        <td className="text-center">credited</td>
      </tr>
      <tr className="bg-gray-200">
        <td className="p-2">19/09/2020</td>
        <td className="p-2 text-center text-green-600">300</td>
        <td className="p-2 pr-4 text-center">Gifting</td>
        <td className="text-center">credited</td>
      </tr>
      <tr className="">
        <td className="p-2">21/06/2021</td>
        <td className="p-2 text-center text-red-600">500</td>
        <td className="p-2 pr-4 text-center">Offsetting</td>
        <td className="text-center">Debited</td>
      </tr>
    </table>
  );
};
