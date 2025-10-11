import React from 'react';
import './App.css'; 
import Navbar from './HomeNavbar/Navbar';
import Footer from './HomeNavbar/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './AboutUs/About';
import Blog from './Blog/Blog';
import Guide from './Guide/Guide';
import Contact from './ContactUs/Contact';
import Vehicle from './VehicleScrapping/Vehicle';
import PrivacyPolicy from './Privacy/PrivacyPolicy';
import Term from './TermCondition/Term';
import ScrollToTop from './HomeNavbar/ScrollToTop';

function App() {
  return (
    
    <div>
      <Navbar />
        <ScrollToTop />
         <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/about" element={<About/>} /> 
            <Route path="/blog" element={<Blog/>} /> 
            <Route path="/guide" element={<Guide/>} /> 
            <Route path="/contact" element={<Contact/>} />
            <Route path="/process" element={<Vehicle/>} />
            <Route path="/vehicle-scrap-form" element={<Contact/>} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
            <Route path="/terms" element={<Term/>} />
        </Routes>
      <Footer />
    </div>

  );
}

export default App;
