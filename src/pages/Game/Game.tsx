import { QuizAnswer } from 'src/components/game/quiz-answer/QuizAnswer';
import React from 'react';
import { QuizLayout } from 'src/layouts';
import './game.css';

export const Game = () => {
  return (
    <QuizLayout
      Content={
        <div>
          <QuizAnswer
            label="Test 1"
            status="default"
            disabled={false}
            checked={false}
            onChange={() => console.log('changed')}
          />
          <QuizAnswer
            label="Test 1"
            status="correct"
            disabled={false}
            checked={false}
            onChange={() => console.log('changed')}
          />
          <QuizAnswer
            label="Test 1"
            status="wrong"
            disabled={false}
            checked={false}
            onChange={() => console.log('changed')}
          />
          <QuizAnswer
            label="Test 1"
            status="selected"
            disabled={false}
            checked={false}
            onChange={() => console.log('changed')}
          />
        </div>
      }
      Aside={<aside>Aside</aside>}
    />
  );
};
