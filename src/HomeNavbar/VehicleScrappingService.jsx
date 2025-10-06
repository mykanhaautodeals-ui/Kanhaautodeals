import React from "react";

const VehicleScrappingService = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto pt-16 px-8">
        <div className="md:w-1/2">
          <div className="mb-4">
            <span className="bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg">
              URGENT ENFORCEMENT ALERT
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
            Don't Let Your Vehicle Get
            <span className="text-green-600 ml-2">Seized.</span> Act Now.
          </h1>
          <p className="text-gray-700 text-lg mt-4 mb-2">
            Government agencies are actively seizing end-of-life vehicles across Delhi-NCR without prior notice. Protect your investment before it's too late.
            <span className="text-red-600 font-semibold ml-1">Learn more.</span>
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-full shadow transition">
            Scrap Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/src/assets/SeizedVehicle.png"
            alt="Vehicle Seized Illustration"
            className="max-h-72 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleScrappingService;
