import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/design-system';
import { Hand } from 'src/design-system/icons';
import { DefaultLayout } from 'src/layouts';
import { routes } from 'src/routes';
import { useActions } from 'src/hooks';
import './result.css';

export const Result = () => {
  const navigate = useNavigate();
  const { resetGame } = useActions();

  const handleStartClick = React.useCallback(() => {
    navigate(routes.main.path);
    resetGame();
  }, [navigate, resetGame]);

  return (
    <DefaultLayout>
      <div className="result-page">
        <img src={Hand} alt="white hand" />
        <div className="result-page__wrapper">
          <h2 className="result-page__subtitle">Total score:</h2>
          <h1 className="result-page__title">$8,000 earned</h1>
          <Button onClick={handleStartClick}>Try again</Button>
        </div>
      </div>
    </DefaultLayout>
  );
};
