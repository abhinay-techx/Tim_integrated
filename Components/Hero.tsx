// Hero.tsx
import React, { useState } from "react";
import Particle from "./Particle"; // Assuming Particle component is imported from a file
import TextEffect from "./TextEffect";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const Hero = () => {
  // State to control the visibility of the video player
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="h-[100vh] bg-[url('/images/nn.png')] bg-cover bg-right mt-19">
      <Particle />
      <div className="w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <div className="h-[25vh]">
            <TextEffect />
          </div>
          <div className="mt-[1rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 ">
            <Link href="/internshipspge">
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#00A3D4] text-black flex items-center space-x-2 rounded-md">
                <p>Explore Internships</p>
              </button>
            </Link>
            <button 
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#00A3D4] text-black flex items-center space-x-2 rounded-md"
              onClick={() => setShowVideo(true)} // Set showVideo state to true when button is clicked
            >
              <PlayCircleIcon className="w-[1.5rem] h-[1.5rem]" />
              <p>Watch Video</p>
            </button>
          </div>
        </div>
      </div>
      {showVideo && ( // Conditionally render the video player if showVideo is true
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          
          <video
              className="max-w-full max-h-full"
              controls
            >
              <source
                src="/images/TIM  Exploring Video - Made with Clipchamp.mp4"
                type="video/mp4" // Specify the type of the video file here
              />
              Your browser does not support the video tag.
          </video>

          <button 
            className="absolute top-2 right-2 text-white text-lg bg-transparent border-none focus:outline-none" 
            onClick={() => setShowVideo(false)} // Set showVideo state to false to close the video player
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;
