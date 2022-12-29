import React from 'react';
import { QuizScore } from 'src/components/quiz-score';
import { useTypedSelector } from 'src/hooks';

export const QuizAside = () => {
  const { questions, activeStep } = useTypedSelector(store => store.game);

  React.useEffect(() => {
    console.log('activeStep =', activeStep);
  }, [activeStep]);

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {questions.map(question => (
        <QuizScore
          key={question.score}
          status="default"
          activeStep={activeStep}
          score={question.score}
        />
      ))}
    </>
  );
};
