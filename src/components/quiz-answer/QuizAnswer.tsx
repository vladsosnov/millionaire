import React from 'react';
import { QuizAnswerCheckbox } from 'src/components/quiz-answer-checkbox';
import { Answer, Question } from 'src/types/game';

interface QuizAnswerProps {
  activeStep: number;
  question: Question;
  handleAnswerClick: (answer: Answer) => void;
}

export const QuizAnswer: React.FC<QuizAnswerProps> = ({
  activeStep,
  question,
  handleAnswerClick,
}) => {
  return (
    <div>
      <h2>
        {activeStep + 1}
        {question.question}
      </h2>
      {question.answers.map(answer => (
        <QuizAnswerCheckbox
          key={answer.label}
          answer={answer}
          status="default"
          disabled={false}
          checked={false}
          onChange={() => handleAnswerClick(answer)}
        />
      ))}
    </div>
  );
};
