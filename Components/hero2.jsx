import React, { useEffect, useState } from "react";
import Particle from "./Particle"; // Assuming Particle component is imported from a file
import TextEffect from "./TextEffect";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js

const Hero2 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/img1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
          />
        </div>
        {/* Layered image with parallax effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/foregromund.png"
            alt="Layer"
            layout="fill"
            objectFit="contain"
            style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
          />
        </div>
      </div>
      <Particle />
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-80% grid-cols-1 mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold">About our</h1>
            <TextEffect />
            <div className="mt-6 flex flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6 ">
              <Link href="/internshipspge">
                <button className="px-8 py-4 text-lg font-bold uppercase bg-white text-black hover:bg-yellow-400 transition-all duration-200 rounded-md">
                  Explore Internships
                </button>
              </Link>
              <button className="flex items-center space-x-2 px-8 py-4 text-lg font-bold uppercase bg-white text-black hover:bg-yellow-400 transition-all duration-200 rounded-md">
                <PlayCircleIcon className="w-6 h-6" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
