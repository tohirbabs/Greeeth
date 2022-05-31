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
                  className="w-full object-cover rounded-lg mx-auto transition duration-300 group-hover:scale-[1.4]"
                  src={Solution1}
                  alt="Growing plant"
                  loading="lazy"
                />
              </div>
              <div className="text-sm text-gray-500 mx-auto max-w-56">We plant trees for carbon offset,protect wild life, and forest restoration</div>
            </div>
            <div className="text-center group">
              <div className="w-56 h-56 mx-auto overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
                <img
                  className="w-full object-cover rounded-lg mx-auto transition duration-300 group-hover:scale-[1.4]"
                  src={Solution2}
                  alt="Blocks in virtual worls"
                  loading="lazy"
                />
              </div>

              <span className="block text-sm text-gray-500 mx-auto max-w-56">Connect to blockchain/ Virtual world</span>

            </div>
            <div className="text-center group">
              <div className="w-56 h-36 mx-auto overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56 ">
                <img
                  className="w-full object-cover rounded-lg mx-auto hover:rotate-6"
                  src={Solution3}
                  alt="Pins on map"
                  loading="lazy"
                />
              </div>

              <span className="block text-sm text-gray-500 mx-auto max-w-56">Track</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
