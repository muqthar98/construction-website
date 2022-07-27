import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white h-screen dark:bg-gray-800 grid place-items-center"
    >
      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
              About Us
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md text-xl">
              We Global Sanitary Consultancy was established on 14/01/2008 by
              Mr.Prabhu Jayapal and we are engaged in the business of
              construction, Renovation. Plumbing, Painting, Electrical,
              Carpentry. Modular kitchen,wardrobe, complete civil and sanitary
              works for residential and commercial building .
            </p>

            <button
              type="button"
              className="mt-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <Link href={"/about"}>Read More</Link>
            </button>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <img
                  className="object-cover object-center w-full max-h-64  rounded-md shadow"
                  src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
