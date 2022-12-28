import React from 'react';
import { QuizAnswer } from 'src/components/quiz-answer';
import { useTypedSelector } from 'src/hooks';

export const QuizList = () => {
  const { questions } = useTypedSelector(store => store.game);

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="quiz-list">
      {questions.map(question => (
        <QuizAnswer key={question.id} question={question} />
      ))}
    </ul>
  );
};
