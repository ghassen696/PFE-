import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <img
                  rel="icon"
                  src="/src/assets/LinedataLogo.webp"
                  className="h-9 w-9 mr-4"
                />
                <div className="hidden md:block">
                  <div className=" flex items-baseline ">
                    <a
                      href="#"
                      className="bg-gray-900 rounded-md px-3 py-3 text-xl text-3xl text-red-500
                      "
                      aria-current="page"
                    >
                      <strong>Line</strong>data
                    </a>
                  </div>
                </div>
              </div>

              <div className="menu space-x-4">
                <NavLink
                  href="#"
                  className="text-gray-300 hover:bg-gray-700  hover:text-white rounded-md px-3 py-3 text-sm font-medium"
                >
                  Tickets
                </NavLink>

                <NavLink
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Team
                </NavLink>
                <NavLink
                  to="/Login_Page"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Log out
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </>
  );
}
/*
 <div className="navBar flex justify-between items-center p-8">
      <div className="logoDiv">
        <h1 className="logo text-2xl text-RedColor">
          <strong>Line</strong>data
        </h1>
      </div>
     
      </div>
    </div>*/
