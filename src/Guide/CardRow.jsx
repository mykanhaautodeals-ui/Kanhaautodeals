import React from "react";

const cardData = [
  {
    image: "/src/assets/SeizedVehicle.png",
    title: "Don't Let Your Vehicle Get Seized. Act Now.",
    description: "Government agencies are actively seizing end-of-life vehicles across Delhi-NCR without prior notice. Protect...",
  },
  {
    image: "/src/assets/GuideScrappingProcess.png",
    title: "The Scrapping Process",
    description: "Here's a quick overview of how vehicle scrapping works",
  },
];

function CardRow() {
  return (
    <div className="flex flex-wrap gap-6 ml-10 mt-10">
      {cardData.map((cards, i) => (
        <div
          key={i}
          className="bg-white max-w-xs rounded-xl shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={cards.image}
            alt=""
            className="h-40 w-full object-cover"
          />
          <div className="p-5 flex flex-col flex-1">
            <h2 className="text-lg font-semibold mb-2">{cards.title}</h2>
            <p className="text-gray-600 text-sm mb-4 flex-1">{cards.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardRow;