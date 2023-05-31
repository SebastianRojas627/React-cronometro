import React from "react";
import stopwatch from "../assets/stopwatch.png";

function Navbar({ handleReset, setToggleForm }) {
  const handleLogoClick = () => {
    handleReset();
    setToggleForm(true);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8 transition duration-300 transform hover:scale-110 cursor-pointer"
                src={stopwatch}
                alt="Logo"
                onClick={handleLogoClick}
              />
              <h1
                className="text-white text-lg font-semibold ml-2 hover:cursor-pointer"
                onClick={handleLogoClick}
              >
                React StopWatch
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
