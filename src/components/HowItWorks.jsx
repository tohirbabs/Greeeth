import React from 'react';

function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">How it works</h2>
        </div>

        <div
          className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
        >
          <div className="group w-60 mx-auto rounded-lg shadow-xl text-gray-800 hover:bg-green-800 hover:text-white">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" className="object-cover w-12 h-12 mx-auto my-2 text-green-800  group-hover:text-white">
              <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                <path d="m8.5 14.5c3.3285018 0 6-2.6447124 6-5.97321429 0-3.32850184-2.6714982-6.02678571-6-6.02678571-3.32850184 0-6 2.69828387-6 6.02678571 0 3.32850189 2.67149816 5.97321429 6 5.97321429z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8.5" cy="8.5" fill="currentcolor" r="3.5" />
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m.5 8.5h2" /><path d="m14.5 8.5h2" /><path d="m7.5 1.5h2" transform="matrix(0 1 -1 0 10 -7)" /><path d="m7.5 15.5h2" transform="matrix(0 1 -1 0 24 7)" />
                </g>
              </g>
            </svg>

            <p className="my-4 px-2 text-md font-medium  group-hover:text-white">
              Detect planting location
            </p>

          </div>

          <div className="group w-60 mx-auto rounded-lg shadow-xl text-gray-800 hover:bg-green-800 hover:text-white">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" className="object-cover w-12 h-12 mx-auto my-2 text-green-800  group-hover:text-white">
              <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 2)">
                <path d="m.5 7 16-6.535-2.8 14.535z" />
                <path d="m16.5.5-11 10" /><path d="m5.5 10.5v5l3-3" />
              </g>
            </svg>
            <p className="my-4 px-2 text-md font-medium  group-hover:text-white">
              Send planting location to user
            </p>
          </div>

          <div className="group w-60 mx-auto rounded-lg shadow-xl text-gray-800 hover:bg-green-800 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-12 h-12 mx-auto my-2 text-green-800  group-hover:text-white" viewBox="0 0 512 512"><title>Leaf</title>
              <path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            </svg>
            <p className="my-4 px-2 text-md font-medium  group-hover:text-white">
              User plants tree
            </p>
          </div>

          <div className="group w-60 mx-auto rounded-lg shadow-xl text-gray-800 hover:bg-green-800 hover:text-white">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" className="object-cover w-12 h-12 mx-auto my-2 text-green-800  group-hover:text-white">
              <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
                <path d="m12.8571123 1.79063546c-3.70547974-2.40636667-8.66011018-1.35322746-11.06647684 2.35225226-2.40636667 3.70547972-1.35322746 8.66011018 2.35225226 11.06647678 1.40713892.9138067 2.9944136 1.3287299 4.55387082 1.2889715 2.54712886-.0649393 5.02004606-1.3428829 6.51260596-3.6412237 1.5774991-2.4291355 1.6682799-5.39509184.4997393-7.82805117" />
                <path d="m4.5 7.5 3 3 8-8" />
              </g>
            </svg>
            <p className="my-4 px-2 text-md font-medium  group-hover:text-white">
              Confirmation
            </p>
          </div>

          <div className="group w-60 mx-auto rounded-lg shadow-xl text-gray-800 hover:bg-green-800 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48" className="object-cover w-12 h-12 mx-auto my-2 text-green-800  group-hover:text-white">
              <mask id="svgIDa">
                <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"><path d="M11 34.688L24 42l8-4.5l5-2.813M40 30V15L27.5 7.969m-7 0L8 15v15" /><path fill="#555" d="m21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17l-3 1.75Z" /><path d="M24 17v-7m6 17l7 4m-19-4l-7 4" />
                  <circle cx="24" cy="7" r="3" fill="#555" /><circle cx="8" cy="33" r="3" fill="#555" />
                  <circle cx="40" cy="33" r="3" fill="#555" />
                </g>
              </mask>
              <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
            </svg>
            <p className="my-4 px-2 text-md font-medium  group-hover:text-white">
              Connect to blockchain and virtual world
            </p>
          </div>

          <div className="group w-60 mx-auto rounded-lg shadow-xl text-gray-800 hover:bg-green-800 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" className="object-cover w-12 h-12 mx-auto my-2 text-green-800  group-hover:text-white">
              <path fill="currentColor" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v1.193c0 .52.27 1.002.711 1.275l3.866 2.39a3 3 0 1 0 2.846 0l3.866-2.39A1.5 1.5 0 0 0 14 4.693V3.5A1.5 1.5 0 0 0 12.5 2h-9ZM6 6.826V3h4v3.826L8.263 7.9a.5.5 0 0 1-.526 0L6 6.826ZM8 9a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z" />
            </svg>
            <p className="my-4 px-2 text-md font-medium  group-hover:text-white">
              User get rewarded
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default HowItWorks;
