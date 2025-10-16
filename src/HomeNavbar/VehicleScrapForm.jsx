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
    { name: "Car", icon: "src/assets/car.png" },
    { name: "Bike", icon: "src/assets/sportbike.png" },
    { name: "Truck", icon: "src/assets/cargo-truck.png" },
    { name: "Other", icon: "src/assets/maintenance.png" },
  ];

 const makeOptions = {
  Car: [
    "Toyota", "Honda", "Ford", "MarutiSuzuki", "BMW", "Hyundai", "Tata Motors",
    "Mahindra", "Skoda", "Volkswagen", "Audi", "Mercedes-Benz", "Renault",
    "Nissan", "Kia", "MG", "Volvo", "Lexus", "Jeep", "Fiat", "Land Rover"
  ],
  Bike: [
    "Hero", "Bajaj", "TVS", "Royal Enfield", "Yamaha", "Suzuki", "KTM",
    "Honda Rides", "Harley-Davidson", "Ducati", "Triumph", "Kawasaki",
    "Aprilia", "BMW Motorrad"
  ],
  Truck: [
    "Ashok Leyland", "Tata Motors", "Mahindra", "Eicher", "Volvo Trucks",
    "BharatBenz", "Scania", "Isuzu", "Force Motors", "Mack Trucks", "Hino"
  ]
};

