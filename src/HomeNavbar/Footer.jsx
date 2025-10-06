import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Top Section */}
      <div className="bg-[#121415] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Side */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Scrap Your Vehicle Legally?
            </h2>
            <p className="text-[#A9A9A9] text-base sm:text-lg mb-6">
              Get the best value, legal protection, and environmental peace of mind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="bg-[#36D16A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-colors text-center"
              >
                <Link to="/">Get Free Quote</Link>
              </a>
              <a 
                href="tel:7303361200" 
                className="border border-[#A9A9A9] text-[#A9A9A9] font-semibold py-3 px-6 rounded-lg hover:bg-[#A9A9A9] hover:text-[#121415] transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.079a1 1 0 01-.363 1.125l-1.782.888c-.62.31-.968.966-.84 1.662l.142.66c.068.31.25.568.498.74l1.373 1.054c.487.375.836.877.962 1.488.125.61.018 1.258-.29 1.81l-.42.793a1 1 0 01-1.125.363l-.888-1.782c-.31-.62-.966-.968-1.662-.84l-.66.142c-.31.068-.568.25-.74.498l-1.054 1.373c-.375.487-.877.836-1.488.962-.61.125-1.258.018-1.81-.29l-.793-.42a1 1 0 01-.363-1.125l.888-1.782z" />
                </svg>
                <span>Call: 7303361200</span>
              </a>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Why Choose Us?</h3>
            <p className="text-xs text-[#36D16A] mb-2 font-semibold">Government Certified</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Don't risk illegal scrapping! <span className="font-bold">Only authorized facilities</span> like ours can provide official certificates and legal protection.
            </p>
            <div className="flex items-center space-x-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.696h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.833-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.696l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-2">
                Trusted by <span className="font-bold">1000+</span> customers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#121415] text-[#A9A9A9] py-12 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
              <svg className="h-8 w-8 mr-2" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM9 11h2v6H9zm4 0h2v6h-2z" />
              </svg>
              Kanhaautodeals
            </h2>
            <p className="text-sm leading-relaxed">
              Kanhaautodeals is a fully licensed registered Vehicle Scrapping Facility (RVSF), authorized under the Vehicle Scrapping Policy, 2021...
              <a href="#" className="text-[#36D16A] hover:underline"> read more.</a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <p><span className="text-[#36D16A]">📞</span> +917303361200 <br /><span className="text-xs">Mon-Sat, 9:00 AM - 6:00 PM</span></p>
              <p><span className="text-[#36D16A]">📧</span> mykanhaautodeals@gmail.com</p>
              <p><span className="text-[#36D16A]">📍</span> 3rd Floor, 134, Rishabh Vihar, Delhi-110092</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <Link to="/"><li className="hover:text-white">Home</li></Link>
              <Link to="/about"><li className="hover:text-white">About Us</li></Link>
              <Link to="/contact"><li className="hover:text-white">Contact Us</li></Link>
              <Link to="/process"><li className="hover:text-white">Vehicle Scrapping Process</li></Link>
              <Link to="/privacy"><li className="hover:text-white">Privacy Policy</li></Link>
              <Link to="/terms"><li className="hover:text-white">Terms & Conditions</li></Link>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center md:flex md:justify-between md:text-left text-xs">
          <p>&copy; 2025 Kanhaautodeals. All rights reserved.</p>
          <p>
            Design and Developed By{" "}
            <a href="#" className="text-[#36D16A] hover:underline">Team Variance</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
