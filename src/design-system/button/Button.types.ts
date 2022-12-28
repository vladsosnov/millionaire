export type ButtonVariant = 'primary';
export type ButtonSize = 'small' | 'medium';

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick: () => void;
}
