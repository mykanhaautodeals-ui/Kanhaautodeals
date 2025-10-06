import React from 'react'
import ScrappingProcess from './ScrappingProcess'
import VehicleProcess from './VehicleProcess'
import VehicleScrappingGuide from './VehicleScrappingGuide'
import VahanPortalInfo from './VahanPortalInfo'
import HowWeHelp from './HowWeHelp'

const Vehicle = () => {
  return (
    <div className='home-section py-20'>
        <VehicleProcess />
        <ScrappingProcess />
        <VehicleScrappingGuide />
        <VahanPortalInfo />
        <HowWeHelp />
    </div>
  )
}

export default Vehicle