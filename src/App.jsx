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
import { Navigate } from "react-router-dom";
import AdminLogin from './Admin/AdminLogin';
import Dashboard from './Admin/Dashboard';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("kanhaAdmin");

  return isAdmin === "true"
    ? children
    : <Navigate to="/api/kanha/dashboard/google" />;
};
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
            {/* Secret Admin Routes */}
        <Route path="/api/kanha/dashboard/google" element={<AdminLogin />} />
        <Route
  path="/api/kanha/dashboard/google/panel"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        </Routes>
      <Footer />
    </div>

  );
}

export default App;
