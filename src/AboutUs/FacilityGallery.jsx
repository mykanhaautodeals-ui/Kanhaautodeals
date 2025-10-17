import React, { useState, useEffect } from "react";

const images = [
  `${import.meta.env.BASE_URL}assets/Advanceddiagnosticmaintenance.jpg`,
  `${import.meta.env.BASE_URL}assets/ModernImages.jpg`,
  `${import.meta.env.BASE_URL}assets/GuideScrappingProcess.png`,
  `${import.meta.env.BASE_URL}assets/GoverementAuthorised.jpg`,
  `${import.meta.env.BASE_URL}assets/CarGallery.jpg`,
  `${import.meta.env.BASE_URL}assets/FacilityCar.jpg`,
  `${import.meta.env.BASE_URL}assets/vehicle_scrappingUnit.jpeg`,
  `${import.meta.env.BASE_URL}assets/wonderlane-1P_dX1sxACc-unsplash.jpg`,
  `${import.meta.env.BASE_URL}assets/waste-management-6810722_1280.jpg`,
  `${import.meta.env.BASE_URL}assets/facility10.jpg`,
];

function FacilityGallery() {
  const [current, setCurrent] = useState(0);
  const visibleImages = 3;

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 1 >= images.length ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Facility Gallery</h2>
      <p className="text-gray-600 mt-2">
        Take a visual tour of our vehicle scrapping facility
      </p>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / visibleImages}%)`,
            width: `${(images.length * 100) / visibleImages}%`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 p-2">
              <img
                src={src}
                alt={`Facility ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FacilityGallery;
