export type QuizAnswerStatus = 'default' | 'selected' | 'correct' | 'wrong';

export interface QuizAnswerProps {
  disabled: boolean;
  checked: boolean;
  label: string;
  status: QuizAnswerStatus;
  onChange: (title: string) => void;
}
