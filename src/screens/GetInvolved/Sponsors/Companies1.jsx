import React from "react";
import offset from "../../../../assets/GetInvolved/offset your carbon pix.png";

const Companies1 = () => {
  return (
    <section className=" grad-lgreen  items-center justify-center  flex flex-col">
      <div className="container h-50vh  lg:mx-6 my-3 flex flex-col flex-wrap items-center justify-around lg:max-w-screen-xl px-2 py-2 lg:ml-12  lg:w-6/10  lg:items-center lg:flex text-zinc-800">
        <img
          src={offset}
          alt="Tree illustration"
          className="mx-auto lg:max-w-10/11"
        />
      </div>
      <div className="lg:max-w-screen-lg mb-40 mt-10 mx-4 leading-loose lgreen text-left text-lg">
        <h1 className="text-3xl  sm:(text-4xl !leading-tight) font-bold capitalize text-center lgreen">
          Offset your carbon footprint
        </h1>
        <p className="mt-4">
          Offset your company's carbon emissions by planting a tree. If your
          business engages in activities that release carbon emissions into the
          atmosphere, which contribute to climate change and impact the planet.
          Minimizing this carbon emission should always be your number 1
          priority, but no matter how many green practices you implement,
          producing at least some amount of carbo is practically inescapable.
          That's where carbon offsetting comes in! The process of carbon
          offsetting is an important step along the journey to net-zero
          emissions.
        </p>
        <p className="mt-4">
          Carbon offsetting is a way to reduce your emissions by supporting
          projects that reduce or remove emissions elsewhere. While carbon
          offsetting is required in some high-emitting industries, many
          organizations are now choosing to offset their emissions voluntarily.
        </p>
        <p className="mt-4">
          Aside from being useful for the environment, offsetting can offer
          benefits to your business - comprising strengthening your brand or
          enhancing your triple bottom line.
        </p>
        <h2 className="text-2xl mt-4  sm:(text-3xl !leading-tight) font-bold capitalize lgreen">
          Improve your climate impact and save money
        </h2>
        <p className="mt-4">
          Carbon offsetting should be simply one component of your company's
          total carbon management strategy. Carbon offsetting paves the way for
          further subsequent efforts because it makes you calculate your carbon
          footprint.
        </p>
        <p className="mt-4">
          We can assist you in understanding and tracking your environmental
          effect after your carbon assessment. If you can't measure it, you
          can't improve it, as the saying goes. Once you are aware of your
          carbon footprint, you may actively reduce your impact on the
          environment. Carbon offsetting can indirectly save you money by
          motivating you to lessen your carbon footprint as your company becomes
          more conscious of its impact.
        </p>
        <h2 className="text-2xl mt-4  sm:(text-3xl !leading-tight) font-bold capitalize lgreen">
          Make a genuine change that advances the SDGs (it goes beyond simply
          planting trees!)
        </h2>

        <p className="mt-4">
          How do you decide whether carbon offsetting is the best strategy to
          employ in your business when there are so many options available?{" "}
        </p>
        <p className="mt-4">
          You may be confident that your money will genuinely make a difference
          when you offset through a reputable organization like Greeeth. The way
          to offset carbon emissions involves far more than just planting trees.
        </p>
        <p className="mt-4">
          Long-term change is the goal of carbon offset initiatives. For
          instance, a project could involve educating locals on more
          environmentally friendly farming methods and incorporating them into
          forest management to save an entire forest.
        </p>
      </div>
    </section>
  );
};

export default Companies1;
