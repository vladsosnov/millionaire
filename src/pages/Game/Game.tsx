import React from 'react';
import { useActions } from 'src/hooks/useActions';
import { QuizList } from 'src/components/quiz-list';
import { QuizLayout } from 'src/layouts';
import './game.css';

export const Game = () => {
  const { getQuestions } = useActions();

  React.useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return <QuizLayout Content={<QuizList />} Aside={<aside>Aside</aside>} />;
};
