import React, { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqItems = [
    {
      question: "What documents do I need to scrap my vehicle?",
      answer:
        "You'll need your vehicle's Registration Certificate (RC), insurance documents, PAN card, and address proof. Our team can guide you if you're missing something.",
    },
    {
      question: "How much will I get for my old vehicle?",
      answer:
        "The value depends on your vehicle's make, model, age, condition, and weight. You can expect to receive up to 4% of your car's value. Contact us for a free, no-obligation quote.",
    },
    {
      question: "Do you pick up non-running vehicles?",
      answer:
        "Yes, we pick up all vehicles regardless of their condition at no extra charge, including non-running and accident vehicles.",
    },
    {
      question: "How long does the scrapping process take?",
      answer:
        "The entire process typically takes 3-5 business days from vehicle pickup to receiving your payment and certificates. We work efficiently to ensure a quick turnaround.",
    },
    {
      question: "What happens to my vehicle after scrapping?",
      answer:
        "Your vehicle is dismantled following environmentally friendly processes. Hazardous materials are safely disposed of, and up to 90% of materials are recycled. The vehicle is permanently deregistered from RTO records.",
    },
    {
      question: "Can I scrap a vehicle that's not in my name?",
      answer:
        "You'll need proper authorization from the registered owner. This includes a notarized authorization letter, the original RC, and identity proof of both parties. Contact us for specific requirements in your case.",
    },
    {
      question: "Why should I choose an authorized RVSF like yours?",
      answer:
        "Only government-authorized RVSFs like ours can legally issue Certificate of Deposit (CoD) and Certificate of Vehicle Scrapping (CVS). Our process is digitally regulated via Vahan and government portals, ensuring complete legal protection and maximum financial benefits for you.",
    },
    {
      question: "How to scrap a car?",
      answer:
        "You can scrap your car by visiting a government-authorized vehicle scrapping facility like Kanhaautodeals. We handle inspection, deregistration, and provide a Certificate of Vehicle Scrapping.",
    },
    {
      question: "What are the benefits of scrapping an old car?",
      answer:
        "Scrapping reduces pollution, frees up space, offers financial benefits like scrap value and tax rebates, and ensures eco-friendly recycling.",
    },
    {
      question: "What is vehicle recycling?",
      answer:
        "Vehicle recycling is the process of dismantling end-of-life vehicles to reuse, resell, or recycle parts and materials in an environmentally responsible way.",
    },
    {
      question: "What is the scrap value of a car?",
      answer:
        "The scrap value depends on the car's weight, age, and current metal prices. Kanhaautodeals offers instant quotes based on fair market rates.",
    },
    {
      question: "What documents do you need to scrap a car?",
      answer:
        "You'll need the vehicle RC, owner ID proof, address proof, and a signed consent form. We help you with the complete paperwork.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Everything you need to know about Vehicle Scrapping
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.01]"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openItems[index] ? (
                      <svg
                        className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </button>

              {openItems[index] && (
                <div className="px-4 sm:px-6 pb-4">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
