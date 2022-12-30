import React from 'react';
import { HexagonIcon } from 'src/design-system/icons';
import './quiz-score.css';

type QuizScoreStatuses = 'default' | 'active' | 'inactive';

interface QuizScoreProps {
  score: number;
  status: QuizScoreStatuses;
}

export const QuizScore: React.FC<QuizScoreProps> = ({ score, status }) => {
  return (
    <li>
      <label className={`quiz-score quiz-score--${status}`}>
        <input className="quiz-score__checkbox" type="checkbox" />
        <span className="quiz-score__label">{score}</span>
        <HexagonIcon className="quiz-score__rectangle" />
      </label>
    </li>
  );
};
