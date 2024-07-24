import React, { useState } from "react";
import AddUser from "../components/AddUser";

const Login = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#287fb8] min-h-screen flex justify-center items-center">
        <div className="bg-white w-full max-w-md rounded-xl p-6 mx-4">
          <h1 className="font-semibold text-lg text-center py-4">Login</h1>
          <hr className="pb-5" />
          <div className="px-7">
            <form>
              <input
                type="text"
                placeholder="Username"
                className="block w-full p-3 border-b-2 border-gray-400 mb-3"
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
              <div className="flex flex-col items-center justify-center py-7">
                <button
                  type="submit"
                  className="bg-[#287fb8] w-full max-w-xs rounded-full px-7 py-2 text-white text-center font-semibold"
                >
                  Login
                </button>
              </div>
            </form>
            <p
              className="mt-6 text-gray-500 font-normal text-center"
              onClick={() => setOpen(true)}
            >
              Not a member?{" "}
              <span className="cursor-pointer text-blue-500 font-normal">
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
      {open && <AddUser close={() => setOpen(false)} />}
    </>
  );
};

export default Login;
