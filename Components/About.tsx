import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  return (
    <div id="about" className="bg-white pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-black md-[1rem]">ABOUT US</h1> <br/>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-[#00A3D4]">
            Transforming <span className="text-yellow-400"> Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <p className="text-[19px] text-black-300 w-[80%]">
              In a rapidly evolving world driven by technology and innovation, our next generation must adapt to thrive. InternGPT, an AI-powered internship platform, offers personalized support to learners, enabling them to explore and disrupt new frontiers effectively.
              {showMoreContent && (
             
             <>
                 <p>InternGPT fosters inclusive hands-on exploration of academic fields, empowering global youth to make informed career decisions, irrespective of their origins, and promotes innovation without boundaries.</p> 
                </>
              )}
            </p>
          </div>
          <button className="px-[5rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#00A3D4] text-black flex items-center space-x-2 rounded-md" onClick={() => setShowMoreContent(!showMoreContent)}>
            <p> {showMoreContent ? "SHOW LESS" : "KNOW MORE"}</p>
          </button>
        </div>
        <div>
          <Image src="/images/img.png" alt="about us" width={500} height={500} className="rounded-md"/>
        </div>
      </div>
    </div>
  );
}

export default About;
