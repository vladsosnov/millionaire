import React from 'react';
import { ButtonProps } from './Button.types';
import './button.css';

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  children,
  onClick,
}) => {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
