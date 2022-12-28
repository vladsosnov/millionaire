import React from 'react';
import { Question } from 'src/types/game';

interface QuizAnswerProps {
  question: Question;
}

export const QuizAnswer: React.FC<QuizAnswerProps> = ({ question }) => {
  console.log('question = ', question);

  return <div>QuizItem</div>;
};
