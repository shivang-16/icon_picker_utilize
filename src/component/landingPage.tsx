import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-500 to-teal-700">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Icon Picker!
        </h1>
        <p className="text-lg text-blue-100 mb-8">
          Click the button below to select your favorite icons.
        </p>
        <Link to="/icon-picker">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300">
            Open Icon Picker
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
