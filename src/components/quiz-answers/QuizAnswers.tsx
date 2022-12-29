import React from 'react';
import { QuizAnswerCheckbox } from 'src/components/quiz-answer-checkbox';
import { Answer, Question } from 'src/types/game';
import './quizAnswers.css';

interface QuizAnswersProps {
  question: Question;
  handleAnswerClick: (answer: Answer) => void;
}

export const QuizAnswers: React.FC<QuizAnswersProps> = ({
  question,
  handleAnswerClick,
}) => {
  return (
    <ul className="quiz-answers">
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
    </ul>
  );
};
