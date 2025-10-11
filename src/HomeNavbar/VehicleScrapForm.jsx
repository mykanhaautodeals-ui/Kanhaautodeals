import React, { useState } from "react";

const VehicleScrapForm = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [otherMake, setOtherMake] = useState("");
  const [otherModel, setOtherModel] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

 const vehicles = [
  { name: "Car", icon: `${import.meta.env.BASE_URL}assets/car.png` },
  { name: "Bike", icon: `${import.meta.env.BASE_URL}assets/sportbike.png` },
  { name: "Truck", icon: `${import.meta.env.BASE_URL}assets/cargo-truck.png` },
  { name: "Other", icon: `${import.meta.env.BASE_URL}assets/maintenance.png` },
];

  const makeOptions = {
    Car: ["Toyota", "Honda", "Ford"],
    Bike: ["Hero", "Bajaj", "TVS"],
    Truck: ["Ashok Leyland", "Tata Motors", "Mahindra"],
  };

  const modelOptions = {
    Toyota: ["Glanza", "Fortuner", "Innova"],
    Honda: ["City", "Amaze", "Civic"],
    Ford: ["EcoSport", "Endeavour"],
    Hero: ["Splendor", "Passion"],
    Bajaj: ["Pulsar", "Platina"],
    TVS: ["Apache", "Jupiter"],
    "Ashok Leyland": ["Ecomet", "Boss"],
    "Tata Motors": ["Ace", "Signa"],
    Mahindra: ["Blazo", "Furio"],
  };

  const handleVehicleSelect = (vehicleName) => {
    setSelectedVehicle(vehicleName);
    setSelectedMake("");
    setSelectedModel("");
    setOtherMake("");
    setOtherModel("");
  };

  const currentMakes =
    selectedVehicle && selectedVehicle !== "Other"
      ? makeOptions[selectedVehicle] || []
      : [];
  const currentModels = selectedMake ? modelOptions[selectedMake] || [] : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      vehicleType: selectedVehicle,
      make: selectedVehicle === "Other" ? otherMake : selectedMake,
      model: selectedVehicle === "Other" ? otherModel : selectedModel,
      vehicleNumber,
      customerName: name,
      phone,
      termsAccepted,
    };

    const jsonString = JSON.stringify(customerData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "customer-details.json";
    link.click();

    alert("JSON file downloaded successfully!");
  };

  return (
    <div className=" flex bg-gray-100 items-center justify-center px-4 sm:px-6 lg:px-12 py-8 mb-8 mt-16">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full rounded-lg shadow-2xl overflow-hidden">
        
        {/* Left Section */}
        <div className="lg:w-1/2 p-8 sm:p-10 bg-gradient-to-br from-green-500 to-green-700 text-white flex flex-col justify-center">
          <span className="bg-green-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block w-fit">
            Government Registered Facility
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
            Scrap your old vehicle and get instant payment
          </h1>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 p-8 sm:p-10 bg-white flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Get an instant valuation
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Vehicle Type */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Vehicle Type*
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vehicles.map((vehicle) => (
                  <button
                    key={vehicle.name}
                    type="button"
                    onClick={() => handleVehicleSelect(vehicle.name)}
                    className={`flex flex-col items-center p-3 rounded-lg border transition-colors w-full
                      ${
                        selectedVehicle === vehicle.name
                          ? "bg-green-50 border-green-500 text-green-700"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                  >
                    <img
                      src={vehicle.icon}
                      alt={vehicle.name}
                      className="h-7 w-7 sm:h-8 sm:w-8 mb-1"
                    />
                    <span className="text-xs sm:text-sm">{vehicle.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Make & Model */}
            {selectedVehicle && selectedVehicle !== "Other" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  className="p-3 border rounded-lg w-full"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                >
                  <option value="">Select Make</option>
                  {currentMakes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
                <select
                  className="p-3 border rounded-lg w-full"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                >
                  <option value="">Select Model</option>
                  {currentModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            ) : selectedVehicle === "Other" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Make"
                  value={otherMake}
                  onChange={(e) => setOtherMake(e.target.value)}
                  className="p-3 border rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Enter Model"
                  value={otherModel}
                  onChange={(e) => setOtherModel(e.target.value)}
                  className="p-3 border rounded-lg w-full"
                />
              </div>
            ) : null}

            {/* Vehicle Number */}
            <input
              type="text"
              placeholder="Vehicle No: AB12CD3456"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              className="p-3 border rounded-lg w-full"
            />

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-3 border rounded-lg w-full"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4"
              />
              <span className="ml-2">I agree to the Terms & Conditions</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              Get My Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleScrapForm;
