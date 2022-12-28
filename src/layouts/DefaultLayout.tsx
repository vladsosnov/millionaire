import React from 'react';
import './styles/default.css';

interface DefaultLayoutProps {
  withBackground?: boolean;
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  withBackground = false,
  children,
}) => {
  return (
    <main
      className={`default-layout default-layout--${
        withBackground && 'gradient'
      }`}
    >
      {children}
    </main>
  );
};
