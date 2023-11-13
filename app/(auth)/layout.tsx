import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div className="h-full flex items-center justify-center">
    {children}
  </div>
);

export default AuthLayout;
