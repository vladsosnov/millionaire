export type QuizScoreStatus = 'default' | 'active' | 'inactive';

export interface QuizScoreProps {
  score: number;
  status: QuizScoreStatus;
}
