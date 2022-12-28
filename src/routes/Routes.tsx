import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Game, Result } from 'src/pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
