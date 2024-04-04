//pages/profile.tsx
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page if user is not authenticated
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  const handleGoBackHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center" style={{backgroundImage: "url('/images/bg2.jpg')", backgroundColor: "rgba(244, 245, 250, 0.9)", backgroundSize: "cover"}}>
      <div className="bg-[#00A3D4] bg-opacity-50 p-8 rounded border border-gray-400 shadow-md mt-20 max-w-md w-full mx-auto" style={{fontFamily: "Roboto, sans-serif"}}>
        <h1 className="text-2xl font-bold mb-4 text-white">Welcome, {user?.name ?? 'Guest'}!</h1>

        <div className="flex flex-col space-y-4">
          <div>
            <button
              onClick={() => {/* Function to explore first type of internships */}}
              className="btn px-6 py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white w-full"
            >
              Summer Experience Programme
            </button>
          </div>
          
          <div>
            <button
              onClick={() => {/* Function to explore first type of internships */}}
              className="btn px-6 py-3 font-semibold rounded-lg border bg-opacity-70 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white w-full"
            >
              14 Hrs Internships
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handleGoBackHome}
            className="px-4 py-2 bg-[#00A3D4] hover:bg-green-500 text-white font-semibold rounded"
          >
            Back to Home
          </button>
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

