import { useActions } from 'src/hooks/useActions';
import React from 'react';

export const App = () => {
  const { getQuestions } = useActions();

  return <div onClick={() => getQuestions()}>App</div>;
};
