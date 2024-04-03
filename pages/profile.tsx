// // pages/profile.tsx
// import { useAuth0 } from '@auth0/auth0-react';
// import Link from 'next/link';

// const Profile = () => {
//   const { user, logout } = useAuth0();

//   return (
//     <div className="min-h-screen flex flex-col justify-start items-center " style={{backgroundImage: "url('/images/bg2.jpg')", backgroundColor: "rgba(244, 245, 250, 0.9)", backgroundSize: "cover"}}>
//       <div className="bg-[#00A3D4] bg-opacity-50 p-8 rounded border border-gray-400 shadow-md mt-20" style={{fontFamily: "Roboto, sans-serif"}}>
//         <h1 className="text-2xl flex font-bold mb-4 text-white justify-start">Welcome, {user?.name ?? 'Guest'}!</h1>
//         {/* <p className="mb-4 opacity-100 text-white">Email: {user?.email ?? ' '}</p> */}
//         {/* Add other user information as needed */}

//         <div className="flex justify-between mb-8 space-x-4">
//           <div className="btn-container">
//             <button
//               onClick={() => {/* Function to explore first type of internships */}}
//               className="btn px-6 py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
//             >
//               Summer Experience Programme
//             </button>
//           </div>
          
//           <div className="btn-container">
//             <button
//               onClick={() => {/* Function to explore first type of internships */}}
//               className="btn px-6 py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
//             >
//               14 Hrs Internships
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-end mr-6">
//           <button
//             onClick={() => logout({ returnTo: window.location.origin })}
//             className="px-4 py-2 bg-[#00A3D4] hover:bg-green-500 text-white font-semibold rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;







// // pages/profile.tsx
// import { useAuth0 } from '@auth0/auth0-react';
// import Link from 'next/link';

// const Profile = () => {
//   const { user, logout } = useAuth0();

//   return (
//     <div className="min-h-screen flex justify-center items-center" style={{backgroundImage: "url('/images/bg2.jpg')", backgroundColor: "rgba(244, 245, 250, 0.9)", backgroundSize: "cover"}}>
//       <div className="bg-[#00A3D4] bg-opacity-50 p-8 rounded border border-gray-400 shadow-md w-" style={{fontFamily: "Roboto, sans-serif", width: "50%"}}>
//         <h1 className="flex justify-center text-2xl font-bold mb-4 text-white">Welcome, {user?.name ?? 'Guest'}!</h1>
        
//         <div className=" flex  flex-col justify-center mb-8 space-y-4">
//           <div className="flex justify-center btn-container ">
//             <button
//               onClick={() => {/* Function to explore first type of internships */}}
//               className="btn px-6 py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
//             >
//               Summer Experience Programme
//             </button>
//           </div>
          
//           <div className="btn-container">
//             <button
//               onClick={() => {/* Function to explore first type of internships */}}
//               className="btn px-6 py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
//             >
//               14 Hrs Internships
//             </button>
//           </div>
//         </div>
        
//         <div className="flex justify-center">
//           <button
//             onClick={() => logout({ returnTo: window.location.origin })}
//             className="px-4 py-2 bg-[#00A3D4] hover:bg-green-500 text-white font-semibold rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




// pages/profile.tsx
import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';

const Profile = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-screen flex justify-end items-center" style={{backgroundImage: "url('/images/bg2.jpg')", backgroundColor: "rgba(244, 245, 250, 0.9)", backgroundSize: "cover"}}>
      <div className="bg-[#00A3D4] bg-opacity-50 p-4 sm:p-8 rounded border border-gray-400 shadow-md w-full max-w-md mr-20" style={{fontFamily: "Roboto, sans-serif"}}>
        <h1 className="text-center text-2xl font-bold mb-4 text-white">Welcome, {user?.name ?? 'Guest'}!</h1>
        
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => {/* Function to explore first type of internships */}}
            className="btn px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Summer Experience Programme
          </button>
          
          <button
            onClick={() => {/* Function to explore first type of internships */}}
            className="btn px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            14 Hrs Internships
          </button>
        </div>
        
        <div className="flex justify-center mt-4">
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="px-4 py-2 bg-[#00A3D4] hover:bg-green-500 text-white font-semibold rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;


