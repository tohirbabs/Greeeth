import React from "react";
import { useContext, useState, useId } from "react";
import { POST } from "../../../utils/request";

const Login = () => {
  const [cookies, setCookie] = useCookies();

  const email = useId();
  const password = useId();
  const router = useRouter();
  const [mailInput, setMailInput] = useState("");
  const [firstNameInput, setfirstNameInput] = useState("");
  const [lastNameInput, setlastNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [status, setstatus] = useState("");
  const [signedIn, setsignedIn] = useState(false);

  console.log(cookies);

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

      const response = await POST("/customer/register", body);

      if (response.ok) {
        const result = await response.json();

        console.log("result is: ", JSON.stringify(result));
        toast(`${result.message}`, {
          style: {
            backgroundColor: "#f59024",
            color: "white",
          },
        });
        setstatus(result.status);
        if (result.status == "success") {
          setCookie("email", `${result.data.email}`, { path: "/" });
          setsignedIn(true);
        }
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
    <div class="font-mono bg-gray-400">
      <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
            ></div>

            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 onClick={postSignup()} class="pt-4 text-2xl text-center">
                Create an Account!
              </h3>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={nameInput}
                      onInput={(e) => setNameInput(e.target.value)}
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={mailInput}
                    onInput={(e) => setMailInput(e.target.value)}
                  />
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p class="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
