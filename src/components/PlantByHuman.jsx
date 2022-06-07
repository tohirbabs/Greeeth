import React from 'react';
import HumanPlanting from '../../assets/PlantByHuman.jpg';

function PlantByHuman() {
  return (
    <div className="py-16 ">
      <div className="container m-auto px-6 text-gray-800 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="space-y-6 md:7/12 lg:w-6/12 text-left">
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">Plant by human.</h2>
            <div className="space-y-4">
              <p className="text-gray-600">Allows trees to be planted in locations easily accessible by human . Planters plants the tree wirb selected planting pattern and geo-tag with our Geospatial technology getting the GPS coordinate.</p>
              <p className="mt-4 text-gray-600">Tree planted is visible in the 3D environment with the planting process and tree data which can be seen by the sponsors.</p>
            </div>
          </div>
          <div className="md:5/12 lg:w-6/12">
            <img src={HumanPlanting} alt="Human planting tree" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default PlantByHuman;
