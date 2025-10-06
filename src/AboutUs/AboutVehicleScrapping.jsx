import React from 'react';

const AboutVehicleScrappingSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* About Kanhaautodeals Badge */}
        <div className="mb-4">
          <span className="inline-block bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-full">
            About Kanhaautodeals
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Your <span className="text-green-600">Government Authorized Vehicle</span> Scrapping Partner
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Kanhaautodeals is a fully licensed Registered Vehicle Scrapping Facility (RVSF), authorized under the Vehicle Scrapping Policy, 2021. We provide legal, environmentally responsible, and financially beneficial vehicle scrapping services.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Government Certified */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-green-100 rounded-full h-12 w-12 mb-4">
              <div className="h-6 w-6 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Government Certified</h3>
            <p className="text-gray-600">Official RVSF License</p>
          </div>

          {/* Established */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-green-100 rounded-full h-12 w-12 mb-4">
              <span className="text-green-500 text-2xl">🗓️</span> 
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Established</h3>
            <p className="text-gray-600">Since 2023</p>
          </div>

          {/* Vehicles Scrapped */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-green-100 rounded-full h-12 w-12 mb-4">
              <span className="text-green-500 text-2xl">🚗</span> 
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vehicles Scrapped</h3>
            <p className="text-gray-600">10,000+ and counting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVehicleScrappingSection;
