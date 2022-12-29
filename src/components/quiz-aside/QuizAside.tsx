import React from 'react';
import { QuizScore } from 'src/components/quiz-score';
import { Close } from 'src/design-system/icons';
import { useActions, useTypedSelector } from 'src/hooks';
import './close-aside.css';

export const QuizAside = () => {
  const { toggleMobileAside } = useActions();
  const { questions, activeStep } = useTypedSelector(store => store.game);

  const handleBurgerMenuClick = React.useCallback(() => {
    toggleMobileAside();
  }, [toggleMobileAside]);

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <button className="quiz-aside__close-btn" onClick={handleBurgerMenuClick}>
        <img src={Close} alt="burger menu" />
      </button>

      <ul className="quiz-aside__list">
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
      </ul>
    </>
  );
};
