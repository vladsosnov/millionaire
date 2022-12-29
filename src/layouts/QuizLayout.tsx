import React from 'react';
import './styles/quiz.css';
import { useTypedSelector } from 'src/hooks';

interface QuizLayoutProps {
  Content: React.ReactNode | React.ReactNode[];
  Aside?: React.ReactNode | React.ReactNode[];
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({ Content, Aside }) => {
  const { isMobileAsideOpened } = useTypedSelector(store => store.game);

  return (
    <main className="quiz-layout">
      <div className="quiz-layout__content">{Content}</div>
      <aside
        className={`quiz-layout__aside ${
          isMobileAsideOpened ? 'quiz-layout__aside--mobile' : ''
        }`}
      >
        {Aside}
      </aside>
    </main>
  );
};
