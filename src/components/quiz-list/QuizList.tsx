import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizAnswers } from 'src/components/quiz-answers';
import { useActions, useTypedSelector } from 'src/hooks';
import { Answer } from 'src/types/game';

export const QuizList = () => {
  const navigate = useNavigate();
  const { checkAnswer } = useActions();
  const { questions, activeStep } = useTypedSelector(store => store.game);
  const isGameFinished =
    activeStep === null || activeStep === questions?.length;

  React.useEffect(() => {
    if (isGameFinished) navigate('/result');
  }, [activeStep, isGameFinished, navigate]);

  const handleAnswerSelection = React.useCallback(
    (selectedAnswer: Answer) => {
      checkAnswer(selectedAnswer.isCorrect);
    },
    [checkAnswer],
  );

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {!isGameFinished && (
        <>
          <h2 className="quiz-answers__title">{questions[activeStep].label}</h2>
          <QuizAnswers
            question={questions[activeStep]}
            handleAnswerClick={handleAnswerSelection}
          />
        </>
      )}
    </>
  );
};
