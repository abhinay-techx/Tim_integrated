// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { XMarkIcon } from "@heroicons/react/16/solid";
// import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook



// interface Props {
//   nav: boolean;
//   closeNav: () => void;
// }

// const MobileNav = ({ nav, closeNav }: Props) => {
//   console.log("Navigation Status:", nav); // Log the value of the nav prop

//   const navAnimation = nav ? "translate-x-0" : "-translate-x-full"; // Adjusted class for animation

//   const handleButtonClick = () => {
//     console.log("Close button clicked");
//     closeNav(); // Call the closeNav function and log a message
//   };

//   const handleLinkClick = () => {
//     console.log("Link clicked");
//     closeNav(); // Call the closeNav function when a link is clicked
//   };

//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Destructure isAuthenticated, loginWithRedirect, and logout from useAuth0
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Set initial isLoggedIn state when the component mounts
//   useEffect(() => {
//     setIsLoggedIn(isAuthenticated);
//   }, [isAuthenticated]);

//   // Update isLoggedIn state when isAuthenticated changes
//   useEffect(() => {
//     setIsLoggedIn(isAuthenticated);
//     console.log("User logged in:", isAuthenticated);
//   }, [isAuthenticated]);

//   const handleLogin = () => {
//     if (isLoggedIn) {
//       logout({ returnTo: window.location.origin });
//     } else {
//       loginWithRedirect();
//     }
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-[10000] bg-[#00a3d4] transition-transform duration-300 transform ${navAnimation}`}
//     >
//       <div className="absolute top-5 right-3">
//         <button onClick={handleButtonClick} className="text-yellow-400">
//           <XMarkIcon className="w-[2rem] h-[2rem]" />
//         </button>
//       </div>
//       <div className="flex flex-col items-center justify-center h-full">
//         <div onClick={handleLinkClick}>
//           <Link href="/" className="text-white text-xl mb-4">
//             Home
//           </Link>
//         </div>
//         <div onClick={handleLinkClick}>
//           <Link href="/#about" className="text-white text-xl mb-4">
//             About Us
//           </Link>
//         </div>
//         {/* <div onClick={handleLinkClick}>
//           <Link href="/#internships" className="text-white text-xl mb-4">
//             Internships
//           </Link>
//         </div> */}
//         <div onClick={handleLinkClick}>

//         <Link href="/internshipspge" className="text-white text-xl mb-4">
//             Internships
//           </Link>
//           </div>
//           {/* <Link href="/" className="nav-link">Ed Talks</Link> */}
//           {/* <Link href="/faqs" className="nav-link">FAQs</Link> */}
//         <div onClick={handleLinkClick}>

//           <Link href="/contactpage" className="text-white text-xl mb-4">
//             Contact Us
//           </Link>
//         </div>
//           <button className="nav-link" onClick={handleLogin}>
//             {isLoggedIn ? "Logout" : "Login/Signup"}
//           </button>
//       </div>
//     </div>
//   );
// };

// export default MobileNav;



// import Link from "next/link";
// import React, { useEffect } from "react";
// import { XMarkIcon } from "@heroicons/react/16/solid";
// import { useAuth0, LogoutOptions } from "@auth0/auth0-react";

// interface Props {
//   nav: boolean;
//   closeNav: () => void;
// }

// const MobileNav = ({ nav, closeNav }: Props) => {
//   console.log("Navigation Status:", nav);

//   const navAnimation = nav ? "translate-x-0" : "-translate-x-full";

//   const handleButtonClick = () => {
//     console.log("Close button clicked");
//     closeNav();
//   };

//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   useEffect(() => {
//     console.log("User logged in:", isAuthenticated);
//   }, [isAuthenticated]);

//   return (
//     <div className={`fixed inset-0 z-[10000] bg-[#00a3d4] transition-transform duration-300 transform ${navAnimation}`}>
//       <div className="absolute top-5 right-3">
//         <button onClick={handleButtonClick} className="text-yellow-400">
//           <XMarkIcon className="w-[2rem] h-[2rem]" />
//         </button>
//       </div>
//       <div className="flex flex-col items-center justify-center h-full">
//         <div>
//           <Link href="/">
//             <a className="text-white text-xl mb-4" onClick={closeNav}>
//               Home
//             </a>
//           </Link>
//         </div>
//         <div>
//           <Link href="/#about">
//             <a className="text-white text-xl mb-4" onClick={closeNav}>
//               About Us
//             </a>
//           </Link>
//         </div>
//         <div>
//           <Link href="/internshipspge">
//             <a className="text-white text-xl mb-4" onClick={closeNav}>
//               Internships
//             </a>
//           </Link>
//         </div>
//         <div>
//           <Link href="/contactpage">
//             <a className="text-white text-xl mb-4" onClick={closeNav}>
//               Contact Us
//             </a>
//           </Link>
//         </div>
//         <button
//           className="nav-link"
//           onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
//             isAuthenticated ? logout({ returnTo: window.location.origin } as LogoutOptions) : loginWithRedirect()
//           }
//         >
//           {isAuthenticated ? "Logout" : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MobileNav;




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
