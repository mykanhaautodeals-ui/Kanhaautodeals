import React from "react";
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function Certifications() {
  const certifications = [
    {
      title: "RVSF License",
      description: (
        <>
          Official <strong>Registered Vehicle Scrapping Facility</strong> license issued under the
          Vehicle Scrapping Policy, 2021 by the Ministry of Road Transport and Highways.
        </>
      ),
      note: "This license authorizes us to legally scrap vehicles and issue official Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS).",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "ISO 14001:2015",
      description: (
        <>
          International standard for <strong>effective environmental management systems</strong>,
          ensuring our operations minimize environmental impact.
        </>
      ),
      note: "This certification validates our commitment to environmental responsibility and sustainable practices in vehicle scrapping operations.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "ISO 9001:2015",
      description: (
        <>
          <strong>Quality management system certification</strong> ensuring consistent quality
          standards in all our processes and services.
        </>
      ),
      note: "This certification demonstrates our commitment to maintaining high-quality standards and continuous improvement in our vehicle scrapping operations.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      {/* Section Badge */}
      <div className="mb-4">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Our Credentials
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900">Certifications & Authorizations</h2>
      <p className="mt-2 text-gray-600">
        Mariniox operates with full legal compliance and government approval
      </p>

      {/* Certifications Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-left">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${cert.iconBg}`}>
              <CheckCircleIcon className={`h-6 w-6 ${cert.iconColor}`} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{cert.title}</h3>
            <p className="mt-2 text-gray-700 text-sm">{cert.description}</p>
            <div className="mt-3 p-3 bg-gray-50 rounded-md text-sm text-gray-600 flex items-start">
              <span className="mr-2 mt-0.5">🔹</span>
              <span>{cert.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <p className="mt-10 text-gray-600 max-w-4xl mx-auto">
        Our certifications ensure that when you scrap your vehicle with Mariniox, you're choosing a{" "}
        <strong>fully legal, government-approved</strong> process that protects you from future
        liabilities while maximizing your financial benefits.
      </p>

      {/* Warning Box */}
      <div className="mt-6 bg-yellow-50 p-4 rounded-md flex items-start max-w-4xl mx-auto">
        <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mr-2 mt-0.5" />
        <p className="text-yellow-800 text-sm">
          <strong>Important:</strong> Always verify that a vehicle scrapping facility has proper
          government authorization before handing over your vehicle.
        </p>
      </div>
    </section>
  );
}

export default Certifications;
