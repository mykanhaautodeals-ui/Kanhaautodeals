import React from 'react';
import { FileText, Truck, FileCheck, Shield, Lock, FileText as LegalDoc } from 'lucide-react';

const HowWeHelp = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">
        How We Help You
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        We guide you through the entire process, making vehicle scrapping simple and hassle-free.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Documentation */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 flex flex-col items-center text-center hover:shadow-md transition">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Documentation</h3>
          <p className="text-sm sm:text-base text-gray-700">
            We handle all the paperwork required for the scrapping process, ensuring compliance with government regulations.
          </p>
        </div>

        {/* Free Pickup */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 flex flex-col items-center text-center hover:shadow-md transition">
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <Truck className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Free Pickup</h3>
          <p className="text-sm sm:text-base text-gray-700">
            We offer free vehicle pickup from your location, making the process convenient and hassle-free.
          </p>
        </div>

        {/* Certificates */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 flex flex-col items-center text-center hover:shadow-md transition">
          <div className="bg-purple-100 p-3 rounded-full mb-4">
            <FileCheck className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Official Certificates</h3>
          <p className="text-sm sm:text-base text-gray-700">
            Receive government-authorized certificates that can be used for tax benefits and new vehicle purchases.
          </p>
        </div>
      </div>

      {/* Government Section */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
          Government Authorized Process
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Our vehicle scrapping process follows the official guidelines set by the Ministry of Road Transport and Highways. 
          All steps are carried out through the trusted Vahan portal, ensuring complete transparency and compliance.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">Government Authorized</span>
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <Lock className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">Secure Process</span>
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <LegalDoc className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">Legal Documentation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
