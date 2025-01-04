import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const { photoURL, email, displayName } = useSelector((state) => state.auth);

  return (
    <>
      {/* <!-- Page Container --> */}
      <div
        x-data="{ userDropdownOpen: false, mobileNavOpen: false }"
        className="flex flex-col mx-auto w-full   bg-gray-800 text-gray-300"
      >
        {/* <!-- Page Header --> */}

        {/* <!-- END Page Header --> */}

        {/* <!-- Page Content --> */}
        <main id="page-content" className="flex flex-auto flex-col ">
          {/* <!-- Mobile Navigation --> */}
          <div
            x-show="mobileNavOpen"
            className="lg:hidden bg-gray-900"
            // style="display: none;"
          >
            <div className="container xl:max-w-6xl mx-auto p-4 lg:p-8">
              <nav className="flex flex-col space-y-2">
                <a
                  href="javascript:void(0)"
                  className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-300 bg-gray-800"
                >
                  <svg
                    className="hi-solid hi-home inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>Home</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                >
                  <svg
                    className="hi-solid hi-user-circle inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Profile</span>
                </a>
                <a
                  href="javascript:void(0)"
                  className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                >
                  <svg
                    className="hi-solid hi-briefcase inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span>Projects</span>
                </a>
              </nav>
            </div>
          </div>
          {/* <!-- END Mobile Navigation --> */}

          {/* <!-- Page Section --> */}
          <div className="container xl:max-w-6xl  p-4 lg:p-8 space-y-4 lg:space-y-8 m-auto">
            {/* <!-- Quick Stats --> */}
            <div className="bg-gray-900 bg-opacity-50 rounded-2xl p-5 grid grid-cols-2 lg:grid-cols-4 ">
              <div className="p-5">
                <dl>
                  <dt className="text-sm uppercase font-semibold text-gray-400 tracking-wider">
                    Pageviews
                  </dt>
                  <dd className="font-semibold text-4xl pt-2 pb-3">300k</dd>
                </dl>
                <div className="flex items-center space-x-2">
                  <svg
                    className="hi-solid hi-arrow-up inline-block w-3 h-3 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-400 font-semibold">
                    30%
                  </span>
                </div>
              </div>
              <div className="p-5">
                <dl>
                  <dt className="text-sm uppercase font-semibold text-gray-400 tracking-wider">
                    Unq Visits
                  </dt>
                  <dd className="font-semibold text-4xl pt-2 pb-3">220k</dd>
                </dl>
                <div className="flex items-center space-x-2">
                  <svg
                    className="hi-solid hi-arrow-up inline-block w-3 h-3 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-400 font-semibold">
                    35%
                  </span>
                </div>
              </div>
              <div className="p-5">
                <dl>
                  <dt className="text-sm uppercase font-semibold text-gray-400 tracking-wider">
                    Avg visit
                  </dt>
                  <dd className="font-semibold text-4xl pt-2 pb-3">03:45</dd>
                </dl>
                <div className="flex items-center space-x-2">
                  <svg
                    className="hi-solid hi-arrow-up inline-block w-3 h-3 text-red-400 transform rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-400 font-semibold">
                    5%
                  </span>
                </div>
              </div>
              <div className="p-5">
                <dl>
                  <dt className="text-sm uppercase font-semibold text-gray-400 tracking-wider">
                    Bounce Rate
                  </dt>
                  <dd className="font-semibold text-4xl pt-2 pb-3">25%</dd>
                </dl>
                <div className="flex items-center space-x-2">
                  <svg
                    className="hi-solid hi-arrow-up inline-block w-3 h-3 text-green-400 transform rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-400 font-semibold">
                    3%
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- END Quick Stats --> */}

            {/* <!-- Main Chart --> */}
            <div className="bg-gray-900 bg-opacity-50 rounded-2xl p-5 grid-cols-2 lg:grid-cols-4 flex justify-center">
              <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <div class="flex justify-end px-4 pt-4">
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span class="sr-only">Open dropdown</span>
                    <svg
                      class="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdown"
                    class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul class="py-2" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Export Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>

                </div>
                <div class="flex flex-col items-center pb-10">
                  <img
                    class="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={photoURL}
                    alt="Bonnie image"
                  />
                  <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {displayName}
                  </h5>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {email}
                  </span>

                </div>
              </div>
            </div>
            {/* <!-- END Main Chart --> */}

            {/* <!-- Details --> */}
          </div>
          {/* <!-- END Page Section --> */}
        </main>
        {/* <!-- END Page Content --> */}

        {/* <!-- Page Footer --> */}

        {/* <!-- END Page Footer --> */}
      </div>
      {/* <!-- END Page Container --> */}
    </>
  );
};
