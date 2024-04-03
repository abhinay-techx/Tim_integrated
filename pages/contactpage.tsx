import About from '@/Components/About';
import EdTalks from '@/Components/EdTalks'; // Import EdTalks component
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import Services from '@/Components/Services';
import Testimonials from '@/Components/Testimonials'; // Import Testimonials component
import Footer from '@/Components/Footer';
import JobSearch from '@/Components/Internships'
import Contact from '@/Components/Contactus'

import React, { useState } from 'react';

const ContactUs = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  
  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        <Contact />
        {/* Hero section */}
        
        {/* <Hero />
        <div className="relative z-[30]">
          <About />          
          <Services />
          <EdTalks />
          <Testimonials />
          <Footer />

        </div> */}
      </div>
    </div>
  );
}

export default ContactUs;
