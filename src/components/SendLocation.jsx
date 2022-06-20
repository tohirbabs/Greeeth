import React from 'react';
import UserSendLocation from '../../assets/UserSendLocation.jpg';

function SendLocation() {
  return (

    <div className="py-16">
      <div className="container ml-8 px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="text-left space-y-6 md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold md:text-5xl">Send planting location to user</h2>

            <ul className="mt-6 text-gray-600 list-disc leading-loose">
              <li>We send planting location to users closer to the location mapped out for planting</li>
              <li>Users can also take part in planting project</li>
              <li>User gets recommended tree type and planting pattern with our pattern generator.</li>
              <li>Auto generare planting pattern that will beautify the environment and still fight climate change.</li>
            </ul>

          </div>
          <div className="md:5/12 lg:w-6/12">
            <img src={UserSendLocation} alt="Users on devices" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default SendLocation;
