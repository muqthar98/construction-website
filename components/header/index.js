import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";


function Header() {
  return (
    <header className={`fixed bg-white w-full z-50`}>
      <nav className="bg-white shadow dark:bg-gray-800 flex flex-col md:flex-row items-center justify-center">
        <Link href={"/"}>
          <>
          <Image
            src={logo}
            height={"80rem"}
            width={"100rem"}
            alt={"Global Developers"}
          />
          <h1 className="text-black dark:text-white text-2xl flex-grow-0 font-bold">
            Global Developers
            <p className="text-sm text-center font-normal">Lights your home</p>
          </h1>
          </>
          
        </Link>
        <div className=" flex items-center justify-evenly gap-6 p-6 text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </Link>

          <Link
            href="/about"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            about
          </Link>

          <Link
            href="/projects"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            projects
          </Link>

          <Link
            href="/contact"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
