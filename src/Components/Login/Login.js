import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <div className="flex flex-col">
          <div className="flex-row text-center text-4xl font-bold">
            <h1>Login</h1>
          </div>
          <div className="flex text-2xl text-center my-5 ">
            <form action="#">
              <div className="flex flex-col items-center space-y-5">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="rounded-xl bg-black text-white border-2 border-blue-900 indent-3 shadow-md shadow-blue-900/50 hover:border-blue-600 hover:border-3 focus:border-blue-600 focus:border-4"
                  placeholder="username..."
                  type="text"
                  name="username"
                />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="rounded-xl bg-black text-white border-2 border-blue-900 indent-3 shadow-md shadow-blue-900/50 hover:border-blue-600 hover:border-3 focus:border-blue-600 focus:border-4"
                  placeholder="**********"
                  type="password"
                  name="password"
                  autoComplete="on"
                />
              </div>
              <div className="pt-10">
                <Link to="home">
                  <button
                    type="button"
                    className="bg-purple-700 rounded-full hover:bg-blue-600 w-60 h-auto"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
