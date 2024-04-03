import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

const Callback = () => {
  const { isLoading, isAuthenticated, error, getAccessTokenSilently } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    const getToken = async () => {
      try {
        if (!isLoading && isAuthenticated) {
          const token = await getAccessTokenSilently();
          // You can use the token to fetch user data or perform other actions
          console.log('Access token:', token);
        }
      } catch (error) {
        console.error('Error getting access token:', error);
      } finally {
        router.push(isAuthenticated ? '/' : '/login');
      }
    };

    getToken();
  }, [isLoading, isAuthenticated, getAccessTokenSilently, router]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Redirecting...</div>;
};

export default Callback;
