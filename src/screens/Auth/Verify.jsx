import React from "react";
import ReactInputVerificationCode from "react-input-verification-code";

export const Verify = () => {
  return (
    <div class="flex items-center justify-center h-screen bg-lightgreen">
      <div class="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-2xl text-gray-700 text-center">
            Verify your account
          </h1>
          <p class="text-base text-gray-500 text-center w-5/6">
            We sent you the six digit code at{" "}
            <span className="lgreen font-bold ">admin@admin.com</span>
            <br /> Enter the code below to confirm your email address
          </p>
          <ReactInputVerificationCode placeholder="*" onChange={console.log} />

          <button class="bg-lgreen text-white rounded-md font-semibold px-4 py-3 w-full">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};
