import React from 'react';
import Solution1 from '../../assets/Solution1.jpg';
import Solution2 from '../../assets/Solution2.jpg';
import Solution3 from '../../assets/Solution3.jpg';

function Solution() {
  return (
    <div>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Solution</h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Planting of trees using geospatial technology and blockchain which is available in a 3D simulated environment.
            </p>
          </div>
          <div className="grid gap-24 md:gap-12 md:grid-cols-3">
            <div className="flex flex-col text-center group">
              <div className="w-56 h-56 mx-auto overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                <img
                  className="w-full object-cover rounded-lg mx-auto"
                  src={Solution1}
                  alt="Growing plant"
                  loading="lazy"
                />
              </div>
              <div className="block text-sm text-gray-500 mx-auto max-w-52 text-left">
                <p className="mb-2">
                  Plant tree to offset your  carbon footprint and remove your potential impact on climate change.
                </p>
                <p>
                  Your carbon footprint is caused by your daily activities and action.
                </p>
              </div>
            </div>
            <div className="text-center group">
              <div className="w-56 h-56 mx-auto overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                <img
                  className="w-full object-cover rounded-lg mx-auto transition duration-300 group-hover:scale-[1.4]"
                  src={Solution2}
                  alt="Blocks in virtual world"
                  loading="lazy"
                />
              </div>

              <div className="block text-sm text-gray-500 mx-auto max-w-52 text-left">
                <p className="mb-2">
                  Each planted tree is connected to the blockchain for transparency, accountability, traceability, and having a single forest/tree data.
                </p>

              </div>

            </div>
            <div className="text-center group">
              <div className="w-56 h-36 mx-auto overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56 ">
                <img
                  className="w-full object-cover rounded-lg mx-auto"
                  src={Solution3}
                  alt="Pins on map"
                  loading="lazy"
                />
              </div>
              <div className="block text-sm text-gray-500 mx-auto max-w-52 text-left">
                <p className="mb-2">
                  Planted tree(s) can be tracked and viewed on the platform.
                </p>
                <p>
                  Sponsors can get details and data of the tree (I.e CO2, captured, maintenance data, and tree health). You can virtually travel to every tree planted and monitor the performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
