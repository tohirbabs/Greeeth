import React from 'react';
import Trees from '../../assets/Trees.png';

function Home() {
  return (
    <section className="relative bg-white -mb-1">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-auto opacity-25 sm:opacity-100"
        src={Trees}
        alt="Trees Background"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent" />

      <div className="relative max-w-screen-xl px-4 py-32 ml-12 lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understanding the process
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            The best way for individuals and companies to plant trees,  offset their carbon footprint and restore ecosystem.
          </p>
          <a className="block max-w-1/2 px-8 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
            Plant NOW
          </a>
        </div>
      </div>
    </section>
  );
}
export default Home;
