import React from "react";
import offset from "../../../../assets/GetInvolved/loyalty-gift.png";

const Companies5 = () => {
  return (
    <section className=" grad-lgreen  items-center justify-center  flex flex-col">
      <div className="container h-viewheight  lg:mx-6 my-3 flex flex-col flex-wrap items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <img
          src={offset}
          alt="Tree illustration"
          className="mx-auto lg:max-w-10/11"
        />
      </div>
      <div className="lg:max-w-screen-lg mb-40 leading-loose lgreen text-left text-lg">
        <h1 className="text-6xl  sm:(text-7xl !leading-tight) font-medium capitalize text-center lgreen">
          Loyalty Program to Customers
        </h1>
        <p className="mt-4">
          Give your clients a thoughtful gift like a tree that you plant in
          their honor. Consumers and businesses are expecting sustainable
          solutions for goods and services more than before. As a result, there
          is a market need for sustainable giving, more specifically, for
          eco-friendly business gifts, which are effective marketing
          communications tools. Businesses are taking the appropriate
          precautions to guarantee that this reward program doesn't negatively
          affect their carbon footprint because corporate gifting happens on a
          far greater scale than personal gifting. By favoring choices that
          enable them to contribute to the reversal of climate change, people
          are also actively looking for methods to live a more sustainable
          lifestyle.{" "}
        </p>
        <p className="mt-4">
          Concerns about corporate gifts might range from whether the item
          itself is environmentally friendly to whether the business is working
          to restore our earth. You can ensure that your present fulfills the
          brief by selecting a gift that not only considers the climate but is
          also focused on addressing the current climate issue.
        </p>
        <p className="mt-4">
          The corporate gifting market is worth $125 billion, according to
          Forbes. It would greatly help reforestation efforts if all (or a
          sizable fraction) of those corporate contribution funds were used to
          plant trees as gifts. Research showing that halting deforestation and
          repairing damaged forests will contribute 30% to resolving the climate
          catastrophe.
        </p>

        <p className="mt-4">
          To meet this increased demand, Greeeth has developed tree-planting
          gifts that allow both customers and staff to join forces and take part
          in group initiatives—by giving trees.
        </p>
      </div>
    </section>
  );
};

export default Companies5;
