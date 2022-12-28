import React from 'react';
import './styles/default.css';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const Default: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};
