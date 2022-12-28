import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Game, Result } from 'src/pages';
import { routes } from './appRoutes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.main.path} element={<Main />} />
      <Route path={routes.game.path} element={<Game />} />
      <Route path={routes.result.path} element={<Result />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};
