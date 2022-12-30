import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizAnswers } from 'src/components/quiz-answers';
import { useActions, useTypedSelector } from 'src/hooks';
import { Answer } from 'src/types/game';
import './quiz-list.css';
import { BurgerMenu } from 'src/design-system/icons';

export const QuizList = () => {
  const { toggleMobileAside, checkAnswer, finishGame } = useActions();
  const navigate = useNavigate();

  const { questions, isFinished, activeStep } = useTypedSelector(
    store => store.game,
  );

  React.useEffect(() => {
    if (isFinished) {
      finishGame();
      navigate('/result');
    }
  }, [activeStep, isFinished]);

  const handleAnswerSelection = (selectedAnswer: Answer) => {
    checkAnswer(selectedAnswer.isCorrect);
  };

  const handleBurgerMenuClick = React.useCallback(() => {
    toggleMobileAside();
  }, [toggleMobileAside]);

  if (!questions.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {!isFinished && (
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
