import React from 'react'

function Footer() {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
        <div className="container py-6">
          {/* <h1 className="text-lg font-bold text-center lg:text-2xl">
            Never miss <br /> out any exclusive offers
          </h1> */}

          {/* <div className="flex justify-center mt-6">
            <div className="bg-white border rounded-md focus-within:ring dark:bg-gray-800 dark:border-gray-600 focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md dark:hover:bg-gray-600 dark:bg-gray-700 lg:w-auto hover:bg-gray-700">
                  subscribe
                </button>
              </div>
            </div>
          </div> */}

          <hr className="h-px mt-6 border-gray-300 border-none dark:bg-gray-700" />

          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a
                href="#"
                className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
              >
                Brand
              </a>
            </div>

            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <a
                  href="#"
                  className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer