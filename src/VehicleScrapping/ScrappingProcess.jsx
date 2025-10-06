const ScrappingProcess = () => (
  <div className="min-h-screen grid place-items-center bg-gray-50 px-4 py-10">
    <div className="max-w-4xl w-full rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="inline-block bg-green-100 text-green-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-2">
          At a Glance
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          The Scrapping Process
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Here's a quick overview of how vehicle scrapping works
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row gap-6 justify-between bg-gray-50 p-4 rounded-xl mb-6">
        {[
          {
            title: "Documentation",
            step: "1",
            desc: "Prepare your vehicle documents and contact a registered scrapping facility",
          },
          {
            title: "Verification",
            step: "2",
            desc: "Complete the verification process through the official Vahan portal",
          },
          {
            title: "Completion",
            step: "3",
            desc: "Receive your certificates and complete the deregistration process",
          },
        ].map(({ title, step, desc }) => (
          <div
            key={step}
            className="bg-white p-4 sm:p-6 rounded-lg shadow flex-1 hover:shadow-md transition"
          >
            <div className="flex items-center mb-3">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                {step}
              </span>
              <span className="text-lg sm:text-xl font-semibold text-gray-900">
                {title}
              </span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{desc}</p>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-blue-100 rounded-lg p-4 sm:p-6 mb-6 flex items-start">
        <span className="text-blue-600 mr-3 text-lg sm:text-2xl font-bold">i</span>
        <div>
          <span className="font-semibold text-blue-800 block">
            Government Authorized Process
          </span>
          <p className="text-blue-700 text-sm sm:text-base mt-1">
            This is the official process as mandated by the Ministry of Road Transport and Highways. Following these steps ensures your vehicle is legally scrapped with all proper documentation.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-green-700 font-medium mt-4 text-sm sm:text-base">
        See detailed steps below <span className="text-lg sm:text-xl">&#8595;</span>
      </div>
    </div>
  </div>
);

export default ScrappingProcess;
