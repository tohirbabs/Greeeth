import React from 'react';
import TreeBG from '../../assets/TreeBG.png';

function Home() {
  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full sm:opacity-100"
        src={TreeBG}
        alt="Page background with Trees"
      />
      <div className="rect" />
      <div className="relative max-w-screen-xl px-4 py-10 mx-auto lg:h-screen lg:items-center lg:flex text-white">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl  sm:text-5xl">
            Offset your carbon
            <strong className="sm:block">
              blueprint with GREEETH.
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">

            <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring animate-bounce" href="/about">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
