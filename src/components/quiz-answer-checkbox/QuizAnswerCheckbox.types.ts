import { Answer } from 'src/types/game';

export type QuizAnswerCheckboxStatus =
  | 'default'
  | 'selected'
  | 'correct'
  | 'wrong';

export interface QuizAnswerCheckboxProps {
  disabled: boolean;
  checked: boolean;
  answer: Answer;
  status: QuizAnswerCheckboxStatus;
  onChange: (label: string | number) => void;
}
