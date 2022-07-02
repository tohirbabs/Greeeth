import React from "react";

function ProcessSection({ BG, Pix, TextList, Index }) {
  return (
    <div className="BG-lgreen">
      <div
        className="py-20 flex flex-wrapitems-center justify-center BG1"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="container flex  flex-col items-center max-w-screen-xl m-auto px-15 text-gray-600 md:px-12 xl:px-22">
          {Index % 2 === 0 ? (
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-6/12">
                <img
                  src={Pix}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
              <div className="text-left md:6/12 lg:w-6/12 ml-12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  {TextList.title}
                </h2>
                <ul className="mt-6 text-gray-600 list-disc leading-loose">
                  {TextList.items.map((item) => (
                    <li key={item.i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="text-left md:6/12 lg:w-6/12 ml-12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  {TextList.title}
                </h2>
                <ul className="mt-6 text-gray-600 list-disc leading-loose">
                  {TextList.items.map((item) => (
                    <li key={item.i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="md:6/12 lg:w-6/12">
                <img
                  src={Pix}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
