const VehicleProcess = () => (
  <div className="      grid place-items-center bg-gray-50 py-10 px-4">
    <div className="text-center max-w-2xl">
      {/* Badge */}
      <span className="inline-block bg-green-500 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-3">
        Vehicle Scrapping Process
      </span>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
        How It Works
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg text-gray-600 mb-8 px-2">
        A step-by-step guide to the official vehicle scrapping process
      </p>

      {/* Button */}
      <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg font-semibold px-5 sm:px-7 py-2 sm:py-3 rounded-full shadow-md transition duration-300">
        <span className="material-icons text-sm sm:text-base">menu</span>
        View Process Steps
      </button>
    </div>
  </div>
);

export default VehicleProcess;
