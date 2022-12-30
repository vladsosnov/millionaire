import React from 'react';
import { QuizScore } from 'src/components/quiz-score';
import { Close } from 'src/design-system/icons';
import { useActions, useTypedSelector } from 'src/hooks';
import './close-aside.css';

export const QuizAside: React.FC = () => {
  const { toggleMobileAside } = useActions();
  const { questions, activeStep } = useTypedSelector(store => store.game);

  const handleBurgerMenuClick = React.useCallback(() => {
    toggleMobileAside();
  }, [toggleMobileAside]);

  const status = React.useCallback(
    (idx: number) => {
      if (activeStep === idx) return 'active';
      if (activeStep > idx) return 'inactive';

      return 'default';
    },
    [activeStep],
  );

  if (!questions.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <button className="quiz-aside__close-btn" onClick={handleBurgerMenuClick}>
        <img src={Close} alt="burger menu" />
      </button>

      <ul className="quiz-aside__list">
        {questions.map((question, idx) => {
          return (
            <QuizScore
              key={question.score}
              status={status(idx)}
              score={question.score}
            />
          );
        })}
      </ul>
    </>
  );
};
