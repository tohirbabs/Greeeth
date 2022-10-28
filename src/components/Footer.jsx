/* eslint-disable max-len */
import React from "react";
// import Logo from "../../assets/Logo";
import FootLogo from "../../assets/FootLogo";

function Footer() {
  return (
    <footer>
      <div className="footer ">
        <div className="container m-auto px-5 lg:pt-20 pt:10 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3 text-white">
              <div className="block gap-6 items-center justify-between py-6  md:py-0 md:border-none md:block md:space-y-6">
                <FootLogo />
                <div className="pb-2 lg:pb-8 text-white text-left lg:pt-20 pt-10">
                  &copy; Greeeth 2022- All right reserved.
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="md:pl-16 lg:pb-16 pb-4 grid grid-cols-2 gap-6 sm:grid-cols-3 text-white text-left">
                <div>
                  <h6 className="text-lg font-bold uppercase ">What we do</h6>
                  <ul className="list-inside text-base mt-5 lg:mt-10 space-y-4 ">
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Tree Planting
                      </a>
                    </li>
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Academy/Learning
                      </a>
                    </li>
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Track
                      </a>
                    </li>
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Footprint Calculator
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-bold uppercase ">Get Involved</h6>
                  <ul className="list-inside text-base mt-5 lg:mt-10 space-y-4 ">
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Planter
                      </a>
                    </li>
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Individual
                      </a>
                    </li>
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="/somelink"
                        className="hover:text-stroke-lg transition"
                      >
                        Sponsor
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
