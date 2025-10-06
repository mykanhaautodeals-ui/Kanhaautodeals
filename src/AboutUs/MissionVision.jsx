import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function MissionVision() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p className="text-green-600 font-semibold mb-2">Our Purpose</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Mission, Vision & Values
        </h2>
        <p className="text-gray-500 mt-2">
          The guiding principles that drive our commitment to excellence in
          vehicle scrapping
        </p>
      </div>

      {/* Mission and Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-md border-t-4 border-green-600 p-8">
          <div className="flex flex-col items-center mb-6">
            <span className="bg-green-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold mt-4">Our Mission</h3>
          </div>
          <p className="text-gray-600 mb-6 text-center">
            To provide <strong>legally compliant, environmentally responsible</strong>{" "}
            vehicle scrapping services that maximize financial benefits for
            vehicle owners while contributing to a cleaner, more sustainable
            future.
          </p>
          <ul className="space-y-3 text-left">
            {[
              "Ensure 100% legal compliance with all government regulations",
              "Provide maximum financial value to vehicle owners",
              "Implement eco-friendly recycling practices for all vehicle components",
              "Deliver hassle-free service from pickup to documentation",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1" />
                <span className="ml-2 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow-md border-t-4 border-green-600 p-8">
          <div className="flex flex-col items-center mb-6">
            <span className="bg-green-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold mt-4">Our Vision</h3>
          </div>
          <p className="text-gray-600 mb-6 text-center">
            To become India&apos;s{" "}
            <strong>most trusted and preferred</strong> vehicle scrapping partner,
            setting industry standards for legal compliance, environmental
            responsibility, and customer satisfaction.
          </p>
          <ul className="space-y-3 text-left">
            {[
              "Lead the transformation of India's vehicle recycling industry",
              "Establish a nationwide network of authorized scrapping facilities",
              "Achieve 90% material recovery rate through advanced recycling technologies",
              "Contribute to reducing India's carbon footprint through sustainable practices",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1" />
                <span className="ml-2 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
