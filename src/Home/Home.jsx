import React from 'react'
import VehicleScrapForm from '../HomeNavbar/VehicleScrapForm'; 
import VehicleScrappingProcess from '../HomeNavbar/VehicleScrappingProcess';
import WhyChooseMarilinox from '../HomeNavbar/WhyChooseMarilinox';
import FinancialLegalBenefits from '../HomeNavbar/FinancialLegalBenefits';
import OfficialCertificates from '../HomeNavbar/OfficialCertificates';
import VehicleScrappingService from '../HomeNavbar/VehicleScrappingService';
import FAQSection from '../HomeNavbar/FAQSection';
const Home = () => {
  return (
    <div className='home-section'>
      <VehicleScrapForm />
      <VehicleScrappingProcess />
      <WhyChooseMarilinox />
      <FinancialLegalBenefits />
      <OfficialCertificates />
      <VehicleScrappingService /> 
       <FAQSection />
    </div>
  )
}

export default Home