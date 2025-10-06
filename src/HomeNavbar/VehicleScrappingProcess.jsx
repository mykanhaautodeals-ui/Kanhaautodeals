import React from 'react';

const VehicleScrappingProcess = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl font-sans">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
        Simple 4-Step Process
      </h1>
      <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
        We handle everything from pickup to paperwork
      </p>

      {/* Process Steps */}
      <div className="relative border-l-2 border-gray-300 ml-4 sm:ml-8">
        {/* Step 1 */}
        <div className="mb-8 flex flex-col sm:flex-row items-start">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white flex items-center justify-center -ml-5 sm:-ml-6 relative z-10 text-sm sm:text-lg font-semibold border-2 border-white">
            1
          </div>
          <div className="ml-6 flex-1 mt-3 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              Request a Quote
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Call us or fill out our form with your vehicle details. We'll provide an instant estimate based on your
              vehicle's make, model, and condition.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-8 flex flex-col sm:flex-row items-start">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white flex items-center justify-center -ml-5 sm:-ml-6 relative z-10 text-sm sm:text-lg font-semibold border-2 border-white">
            2
          </div>
          <div className="ml-6 flex-1 mt-3 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              Free Vehicle Pickup
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We'll schedule a convenient time to collect your vehicle from your location at no extra cost. Our team
              handles all the logistics, even for non-running vehicles.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-8 flex flex-col sm:flex-row items-start">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white flex items-center justify-center -ml-5 sm:-ml-6 relative z-10 text-sm sm:text-lg font-semibold border-2 border-white">
            3
          </div>
          <div className="ml-6 flex-1 mt-3 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              Documentation & Scrapping
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We handle all paperwork including RTO deregistration. Your vehicle is scrapped following environmentally
              friendly processes at our government-certified facility.
            </p>
            <p className="text-xs sm:text-sm text-green-700 mt-2">
              ✔️ All processes digitally tracked via Vahan portal
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-8 flex flex-col sm:flex-row items-start">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white flex items-center justify-center -ml-5 sm:-ml-6 relative z-10 text-sm sm:text-lg font-semibold border-2 border-white">
            4
          </div>
          <div className="ml-6 flex-1 mt-3 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              Payment & Certificates
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Receive immediate payment for your vehicle along with official Certificate of Vehicle Scrapping (CVS) and
              Certificate of Deposit (CoD) for additional benefits.
            </p>
            <p className="text-xs sm:text-sm text-green-700 mt-2">
              ✔️ Only authorized RVSFs can legally issue these certificates
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-8">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-lg flex items-center justify-center mx-auto text-sm sm:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          <a href="#">Start the Process Now</a>
        </button>
      </div>
    </div>
  );
};

export default VehicleScrappingProcess;
