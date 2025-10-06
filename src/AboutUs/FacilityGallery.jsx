import React, { useState, useEffect } from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
  "/images/gallery9.jpg",
  "/images/gallery10.jpg",
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
