// pages/_app.tsx
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
      onRedirectCallback={(appState) => {
        router.push(appState?.returnTo || '/profile'); // Redirect to profile page after login
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;