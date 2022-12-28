import React from 'react';
import './styles/quiz.css';

interface QuizLayoutProps {
  children: React.ReactNode;
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};
