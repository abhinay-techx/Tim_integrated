import Link from "next/link";
import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useAuth0, LogoutOptions } from "@auth0/auth0-react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  console.log("Navigation Status:", nav);

  const navAnimation = nav ? "translate-x-0" : "-translate-x-full";

  const handleButtonClick = () => {
    console.log("Close button clicked");
    closeNav();
  };

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    console.log("User logged in:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className={`fixed inset-0 z-[10000] bg-[#00a3d4] transition-transform duration-300 transform ${navAnimation}`}>
      <div className="absolute top-5 right-3">
        <button onClick={handleButtonClick} className="text-yellow-400">
          <XMarkIcon className="w-[2rem] h-[2rem]" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div>
          <Link href="/"
            className="text-white text-xl mb-4" onClick={closeNav}
          >
              Home
          </Link>
        </div>
        <div>
          <Link href="/#about"
            className="text-white text-xl mb-4" onClick={closeNav}
            >
              About Us
          </Link>
        </div>
        <div>
          <Link href="/internshipspge"
            className="text-white text-xl mb-4" onClick={closeNav}
            >
              Internships
          </Link>
        </div>
        <div>
          <Link href="/contactpage"
            className="text-white text-xl mb-4" onClick={closeNav}
            >
              Contact Us
          </Link>
        </div>
        <button
          className="nav-link"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            isAuthenticated ? logout({ returnTo: window.location.origin } as LogoutOptions) : loginWithRedirect()
          }
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
