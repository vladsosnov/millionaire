import React from 'react';
import { useActions } from 'src/hooks/useActions';
import { QuizList } from 'src/components/quiz-list';
import { QuizAside } from 'src/components/quiz-aside';
import { QuizLayout } from 'src/layouts';

export const Game = () => {
  const { getQuestions } = useActions();

  React.useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return <QuizLayout Content={<QuizList />} Aside={<QuizAside />} />;
};
