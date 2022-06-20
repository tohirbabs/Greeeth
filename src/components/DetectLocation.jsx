import React from 'react';
import PinsOnGlobe from '../../assets/PinsOnGlobe.png';
import BG1 from '../../assets/BG1.jpg';

function DetectLocation() {
  return (
    <div className="py-16 bg-white BG1 py-42" style={{ backgroundImage: `url(${BG1})` }}>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={PinsOnGlobe} alt="Location pins illustration" loading="lazy" className="mx-auto" />
          </div>
          <div className="text-left md:7/12 lg:w-6/12 ml-12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Detect planting location</h2>
            <ul className="mt-6 text-gray-600 list-disc leading-loose">
              <li>Get data of vulnurable location</li>
              <li>We check for plantable area</li>
              <li>Individuals/communities/locals csn map out planting locations on the map</li>
              <li>Check location with map, more CO2 emission on the map</li>
              <li>Choose where to plant (manually)</li>
              <li>Vet foundation with location</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetectLocation;
