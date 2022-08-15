export function WeightList({ Pix, TextList, Index }) {
  return (
    <div className="BG-lgreen ">
      <div className="py-5  flex  flex-col  flex-wrapitems-center justify-center BG1">
        {Index % 2 === 0 ? (
          <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 BG-lgreen  w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  {TextList.title}
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  {TextList.text}
                </div>
                <div className="flex justify-center flex-wrap gap-4 mt-10 text-center mx-auto">
                  <div className="flex gap-4">
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        Weight in tonnes
                      </label>
                      <input
                        type="text"
                        id="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        Distance in Km
                      </label>
                      <input
                        type="text"
                        id="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
                <img
                  src={Pix}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 text-gray-600  md:px-12 xl:px-22  bg-white w-screen">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-6/12 w-9/10 mx-auto">
                <img
                  src={Pix}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
              <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  {TextList.title}
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  {TextList.text}
                </div>
                <div className="flex justify-center flex-wrap gap-4 mt-10 text-center mx-auto">
                  <div className="flex gap-4">
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        Weight in tonnes
                      </label>
                      <input
                        type="text"
                        id="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        Distance in Km
                      </label>
                      <input
                        type="text"
                        id="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
