// components/auth0Provider.tsx
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface Auth0ProviderWithHistoryProps extends Auth0ProviderOptions {
  children: ReactNode;
  clientId: string;
  domain: string;
}

const Auth0ProviderWithHistory = ({ children, clientId, domain, ...props }: Auth0ProviderWithHistoryProps) => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      {...props}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
