import React from 'react'
import AboutVehicleScrapping from './AboutVehicleScrapping'; 
import OurStory from './OurStory';
import MissionVision from './MissionVision';
import WhyChooseMarilinox from '../HomeNavbar/WhyChooseMarilinox';
import CoreValues from './CoreValues';
import Certifications from './Certifications';
import Facility from './Facility';
import FacilityGallery from './FacilityGallery';

const About = () => {
  return (
    <div className='home-section py-20'>
        <AboutVehicleScrapping  />
        <OurStory />
        <WhyChooseMarilinox />
        <MissionVision />
        <CoreValues />
        <Certifications />
        <Facility />
        <FacilityGallery />
    </div>
  )
}

export default About