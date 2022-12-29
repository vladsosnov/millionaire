import React from 'react';
import { QuizScore } from 'src/components/quiz-score';
import { useTypedSelector } from 'src/hooks';

export const QuizAside = () => {
  const { questions, activeStep } = useTypedSelector(store => store.game);

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {questions.map((question, idx) => {
        const status = () => {
          if (activeStep === idx) return 'active';
          if (activeStep > idx) return 'inactive';

          return 'default';
        };

        return (
          <QuizScore
            key={question.score}
            status={status()}
            score={question.score}
          />
        );
      })}
    </>
  );
};
