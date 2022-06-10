/* eslint-disable max-len */
import React from 'react';
import Logo from '../../assets/Logo';

function Footer() {
  return (

    <footer>
      {/* Wave background ⬇ */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1367.743 181.155">
        <path id="wave" data-name="wave" d="M-300,9S166.91-56.211,405.877-49.5,715.838,14.48,955.869,36.854,1366,0,1366,0V115H0Z" transform="translate(1.743 66.155)" fill="#008000" />
      </svg>
      <div className="footer ">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3 text-white">
              <div className="block gap-6 items-center justify-between py-6  md:py-0 md:border-none md:block md:space-y-6">
                <Logo />
                <div className="pb-8 text-white text-left">
                  &copy; Greeeth 2022- All right reserved.
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="md:pl-16 pb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 text-white text-left">
                <div>
                  <h6 className="text-lg font-bold ">What we do</h6>
                  <ul className="list-inside text-sm mt-4 space-y-4 ">
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">About us</a>
                    </li>
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Plants</a>
                    </li>
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Blockchain</a>
                    </li>
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Track</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-bold ">Get Involved</h6>
                  <ul className="list-inside text-sm mt-4 space-y-4 ">
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Planter</a>
                    </li>
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Individual</a>
                    </li>
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Company</a>
                    </li>
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Sponsor</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-bold ">Crypto</h6>
                  <ul className="list-inside text-sm mt-4 space-y-4 ">
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">NFT</a>
                    </li>
                    <li>
                      <a href="/somelink" className="hover:text-stroke-lg transition">Greeeth Coin</a>
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
