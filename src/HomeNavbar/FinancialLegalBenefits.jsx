import React from "react";

const FinancialLegalBenefits = () => (
  <div className="bg-gray-50 flex flex-col items-center px-4 sm:px-6 lg:px-12 py-6">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
      Financial &amp; Legal Benefits
    </h2>
    <p className="text-gray-500 text-center text-sm sm:text-base mb-10 max-w-2xl">
      Scrapping your vehicle with a Government-Authorized Facility offers
      significant advantages
    </p>

    {/* Cards Container */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-6xl">
      
      {/* Card Template */}
      <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex-1">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 rounded-full p-2 mr-3">
            <svg width="20" height="20" fill="currentColor" className="text-green-600">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 5.75v2.25h1a1.25 1.25 0 010 2.5h-2a.75.75 0 110-1.5h2.25v-2.25a.75.75 0 00-1.5 0z" />
            </svg>
          </span>
          <span className="font-bold text-lg sm:text-xl">Monetary Benefits</span>
        </div>
        <ul className="space-y-2 text-green-700 font-medium mb-6 text-sm sm:text-base">
          <li>
            Get up to 4% of vehicle value
            <span className="font-normal text-black">*</span> for your vehicle's scrap value
          </li>
          <li>Certificate of Deposit (CoD) for discounts on new vehicle purchases</li>
          <li>3-4% discount through Road tax rebate</li>
          <li>Up to 25% off on Road tax rebates</li>
        </ul>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-yellow-800 text-xs sm:text-sm">
          <p>
            <span className="font-semibold">You can trade your CoD</span> with any
            vehicle manufacturer for additional discounts!
          </p>
          <p className="mt-2 font-normal">
            *Scrap value is based on condition, weight &amp; metal rates.
          </p>
        </div>
      </div>

      {/* Repeat for Legal Protection and Environmental Benefits */}
      {/* Just keep the same structure but with their own text/icons */}

    </div>
  </div>
);

export default FinancialLegalBenefits;
