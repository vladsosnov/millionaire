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
  const [checkboxDisablerToggle, setCheckboxDisablerToggle] =
    React.useState(false);

  const handleCheckboxDisablerToggle = () => {
    setCheckboxDisablerToggle(prev => !prev);
  };

  return (
    <ul className="quiz-answers">
      {question.answers.map((answer, idx) => (
        <QuizAnswerCheckbox
          key={answer.label}
          idx={idx}
          answer={answer}
          disabled={checkboxDisablerToggle}
          onChange={() => handleAnswerClick(answer)}
          checkboxToggle={handleCheckboxDisablerToggle}
        />
      ))}
    </ul>
  );
};
