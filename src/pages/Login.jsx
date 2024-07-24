import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="bg-[#287fb8] max-w-full h-svh  flex justify-center items-center">
        <div className="bg-white w-[450px] rounded-xl h-fit">
          <h1 className="font-semibold text-lg text-center py-4">Login</h1>
          <hr className="pb-5" />
          <div className="px-7">
            <input
              type="text"
              placeholder="Username"
              className="block w-full p-3 border-b-2 border-gray-400  mb-3"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full p-3 border-b-2 border-gray-400 mb-3"
              required
            />
            <p className="text-sm text-gray-400 cursor-pointer font-medium">
              Forgot Password?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-7">
            <input type="submit" className="hidden" />
            <button type="submit" className="bg-[#287fb8]  w-[400px] rounded-full px-7 py-2 text-white text-center font-semibold">
              Login
            </button>
            <p className="mt-6 text-gray-500 font-normal">
              Not a member?{" "}
              <span className="cursor-pointer text-blue-500 font-normal">
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
