import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    location: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Get previous messages from localStorage
      const existingData = JSON.parse(localStorage.getItem("contactMessages")) || [];

      // Add new message
      existingData.push(formData);

      // Save back to localStorage
      localStorage.setItem("contactMessages", JSON.stringify(existingData, null, 2));

      setStatus("✅ Message saved locally as JSON!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        location: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to save message locally.");
    }
  };

  const handleDownload = () => {
    const data = localStorage.getItem("contactMessages");
    const blob = new Blob([data || "[]"], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contactMessages.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Send Us a Message
          </h2>
          <p className="text-green-500 mb-6">We're here to help!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            >
              <option value="">Select a Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Request a Quote">Request a Quote</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Vehicle Scrapping">Vehicle Scrapping</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg resize-none"
              required
            ></textarea>
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 text-white text-lg font-medium rounded-lg shadow-md bg-green-600 hover:bg-green-700 transition"
              >
                Save Message
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="flex-1 px-6 py-3 text-white text-lg font-medium rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 transition"
              >
                Download JSON
              </button>
            </div>
          </form>

          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>

        {/* Google Maps */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
          <iframe
            title="Kanhaautodeals Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.485960410657!2d77.8920155150882!3d30.1557929818868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f1a44b89c7b6b%3A0x7c8b6c7b5e7c7b6b!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
