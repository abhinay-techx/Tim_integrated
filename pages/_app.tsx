//pages/app.tsx
import { Auth0Provider, useAuth0, AppState, User } from '@auth0/auth0-react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth0(); // Destructure isAuthenticated here to use it for immediate redirection

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/' && isAuthenticated) {
        router.replace('/profile');
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, isAuthenticated]);

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "dev-jize6lpqmvn0l8z7.us.auth0.com"} // Provide a default domain here
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "57klXiS8mASzcYx2MoUCptYnuDcAN8hJ"} // Provide a default client ID here
      authorizationParams={{ redirect_uri: typeof window !== 'undefined' ? window.location.origin : undefined }}
      onRedirectCallback={(appState?: AppState, user?: User) => {
        router.push(appState?.returnTo || '/profile'); 
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;






// import { Auth0Provider, useAuth0, AppState, User } from '@auth0/auth0-react';
// import { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import '../styles/globals.css'; // Import global styles

// function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const { isAuthenticated } = useAuth0(); // Destructure isAuthenticated here to use it for immediate redirection

//   useEffect(() => {
//     const handleRouteChange = (url: string) => {
//       console.log('Route Changed:', url);
//       if (url === '/' && isAuthenticated) {
//         router.replace('/profile');
//       }
//     };

//     router.events.on('routeChangeStart', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router, isAuthenticated]);

//   const onRedirectCallback = (appState?: AppState, user?: User) => {
//     console.log('Redirect Callback - AppState:', appState);
//     console.log('Redirect Callback - User:', user);
//     router.push(appState?.returnTo || '/profile');
//   };

//   return (
//     <Auth0Provider
//       domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "dev-jize6lpqmvn0l8z7.us.auth0.com"} // Provide a default domain here
//       clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "57klXiS8mASzcYx2MoUCptYnuDcAN8hJ"} // Provide a default client ID here
//       onRedirectCallback={onRedirectCallback}
//     >
//       <Component {...pageProps} />
//     </Auth0Provider>
//   );
// }

// export default MyApp;