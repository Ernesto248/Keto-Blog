import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Star } from "lucide-react";

const NavBar = () => {
  const activeStyle = {
    color: "#FCD34D", // Tailwind's yellow-300
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto flex justify-between items-center">
          <NavLink to="/">
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-white">
                Blog de la Dieta Keto
              </h1>
              <p className="mt-1 md:mt-2 text-white text-sm md:text-base">
                Tu guía para un estilo de vida más saludable
              </p>
            </div>
          </NavLink>
          <NavLink to="/" className="flex items-center md:hidden">
            <img
              src="/keto_nombre.jpg"
              alt="Logo"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
          </NavLink>
        </div>
        <div className="w-full md:w-auto flex justify-between items-center mt-4 md:mt-0">
          <div className="flex flex-row space-x-5 items-center">
            <NavLink
              to="/"
              className="text-white hover:text-gray-300 flex items-center"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Home className="w-5 h-5 mr-2" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/reviews"
              className="text-white hover:text-gray-300 flex items-center"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Star className="w-5 h-5 mr-2" />
              <span>Reviews</span>
            </NavLink>
          </div>
          <NavLink to="/" className="hidden md:flex items-center ml-4">
            <img
              src="/keto_nombre.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
