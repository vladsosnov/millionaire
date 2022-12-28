import React from 'react';
import { HexagonIcon } from 'src/design-system/icons';
import { QuizAnswerCheckboxProps } from './QuizAnswerCheckbox.types';
import './quizAnswerCheckbox.css';

export const QuizAnswerCheckbox: React.FC<QuizAnswerCheckboxProps> = ({
  label,
  checked,
  disabled,
  status,
  onChange,
}) => {
  return (
    <label className={`answer answer--${status}`}>
      <input
        className="answer__checkbox"
        disabled={disabled}
        checked={checked}
        type="checkbox"
        onChange={() => onChange(label)}
      />
      <span className="answer__label">
        <span className="answer__respond">A</span>
        {label}
      </span>
      <HexagonIcon className="answer__rectangle" />
    </label>
  );
};