import React from 'react';
import Trees from '../../assets/Trees.png';

function UnderstandProcess() {
  return (
    <section className="relative bg-white -mb-1">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-auto opacity-25 sm:opacity-100 ml-2"
        src={Trees}
        alt="Trees Background"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent" />

      <div className="relative max-w-screen-xl px-12 py-4 ml-2 lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl sm:text-left">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Understanding <br /> The Process
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            The best way for individuals and companies to plant trees, offset carbon footprint and restore ecosystem.
          </p>
          <a className="gButton block mt-16 max-w-1/2 px-6 mx-auto py-3 text-md font-medium text-white text-center rounded-lg shadow sm:w-auto sm:ml-2 active:bg-green-500 hover:text-shadow-xl focus:outline-none focus:ring" href="/">
            Plant now
          </a>
        </div>
      </div>
    </section>
  );
}
export default UnderstandProcess;
