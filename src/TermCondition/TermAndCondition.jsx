import React from 'react';

const TermAndCondition = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-500 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4">
            Terms & Conditions
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
          <div className="space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Overview
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                These Terms and Conditions ("Terms") govern your access to and use of the Kanhaautodeals website and services. By using our website or engaging with our services, you agree to these Terms in full. If you disagree with any part, please do not use our services.
              </p>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Eligibility
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You must be at least 18 years of age and capable of forming a binding contract to use our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Services Provided
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Kanhaautodeals offers authorized vehicle scrapping and sustainability services including ELV (End-of-Life Vehicle) dismantling, recycling, and compliance solutions.
              </p>
            </div>

            {/* Vehicle Scrapping */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Vehicle Scrapping Conditions
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
                <li>You must provide valid vehicle ownership documents.</li>
                <li>Vehicles must be delivered in scrap-ready condition unless otherwise agreed.</li>
                <li>We reserve the right to reject any vehicle not meeting compliance or legal requirements.</li>
              </ul>
            </div>

            {/* Payments */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Payments & Refunds
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Payment is made after successful verification and acceptance of the vehicle. No refunds are issued once scrapping has been completed.
              </p>
            </div>

            {/* User Obligations */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                User Obligations
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
                <li>Provide accurate information during booking or inquiry.</li>
                <li>Do not engage in any unlawful activities using our services.</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                All content, trademarks, and logos on the Kanhaautodeals website are the property of the Company. Unauthorized use is strictly prohibited.
              </p>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We are not liable for any indirect, incidental, or consequential damages resulting from your use of the Service. Liability is limited to the value of the vehicle scrapped.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Termination
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We reserve the right to terminate or suspend your access to our services if you breach these Terms or applicable laws.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Roorkee, Uttarakhand.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Updates to Terms
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We may revise these Terms from time to time. The updated version will be posted on this page with a revised "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
