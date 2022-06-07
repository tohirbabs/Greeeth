import React from 'react';
import PlantWDrone from '../../assets/PlantWithDrone.jpg';

function PlantWithDrone() {
  return (

    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 rounded-lg">
            <img src={PlantWDrone} alt="Drone spreading seed" loading="lazy" className="rounded-xl" />
          </div>
          <div className="md:7/12 lg:w-6/12 text-left">
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">Plant with drone</h2>
            <p className="mt-6 text-gray-600">We use unmanned drone to plant tree on a large area (e.g Forest) or location that are not easily accessible by human by seed bombing or seed firing with predefined planting patterns.<br />
              Trees planted are geo-tag with our Geospatial technology getting the GPS coordinate.
            </p>
            <p className="mt-4 text-gray-600"> Tree planted is visible in the 3D environment with the planting process and tree data which can be seen by the sponsors.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PlantWithDrone;