const modelOptions = {
  Toyota: ["Glanza", "Fortuner", "Innova", "Corolla", "Camry", "Hilux", "Prius", "Qualis", "Etios", "Yaris"],
  Honda: ["City", "Amaze", "Civic", "Accord", "Jazz", "WR-V", "CR-V", "Brio"],
  Ford: ["EcoSport", "Endeavour", "Figo", "Aspire", "Freestyle", "Mustang", "Fiesta", "Ikon", "Fusion"],
  MarutiSuzuki: ["Alto", "Swift", "Wagon R", "Baleno", "Ertiga", "Brezza", "Celerio", "Dzire", "Ignis", "SX4", "Omni", "Esteem"],
  BMW: ["1 Series", "2 Series", "3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7", "Z4", "M3", "M5", "i3", "i8"],
  Hyundai: ["i10", "i20", "Creta", "Venue", "Tucson", "Verna", "Elantra", "Santro", "Accent", "Getz", "Sonata"],
  TataMotors: ["Tiago", "Tigor", "Nexon", "Harrier", "Safari", "Punch", "Indica", "Indigo", "Nano", "Zest", "Bolt"],
  Mahindra: ["Thar", "XUV700", "XUV500", "Scorpio", "Bolero", "Alturas G4", "TUV300", "KUV100", "Xylo", "Verito", "Jeep CJ"],
  Skoda: ["Octavia", "Superb", "Kodiaq", "Kamiq", "Rapid", "Fabia", "Laura", "Kushaq"],
  Volkswagen: ["Polo", "Vento", "T-Roc", "Taigun", "Jetta", "Passat", "Beetle"],
  Audi: ["A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "TT", "R8"],
  MercedesBenz: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "GLS", "A-Class", "B-Class", "Maybach"],
  Renault: ["Kwid", "Triber", "Kiger", "Duster", "Fluence", "Lodgy", "Pulse", "Scala"],
  Nissan: ["Magnite", "Kicks", "Altima", "Sunny", "Terrano", "Micra", "Evalia", "Teana", "X-Trail"],
  Kia: ["Sonet", "Seltos", "Carnival", "Carens", "EV6", "Sportage"],
  MG: ["Hector", "ZS EV", "Gloster", "Astor", "Comet EV"],
  Volvo: ["XC40", "XC60", "S90", "V60", "XC90", "S60", "V40"],
  Lexus: ["ES", "RX", "NX", "LS", "UX", "IS"],
  Jeep: ["Compass", "Wrangler", "Cherokee", "Grand Cherokee", "Renegade"],
  Fiat: ["Punto", "Linea", "Palio", "Uno", "Adventure"],
  "Land Rover": ["Defender", "Discovery", "Range Rover", "Freelander", "Velar"],

  Hero: ["Splendor","Splendor ismart", "Passion", "Glamour", "HF Deluxe", "Xpulse", "Karizma", "CD 100","Xtreme", "Achiever", "Ignitor","Hero Pleasure","Hero Maestro Edge","CBZ Xtreme", "CBZ Star", "CBZ", "CBZ Extreme Limited Edition"],
  Bajaj: ["Pulsar", "Platina", "Discover", "Avenger", "Dominar", "CT100", "Boxer", "Chetak","VIDA","CB Hornet","Bajaj Caliber"],
  TVS: ["Apache", "Jupiter", "Ntorq", "Star City", "Scooty Pep+", "Radeon"],
  "Royal Enfield": ["Bullet", "Classic 350", "Thunderbird", "Meteor", "Himalayan", "Interceptor 650", "Continental GT 650"],
  Yamaha: ["RX100", "RX135", "FZ", "R15", "MT-15", "Fascino", "Saluto"],
  Suzuki: ["Access 125", "Gixxer", "Hayate", "Burgman", "GS150R"],
  KTM: ["Duke 125", "Duke 200", "Duke 390", "RC 200", "RC 390"],
  "Honda Rides": ["Activa", "Shine", "Unicorn", "Hornet", "Dio", "CBR250R"],
  "Harley-Davidson": ["Street 750", "Iron 883", "Forty-Eight", "Fat Boy"],
  Ducati: ["Monster", "Panigale", "Scrambler", "Multistrada"],
  Triumph: ["Bonneville", "Street Twin", "Tiger 900", "Speed Triple"],
  Kawasaki: ["Ninja 300", "Ninja 650", "Z650", "Versys 650"],
  Aprilia: ["SR 150", "SR 160", "RS 660"],
  "BMW Motorrad": ["G310R", "G310GS", "R1250GS", "S1000RR"],

  "Ashok Leyland": ["Ecomet", "Boss", "Dost", "Captain", "U-Truck", "Partner"],
  "Tata Motors Truck": ["Ace", "Signa", "Ultra", "Prima", "407", "709", "1613"],
  "Mahindra Truck": ["Blazo", "Furio", "Loadking", "Jeeto", "Supro"],
  Eicher: ["Pro 1049", "Pro 1110XPT", "Pro 3016", "Pro 6025"],
  "Volvo Trucks": ["FMX", "FH", "FM", "FM 400"],
  BharatBenz: ["1217C", "2523R", "1617R", "3528CM"],
  Scania: ["P410", "G460", "R580"],
  Isuzu: ["D-Max", "N-Series", "F-Series"]
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
    <div className="flex bg-gray-100 items-center justify-center px-4 sm:px-6 lg:px-12 py-8 mb-8 mt-16">
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

            {/* Make */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedVehicle !== "Other" ? (
                <select
                  className="p-3 border rounded-lg w-full"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  required
                >
                  <option value="">Select Make</option>
                  {currentMakes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="Enter Make"
                  value={otherMake}
                  onChange={(e) => setOtherMake(e.target.value)}
                  className="p-3 border rounded-lg w-full"
                  required
                />
              )}

              {/* Model */}
              {selectedVehicle !== "Other" ? (
                <select
                  className="p-3 border rounded-lg w-full"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                  required
                >
                  <option value="">Select Model</option>
                  {currentModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="Enter Model"
                  value={otherModel}
                  onChange={(e) => setOtherModel(e.target.value)}
                  className="p-3 border rounded-lg w-full"
                  required
                />
              )}
            </div>

            {/* Vehicle Number */}
            <input
              type="text"
              placeholder="Vehicle No: AB12CD3456"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              className="p-3 border rounded-lg w-full"
              required
            />

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-3 border rounded-lg w-full"
                required
              />
            </div>

            {/* Terms */}
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4"
                required
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
