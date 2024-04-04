import About from '@/Components/About';
import EdTalks from '@/Components/EdTalks'; // Import EdTalks component
import Hero from '@/Components/Hero';
import Hero2 from '@/Components/hero2';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import Services from '@/Components/Services';
import Testimonials from '@/Components/Testimonials'; // Import Testimonials component
import Footer from '@/Components/Footer';
import JobSearch from '@/Components/Internships'


import React, { useState } from 'react';

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  
  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        {/* Hero section */}
        
        <Hero />
        <Login />

        
        {/* <Hero2/> */}
        <div className="relative z-[30]">
          <About />
          {/* About */}
          
          {/* Internships */}
          <Services />
          
          {/* EdTalks */}
          <EdTalks />

          {/* Testimonials */}
          <Testimonials />

          {/* Footer */}
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default Homepage;
