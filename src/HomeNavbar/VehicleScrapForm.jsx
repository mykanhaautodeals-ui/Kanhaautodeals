import React, { useState } from "react";

const VehicleScrapForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carName, setCarName] = useState("");
  const [modalYear, setModalYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      email,
      carName,
      modalYear,
      fuelType,
      address,
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(formData, null, 2));

    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "vehicle_scrap_form.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    alert("✅ Form submitted successfully and downloaded!");
  };

  return (
    <div
      className="min-h-screen w-full flex items-stretch relative"
      style={{
        backgroundImage: `url('/src/assets/carWorkshop.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Left Content */}
      <div className="relative flex flex-col justify-center items-start w-1/2 px-12 z-10">
        <h1 className="text-white font-bold text-4xl leading-tight mb-4 drop-shadow-md">
          MAKE YOUR MOVE <span className="block text-green-500">NOW</span>
        </h1>
        <p className="text-white mb-6 text-base drop-shadow">
          We will buy your car for scrap regardless of whether it is a non-runner, an insurance write-off, damaged, flood damaged or unroadworthy and whatever the make, model, age or condition.
        </p>
      </div>

      {/* Right Form */}
      <div className="relative flex justify-center items-center w-1/2 z-15 mt-6 mb-12">
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-auto mt-20">
          <div className="mb-5">
            <h3 className="text-xl text-center text-green-700 font-bold underline mb-1">
              FREE QUOTE
            </h3>
            <p className="text-center text-black font-semibold text-sm">
              ONLINE CAR VALUATION
            </p>
          </div>
          <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-2">
              <input
                type="text"
                placeholder="First Name"
                value={name.split(" ")[0]}
                onChange={(e) => setName(e.target.value)}
                className="p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={name.split(" ")[1] || ""}
                onChange={(e) =>
                  setName(`${name.split(" ")[0] || ""} ${e.target.value}`)
                }
                className="p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Vehicle Number"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={modalYear}
                onChange={(e) => setModalYear(e.target.value)}
                className="p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                required
              >
                <option value="">Select Model Year</option>
                {Array.from({ length: 20 }, (_, i) => 2025 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                required
              >
                <option value="">Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="CNG">CNG</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <textarea
              placeholder="Address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
              rows="2"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleScrapForm;
