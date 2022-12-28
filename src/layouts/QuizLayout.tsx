import React from 'react';
import './styles/quiz.css';

interface QuizLayoutProps {
  Content: React.ReactNode | React.ReactNode[];
  Aside?: React.ReactNode | React.ReactNode[];
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({ Content, Aside }) => {
  return (
    <main className="quiz-layout">
      <div className="quiz-layout__content">{Content}</div>
      <aside className="quiz-layout__aside">{Aside}</aside>
    </main>
  );
};
