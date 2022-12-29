import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/design-system';
import { Hand } from 'src/design-system/icons';
import { DefaultLayout } from 'src/layouts';
import { routes } from 'src/routes';
import './main.css';

export const Main = () => {
  const navigate = useNavigate();

  const handleStartClick = React.useCallback(
    () => navigate(routes.game.path),
    [navigate],
  );

  return (
    <DefaultLayout withBackground>
      <div className="main-page">
        <img src={Hand} alt="white hand" className="main-page__image" />
        <div className="main-page__wrapper">
          <h1 className="main-page__title">Who wants to be a millionaire?</h1>
          <Button onClick={handleStartClick}>Start</Button>
        </div>
      </div>
    </DefaultLayout>
  );
};
