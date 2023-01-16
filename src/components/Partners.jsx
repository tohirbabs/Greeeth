import React from "react";
import ibm from "../../assets/ibm.png";
import part1 from "../../assets/milestone1.png";
import part2 from "../../assets/mile2.png";

export const Partners = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center  px-2  lg:items-center lg:flex text-zinc-800">
      <div className="text-left darkgreen">
        <h1 className="text-3xl text-center sm:(text-5xl !leading-tight) font-medium capitalize text-zinc-800">
          Milestones
        </h1>
        <section class="bg-white p-20 lg:p-[120px]">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4">
                <div class="flex flex-wrap items-center justify-center">
                  <a
                    href="javascript:void(0)"
                    class="mx-4 flex flex-col gap-4 w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img src={part1} alt="image" class="h-30 w-30 w-full" />
                    <p className="text-center">
                      Ericsson Africa EIA winner 2022
                    </p>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="mx-4 flex flex-col gap-4 w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img src={part2} alt="image" class="h-30 w-30 w-full" />
                    <p className="text-center">
                      Ericsson Africa EIA winner 2022
                    </p>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="mx-4 flex flex-col gap-4 w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img src={ibm} alt="image" class="h-30 py-6 w-30 w-full" />
                    <p className="text-center">
                      IBM callforcode protecting the environment winner 2022
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
