import Link from 'next/link';
import React from 'react';

const Login = () => {
  const isLoggedIn = false;

  return (
    <div className="bg-gray-800 text-white p-8 rounded shadow-md">
      <form>
        {isLoggedIn ? (
          <p className="text-xl font-bold">Welcome, you are logged in!</p>
        ) : (
          <>
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
              className="bg-gray-700 border border-gray-600 px-3 py-2  rounded focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 w-full"
            />
            <br />
            <label htmlFor="password" className="block text-sm font-medium mb-2 mt-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              className="bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 w-full"
            />
            <br />
            <div className="flex flex-row gap-5 items-center mt-10">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 my-2 mx-auto"
              >
                Login
              </button>
              or
              <Link
                href="/createprofile"
                type="button"
                className="bg-transparent text-white hover:text-blue-500 border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-2"
              >
                Create Account
              </Link>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
