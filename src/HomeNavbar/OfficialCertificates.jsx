import React from "react";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0"
    fill="none"
    viewBox="0 0 20 20"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 10l4 4 6-6"
    />
  </svg>
);

const OfficialCertificates = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12 py-12">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3">
      Official Certificates You'll Receive
    </h2>
    <p className="text-gray-500 text-center text-sm sm:text-base mb-7 max-w-2xl">
      Legal Documentation that protects you and provides benefits
    </p>

    {/* Important Notice */}
    <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6 text-blue-900 mb-10 w-full max-w-3xl text-sm sm:text-base">
      <span className="font-semibold mr-2">Important:</span>
      Only government-authorized Registered Vehicle Scrapping Facilities
      (RVSFs) like ours can legally issue Certificate of Deposit (CoD) and
      Certificate of Vehicle Scrapping (CVS). These certificates are digitally
      regulated through the Vahan portal and other government systems!
    </div>

    {/* Cards Container */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-5xl">
      
      {/* Certificate of Deposit (CoD) */}
      <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex-1">
        <div className="flex items-center mb-3">
          <span className="bg-green-100 rounded-full p-2 mr-2">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-green-600"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 5.75v2.25h1a1.25 1.25 0 010 2.5h-2a.75.75 0 110-1.5h2.25v-2.25a.75.75 0 00-1.5 0z" />
            </svg>
          </span>
          <span className="font-bold text-lg sm:text-xl">
            Certificate of Deposit (CoD)
          </span>
        </div>
        <p className="text-gray-800 mb-4 text-sm sm:text-base">
          The Certificate of Deposit (CoD) is a valuable financial document that
          provides discounts when purchasing a new vehicle.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <span className="font-bold mb-3 block">Benefits of CoD:</span>
          <ul className="space-y-2 text-green-700 mb-2 font-medium text-sm sm:text-base">
            <li className="flex items-start">
              <CheckIcon />
              Provides 3-4% discount through Road tax rebate
            </li>
            <li className="flex items-start">
              <CheckIcon />
              Tradable document that can be used with any vehicle manufacturer
            </li>
            <li className="flex items-start">
              <CheckIcon />
              Can be transferred to family members or friends
            </li>
            <li className="flex items-start">
              <CheckIcon />
              Up to 25% off on Road tax rebates
            </li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-md text-xs sm:text-sm font-medium">
          Tip: Some manufacturers offer additional discounts when you use your
          CoD with them!
        </div>
      </div>

      {/* Certificate of Vehicle Scrapping (CVS) */}
      <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex-1">
        <div className="flex items-center mb-3">
          <span className="bg-green-100 rounded-full p-2 mr-2">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-green-600"
            >
              <circle cx="10" cy="10" r="8" strokeWidth="2" fill="none" />
              <path
                d="M7 8h6M7 12h6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-bold text-lg sm:text-xl">
            Certificate of Vehicle Scrapping (CVS)
          </span>
        </div>
        <p className="text-gray-800 mb-4 text-sm sm:text-base">
          The Certificate of Vehicle Scrapping (CVS) is an official document
          that proves your vehicle has been properly scrapped at a
          government-authorized facility.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <span className="font-bold mb-3 block">Why CVS is Important:</span>
          <ul className="space-y-2 text-green-700 mb-2 font-medium text-sm sm:text-base">
            <li className="flex items-start">
              <CheckIcon />
              Legal proof that your vehicle is permanently removed from use
            </li>
            <li className="flex items-start">
              <CheckIcon />
              Protects you from future liability if your vehicle number is misused
            </li>
            <li className="flex items-start">
              <CheckIcon />
              Required for official deregistration from RTO records
            </li>
            <li className="flex items-start">
              <CheckIcon />
              Confirms environmentally responsible disposal
            </li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-xs sm:text-sm font-medium">
          <span className="font-semibold">Warning:</span> Illegal scrappers
          cannot provide this certificate, leaving you legally vulnerable!
        </div>
      </div>
    </div>
  </div>
);

export default OfficialCertificates;
