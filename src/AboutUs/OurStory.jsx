import React from 'react';

const OurStory = () => {
  return (
    <div className="container mx-auto p-4 md:flex items-center space-x-0 md:space-x-8 container mb-[100px]">
      {/* Left Section: Our Story Text */}
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-sm font-semibold text-green-600 mb-2">Our Story</h2>
        <h1 className="text-3xl font-bold mb-4">Pioneering Legal Vehicle Scrapping in India</h1>
        <p className="text-gray-700 mb-4">
          Kanhaautodeals was established in 2023 by <span className="font-semibold">Sega Tech Solution Pvt. Ltd.</span> with a vision to transform India's vehicle scrapping industry through legal, environmentally responsible practices.
        </p>
        <p className="text-gray-700 mb-4">
          As an authorized RVSF under the Vehicle Scrapping Policy 2021, we've been implementing the government's vision for sustainable end-of-life vehicle management.
        </p>
        <p className="text-gray-700 mb-4">
          Our journey began with a simple mission: to provide vehicle owners with a hassle-free, legally compliant way to dispose of their old vehicles while maximizing their financial benefits and minimizing environmental impact. Today, Kanhaautodeals stands as a trusted partner for thousands of vehicle owners, government agencies, and automotive manufacturers in the proper disposal and recycling of end-of-life vehicles.
        </p>
        <div className="flex items-center mt-6">
          <img
            src="/path/to/ministry-logo.png" // Replace with actual logo path
            alt="Ministry of Road Transport Logo"
            className="h-10 mr-4"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Authorized by</p>
            <p className="text-lg font-bold text-gray-900">Ministry of Road Transport</p>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1">
        <img
          src="/path/to/vehicle-scrapping-image.jpg" // Replace with actual image path
          alt="Vehicle Scrapping Facility"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default OurStory;
