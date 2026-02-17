import React from "react";

const Modal = ({ isActive, setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className="fixed inset-0 bg-black/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
      >
        <button
          onClick={() => {
            setActive(false);
          }}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 font-bold text-sm rounded-full hover:bg-red-600 hover:text-white active:bg-red-800 transition-all duration-200 cursor-pointer"
        >
          X
        </button>
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
