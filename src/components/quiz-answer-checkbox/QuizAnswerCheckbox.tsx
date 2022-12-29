import React from 'react';
import { HexagonIcon } from 'src/design-system/icons';
import {
  QuizAnswerCheckboxProps,
  QuizAnswerCheckboxStatus,
} from './QuizAnswerCheckbox.types';
import './quizAnswerCheckbox.css';
import { delay, numberToLetter } from 'src/utils';
import { Answer } from 'src/types';

export const QuizAnswerCheckbox: React.FC<QuizAnswerCheckboxProps> = ({
  idx,
  answer,
  disabled,
  onChange,
  disableCheckboxes,
}) => {
  const [answerStatus, setAnswerStatus] =
    React.useState<QuizAnswerCheckboxStatus>('default');

  const handleCheckboxChange = async (answer: Answer) => {
    if (answer.isCorrect) setAnswerStatus('correct');
    if (!answer.isCorrect) setAnswerStatus('wrong');

    disableCheckboxes();
    await delay(500);

    setAnswerStatus('default');
    disableCheckboxes();
    return onChange(answer.label);
  };

  return (
    <li>
      <label className={`answer answer--${answerStatus}`}>
        <input
          className="answer__checkbox"
          disabled={disabled}
          type="checkbox"
          onChange={() => handleCheckboxChange(answer)}
        />
        <span className="answer__label">
          <span className="answer__respond">{numberToLetter(idx)}</span>
          {answer.label}
        </span>
        <HexagonIcon className="answer__rectangle" />
      </label>
    </li>
  );
};
