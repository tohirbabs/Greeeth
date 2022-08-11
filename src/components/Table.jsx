import React from "react";

export const Tabler = () => {
  return (
    <table class="w-full">
      <tr class="w-1/2 bg-indigo-300">
        <th class="p-2 ">Date</th>
        <th class="p-2 text-center">Ponits</th>
        <th class="p-2 text-center pr-4">Purpose</th>
        <th class="p-2 text-center pr-4">Status</th>
      </tr>
      <tr class="">
        <td class="p-2">15/06/2020</td>
        <td class="p-2 text-center text-green-600">50</td>
        <td class="p-2 pr-4 text-center">Planting</td>
        <td class="text-center">credited</td>
      </tr>
      <tr class="bg-gray-200">
        <td class="p-2">19/09/2020</td>
        <td class="p-2 text-center text-green-600">300</td>
        <td class="p-2 pr-4 text-center">Gifting</td>
        <td class="text-center">credited</td>
      </tr>
      <tr class="">
        <td class="p-2">21/06/2021</td>
        <td class="p-2 text-center text-red-600">500</td>
        <td class="p-2 pr-4 text-center">Offsetting</td>
        <td class="text-center">Debited</td>
      </tr>
    </table>
  );
};
