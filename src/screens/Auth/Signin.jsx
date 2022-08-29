import React from "react";
import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";
import { google, facebook, linkedin, GreenLogo } from "../../../assets";

const Signin = () => {
  const [showsignin, setShowsignin] = useState(true);
  // const [cookies, setCookie] = useCookies();

  const email = useId();
  const password = useId();
  // const router = useRouter();
  const [mailInput, setMailInput] = useState("");
  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [status, setstatus] = useState("");
  const [signedIn, setsignedIn] = useState(false);

  // console.log(cookies);

  const postSignup = async () => {
    setIsLoading(true);

    try {
      const body = JSON.stringify({
        // email: mailInput,
        // first_name: firstNameInput,
        // last_name: lastNameInput,
        // password: passwordInput,
        email: "tohirbabs@gmail.com",
        first_name: "Tohir",
        last_name: "Babs",
        password: "1234",
      });

      const response = await POST("/accounts/register/", body);

      if (response.ok) {
        const result = await response.json();

        console.log("result is: ", JSON.stringify(result));
        // toast(`${result.message}`, {
        //   style: {
        //     backgroundColor: "#f59024",
        //     color: "white",
        //   },
        // });
        // setstatus(result.status);
        // if (result.status == "success") {
        //   setCookie("email", `${result.data.email}`, { path: "/" });
        //   setsignedIn(true);
        // }
      }

      response.json().then((text) => {
        console.log(text);
        // toast(`${text.message}`, {
        //   style: {
        //     backgroundColor: "#f59024",
        //     color: "white",
        //   },
        // });
      });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="absolute top-0 bottom-0  w-screen h-screen z-50 bg-lgreen"></div>
      <div className="main-page absolute top-0 bottom-0  w-screen z-100">
        <div
          className={
            showsignin ? "smooth login bg-login" : "smooth login hide-view"
          }
          id="login"
        >
          <div className="lg:flex font-sec m-auto ">
            <div className=" xl:max-w-screen-lg  bg-bluegrey-200">
              <div className="flex text-left content-center items-center justify-center h-full">
                <div className="w-full px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t flex flex-col items-center">
                      <h1
                        onClick={postSignup}
                        className="text-3xl my-4 text-center sm:(text-3xl !leading-tight) font-medium capitalize text-lgreen"
                      >
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
                        <div className="relative w-full mb-5 ">
                          <label
                            className="block text-blueGray-600 text-base font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 text-black sm:sm:min-w-350px px-3 py-3 text-base font-bold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                            className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                            <span className="ml-2 text-base font-semibold text-blueGray-600">
                              Remember me
                            </span>
                          </label>
                        </div>

                        <a
                          href="/dashboard"
                          className="text-center flex justify-center mt-6"
                        >
                          <button
                            className="block px-15 py-3 text-base font-normal bg-lgreen rounded-xl shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring "
                            type="button"
                          >
                            Sign In
                          </button>
                        </a>
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
              ? "switch bg-lgreen w-screen lg:w-430px pt-2"
              : "switch bg-lgreen w-screen  lg:w-430px pt-2"
          }
        >
          <div
            className="switch__text-container w-3/4 flex flex-col items-center"
            id="switch-text"
          >
            <a
              className="flex items-center px-2 inline-block whitespace-nowrap sm:mb-20 my-2  text-zinc-800"
              href="/"
            >
              <GreenLogo color="white" />
            </a>
            <h1 className="text-xl  sm:(text-3xl !leading-tight)  capitalize ">
              {showsignin ? "Not yet a member?" : "Already a member?"}
            </h1>
            <p className="lg:mt-6 mt-2 leading-snug sm:leading-relaxed sm:text-base">
              {showsignin
                ? "Sign up and discover what we can do for you to save the planet"
                : "Sign in and save the planet"}
            </p>
          </div>
          <div className=" mt-4 mx-auto text-center">
            <button
              className="block lg:px-15 lg:py-3 px-8 py-2 text-base font-normal bg-white rounded-xl shadow-md text-lgreen sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
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
            <div className=" xl:max-w-screen-lg  bg-bluegrey-200">
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
                            className="border-0 text-black sm:min-w-350px px-3 py-3 text-base font-bold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                            className="border-0 text-black sm:min-w-350px px-3 py-3 text-base font-bold placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                            className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                            className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                            <span className="ml-2 text-base font-semibold text-blueGray-600">
                              I have read the{" "}
                              <a href="#">terms and conditions</a>
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
    </>
  );
};

export default Signin;
