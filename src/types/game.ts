export interface Answer {
  label: number | string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  label: string;
  answers: Answer[];
  score: number;
  isMultipleAnswers: boolean;
}
