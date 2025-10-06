import React from 'react'
import ContactSection from './ContactSection'
import ContactInfoSection from './ContactInfoSection'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
     <div className='home-section py-5'>
        <ContactSection />
        <ContactInfoSection />
        <ContactForm />
     
     </div>
  )
}

export default Contact