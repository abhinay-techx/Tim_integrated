//components/nav.tsx
import { Bars3Icon } from "@heroicons/react/16/solid";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Destructure isAuthenticated, loginWithRedirect, and logout from useAuth0
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Set initial isLoggedIn state when the component mounts
  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, []);

  // Update isLoggedIn state when isAuthenticated changes
  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
    console.log("User logged in:", isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (isLoggedIn) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  const handleInternshipsClick = () => {
    if (!isAuthenticated) {
      // Redirect to login page if user is not authenticated
      loginWithRedirect();
    }
    // You can add additional logic here for handling authenticated user behavior if needed
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-[#00A3D4] shadow-md">
      <div className="flex items-center justify-between w-[90%] mx-auto h-[12vh]">
        {/* Logo */}
        <div className="flex-[0-6] mr-auto">
          <Link href="/">
            <img src="/images/TIM_Logo2.png" alt="Company Logo" className="cursor-pointer h-[60px]"/>
          </Link>
        </div>

        {/* Second div aligned to the right */}
        <div className="flex items-center justify-between w-[60%]">
          {/* Navigation links */}
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/#about" className="nav-link">
            About Us
          </Link>
          <Link href="/internshipspge" className="nav-link" onClick={handleInternshipsClick}>
            Internships
          </Link>
          {/* <Link href="/" className="nav-link">Ed Talks</Link> */}
          {/* <Link href="/faqs" className="nav-link">FAQs</Link> */}
          <Link href="/contactpage" className="nav-link">
            Contact Us
          </Link>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={handleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
        {/* Hamburger icon */}
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
