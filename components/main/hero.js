import React from "react";
import Image from "next/image"
import image1 from "../../public/assets/image1.jpeg"
import image2 from "../../public/assets/image2.jpeg"
import image3 from "../../public/assets/image3.jpeg"

const Hero = () => {
  return (
    <section id="home" className={`h-screen bg-blue-50`}>
      {/* <div className="w-full bg-center bg-cover h-full bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]"> */}
      <div className="w-full bg-center bg-cover h-full bg-[url(https://images.unsplash.com/photo-1599995903128-531fc7fb694b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)]">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          {/* <div classNameName="text-center">
            <h1 classNameName="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Build Your new{" "}
              <span classNameName="text-blue-400 underline">Saas</span>
            </h1>
            <button classNameName="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
