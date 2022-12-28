import React from 'react';

interface QuizAnswerProps {
  question: any;
}

export const QuizAnswer: React.FC<QuizAnswerProps> = ({ question }) => {
  console.log('question = ', question);

  return <div>QuizItem</div>;
};
