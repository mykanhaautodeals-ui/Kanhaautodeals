import React, { useState } from "react";

const VehicleScrapForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carName, setCarName] = useState("");
  const [modalYear, setModalYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("entry.1286416198", name);
    formData.append("entry.1618933445", carName);
    formData.append("entry.753164543", phone);
    formData.append("entry.1028485176", email);
    formData.append("entry.657354744", modalYear);
    formData.append("entry.974185817", fuelType);
    formData.append("entry.1439102755", address);
    753164543

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfZfX5pXRlYPsZ6c9KMie2ZjP5BI4YeF2AHh4_14s7fEUoYwA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      setName("");
      setPhone("");
      setEmail("");
      setCarName("");
      setModalYear("");
      setFuelType("");
      setAddress("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 pt-28 pb-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/carWorkshop.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-8 py-4 rounded-full shadow-2xl font-bold text-lg">
            Submitted Successfully ✅
          </div>
        </div>
      )}

      {/* LEFT SIDE */}
      <div className="relative z-10 text-white w-full lg:w-1/2 mb-12 lg:mb-0">

        <p className="uppercase tracking-[4px] text-green-400 font-semibold mb-3">
          Trusted Vehicle Scrap Partner
        </p>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
          Sell Your Old Vehicle To <br />
          <span className="text-green-400">Kanhaautodeals</span>
        </h1>

        <p className="text-gray-200 text-lg mb-8 max-w-xl">
          Fast, legal and profitable vehicle scrapping service. Get instant quote,
          free pickup assistance and smooth documentation process.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-green-600 hover:bg-green-700 px-7 py-3 rounded-full font-semibold shadow-xl transition">
            Get Free Quote
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-7 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
            ✅ Free Pickup
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
            ✅ Instant Quote
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
            ✅ Legal RC Process
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="relative z-10 w-full lg:w-[430px]">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-7">

          <div className="text-center mb-5">
            <h2 className="text-2xl font-black text-gray-800">
              Get Free Quote
            </h2>

            <p className="text-sm text-gray-500">
              Fill details & receive instant response
            </p>
          </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="👤 Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <input
                type="text"
                placeholder="🚗 Vehicle Number"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="📞 Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />

                <input
                  type="email"
                  placeholder="✉️ Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={modalYear}
                  onChange={(e) => setModalYear(e.target.value)}
                  className="p-3 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                >
                  <option value="">📅 Select Year</option>

                  {Array.from({ length: 20 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>

                <select
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  className="p-3 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                >
                  <option value="">⛽ Fuel Type</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>CNG</option>
                  <option>Electric</option>
                </select>
              </div>

              <textarea
                rows="3"
                placeholder="📍 Pickup Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-700 hover:scale-105 transition text-white py-3 rounded-xl font-bold shadow-xl"
              >
                Submit Now →
              </button>

            </form>
        </div>
      </div>
    </section>
  );
};

export default VehicleScrapForm;