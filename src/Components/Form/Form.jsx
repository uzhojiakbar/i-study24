import React from "react";

function Form() {
  return (
    <div className="bg-gray-900 max-sm:p-8 p-12 lg:flex lg:items-center justify-between lg:gap-16 space-y-6">
      <h1 className="text-white text-4xl max-sm:text-2xl lg:text-[36px] text-center font-bold ">
        Join our community of learners
      </h1>
      <div className="lg:mx-12 w-[400px] max-sm:w-[100%] mx-auto ">
        <form className="bg-gray-200 px-4 py-3 max-sm:p-4 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Sign in
          </h2>
          <label className="block mt-3">
            <span className=" font-bold text-gray-800">Name</span>
            <input
              type="text"
              className="mt-2 px-2 py-2 border border-gray-300 rounded-md w-full"
            />
          </label>
          <label className="block mt-3">
            <span className=" font-bold text-gray-800">Email</span>
            <input
              type="email"
              className="mt-2  px-2 py-2 border border-gray-300 rounded-md w-full"
            />
          </label>
          <label className="block mt-3">
            <span className="font-bold text-gray-800">Password</span>
            <input
              type="password"
              className="mt-2  px-2 py-2 border border-gray-300 rounded-md w-full"
            />
          </label>
          <button className="w-full px-2 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md mt-5 hover:bg-blue-700">
            Sign Up
          </button>
          <div className="text-gray-600 mt-5  text-[12px] leading-5">
            This site is protected by reCAPTCHA and the Google{" "}
            <a className="text-blue-500 cursor-pointer">Privacy Policy</a> and{" "}
            <a className="text-blue-500 cursor-pointer">Terms of Service</a>{" "}
            apply.
          </div>
          <div className="flex items-center gap-4 ">
            <div className="flex-1 h-px bg-gray-600"></div>
            <p className="text-gray-600">or</p>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-"></div>
          <p className="text-gray-600 text-center text-[14px]">
            Already have an account?{" "}
            <a className="text-blue-500 cursor-pointer">Log in</a>
          </p>
          <p className="text-gray-600  text-[14px] text-center">
            By signing up you agree to our{" "}
            <a className="text-blue-500 cursor-pointer">Terms of Use</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Form;
