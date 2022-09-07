import React, { useId, useState } from "react";
import { useCookies } from "react-cookie";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { facebook, google, GreenLogo } from "../../../assets";
import { POST } from "../../../utils/request";

export const Signup = () => {
  const email = useId();
  const password = useId();
  const [cookies, setCookie] = useCookies();
  // const router = useRouter();
  const [mailInput, setMailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [verified, setverified] = useState(false);
  const [token, settoken] = useState("none");
  const [signedIn, setsignedIn] = useState(false);
  const [status, setstatus] = useState("");

  let navigate = useNavigate();
  const postSignup = async () => {
    setIsLoading(true);

    try {
      const body = JSON.stringify({
        email: mailInput,
        first_name: firstNameInput,
        last_name: lastNameInput,
        password: passwordInput,
      });

      const response = await POST("/accounts/register/", body);

      if (response.ok) {
        const result = await response.json();

        console.log("result is: ", JSON.stringify(result));

        setCookie(`email`, mailInput, {
          path: "/",
        });
        navigate("/auth/verify");
      }

      response.json().then((text) => {
        console.log(text);
      });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(cookies.email);
  return (
    <div className="flex items-center min-h-screen p-4 bg-lightgreen lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-lgreen md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a
              className="flex items-center justify-center px-2 inline-block whitespace-nowrap sm:mb-20 my-2  text-zinc-800"
              href="/"
            >
              <GreenLogo color="white" />
            </a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Offset Your Carbon Blueprint With GREEETH. <br />
            The best way for individuals and organizations to plant trees,
            offset their carbon footprint to save the planet.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Already have an account?</span>
            <a href="/auth/login" className="underline">
              Log In
            </a>
          </p>
          <p className="mt-6 text-base text-center text-gray-300">
            Read our{" "}
            <a href="#" className="underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              conditions
            </a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Sign Up
          </h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                for="firstname"
                className="text-base text-left font-semibold text-gray-500"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                value={firstNameInput}
                onInput={(e) => setfirstNameInput(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>{" "}
            <div className="flex flex-col space-y-1">
              <label
                for="lastname"
                className="text-base text-left font-semibold text-gray-500"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                value={lastNameInput}
                onInput={(e) => setlastNameInput(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                for={email}
                className="text-base text-left font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                id={email}
                value={mailInput}
                onInput={(e) => setMailInput(e.target.value)}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                for={password}
                className="text-base text-left font-semibold text-gray-500"
              >
                Password
              </label>

              <input
                type="password"
                id={password}
                value={passwordInput}
                onInput={(e) => setPasswordInput(e.target.value)}
                placeholder="*******"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label
                for="remember"
                className="text-base font-semibold text-gray-500"
              >
                Remember me
              </label>
            </div>
            <div>
              <div
                onClick={() => {
                  postSignup();
                }}
                className="w-full px-4 flex justify-center py-4 text-lg font-semibold text-white transition-colors duration-300 bg-lgreen rounded-md shadow  border-2px cursor-pointer"
              >
                {isLoading ? (
                  <ThreeDots
                    height="20"
                    width="100"
                    color="white"
                    ariaLabel="loading"
                  />
                ) : (
                  "Sign Up"
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-row gap-4">
                <a
                  href="#"
                  className="flex w-1/2 items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span>
                    {/* <svg
                      className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg> */}
                    <img
                      alt="..."
                      className=" bg-white w-6 rounded-full inline-flex items-center "
                      src={google}
                    />
                  </span>
                  <span className="text-base font-medium text-gray-800 group-hover:text-white">
                    Google
                  </span>
                </a>
                <a
                  href="#"
                  className="flex w-1/2 items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                  <span>
                    {/* <svg
                      className="text-blue-500 group-hover:text-white"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg> */}
                    <img
                      alt="..."
                      className="w-6 bg-white rounded-full inline-flex items-center "
                      src={facebook}
                    />
                  </span>
                  <span className="text-base font-medium text-blue-500 group-hover:text-white">
                    facebook
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
