import React from "react";
import { useState } from "react";
import { google, facebook, linkedin } from "../../../assets";

const Signin = () => {
  const [showsignin, setShowsignin] = useState(true);

  return (
    <div className="main-page absolute top-0 bottom-0  w-screen z-100">
      <div
        className={
          showsignin ? "smooth login bg-login" : "smooth login hide-view"
        }
        id="login"
      >
        <div className="lg:flex font-sec m-auto ">
          <div className=" xl:max-w-screen-lg bg-bluegrey-200">
            <div className="flex text-left content-center items-center justify-center h-full">
              <div className="w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t flex flex-col items-center">
                    <h1 className="text-3xl my-4  sm:(text-3xl !leading-tight) font-medium capitalize text-lgreen">
                      Welcome back to Greeeth
                    </h1>
                    <h6 className="text-blueGray-500 text-base font-bold text-center flex flex-col w-5/7">
                      It's good to see you again, come in using your favourite
                      social network
                    </h6>
                    <div className="flex justify-center gap-2rem mt-4">
                      <img
                        alt="..."
                        className="w-10 bg-white min-wid  p-2 rounded-full inline-flex items-center "
                        src={google}
                      />
                      <img
                        alt="..."
                        className="w-10 bg-white min-wid  rounded-full inline-flex items-center "
                        src={facebook}
                      />
                      <img
                        alt="..."
                        className="w-10 bg-white min-wid  rounded-full inline-flex items-center "
                        src={linkedin}
                      />
                    </div>
                  </div>
                  <hr className="m-4 border-b-1 border-blueGray-300" />
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center text-base mb-3 font-bold">
                      Or sign in with credentials
                    </div>
                    <form>
                      <div className="relative w-full mb-5">
                        <label
                          className="block text-blueGray-600 text-base font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 min-w-350px px-3 py-3 text-base font-bold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative w-full mb-5">
                        <label
                          className="block text-blueGray-600 text-base font-bold text-base font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center flex justify-center mt-6">
                        <button
                          className="block px-15 py-3 text-base font-normal bg-lgreen rounded-xl shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring "
                          type="button"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </form> */}
        {/* </fieldset> */}
      </div>
      <div
        className={
          showsignin
            ? "switch bg-lgreen min-w-430px"
            : "switch bg-lgreen min-w-430px"
        }
      >
        <div className="switch__text-container w-3/4" id="switch-text">
          <h1 className="text-2xl  sm:(text-3xl !leading-tight)  capitalize ">
            {showsignin ? "Not yet a member?" : "Already a member?"}
          </h1>
          <p className="mt-6 sm:leading-relaxed sm:text-base">
            {showsignin
              ? "Sign up and discover what we can do for you to save the planet"
              : "Sign in and save the planet"}
          </p>
        </div>
        <div className="gap-4 mt-10 mx-auto text-center">
          <button
            className="block px-15 py-3 text-base font-normal bg-white rounded-xl shadow-md text-lgreen sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
            onClick={() => {
              setShowsignin(!showsignin);
            }}
            id="switch-button"
          >
            {showsignin ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>

      <div
        className={
          showsignin ? "smooth signup hide-view" : "smooth signup bg-signup"
        }
        id="signup"
      >
        <div className="lg:flex font-sec m-auto ">
          <div className=" xl:max-w-screen-lg bg-bluegrey-200 min-w-500px">
            <div className="flex text-left content-center items-center justify-center h-full">
              <div className="w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t flex flex-col items-center">
                    <h1 className="text-3xl my-4 text-center  sm:(text-3xl !leading-tight) font-medium capitalize text-lgreen">
                      Create an Account With Greeth
                    </h1>
                    <h6 className="text-blueGray-500 text-base font-bold text-center flex flex-col w-5/7">
                      you can use your favourite social network
                    </h6>
                    <div className="flex justify-center gap-2rem mt-4">
                      <img
                        alt="..."
                        className="w-10 bg-white min-wid  p-2 rounded-full inline-flex items-center "
                        src={google}
                      />
                      <img
                        alt="..."
                        className="w-10 bg-white min-wid  rounded-full inline-flex items-center "
                        src={facebook}
                      />
                      <img
                        alt="..."
                        className="w-10 bg-white min-wid  rounded-full inline-flex items-center "
                        src={linkedin}
                      />
                    </div>
                  </div>
                  <hr className="m-4 border-b-1 border-blueGray-300" />
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center text-base mb-3 font-bold">
                      Or sign up with credentials
                    </div>
                    <form>
                      <div className="relative w-full mb-5">
                        <label
                          className="block text-blueGray-600 text-base font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border-0 min-w-350px px-3 py-3 text-base font-bold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Mufu Ologi"
                        />
                      </div>
                      <div className="relative w-full mb-5">
                        <label
                          className="block text-blueGray-600 text-base font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 min-w-350px px-3 py-3 text-base font-bold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="mufuologi1@gmail.com"
                        />
                      </div>

                      <div className="relative w-full mb-5">
                        <label
                          className="block text-blueGray-600 text-base font-bold text-base font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="********"
                        />
                      </div>
                      <div className="relative w-full mb-5">
                        <label
                          className="block text-blueGray-600 text-base font-bold text-base font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Retype Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="********"
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            I have read the <a href="#">terms and conditions</a>
                          </span>
                        </label>
                      </div>

                      <div className="text-center flex justify-center mt-6">
                        <button
                          className="block px-15 py-3 text-base font-normal bg-lgreen rounded-xl shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring "
                          type="button"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
