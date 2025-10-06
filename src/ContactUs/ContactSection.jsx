import React from 'react';

const ContactCard = ({ icon, title, content }) => {
  return (
    <div className="bg-white rounded-lg p-4 w-48 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-green-500">{icon}</div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-xs break-words">{content}</p>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div
      className="bg-gray-100 py-16"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #f7f9fc, #eef1f6)',
        backgroundSize: '100% 50%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-green-500 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
          Contact Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Get in Touch with Kanhaautodeals
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12">
          Have questions about vehicle scrapping? Need a quote? Our team is ready to assist you with all your vehicle scrapping needs.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0">
          <ContactCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.158l-2.494 1.875a1 1 0 00-.582 1.826l.254.254a10.975 10.975 0 005.163 5.163l.254.254a1 1 0 001.826-.582l1.875-2.494a1 1 0 011.158-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z"
                />
              </svg>
            }
            title="Call us"
            content="+91 7303361200"
          />
          <ContactCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="Email Us"
            content="mykanhaautodeals@gmail.com"
          />
          <ContactCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
            title="Business Hours"
            content="Mon-Sat, 9:00 AM - 6:00 PM"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
