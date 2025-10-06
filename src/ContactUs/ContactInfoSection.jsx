import React from 'react';

const ContactCard = ({ icon, title, children, ctaText, ctaLink }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-green-500">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-4 text-gray-600 text-sm">
        {children}
      </div>
      {ctaText && ctaLink && (
        <a 
          href={ctaLink.startsWith("http") || ctaLink.startsWith("tel") ? ctaLink : `mailto:${ctaLink}`} 
          className="mt-4 inline-flex items-center text-green-500 hover:text-green-700 text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 10-2 0v2a1 1 0 102 0V9zM7 7a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {ctaText}
        </a>
      )}
    </div>
  );
};

const ContactInfoSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Location Card */}
          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Our Location"
            ctaText="Get Directions"
            ctaLink="#"
          >
            <div>
              <h4 className="font-semibold text-gray-800">Our Office:</h4>
              <p>3rd Floor, 134, Rishabh Vihar, Delhi-110092</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Our Facility:</h4>
              <p>
                Kanhaautodeals Vehicle Scrapping Facility<br />
                Plot no. 81, Khasara No. 127/1, Manglour Roorkee<br />
                Village Kulchandi, Mundiyaki, Uttarakhand-247656
              </p>
            </div>
          </ContactCard>

          {/* Call Us Card */}
          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.158l-2.494 1.875a1 1 0 00-.582 1.826l.254.254a10.975 10.975 0 005.163 5.163l.254.254a1 1 0 001.826-.582l1.875-2.494a1 1 0 011.158-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z" />
              </svg>
            }
            title="Call Us"
            ctaText="Call Now"
            ctaLink="tel:+917303361200"
          >
            <p>Our customer support team is available to assist you:</p>
            <div>
              <h4 className="font-semibold text-gray-800">Main Office:</h4>
              <p>+91 7303361200</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Business Hours:</h4>
              <p>Monday to Saturday: 9:00 AM - 6:00 PM; Sunday: Closed</p>
            </div>
          </ContactCard>

          {/* Email Us Card */}
          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Email Us"
            ctaText="Email Now"
            ctaLink="mykanhaautodeals@gmail.com"
          >
            <p>Send us an email for any inquiries or information:</p>
            <div>
              <h4 className="font-semibold text-gray-800">General Inquiries:</h4>
              <p>mykanhaautodeals@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Customer Support:</h4>
              <p>mykanhaautodeals@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Business Development:</h4>
              <p>mykanhaautodeals@gmail.com</p>
            </div>
          </ContactCard>

        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
