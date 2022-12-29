import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizAnswers } from 'src/components/quiz-answers';
import { useActions, useTypedSelector } from 'src/hooks';
import { Answer } from 'src/types/game';
import './quiz-list.css';
import { BurgerMenu } from 'src/design-system/icons';

export const QuizList = () => {
  const navigate = useNavigate();
  const { toggleMobileAside, checkAnswer, finishGame } = useActions();
  const { questions, isFinished, activeStep } = useTypedSelector(
    store => store.game,
  );
  const isGameFinished = isFinished || activeStep === questions?.length;

  React.useEffect(() => {
    if (isGameFinished) navigate('/result');
  }, [activeStep, isGameFinished, navigate]);

  const handleAnswerSelection = (selectedAnswer: Answer) => {
    checkAnswer(selectedAnswer.isCorrect);

    if (activeStep + 1 === questions?.length) {
      finishGame();
    }
  };

  const handleBurgerMenuClick = React.useCallback(() => {
    toggleMobileAside();
  }, [toggleMobileAside]);

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {!isGameFinished && (
        <>
          <button
            className="quiz-answers__burger-btn"
            onClick={handleBurgerMenuClick}
          >
            <img src={BurgerMenu} alt="burger menu" />
          </button>
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
