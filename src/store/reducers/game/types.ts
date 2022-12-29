import { Question } from 'src/types/game';

export type GameActionEnum =
  | 'INIT_QUESTIONS'
  | 'INIT_QUESTIONS_FAIL'
  | 'ANSWER_CORRECT'
  | 'ANSWER_WRONG'
  | 'RESET_GAME'
  | 'FINISH_GAME'
  | 'TOGGLE_MOBILE_ASIDE';

export interface InitQuestionsAction {
  type: 'INIT_QUESTIONS';
  payload: Question[];
}

export interface InitQuestionsFailAction {
  type: 'INIT_QUESTIONS_FAIL';
  payload: null;
}
export interface AnswerCorrectAction {
  type: 'ANSWER_CORRECT';
  payload: null;
}

export interface AnswerWrongAction {
  type: 'ANSWER_WRONG';
  payload: null;
}

export interface ResetGameAction {
  type: 'RESET_GAME';
  payload: null;
}

export interface FinishGameAction {
  type: 'FINISH_GAME';
  payload: null;
}

export interface ToggleMobileAsideAction {
  type: 'TOGGLE_MOBILE_ASIDE';
  payload: null;
}

export type GameAction =
  | InitQuestionsAction
  | InitQuestionsFailAction
  | AnswerCorrectAction
  | AnswerWrongAction
  | ResetGameAction
  | FinishGameAction
  | ToggleMobileAsideAction;
