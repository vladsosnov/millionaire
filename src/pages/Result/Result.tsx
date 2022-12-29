import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'src/design-system';
import { Hand } from 'src/design-system/icons';
import { DefaultLayout } from 'src/layouts';
import { routes } from 'src/routes';
import { useActions, useTypedSelector } from 'src/hooks';
import './result.css';

export const Result = () => {
  const { questions, activeStep, isFinished } = useTypedSelector(
    store => store.game,
  );
  const navigate = useNavigate();
  const { resetGame } = useActions();

  const handleStartClick = React.useCallback(() => {
    navigate(routes.main.path);
    resetGame();
  }, [navigate, resetGame]);

  const scores = React.useMemo(() => {
    if (activeStep === 0) return 0;

    if (questions?.length) {
      return questions[activeStep - 1].score;
    }
  }, [activeStep, questions]);

  if (!isFinished) {
    return <Link to={routes.main.path}>Game is unfinished..</Link>;
  }

  return (
    <DefaultLayout>
      <div className="result-page">
        <img src={Hand} alt="white hand" className="result-page__image" />
        <div className="result-page__wrapper">
          <h2 className="result-page__subtitle">Total score:</h2>
          <h1 className="result-page__title">${scores} earned</h1>
          <Button onClick={handleStartClick}>Try again</Button>
        </div>
      </div>
    </DefaultLayout>
  );
};
