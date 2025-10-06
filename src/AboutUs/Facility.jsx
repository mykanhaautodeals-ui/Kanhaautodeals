import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Facility() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      {/* Header */}
      <div className="mb-4">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Our Infrastructure
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        State-of-the-Art Facility
      </h2>
      <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
        Equipped with modern technology for efficient and environmentally
        responsible vehicle scrapping
      </p>

      {/* Grid Section */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Modern Infrastructure */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden text-left flex flex-col">
          <img
            src="/src/assets/ModernImages.jpg"
            alt="Modern Infrastructure"
            className="w-full h-56 md:h-64 object-cover"
          />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Modern Infrastructure
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Our <strong>purpose-built facility</strong> in Uttarakhand is
              designed specifically for vehicle scrapping operations, with
              dedicated areas for vehicle reception, dismantling, material
              segregation, and storage.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mt-auto">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                10,000+ sq ft of operational area
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                Capacity to process 6,000+ automobiles per month
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                Secure storage for vehicles and components
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Equipment */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden text-left flex flex-col">
          <img
            src="/src/assets/Advanceddiagnosticmaintenance.jpg"
            alt="Advanced Equipment"
            className="w-full h-56 md:h-64 object-cover"
          />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Advanced Equipment
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              We utilize <strong>specialized tools and machinery</strong> for
              efficient dismantling, fluid drainage, and material processing,
              ensuring maximum recovery of reusable materials.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mt-auto">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                Hydraulic lifts for safe vehicle handling
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                Fluid drainage systems for environmental protection
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                Material segregation equipment for recycling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facility;
