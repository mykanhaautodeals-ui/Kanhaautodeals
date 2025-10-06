import React from "react";

const WhyChooseMarilinox = () => (
  <div className="bg-gray-50  flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
      Why Choose <span className="text-green-500">Kanhaautodeals</span>
    </h2>
    <p className="text-gray-500 text-center text-sm sm:text-base mb-8 max-w-2xl">
      Understanding the difference between Authorized RVSFs like Kanhaautodeals and
      Third-Party Vehicle Scrapping Options
    </p>

    {/* Wrapper */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-5xl">
      {/* The Old Way */}
      <div className="bg-red-100 rounded-xl p-4 sm:p-6 md:p-8 flex-1 shadow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <span className="text-base sm:text-lg font-semibold">
            The Old Way
          </span>
          <span className="bg-red-200 text-red-600 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full self-start sm:self-auto">
            ✗ Not Recommended
          </span>
        </div>

        <span className="block font-medium mb-4 text-sm sm:text-base">
          Indirect Route (via third-party agents)
        </span>

        {/* Route Illustration */}
        <div className="flex flex-wrap items-center mb-6 text-xs sm:text-sm">
          <span className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
            Dealer/Third-party websites
          </span>
          <span className="mx-1">→</span>
          <span className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
            Agents
          </span>
          <span className="mx-1">→</span>
          <span className="bg-gray-200 rounded-full px-2 py-1 mb-2">
            Unknown Yard
          </span>
        </div>

        <ul className="space-y-2 text-red-700 text-sm sm:text-base mb-3">
          <li>✗ Vehicle passes through multiple hands</li>
          <li>✗ Many platforms not government-licensed for CoD/CVS</li>
          <li>✗ Reduced value due to middlemen cuts</li>
          <li>✗ Risk of improper disposal & environmental damage</li>
          <li>✗ Delays in processing & documentation</li>
        </ul>

        <p className="text-xs text-gray-900 mt-3">
          *Unlicensed aggregators may not provide legally valid certificates
          required for de-registration and tax benefits.
        </p>
      </div>

      {/* The Smart Way */}
      <div className="bg-green-50 rounded-xl p-4 sm:p-6 md:p-8 flex-1 shadow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <span className="text-base sm:text-lg font-semibold">
            The Smart Way
          </span>
          <span className="bg-green-200 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full self-start sm:self-auto">
            ✓ Recommended
          </span>
        </div>

        <span className="block font-medium mb-4 text-sm sm:text-base">
          Direct Legal Scrapping (with Kanhaautodeals)
        </span>

        {/* Route Illustration */}
        <div className="flex flex-wrap items-center mb-6 text-xs sm:text-sm">
          <span className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
            Customer
          </span>
          <span className="mx-1">→</span>
          <span className="bg-green-200 rounded-full px-2 py-1 mr-2 mb-2 text-center">
            Kanhaautodeals <br /> Authorized RVSF
          </span>
          <span className="mx-1">→</span>
          <span className="bg-green-200 rounded-full px-2 py-1 mb-2">
            Certificate
          </span>
        </div>

        <ul className="space-y-2 text-green-800 text-sm sm:text-base mb-3">
          <li>✓ Direct path from customer to Marilinox</li>
          <li>✓ Legally valid CoD and CVS certificates</li>
          <li>✓ Maximum value, no middlemen</li>
          <li>✓ 90% recycling rate, eco-friendly</li>
          <li>✓ Quick processing & instant certificates</li>
        </ul>

        <p className="text-xs text-gray-900 mt-3">
          *Avoid middlemen. Go direct with Marilinox, a government-authorized
          RVSF, for maximum value & safety.
        </p>
      </div>
    </div>
  </div>
);

export default WhyChooseMarilinox;
