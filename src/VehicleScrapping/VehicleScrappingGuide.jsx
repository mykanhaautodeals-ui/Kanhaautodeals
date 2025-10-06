import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VehicleScrappingGuide = () => {
  const steps = [
    {
      id: 1,
      title: "Contact a Registered Vehicle Scrapping Facility (RVSF)",
      content: "Owner contacts an RVSF and shares the following documents:",
      details: [
        "Registration Certificate (RC)",
        "Registration number",
        "Chassis number",
        "Mobile number linked to the vehicle registration"
      ]
    },
    {
      id: 2,
      title: "Physical Vehicle Inspection by RVSF",
      content: "The RVSF conducts a physical inspection to verify:",
      details: [
        "Chassis/VIN number matches the RC",
        "Registration Certificate details"
      ],
      note: "This inspection is mandatory before applying for scrapping."
    },
    {
      id: 3,
      title: "Visit VAHAN Scrapping Portal",
      content: "Access the official government portal:",
      link: "https://vscrap.parivahan.gov.in/",
      details: [
        "The RVSF (or vehicle owner) initiates the process with an OTP sent to the registered mobile number."
      ]
    },
    {
      id: 4,
      title: "Enter Vehicle Details & Submit OTP",
      details: [
        'Select "Apply for Vehicle Scrapping" on the portal',
        "Enter the vehicle registration number",
        "Enter the last 5 digits of the chassis number",
        "Submit the OTP received on the registered mobile number",
        "Once verified, you'll be able to access the vehicle details"
      ]
    },
    {
      id: 5,
      title: "Fill Form-2 (Application for Scrapping)",
      content: "Complete the application form with the following details:",
      details: [
        "PAN number",
        "Aadhaar number",
        "Current address",
        "Contact information",
        "Bank account details (for receiving payment)"
      ],
      uploads: [
        "Registration Certificate (RC)",
        "ID/address proof",
        "Cancelled cheque or bank passbook"
      ]
    },
    {
      id: 6,
      title: "Select RVSF Centre & Submit",
      details: [
        "Choose the RVSF yard where you want your vehicle to be scrapped",
        "Review all information for accuracy",
        "Submit the application"
      ]
    },
    {
      id: 7,
      title: "RVSF Accepts Request & Makes Payment",
      details: [
        "The RVSF reviews the application",
        "Once approved, the RVSF transfers the agreed payment to the vehicle owner's bank account"
      ]
    },
    {
      id: 8,
      title: "Generate Certificate of Deposit (COD)",
      details: [
        "RVSF confirms the application in the portal",
        "RVSF enters the scrap value of the vehicle",
        "The Certificate of Deposit (COD) is generated through the portal"
      ],
      note: "The COD can be used for availing benefits when purchasing a new vehicle."
    },
    {
      id: 9,
      title: "Vehicle Handover",
      details: [
        "Vehicle owner hands over the original RC and keys to the RVSF",
        "The vehicle is marked as 'received for scrapping' in the system"
      ]
    },
    {
      id: 10,
      title: "Generate Certificate of Vehicle Scrapping (CVS)",
      details: [
        "After scrapping the vehicle, RVSF uploads images of engine and chassis cut-outs to vahan.com",
        "The Certificate of Vehicle Scrapping (CVS) is generated and digitally signed",
        "A final copy of the CVS is provided to the vehicle owner"
      ]
    },
    {
      id: 11,
      title: "De-register Vehicle at RTO",
      details: [
        "The CVS is submitted via the VAHAN portal or physically at the RTO",
        "The RTO cancels the vehicle registration",
        "The process is now complete"
      ]
    }
  ];

  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Detailed Process Guide</h1>
      <p className="text-gray-600 mb-8 text-center">
        Follow these steps to scrap your vehicle through the official government process
      </p>
      
      {/* Accordion Steps */}
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="border border-blue-100 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleStep(step.id)}
              className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                  {step.id}
                </div>
                <span className="text-xl font-semibold text-gray-800">{step.title}</span>
              </div>
              <span className="text-gray-600">{openStep === step.id ? '-' : '+'}</span>
            </button>
            {openStep === step.id && (
              <div className="p-4 bg-white border-t border-blue-100">
                {step.content && <p className="text-gray-700 mb-2">{step.content}</p>}
                {step.details && (
                  <ul className="list-disc pl-6 mb-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700 mb-1">{detail}</li>
                    ))}
                  </ul>
                )}
                {step.uploads && (
                  <>
                    <p className="text-gray-700 font-medium mb-1">Upload the required documents:</p>
                    <ul className="list-disc pl-6 mb-2">
                      {step.uploads.map((upload, idx) => (
                        <li key={idx} className="text-gray-700 mb-1">{upload}</li>
                      ))}
                    </ul>
                  </>
                )}
                {step.link && (
                  <div className="mb-2">
                    <a 
                      href={step.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-words"
                    >
                      {step.link}
                    </a>
                  </div>
                )}
                {step.note && (
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mt-2">
                    <p className="text-yellow-700">{step.note}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help With This Process?</h3>
        <p className="text-gray-700 mb-4">
          Our team at Kanhaautodeals can guide you through each step of this process. We'll handle the documentation, 
          portal submission, and coordination with the RTO, making the entire experience hassle-free for you.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
        >
          Contact us for assistance
        </Link>
      </div>
    </div>
  );
};

export default VehicleScrappingGuide;