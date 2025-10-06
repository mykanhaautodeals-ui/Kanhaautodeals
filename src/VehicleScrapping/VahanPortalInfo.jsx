import React from 'react';

const VahanPortalInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-white rounded-lg shadow-lg">
      {/* Header Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium block mx-auto text-sm sm:text-base transition">
        Official Platform
      </button>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mt-6 mb-8 text-center">
        The Vahan Portal
      </h1>

      {/* Intro Section */}
      <div className="bg-blue-50 p-6 sm:p-8 rounded-lg mb-8">
        <p className="text-base sm:text-lg text-gray-700 mb-6 text-center">
          The government's digital platform that powers vehicle registration and scrapping in India
        </p>

        <p className="text-gray-700 mb-8 text-sm sm:text-base">
          The Vahan portal is India's comprehensive platform for vehicle registration, taxation, permits,
          and scrapping. It creates a transparent ecosystem where:
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Fully digital", desc: "No manual forms required" },
            { title: "OTP-based", desc: "Customers retain control" },
            { title: "Non-repudiable", desc: "Traceable and secure" },
            { title: "RVSF", desc: "Registered Vehicle Scrapping Facility" },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-blue-100"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">
                {title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {/* Security Card */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Security & Privacy
          </h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Your data is protected by government-level security protocols.
            Only OTP verification is used — no sharing of sensitive documents with third parties.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            All certificates generated are digitally signed and legally valid across India.
          </p>
        </div>

        {/* Official Platform Card */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
            Official Platform
          </h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Developed by the Ministry of Road Transport & Highways to digitize all vehicle-related services
            across India.
          </p>
          <a
            href="https://vahan.parivahan.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition"
          >
            Visit Vahan Scrapping Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default VahanPortalInfo;
