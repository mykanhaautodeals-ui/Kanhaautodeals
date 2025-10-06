import React from "react";

function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-2.016A9.955 9.955 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2c2.21 0 4.247.72 5.89 1.944"
          />
        </svg>
      ),
    },
    {
      title: "Sustainability",
      description: "We prioritize environmental protection in all our operations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      title: "Customer Focus",
      description: "We put our customers' needs and satisfaction at the center of everything we do.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
    },
    {
      title: "Compliance",
      description: "We strictly adhere to all legal and regulatory requirements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We continuously seek better ways to serve our customers and protect the environment.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Values</h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-500 mt-4">
          The principles that guide our operations and interactions every day
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-green-100 p-4 rounded-xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
