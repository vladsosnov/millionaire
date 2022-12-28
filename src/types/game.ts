export interface Answer {
  id: number;
  label: number;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  score: number;
  isMultipleAnswers: boolean;
}
