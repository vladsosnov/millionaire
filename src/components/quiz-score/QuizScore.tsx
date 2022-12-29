import React from 'react';
import { SmallHexagonIcon } from 'src/design-system/icons';
import { QuizScoreProps } from './QuizScore.types';
import './quiz-score.css';

export const QuizScore: React.FC<QuizScoreProps> = ({ score, status }) => {
  const disabled = false;

  return (
    <li>
      <label className={`quiz-score quiz-score--${status}`}>
        <input
          className="quiz-score__checkbox"
          disabled={disabled}
          type="checkbox"
        />
        <span className="quiz-score__label">{score}</span>
        <SmallHexagonIcon className="quiz-score__rectangle" />
      </label>
    </li>
  );
};
