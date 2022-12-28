export type QuizAnswerCheckboxStatus =
  | 'default'
  | 'selected'
  | 'correct'
  | 'wrong';

export interface QuizAnswerCheckboxProps {
  disabled: boolean;
  checked: boolean;
  label: string;
  status: QuizAnswerCheckboxStatus;
  onChange: (title: string) => void;
}
