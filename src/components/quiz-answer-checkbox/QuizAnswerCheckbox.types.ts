import { Answer } from 'src/types/game';

export type QuizAnswerCheckboxStatus =
  | 'default'
  | 'selected'
  | 'correct'
  | 'wrong';

export interface QuizAnswerCheckboxProps {
  idx: number;
  disabled: boolean;
  answer: Answer;
  onChange: (label: string | number) => void;
  disableCheckboxes: () => void;
}
