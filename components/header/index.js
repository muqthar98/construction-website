import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className={`fixed bg-white w-full z-50`}>
      <nav className="bg-white shadow dark:bg-gray-800 flex flex-col md:flex-row items-center justify-center">
        <Link href={"/"}>
          <h1 className="text-black dark:text-white text-2xl flex-grow-0 font-bold">
            Brand
          </h1>
        </Link>
        <div className=" flex items-center justify-center p-6 text-gray-600 capitalize dark:text-gray-300">
          <a
            href="/"
            className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </a>

          <a
            href="/about"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            about
          </a>

          <a
            href="/projects"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            projects
          </a>

          <a
            href="/contact"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
