import React from "react";

const cardData = [
  {
    image: `${import.meta.env.BASE_URL}assets/SeizedVehicle.png`,
    title: "Don't Let Your Vehicle Get Seized. Act Now.",
    description:
      "Government agencies are actively seizing end-of-life vehicles across Delhi-NCR without prior notice. Protect...",
  },
  {
    image: `${import.meta.env.BASE_URL}assets/GuideScrappingProcess.png`,
    title: "The Scrapping Process",
    description:
      "Here's a quick overview of how vehicle scrapping works",
  },
];

function CardRow() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Image Section Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Learn About Vehicle Scrapping
        </h2>

        {/* Card Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((cards, i) => (
            <div
              key={i}
              className="bg-white max-w-xs rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden">
                <img
                  src={cards.image}
                  alt={cards.title}
                  className="h-full w-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg font-semibold mb-2 text-gray-900">
                  {cards.title}
                </h2>
                <p className="text-gray-600 text-sm flex-1">
                  {cards.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardRow;
